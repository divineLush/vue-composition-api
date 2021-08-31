<template>
  <p>{{ num }}</p>
  <button @click.prevent="increment">increment</button>
  <p>{{ name }} {{ age }}</p>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  name: 'AppComposition',

  setup() {
    // create reactive reference
    // ref() returns an object
    // ref() is meant for primitive values
    const num = ref(0);

    const increment = () => {
      // gotta make changes through value property
      num.value += 1;
    };

    // reactive() is meant for objects
    const user = reactive({
      name: 'John',
      age: 100,
    });

    setTimeout(() => {
      // don't have to acces properties via value property
      user.name = 'Doe';
    }, 3000);

    // return an object of properties and methods we wish to expose
    return {
      // return entire vairable
      num,
      increment,
      // cant use spread operator
      // ...user
      // gotta use toRefs() to spread and shorten names in the template
      ...toRefs(user),
    };
  },
};
</script>
