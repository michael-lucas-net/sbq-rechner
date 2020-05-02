<template>
  <div>
    <div class="form-calculate">
      <img
        class="logo mb-4"
        src="../assets/calculator.png"
        alt="Rechner Logo"
      />

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Mitarbeiter</span>
        </div>
        <input
          type="number"
          min="1"
          class="form-control"
          v-model="employees"
          @change="changeConsidered"
          placeholder="Mitarbeiter"
          required="required"
        />
      </div>

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Auszubildene</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="trainees"
          @change="changeConsidered"
          placeholder="Mitarbeiter"
          required="required"
        />
      </div>

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Geringfügige Mitarbeiter</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="minors"
          @change="changeConsidered"
          placeholder="Mitarbeiter"
          required="required"
        />
      </div>

      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Benachteiligte Mitarbeiter</span>
        </div>
        <input
          type="number"
          min="0"
          class="form-control"
          v-model="disadvantaged"
          @change="changeConsidered"
          placeholder="Mitarbeiter"
          required="required"
        />
      </div>

      <Ergebnis :result="result" />
      <Bottom />
    </div>
  </div>
</template>

<script>
import Bottom from "./Bottom";
import Ergebnis from "./Result";

export default {
  name: "Quotenrechner",
  components: {
    Bottom,
    Ergebnis
  },
  data() {
    return {
      employees: 1,
      trainees: 0,
      minors: 0,
      disadvantaged: 0,
      considered: 0,
      result: 0
    };
  },
  methods: {
    /**
     * Rundet auf Zweikommastellen
     */
    round(number) {
      return Number(number.toFixed(2));
    },

    /**
     * Berechnet wieviele Mitarbeiter benachteiligt sind
     */
    calculate() {
      this.result =
        this.considered > 0 && this.disadvantaged > 0
          ? this.round((this.disadvantaged / this.considered) * 100)
          : 0;
    },

    /**
     * Berücksichtigt werden alle Mitarbeiter abzüglich Azubis und geringfügige Mitarbeitern
     */
    changeConsidered() {
      this.considered =
        Number(this.employees) - (Number(this.trainees) + Number(this.minors));
      this.calculate();
    }
  }
};
</script>

<style>
/* Allgemein */
body,
html {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.logo {
  width: 50px;
}

/* Form */
.form-calculate,
.input-group-text {
  width: 100%;
}

.form-calculate {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-calculate {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.input-group-prepend {
  width: 60%;
}
</style>
