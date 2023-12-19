<template>
  <div class="profile">
    <div class="profile__top">
      <div class="profile__top-backgr">
      </div>
      <div class="profile__top-info">
        <div class="profile__top-user" id="userTop"></div>
        <div class="profile__top-name">
          <span class="profile__top-name__item1">{{ user.firstname }}, {{ user.surname }}</span>
          <span class="profile__top-name__item1">{{ user.username }}</span>
          <span class="profile__top-name__item1">{{ user.phone_number }}</span>
        </div>
        <div class="profile__top-btns">
          <button class="profile__top-btn1 profile__top-btn" @click="logout">Log out</button>
          <button class="profile__top-btn" @click="isEdit = !isEdit">Edit profile</button>
        </div>
      </div>
    </div>

    <div class="profile__content">
      <div class="profile__content-left">
        <div class="profile__content-left__block">
          <div class="profile__content__block-name">Interesting</div>
          <div class="profile__content__block-info">
            <button class="profile__content__block-btn">
              Promotions and Discounts
            </button>
            <button class="profile__content__block-btn">Popular card</button>
            <button class="profile__content__block-btn">Reviews</button>
          </div>
        </div>
      </div>


      <div v-show="isEdit" class="profile__content-right">
        <div class="profile__content-right__block">
          <div class="profile__content-right__top">
            <span>Edit</span>
            <span class="profile__content__block-btns">
                        <button class="profile__content-right-btn" @click="editProfile">Edit</button>
                      </span>
          </div>
          <div class="profive__content-right__mid">

            <form id="form">
              <div class="inputBox">
                <label for="userName">Phone number</label>
                <input
                    v-model="phone_number"
                    type="text"
                    name="phone_number"
                    placeholder="Enter your phone number"
                />
              </div>
              <div class="inputBox">
                <label for="userPassword">Profile photo</label>
                <input
                    v-model="userImage"
                    type="text"
                    name="userImage"
                    placeholder="Enter your Profile photo url"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import router from "@/router/index.js";
import tokenService from "@/services/tokenService.js";
import userService from "@/services/userService.js";
import {ref} from "vue";

export default {
  name: "profilePage",
  setup() {
    return {
      user: ref({}),
      isEdit: ref(false),
      phone_number: ref(""),
      userImage: ref(""),
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    logout() {
      userService.logoutUser();
      router.push("/login");
    },
    start() {
      if (!tokenService.isAuth()) {
        router.push('/login');
      }

      setTimeout(() => {
            this.getUserData();
          }, 100
      )
    },
    async getUserData() {
      this.user = await userService.getUserById();

      setTimeout(() => {
            this.setPhoto();
          }, 100
      )
    },
    setPhoto() {
      if (this.user.profile_photo !== "") {
        const topUserElement = document.getElementById('userTop');
        topUserElement.style.backgroundImage = `url("${this.user.profile_photo}")`;
      }
    },
    editProfile() {
      userService.changeUser(this.phone_number, this.userImage);
      setTimeout(() => {
            this.start();
          }, 200
      )
    }
  },
}
</script>

<style lang="scss" src="./ProfilePage.scss" scoped/>