// GOAL Resposta certa - eu clico na resposta certa e aparece-me HTML e CSS a dizer "Correcto"
// GOAL Respostas erradas - eu clico numa resposta errada e aparece-me HTML e CSS "oops errado" + "algo específico à resposta dada" + "tenta outra vez"

//GOAL Resposta Certa
// 1. tenho que ir buscar o botão com a resposta correcta

const respostaCerta = document.getElementById("resposta-certa");

// 1.2. tenho que ir buscar o <p> para onde quero injectar conteúdo

const explicacao = document.getElementById("explicacao")

// 2. tenho que por o elemento resposta certa a escutar o meu elemento

respostaCerta.addEventListener("click", (event) =>{
	explicacao.innerHTML = "<strong>Correcto!</strong>"	
})

// GOAL RESPOSTAS ERRADAS

// 1. tenho que ir buscar todas as respostas com a classe resposta-errad

const respostaErradas = document.querySelectorAll(".resposta-errada");

// 2. iterar por cada resposta errada

respostaErradas.forEach((resposta) =>{
	// 3. JS Estar à escuta do click em cada resposta
	resposta.addEventListener("click", (event) => {
	let explicacaoConteudo = "<strong>Oops, errado...</strong>"
	
	// 4. Distinguir a resposta entre HTML, CSS, Ruby
	if(resposta.id === "resposta-html") {
		explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo à nossa página."
	} else if (resposta.id === "resposta-css") {
		explicacaoConteudo += " CSS permite-nos dar estilo à nossa página."
	} else {
		explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser usada para backend."
	}

	explicacaoConteudo += " Tenta outra vez!"

	explicacao.innerHTML = explicacaoConteudo;

	})
})