<template>
  <header class="header">
    <div class="header__left">
      <router-link class="header-logo" to="/"><img src="../../assets/header-icons/logo-desktop.png" alt="jusan-logo" class="header-logo"></router-link>
      <router-link class="header-btn header-btn-active" to="/">Частным лицам</router-link>
      <router-link class="header-btn" to="/">Бизнес</router-link>
      <router-link class="header-btn" to="/">Private</router-link>
    </div>
    <div class="header__right">
      <div class="header-search">
          <input type="text" class="header-search__inp" placeholder="Поиск в Jusan">
        <div class="header-search__icon">
          <img src="../../assets/header-icons/search-icon.svg" alt="search-icon"/>
        </div>
      </div>
      <div class="header-lang">RU</div>
      <img class="header-location" src="../../assets/header-icons/location-icon.svg" alt="location-icon">
      <router-link class="header__profile" to="/profile">
        <img class="header__profile-img" src="../../assets/header-icons/user.png" alt="Description of the image">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-comp",
  setup() {
    return {
      activeButton: null,
    }
  },
  methods: {
    handleButtonClick(index) {
      if (this.activeButton === index) {
        this.activeButton = null;
      } else {
        this.activeButton = index;
      }
    },
  },
}
</script>

<style lang="scss" src="./header.scss" scoped />