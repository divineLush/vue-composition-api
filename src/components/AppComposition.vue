<template>
  <p>{{ num }}</p>
  <p>{{ double }}</p>
  <button @click.prevent="increment">increment</button>
  <p>{{ name }} {{ age }}</p>
  <input type="test" v-model="phrase" />
  <p>{{ reversedPhrase }}</p>
  <app-alert :user="user"></app-alert>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  onBeforeMount,
  onMounted,
} from 'vue';
import AppAlert from '@/components/AppAlert.vue';

export default {
  name: 'AppComposition',

  components: {
    AppAlert,
  },

  // lifecycle functions
  // onBeforeMount()
  // onMounted()
  // onBeforeUpdate()
  // onUpdated()
  // onBeforeUnmount()
  // onUnmounted()
  // onActived() - keep-alive
  // onDeactivated()

  // no beforeCreate() and created() hooks
  // setup() runs after the beforeCreate() but before created()
  // its best practice to put code in the setup() that would normally be in these hooks
  setup() {
    // runs before the components props, data, methods and computed properties are registered
    // runs before any lifecycle functions
    // no access to anything
    // this keyword won't work
    // setup(props, context)
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    // create reactive reference
    // ref() returns an object
    // ref() is meant for primitive values
    const num = ref(1);

    const increment = () => {
      // gotta make changes through value property
      num.value += 1;
    };

    const double = computed(() => num.value * 2);

    // reactive() is meant for objects
    const user = reactive({
      name: 'John',
      age: 100,
    });

    setTimeout(() => {
      // don't have to acces properties via value property
      user.name = 'Doe';
    }, 3000);

    const phrase = ref('');
    const reversedPhrase = ref('');

    // start watching the phrase variable
    watch([phrase], ([newVal], [oldVal]) => {
      console.log(newVal, oldVal);
      reversedPhrase.value = newVal
        .split('').reverse().join('');
    });

    // return an object of properties and methods we wish to expose
    return {
      // return entire vairable
      num,
      increment,
      // cant use spread operator
      // ...user
      // gotta use toRefs() to spread and shorten names in the template
      ...toRefs(user),
      user,
      phrase,
      reversedPhrase,
      double,
    };
  },
};
</script>
