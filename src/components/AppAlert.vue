<template>
  <p v-if="!flag">Name changed!</p>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'AppAlert',

  props: ['user'],

  setup(props, context) {
    const flag = computed(() => props.user.name === 'John');

    context.emit('alert', { message: 'alert component' });

    return {
      flag,
    };
  },
};
</script>
