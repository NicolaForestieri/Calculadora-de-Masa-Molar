function calcularMasaMolar() {
	const formula = document.getElementById('formula').value;
	const regex = /([A-Z][a-z]*)(\d*)/g;
	let match;
	let masaMolar = 0;

	while (match = regex.exec(formula)) {
		const elemento = match[1];
		const cantidad = match[2] || '1';
		const masaAtomica = tablaPeriodica[elemento];
		masaMolar += masaAtomica * cantidad;
	}

	const resultado = document.getElementById('resultado');
	resultado.textContent = `La masa molar de ${formula} es ${masaMolar.toFixed(2)} g/mol`;
}

const tablaPeriodica = {
	'H': 1.008,
	'He': 4.003,
	'Li': 6.941,
	'Be': 9.012,
	'B': 10.81,
	'C': 12.01,
	'N': 14.01,
	'O': 16.00,
	'F': 19.00,
	'Ne': 20.18,
	'Na': 22.99,
	'Mg': 24.31,
	'Al': 26.98,
	'Si': 28.09,
	'P': 30.97,
	'S': 32.07,
	'Cl': 35.45,
	'K': 39.10,
	'Ar': 39.95,
	'Ca': 40.08,
	'Sc': 44.96,
	'Ti': 47.87,
	'V': 50.94
};







