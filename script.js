let vm = new Vue({
  el: '#app',
  computed: {
    length() {
      return this.prizes.length;
    },
    result() {
      if (this.awardIdx === -1) {
        return null;
      } else {
        return this.prizes[this.awardIdx].desafio;
      }
    },
    turn() {
      return this.r * 50 + 5;
    },
    awardIdx() {
      return (
        Math.round((this.turn - Math.floor(this.turn)) * this.length) %
        this.length
      );
    }
  },
  data() {
    return {
      prizes: [
        {
          text: "Amor",
          desafio: "Descripción del desafio"
        },
        {
          text: "Confesión",
          desafio: "Descripción del desafio"
        },
        {
          text: "Ministerio",
          desafio: "Descripción del desafio"
        },
        {
          text: "Iglesia",
          desafio: "Descripción del desafio"
        },
        {
          text: "Amor",
          desafio: "Descripción del desafio"
        },
        {
          text: "Confesión",
          desafio: "Descripción del desafio"
        },
        {
          text: "Historia",
          desafio: "Descripción del desafio"
        },
        {
          text: "Iglesia",
          desafio: "Descripción del desafio"
        },
      ],
      r: 0,
      isShowResult: false
    };
  },
  methods: {
    turning() {
      this.isShowResult = false;
      this.r = Math.random();
      this.$refs.roulette.style.transform = `rotate(${this.turn}turn)`;
      this.$refs.roulette.classList.add("turning");
    },
    turningEnd() {
      this.$refs.roulette.classList.remove("turning");
      this.isShowResult = true;
    }
  }
})