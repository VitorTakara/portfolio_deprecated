// vanilla JS
// init with element
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {});


function filtrarMasonry(portfolioType, btn) {
	document.querySelectorAll(".btn-portfolio").forEach(i => i.classList.remove("is-active")); // Limpa todos os botões ativos
	btn.classList.add("is-active"); // Ativa o botão selecionado

	let masonry = document.querySelector(".masonry").querySelectorAll(".grid-item");

	if ( portfolioType == "todos" )
		masonry.forEach(i => {
			i.classList.add("fadeIn");
			i.classList.remove("display-none");
		})
	else
		masonry.forEach(i => {
			if(!i.classList.contains(portfolioType)){
				if(i.classList.contains("fadeIn")) 
					i.classList.remove("fadeIn");	

				i.classList.add("display-none");
			}
			else{
				i.classList.add("fadeIn");
				i.classList.remove("display-none");
			}
		})
	
		msnry = new Masonry( grid, {});
}

