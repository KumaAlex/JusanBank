import axios from "axios";
import userService from "@/services/userService.js";
import tokenService from "@/services/tokenService.js";

export default {
    async getCategories() {
        const response = await axios.get(`http://127.0.0.1:8000/categories/?skip=0&limit=10`);
        return response.data;
    },
    async getSubCategories(catId) {
        const response = await axios.get(`http://127.0.0.1:8000/subcategories/by_category_id/${catId}`);
        return response.data;
    },
    async createPayment(catId, subCatId, amount, useBonus) {
        const userId = Number(await userService.getUserId());
        const token = tokenService.getToken();
        const curDate = Math.floor(new Date().getTime() / 1000);
        const body = {
            "user_id": userId,
            "category_id": catId,
            "subcategory_id": subCatId,
            "amount": amount,
            "date": curDate,
            // "use_bonus": useBonus,
        }
        const response = await axios.post('http://127.0.0.1:8000/payments/', body,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    },
    async getPaymentsByUserId() {
        const userId = await userService.getUserId();
        const response = await axios.get(`http://127.0.0.1:8000/payments/by_user_id/${userId}`);
        return response.data;
    },

    async getPaymentTitleById(payId) {
        const response = await axios.get("http://127.0.0.1:8000/subcategories/");
        const title = response.data.filter(p => p.id === payId);
        return title[0].title;
    }
};
