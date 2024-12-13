// Funcionamento da página de loading
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});

//Funcionamento botão volta topo
// Obtém o botão
const botaoVoltarTopo = document.querySelector('.voltaTopo');

// Exibe o botão quando o usuário rolar para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        botaoVoltarTopo.classList.add('show'); // Adiciona a classe 'show' para mostrar o botão
    } else {
        botaoVoltarTopo.classList.remove('show'); // Remove a classe 'show' para esconder o botão
    }
};

// Adiciona um evento de clique no botão
botaoVoltarTopo.onclick = function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link (que é recarregar a página)
    
    // Rolagem suave até o topo
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};