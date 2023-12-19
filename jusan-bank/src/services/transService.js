import axios from "axios";
import userService from "@/services/userService.js";
import tokenService from "@/services/tokenService.js";
import bankService from "@/services/bankService.js";

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
    },
    async createTransByReceiverId(recId, amount) {
        const userId = await userService.getUserId();
        const token = tokenService.getToken();
        const body = {
            "user_id": userId,
            "sender_account_id": userId,
            "receiver_account_id": recId,
            "amount": amount,
            "date": Math.floor(new Date().getTime() / 1000),
            "transaction_type": "transaction",
        }
        const response = await axios.post(`http://127.0.0.1:8000/transactions/`, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    }
};
