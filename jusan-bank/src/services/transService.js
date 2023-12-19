import axios from "axios";
import userService from "@/services/userService.js";
import tokenService from "@/services/tokenService.js";

export default {
    async getTransById() {
        const userId = await userService.getUserId();
        const token = tokenService.getToken();
        const response = await axios.get(`http://127.0.0.1:8000/transactions/by_user_id/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
};
