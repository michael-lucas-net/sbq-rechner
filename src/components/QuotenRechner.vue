<template>
    <div>
        <div class="form-signin">
            <img
                    class  = "mb-4"
                    src    = "https://images.vexels.com/media/users/3/137310/isolated/preview/cf5a1b0cf2ebd6f2d7f707ff9317495e-stroke-heart-logo-by-vexels.png"
                    alt    = ""
                    width  = "72"
                    height = "72">
            <h1 class="h3 mb-3 font-weight-normal">Quoten Rechner</h1>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Mitarbeiter</span>
                </div>
                <input type="number" class="form-control" v-model="mitarbeiter" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Auszubildene</span>
                </div>
                <input type="number" class="form-control" v-model="azubis" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Geringfügige Mitarbeiter</span>
                </div>
                <input type="number" class="form-control" v-model="geringis" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Benachteiligte Mitarbeiter</span>
                </div>
                <input type="number" class="form-control" v-model="benachteiligte" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="fieldContainer">
                <div 
                        class = "alert"
                 v-bind:class = "{ 'alert-success': ergebnis > 0, 'alert-secondary': ergebnis == 0}"
                        role  = "alert">
                    Ergebnis: <span>{{ ergebnis }}%</span>
                </div>
            </div>


        <div style="font-size: 35px; display: innline-block;" class="mt-5 animated infinite pulse">♥</div> 
            <p class="mb-3 text-muted small"> 
                &copy; 2019 Michi für Chrischi
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quotenrechner",
        data() {
            return {
                mitarbeiter: 0,
                azubis: 0,
                geringis: 0,
                benachteiligte: 0,
                beruecksichtigt: 0,
                ergebnis: 0
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
                if (this.beruecksichtigt > 0 && this.benachteiligte > 0) {
                    this.ergebnis = this.round(this.benachteiligte / this.beruecksichtigt * 100);
                } else {
                    this.ergebnis = 0;
                }
            },

            /**
             * Berücksichtigt werden Alle Mitarbeiter abzüglich Azubis und Geringfügigen Mitarbeitern
             */
            changeBeruecksichtigt() {
                this.beruecksichtigt = Number(this.mitarbeiter) - (Number(this.azubis) + Number(this.geringis));
                this.calculate();
            }
        }
    };
</script>

<style scoped="scoped">
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

    .fieldContainer {
        margin: 10px 0;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .input-group-prepend {
        width: 60%;
    }

    .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child), .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text {
        width: 100%;
    }

    .small {
        font-size: 12px;
    }
</style>
