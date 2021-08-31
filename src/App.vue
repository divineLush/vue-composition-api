<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
    <app-composition></app-composition>
  </div>
</template>

<script>
import mixin from '@/mixin';
import AppComposition from '@/components/AppComposition.vue';

export default {
  name: 'App',

  mixins: [
    mixin,
  ],

  components: {
    AppComposition,
  },

  // mixin version of offset property will not be merged
  data() {
    return {
      offset: 0,
    };
  },

  // if a mixin and component have the same lifecycle function defined they'll both run
  mounted() {
    console.log('App.vue mounted lifecycle function');
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
  font-family: monospace;
  font-size: 2rem;
}
.scrollPosition{
  position:fixed;
  right: 10px;
  bottom: 50px;
}
</style>
