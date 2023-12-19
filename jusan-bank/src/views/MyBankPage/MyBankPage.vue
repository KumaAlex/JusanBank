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
      <p>Card Date: {{bankAcc.opening_date}}</p>
    </div>

    <div class="box">
      <h2 id="top">Transition</h2>
      <form id="form">
        <div class="inputBox">
          <label for="userName">Receiver bank account ID:</label>
          <input
              v-model="recId"
              type="number"
              name="username"
              placeholder="Enter Receiver bank account ID"
          />
        </div>
        <div class="inputBox">
          <label for="userPassword">Amount:</label>
          <input
              v-model="amount"
              type="number"
              name="password"
              placeholder="Enter Amount"
          />
        </div>
        <div class="box__btns">
          <button class="submit-btn" @click="createTrans">Make Transaction</button>
        </div>
      </form>
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
      recId: ref(),
      amount: ref(),
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    async start() {
      if (!tokenService.isAuth()) {
        await router.push('/login');
      }
      await this.getUserBankAcc();
      await this.getTransById();
    },
    async createTrans() {
      event.preventDefault();
      await transService.createTransByReceiverId(this.recId, this.amount);
      await this.start();
    },
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