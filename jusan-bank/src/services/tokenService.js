export default {
    getToken() {
        return localStorage.getItem('token');
    },
    setToken(token) {
        localStorage.setItem('token', token);
    },
    isAuth() {
        return this.getToken();
    },
    removeToken() {
        localStorage.removeItem('token');
    }
};
