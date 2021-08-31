<template>
  <p v-if="!flag">Name changed!</p>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'AppAlert',

  props: ['user'],

  setup(props) {
    const flag = computed(() => props.user.name === 'John');

    return {
      flag,
    };
  },
};
</script>
