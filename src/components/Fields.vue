<template>
  <div>
    <div v-for="field in fields" :key="field.model">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">{{ field.name }}</span>
        </div>
        <input
          type="number"
          :min="field.min"
          class="form-control"
          v-model="fieldVals[field.model]"
          @change="changeConsidered"
          required="required"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fields from "@/components/fields.json";

export default {
  props: ["fieldVals"],
  data() {
    return {
      fields: fields
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
      this.fieldVals.result =
        this.fieldVals.considered > 0 && this.fieldVals.disadvantaged > 0
          ? this.round(
              (this.fieldVals.disadvantaged / this.fieldVals.considered) * 100
            )
          : 0;
    },
    /**
     * Berücksichtigt werden alle Mitarbeiter abzüglich Azubis und geringfügige Mitarbeitern
     */
    changeConsidered() {
      this.fieldVals.considered =
        Number(this.fieldVals.employees) -
        (Number(this.fieldVals.trainees) + Number(this.fieldVals.minors));
      this.calculate();
    }
  }
};
</script>

<style>
.input-group-prepend {
  width: 60%;
}
</style>
