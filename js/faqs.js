// Funcionamento da página de loading
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});

// Função para alternar a visibilidade da resposta
function toggleAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    
    // Verifica o estado atual da resposta (visível ou oculta)
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// Inicializa as respostas ocultas por padrão quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    const answers = document.querySelectorAll('.faq-answer');
    answers.forEach(answer => {
        answer.style.display = "none";
    });
});

// Função para formatar o tempo de envio (exemplo: 2 minutos atrás)
function updateTimePosted(timePostedElement) {
    const currentTime = new Date();
    const postTime = new Date(timePostedElement.getAttribute("data-time"));
    const timeDifference = Math.floor((currentTime - postTime) / 1000 / 60);

    // Exibe o tempo passado desde o envio
    if (timeDifference < 1) {
        timePostedElement.innerText = "Just now";
    } else if (timeDifference < 60) {
        timePostedElement.innerText = `${timeDifference} minute(s) ago`;
    } else {
        const hours = Math.floor(timeDifference / 60);
        const minutes = timeDifference % 60;
        timePostedElement.innerText = `${hours} hour(s) ${minutes} minute(s) ago`;
    }
}

// Função para incrementar o contador de likes
function incrementLikeCount(likeIcon, likeCount) {
    let currentLikes = parseInt(likeCount.innerText);

    // Alterna a cor do ícone e o contador de likes ao clicar
    likeIcon.classList.toggle('liked');  
    if (likeIcon.classList.contains('liked')) {
        currentLikes += 1;
    } else {
        currentLikes -= 1;
    }
    likeCount.innerText = currentLikes; 
}