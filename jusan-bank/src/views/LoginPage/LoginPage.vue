<template>
  <div class="box">
    <h2 id="top">Login</h2>
    <form id="form">
      <div class="inputBox">
        <label for="userName">Username</label>
        <input
            v-model="username"
            type="text"
            name="username"
            placeholder="Enter your username"
        />
      </div>
      <div class="inputBox">
        <label for="userPassword">Password</label>
        <input
            v-model="password"
            type="password"
            name="password"
            placeholder="Enter your password"
        />
      </div>
      <div class="box__btns">
        <button class="submit-btn" @click="loginUser">Login</button>
        <router-link to="/register" class="submit-btn">
          Create new account?
        </router-link>
      </div>
    </form>
  </div>

</template>

<script>
import {ref} from "vue";
import userService from "@/services/userService.js";
export default {
  setup() {
    return {
      username: ref(""),
      password: ref(""),
    }
  },
  methods: {
    async loginUser() {
      event.preventDefault();
      const body = {
        "username": this.username,
        "password": this.password,
      }
      await userService.loginUser(body);
    }
  }
}
</script>

<style lang="scss" src="./LoginPage.scss" scoped/>