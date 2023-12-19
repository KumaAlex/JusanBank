<template>
  <div class="myBank">
    <div class="myBank__header">
      <h1>My Bank</h1>
    </div>
    <div class="myBank__info">
      <p>Card Status: Active</p>
      <p>Account Type: {{bankAcc.account_type}}</p>
      <p>Account Number: {{bankAcc.card_number}}</p>
      <p>Card Balance: {{bankAcc.balance}}</p>
<!--      <p>Carwd Bonus: {{creditInfo.bonus}}</p>-->
      <p>Card Date: {{bankAcc.opening_date}}</p>
    </div>
    <div class="myBank__transaction-history">
      <h2>Transaction History</h2>
      <ul>
        <li v-for="transaction in transactions" class="myBank__info">
          <p>User ID: {{ transaction.user_id }}</p>
          <p>Amount: ${{ transaction.amount }}</p>
          <p>Sender card ID: {{transaction.sender_account_id}}</p>
          <p>Receiver card ID: {{transaction.receiver_account_id}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {info} from "sass";
import {ref} from "vue";
import bankService from "@/services/bankService.js";
import transService from "@/services/transService.js";
import tokenService from "@/services/tokenService.js";
import router from "@/router/index.js";
export default {
  name: "myBankPage",
  setup() {
    return {
      transactions: ref([]),
      bankAcc: ref([]),
    }
  },
  mounted() {
    if (!tokenService.isAuth()) {
      router.push('/login');
    }
    this.getUserBankAcc();
    this.getTransById();
  },
  methods: {
    async getUserBankAcc() {
      this.bankAcc = await bankService.getBankAcc();
    },
    async getTransById() {
      this.transactions = await transService.getTransById();
      console.log(this.transactions);
    }
  }
}
</script>

<style lang="scss" src="./MyBankPage.scss" scoped />