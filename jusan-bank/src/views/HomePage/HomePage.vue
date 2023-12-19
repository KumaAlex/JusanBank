<template>
  <div class="home">
    <div class="home__slider">
      <transition name="fade" mode="out-in">
        <img :src="`/src/assets/home/slider/${currentImage}.png`" :key="currentImage" class="home__slider-image"/>
      </transition>
      <button class="home__slider__left home__slider__btn" @click="prevSlide"> {{ "<" }}</button>
      <button class="home__slider__right home__slider__btn" @click="nextSlide"> {{ ">" }}</button>
    </div>

    <div class="home__navBar">
      <div class="home__navBar-item" v-for="i of navBar">
        <img :src="i.img" :alt="i.img">
        <p>{{ i.name }}</p>
      </div>
    </div>

    <div class="home__services">
      <div class="home__services-item" v-for="s of services" :class="s.class">
        <div>
          <div class="home__services-name">
            {{ s.name }}
          </div>
          <div class="home__services-descr">
            {{ s.descr }}
          </div>
        </div>

        <router-link class="home__services-btn" :to="s.link">Перейти</router-link>
        <img class="home__services-img" :src="s.img" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'HomePage',
  components: {},
  setup() {
    return {
      images: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      currentIndex: ref(0),
      navBar: [
        {
          name: "car-insuranse",
          img: "/src/assets/home/nav-bar/car-insurance.svg",
        },
        {
          name: "cards",
          img: "/src/assets/home/nav-bar/cards.svg",
        },
        {
          name: "credits",
          img: "/src/assets/home/nav-bar/credits.svg",
        },
        {
          name: "deposit",
          img: "/src/assets/home/nav-bar/deposit.svg",
        },
        {
          name: "stock",
          img: "/src/assets/home/nav-bar/stock.svg",
        },
      ],
      services: [
        {
          name: "Банк для малого и среднего бизнеса",
          descr: "У нас всё онлайн — на сайте и в приложении. Откройте счет не выходя из дома и ведите бизнес с комфортом",
          img: "/src/assets/home/services/business.png",
          class: "business",
          link: "",
        },
        {
          name: "Мой Банк",
          descr: "Инвестируйте или доверьте экспертам управлять вашими инвестициями",
          img: "/src/assets/home/services/bank.png",
          class: "bank",
          link: "my_bank",
        },
        {
          name: "Платежи",
          descr: "Мы оберегаем все, что Вы цените",
          img: "/src/assets/home/services/payments.png",
          class: "payments",
          link: "payments",
          slider: Promise,
        },
      ],
    }
  },
  mounted() {
    this.startImageSlider();
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    startImageSlider() {
      this.sliderPromise = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000);
    },
    nextSlide() {
      event.preventDefault();
      clearInterval(this.sliderPromise);
      this.startImageSlider();
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      event.preventDefault();
      clearInterval(this.sliderPromise);
      this.startImageSlider();
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
}
</script>

<style lang="scss" src="./HomePage.scss" scoped/>
