const braco = document.querySelector("#braco");
const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
	elemento.addEventListener("click", (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
	});
});

function manipulaDados(operacao, controle) {
	const pecas = controle.querySelector("[data-contador]");
	if (operacao === "-") {
		// if (braco.value > 0) {
		// 	braco.value = parseInt(braco.value) - 1;
		// } else {
		//     braco.value = 0;
		// }
		pecas.value = parseInt(pecas.value) - 1;
	} else {
		pecas.value = parseInt(pecas.value) + 1;
	}
}
