<template>
    <div>
        <div class="form-calculate">
            <img
                    class="logo mb-4"
                    src="../assets/rechner.png"
                    alt="Rechner Logo">

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Mitarbeiter</span>
                </div>
                <input type="number" min="1" class="form-control" v-model="mitarbeiter" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Auszubildene</span>
                </div>
                <input type="number" min="0" class="form-control" v-model="azubis" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Geringfügige Mitarbeiter</span>
                </div>
                <input type="number" min="0" class="form-control" v-model="geringis" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Benachteiligte Mitarbeiter</span>
                </div>
                <input type="number" min="0" class="form-control" v-model="benachteiligte" @change="changeBeruecksichtigt"
                       placeholder="Mitarbeiter" required="required">
            </div>

            <div class="fieldContainer">
                <div
                        class="alert"
                        v-bind:class="{ 'alert-success': ergebnis > 0, 'alert-secondary': ergebnis == 0}"
                        role="alert">
                        <small>
                        Anteil benachteiligter Mitarbeiter: 
                        <span>{{ ergebnis }}%</span>
                    </small>
                </div>
            </div>

            <Bottom />     
            <Bottom/>
        </div>
    </div>
</template>

<script>
import Bottom from './bottom';
    export default {
        name: "Quotenrechner",
        components: {
            Bottom
        },
        data() {
            return {
                mitarbeiter: 1,
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
                this.ergebnis = this.beruecksichtigt > 0 && this.benachteiligte > 0
                    ? this.round(this.benachteiligte / this.beruecksichtigt * 100)
                    : 0;
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
	import Ergebnis from './ergebnis';
	export default {
		components: {
			Bottom,
			Field,
			Ergebnis
		data() {
			return {
				mitarbeiter: 1,
				azubis: 0,
				geringis: 0,
				benachteiligte: 0,
				beruecksichtigt: 0,
				result: 0
			};
		},
		methods: {
			/**
			 * Rundet auf Zweikommastellen
			 */
			round(number) {
				return Number(number.toFixed(2));
			}
			,

			/**
			 * Berechnet wieviele Mitarbeiter benachteiligt sind
			 */
			calculate() {
				this.result = this.beruecksichtigt > 0 && this.benachteiligte > 0
					? this.round(this.benachteiligte / this.beruecksichtigt * 100)
					: 0;
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

    .fieldContainer {
        margin: 10px 0;
    }

    /* Form */
    .form-calculate {
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
