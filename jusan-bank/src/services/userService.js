import axios from "axios";
import tokenService from "@/services/tokenService.js";
import router from "@/router/index.js";
import bankService from "@/services/bankService.js";

export default {
    async getUserById() {
        const user = await axios.get(`http://127.0.0.1:8000/users/${(await this.getUserId())}`)
        return user.data;
    },
    async setUserId(username) {
        const id = await axios.get(`http://127.0.0.1:8000/users/by_username/${username}`);
        localStorage.setItem("userId", id.data.id);
    },
    async getUserId() {
        return String(localStorage.getItem('userId'));
    },
    async loginUser(sendBody) {
        try {
            const response = await axios.post("http://localhost:8000/users/token/", sendBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            tokenService.setToken(response.data.access_token);
            if (tokenService.isAuth()) {
                await router.push("/profile");
            }
            await this.setUserId(sendBody.username);
        } catch (error) {
            console.log(error);
        }
    },
    async registerUser(body) {
        try {
            const sendBody = ({
                "firstname": body.firstname,
                "surname": body.surname,
                "username": body.username,
                "password": body.password,
                "phone_number": body.phone_number,
                "profile_photo": body.profile_photo,
            });
            const response = await axios.post("http://localhost:8000/users/signup/", sendBody);
            const loginBody = {
                "username": body.username,
                "password": body.password,
            }
            await this.loginUser(loginBody);
        } catch (error) {
            console.log("Error registering user:", error);
        }
    },
    logoutUser() {
        localStorage.clear();
    },

    async getUsers() {
        console.log(await axios.get("http://localhost:8000/users/"));
    },

    async changeUser(num, img) {
        const userId = await this.getUserId();
        const body = {}
        if (num !== "") {
            body["phone_number"] = num;
        }
        if (img !== "") {
            body["profile_photo"] = img;
        }
        console.log(body);
        const response = await axios.put(`http://localhost:8000/users/${userId}`, body)
    }
};
