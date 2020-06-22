<template>
  <div>
    <div class="form-calculate">
      <img
        class="logo mb-4"
        src="../assets/calculator.png"
        alt="Rechner Logo"
      />

      <Fields :fieldVals="fieldVals" />
      <Result :result="fieldVals.result" />

      <Bottom />
    </div>
  </div>
</template>

<script>
import Bottom from "./Bottom";
import Result from "./Result";
import Fields from "@/components/Fields.vue";

export default {
  name: "Quotenrechner",
  components: {
    Bottom,
    Result,
    Fields
  },
  data() {
    return {
      fieldVals: {
        employees: 1,
        trainees: 0,
        minors: 0,
        disadvantaged: 0,
        considered: 0,
        result: 0
      }
    };
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
</style>
