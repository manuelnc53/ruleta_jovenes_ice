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
          text: "Color",
          desafio: "¿Cuál es el color favorito de Karen?"
        },
        {
          text: "3 cosas",
          desafio: "Nombre 3 cosas que tenga en común con su pareja"
        },
        {
          text: "Comida",
          desafio: "¿Cuál es la comida preferida de Karen?"
        },
        {
          text: "Sueños",
          desafio: "¿Qué es lo que siempre Karen ha soñado y que no ha podido hacer?"
        },
        {
          text: "Música",
          desafio: "¿Qué tipo de música le gusta a Karen?"
        },
        {
          text: "Virtudes",
          desafio: "Nombre 3 virtudes o caracteristicas positivas de cada uno"
        },
        {
          text: "Estrés",
          desafio: "¿Qué es lo que más estresa a Karen?"
        },
        {
          text: "Objetos",
          desafio: "Nombra 3 objetos que Karen lleva siempre en su cartera"
        },
        {
          text: "Nombre",
          desafio: "¿Cómo le gustaría a Karen que la hubieran llamado?"
        },
        {
          text: "Pregunta",
          desafio: "¿Cuál es la pregunta que Karen odia que le hagan?"
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