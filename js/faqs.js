function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block"; // Mostra a resposta
    } else {
        answer.style.display = "none"; // Oculta a resposta
    }
}


// Função para adicionar comentário ou resposta
function addComment({ text, timestamp, user, parentElement = null }) {
    const commentBox = document.createElement('div');
    commentBox.className = parentElement ? 'resposta-box' : 'colunas';

    commentBox.innerHTML = `
        <div class="box">
            <div class="media-left">
                <img src="https://bulma.io/assets/images/placeholders/128x128.png" alt="Image" />
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>${user}</strong>
                        <small>${formatTimestamp(timestamp)}</small>
                        <br />
                        ${text}
                    </p>
                </div>
                <nav class="level">
                    <div class="level-left">
                        <span class="level-item" aria-label="reply">
                            <span class="icon">
                                <i class="fas fa-reply" aria-hidden="true"></i>
                            </span>
                        </span>
                    </div>
                </nav>
                <div class="textInputWrapper" style="display: none;">
                    <textarea class="textInputName" placeholder="Seu nome..." required></textarea>
                    <textarea class="textInput" placeholder="Digite sua resposta aqui..." required></textarea>
                    <button class="sendBtn">Enviar Resposta</button>
                </div>
            </div>
        </div>
        <div class="respostas-container"></div>
    `;

    // Adiciona funcionalidade de resposta
    const replyIcon = commentBox.querySelector('[aria-label="reply"]');
    const textInputWrapper = commentBox.querySelector('.textInputWrapper');
    const sendBtn = commentBox.querySelector('.sendBtn');
    const textInput = commentBox.querySelector('.textInput');
    const textInputName = commentBox.querySelector('.textInputName');
    const respostaContainer = commentBox.querySelector('.respostas-container');

    replyIcon.addEventListener('click', () => {
        textInputWrapper.style.display =
            textInputWrapper.style.display === 'none' || !textInputWrapper.style.display
                ? 'block'
                : 'none';
    });

    sendBtn.addEventListener('click', () => {
        if (textInput.value.trim() && textInputName.value.trim()) {
            addComment({
                text: textInput.value,
                timestamp: new Date().toISOString(),
                user: textInputName.value,
                parentElement: respostaContainer,
            });
            textInput.value = '';
            textInputName.value = '';
            textInputWrapper.style.display = 'none';
        } else {
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });

    if (parentElement) {
        parentElement.appendChild(commentBox);
    } else {
        document.getElementById('comunidade-questions').appendChild(commentBox);
    }
}

// Função para formatar a data
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

// Funcionamento da página de loading
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});