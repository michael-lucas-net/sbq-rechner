<template>
	<div>
		<div class="form-calculate">

			<Logo/>

			<div class="input-group input-group-sm mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">Mitarbeiter</span>
				</div>
				<input type        = "number"
				       min         = "1"
				       class       = "form-control"
				       v-model     = "mitarbeiter"
				       @change     = "changeBeruecksichtigt"
				       placeholder = "Mitarbeiter"
				       required    = "required">
			</div>

			<div class="input-group input-group-sm mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">Auszubildene</span>
				</div>
				<input type        = "number"
				       min         = "0"
				       class       = "form-control"
				       v-model     = "azubis"
				       @change     = "changeBeruecksichtigt"
				       placeholder = "Mitarbeiter"
				       required    = "required">
			</div>

			<div class="input-group input-group-sm mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">Geringfügige Mitarbeiter</span>
				</div>
				<input
						type        = "number"
						min         = "0"
						class       = "form-control"
						v-model     = "geringis"
						@change     = "changeBeruecksichtigt"
						placeholder = "Mitarbeiter"
						required    = "required">
			</div>

			<div class="input-group input-group-sm mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text">Benachteiligte Mitarbeiter</span>
				</div>
				<input
						type        = "number"
						min         = "0"
						class       = "form-control"
						v-model     = "benachteiligte"
						@change     = "changeBeruecksichtigt"
						placeholder = "Mitarbeiter"
						required    = "required">
			</div>

			<Ergebnis :result="result"/>
			<Bottom/>

		</div>
	</div>
</template>

<script>
    import Logo from "./logo";
    import Bottom from "./copyright";
    import Ergebnis from "./ergebnis";

    export default {
        name: "Quotenrechner",
        components: {
            Logo,
            Bottom,
            Ergebnis
        },
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
			},

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

	.fieldContainer {
		margin: 10px 0;
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
