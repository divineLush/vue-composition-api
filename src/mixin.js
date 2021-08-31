export default {
  data() {
    return {
      offset: 0,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.update);
    console.log('mixin mounted lifecycle function');
  },

  methods: {
    update() {
      this.offset = window.pageYOffset;
    },
  },
};
