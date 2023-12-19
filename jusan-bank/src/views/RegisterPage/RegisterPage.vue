<template>
  <div class="box">
    <h2 id="top">Register</h2>
    <form id="form">
      <div class="inputBox">
        <label for="userName">Username</label>
        <input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
        />
      </div>
      <div class="inputBox">
        <label for="userPassword">Password</label>
        <input
            v-model="password1"
            type="password"
            name="password1"
            id="password1"
            placeholder="Enter your password"
        />
      </div>
      <div class="inputBox">
        <label for="userPassword">Password again</label>
        <input
            v-model="password2"
            type="password"
            name="password2"
            id="password2"
            placeholder="Enter your password again"
        />
      </div>
      <div class="inputBox">
        <label for="userFirstname">Firstname</label>
        <input
            v-model="firstname"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your firstname"
        />
      </div>
      <div class="inputBox">
        <label for="userSurname">Surname</label>
        <input
            v-model="surname"
            type="text"
            name="surname"
            id="surname"
            placeholder="Enter your surname"
        />
      </div>

      <div class="inputBox">
        <label for="userPhone">Phone number</label>
        <input
            v-model="phone_number"
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Enter your phone number"
        />
      </div>
      <div class="inputBox">
        <label for="userPhoto">Photo</label>
        <input
            v-model="profile_photo"
            type="text"
            name="profile_photo"
            id="profile_photo"
            placeholder="Enter your photo"
        />
      </div>
      <div class="box__btns">
        <button class="submit-btn" @click="registerUser">Register</button>
        <router-link to="/login" class="submit-btn">Already have an account?</router-link>
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
      password1: ref(""),
      password2: ref(""),
      firstname: ref(""),
      surname: ref(""),
      phone_number: ref(""),
      profile_photo: ref(""),
    }
  },
  methods: {
    registerUser() {
      event.preventDefault();
      if (!this.username || !this.password1 || !this.password2 || this.password2 !== this.password1) {
        console.log("Wrong input");
        return;
      }
      const body = {
        "firstname": this.firstname,
        "surname": this.surname,
        "username": this.username,
        "password": this.password1,
        "phone_number": this.phone_number,
        "profile_photo": this.profile_photo,
      }
      console.log(body);
      userService.registerUser(body);
    },
    handleFilePhoto(event) {
      this.profile_photo = event.target.files[0];
    }
  }
}
</script>

<style lang="scss" src="./RegisterPage.scss" scoped/>