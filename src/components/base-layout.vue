<template>
  <div id="page-wrapper" :class="{ 'page-collapsed': reduce }">
    <div @click="reduce = !reduce" class="overlay"></div>

    <vs-navbar
        square
        fixed
        notShadow
        color="rgba(250,250,250,0.1)"
        padding-scroll
        center-collapsed
        v-model="active" not-line
    >
      <template #left>
        <div class="d-flex align-center">
          <h6 class="mx-0 sidebar-title">Life Quality</h6>
        </div>
      </template>


<!--      <vs-navbar-item class="white&#45;&#45;text"  :active="active == 'docs'" id="docs" to="/">-->
<!--        Home-->
<!--      </vs-navbar-item>-->
<!--      <vs-navbar-item  :active="active == 'some'" id="References" to="/references">-->
<!--        References-->
<!--      </vs-navbar-item>-->
    </vs-navbar>

    <main class="pt-13">

      <div class=" pt-8">
        <vue-page-transition name="fade-in-up">
          <router-view/>
        </vue-page-transition>
      </div>


    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      reduce: true,
      open: true,

    };
  },



};
</script>

<style scoepd></style>
