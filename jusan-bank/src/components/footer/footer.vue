<template>
  <footer class="footer">
    <div class="footer__navigation">
      <p class="footer__navigation-item" v-for="item of items">
        {{ item }}
      </p>
    </div>
    <div class="footer__contacts">
      <div class="footer__contacts-item">
        <img src="../../assets/footer-icons/phone-icon.svg" alt="phone-icon"> +7 (717) 258 77 11для
        <p>клиентов, находящихся в РК или за рубежом (круглосуточно)</p>
      </div>
      <div class="footer__contacts-item">
        <img src="../../assets/footer-icons/phone-icon.svg" alt="phone-icon"> 7711для клиентов,
        <p>находящихся в РК (круглосуточно, звонок с мобильного бесплатный)</p>
      </div>
      <div class="footer__contacts-item">
        <img src="../../assets/footer-icons/mail-icon.svg" alt="main-icon">
        <p>info@jusan.kz</p>
      </div>
    </div>
    <div class="footer__policy">
      <p>Условия и порядок урегулирования задолженности</p>
      <p>Правила пользования сайтом</p>
      <p>Политика конфиденциальности</p>
    </div>
    <div class="footer__license">
      Лицензия № 1.2.35/225/37 от 07.04.2021 г. выдана Агентством Республики Казахстан по регулированию и развитию финансового рынка
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-comp",
  setup() {
    return {
      items: [
        "О Банке",
        "Новости",
        "Jusan Analytics",
        "Private Banking",
        "Документы",
        "Курсы валют",
        "Отделения",
        "Банки-корреспонденты",
        "Помощь",
        "Комплаенс",
        "Проверка электронных документов"
      ],
    }
  }
}
</script>

<style lang="scss" src="./footer.scss" scoped/>