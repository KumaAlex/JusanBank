<template>
  <div class="payments">
    <div class="payments__categories">
      <div class="payments__cat" v-for="cat of categories">
        <button @click="getSubCategories(cat.id)" class="payments__cat-btn">{{ cat.title }}</button>
      </div>
    </div>
    <div class="payments__subCategories">
      <div class="payments__subCat-cont">
        <div class="payments__subCat" v-for="subCat of subCategories">
          <button @click="changeSubCat(subCat.title, subCat.id)" class="payments__subCat-btn">{{ subCat.title }}</button>
        </div>
      </div>

      <div class="box">
        <h2 id="top">{{ currentSubCat }}</h2>
        <form id="form">
          <div class="inputBox">
            <label>From UserID: {{ curUserId }}</label>
          </div>
          <br>
          <div class="inputBox">
            <label>Receiver card</label>
            <input
                v-model="receiver"
                type="text"
                name="receiver"
                placeholder="Enter receiver card"
            />
          </div>
          <div class="inputBox">
            <label>Amount of money</label>
            <input
                v-model="amount"
                type="number"
                name="amount"
                placeholder="Enter amount"
            />
          </div>
          <div class="checkbox">
            <label>Use bonuses?</label>
            <input
                v-model="useBonus"
                type="checkbox"
            />
          </div>
          <div class="box__btns">
            <button class="submit-btn" @click="createType">Pay</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import paymentsService from "@/services/paymentsService.js";
import userService from "@/services/userService.js";
import tokenService from "@/services/tokenService.js";
import router from "@/router/index.js";
export default {
  setup() {
    return {
      categories: ref([]),
      subCategories: ref([]),
      currentCat: ref(1),
      currentSubCat: ref(""),
      amount: ref(0),
      curUserId: ref(""),
      receiver: ref(""),
      currentSubCatId: ref(1),
      useBonus: ref(false),
    }
  },
  mounted() {
    if (!tokenService.isAuth()) {
      router.push('/login');
    }
    this.getUserId();
    this.getCategories();
  },
  methods: {
    async getCategories() {
      this.categories = await paymentsService.getCategories();
      this.currentCateg = await this.categories[0].id;
      await this.getSubCategories(this.currentCateg);
    },
    async getSubCategories(currentCateg) {
      this.currentCat = currentCateg;
      this.subCategories = await paymentsService.getSubCategories(currentCateg);
      this.currentSubCat = this.subCategories[0].title;
    },
    async changeSubCat(subCatTitle, subCatId) {
      this.currentSubCat = subCatTitle;
      this.currentSubCatId = subCatId;
    },
    async createType() {
      event.preventDefault();
      console.log(this.currentSubCat);
      const types = await paymentsService.createPayment(this.currentCat, this.currentSubCatId, this.amount, this.useBonus);
    },
    async getUserId() {
      this.curUserId = await userService.getUserId();
    }
  },
}
</script>

<style lang="scss" src="./PaymentsPage.scss" scoped />