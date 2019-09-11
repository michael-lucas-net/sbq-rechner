<template>
    <div>
        <div class="form-calculate">
                <img
                    class  = "logo mb-4"
                    src    = "../assets/rechner.png"
                    alt    = "Rechner Logo">

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


        <div class="heart mt-5 animated infinite pulse">
            <img 
            src   = "../assets/herz.png"
            alt   = "Herz"
            class = "heartImg"></div>
            <p class="mt-3 mb-3 text-muted small"> 
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
             * Berücksichtigt werden alle Mitarbeiter abzüglich Azubis und geringfügige Mitarbeitern
             */
            changeBeruecksichtigt() {
                this.beruecksichtigt = Number(this.mitarbeiter) - (Number(this.azubis) + Number(this.geringis));
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

    .heartImg {
        width: 35px;
    }
    
    .fieldContainer {
        margin: 10px 0;
    }

    .input-group-prepend {
        width: 60%;
    }

    .small {
        font-size: 12px;
    }

    .heart {
        font-size: 35px; 
        display: inline-block;
    }

    .mt-3 {
        margin-top: 3%;
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

    .form-calculate .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-calculate .form-control:focus {
        z-index: 2;
    }
</style>
