import axios from "axios";
import userService from "@/services/userService.js";
import tokenService from "@/services/tokenService.js";

export default {
    async getBankAcc() {
        const userId = await userService.getUserId();
        const token = tokenService.getToken();
        const response = await axios.get(`http://127.0.0.1:8000/accounts/by_user_id/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    },
    async createBankAcc() {
        let length = 16;
        const randomArray = Array.from({ length }, () =>
            Math.floor(Math.random() * 10)
        );
        const randomString = randomArray.join("");
        const body = {
            "user_id": await userService.getUserId(),
            "balance": 1000000,
            "account_type": "private",
            "card_number": randomString,
            "opening_date": Math.floor(new Date().getTime() / 1000),
        }
        const response = await axios.post("http://127.0.0.1:8000/accounts/", body)
    }
};
