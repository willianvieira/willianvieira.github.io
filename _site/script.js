new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      min: 0,
      max: 365,
      slider: 0 };

  },
  methods: {
    dragEnd: function (value) {
      var d = new Date();

      d.setDate(d.getDate() + value);
      this.$refs.pick.value = d.toISOString().substr(0, 10);

    } } });
