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

const contentData = {
    motor: {
        image: "../img/pecas/motor.png",
        text: "O sistema do motor de um carro é fundamental para o funcionamento do veículo, pois é ele quem converte a energia armazenada no combustível em movimento. O motor de um carro é umdos componentes mais complexos e vitais do veículo, e ele está intimamente relacionado com outros sistemas, como o sistema de ignição, o sistema de arrefecimento.",
        additional: {
            blocoMotor: {
                text: "O bloco do motor contém os cilindros, pistões e outras partes essenciais para a combustão.",
                image: "../img/pecas/pecas-motor/blocoMotor.png"
            },
            cilindros: {
                text: "Os cilindros são cavidades onde ocorre a combustão, movimentando os pistões.",
                image: "../img/pecas/pecas-motor/cilindrosMotor.png"
            },
            pistoes: {
                text: "São peças móveis que se movem dentro dos cilindros. O movimento dos pistões é causado pela explosão da mistura de combustível e ar, o que gera a força para movimentar o carro.",
                image: "../img/pecas/pecas-motor/pistaoMotor.png"
            },
            valvulas: {
                text: "As válvulas controlam a entrada de ar e combustível nos cilindros e a saída dos gases de escape. Existem válvulas de admissão (para entrar ar/combustível) e válvulas de escape(para sair os gases queimados).",
                image: "../img/pecas/pecas-motor/valvulasMotor.png"
            },
            arvoreCames: {
                text: "A árvore de cames controla as válvulas, abrindo e fechando-as no momento certo para que o motor funcione corretamente. Ela é acionada pelo movimento do virabrequim.",
                image: "../img/pecas/pecas-motor/arvoreCamesMotor.png"
            },
            virabrequim: {
                text: "É a peça que converte o movimento dos pistões (movimento linear) em movimento rotacional, fazendo o motor funcionar e transmitindo essa energia para o restante do veículo.",
                image: "../img/pecas/pecas-motor/virabrequimMotor.png"
            },
            bielas: {
                text: "Conectam os pistões ao virabrequim. Elas transmitem a força do pistão para o virabrequim, transformando a energia gerada pela combustão em movimento rotacional.",
                image: "../img/pecas/pecas-motor/bielasMotor.png"
            },
            carter: {
                text: "É o reservatório de óleo do motor, onde o óleo lubrificante fica armazenado. Ele também ajuda a resfriar o motor, evitando o superaquecimento.",
                image: "../img/pecas/pecas-motor/carterMotor.png"
            },
            arrefecimento: {
                text: "O motor gera calor durante o funcionamento, e o sistema de arrefecimento é responsável por manter a temperatura do motor sob controle para evitar danos. Para mais detalhes,consulte o setor responsável pelo sistema de arrefecimento.",
                image: "../img/pecas/pecas-motor/sistemaArrefecimento.png"
            },
            alternador: {
                text: "Responsável por gerar eletricidade para carregar a bateria do carro enquanto o motor está funcionando. Ele converte a energia mecânica do motor em energia elétrica.",
                image: "../img/pecas/pecas-motor/alternadorMotor.png"
            },
            velasIgnicao: {
                text: "Elas são responsáveis por acender a mistura de ar e combustível no motor. Quando a vela emite uma faísca, ela provoca a explosão necessária para mover os pistões.",
                image: "../img/pecas/pecas-motor/velasIgnicaoMotor.png"
            },
            bombaCombustivel: {
                text: "Fornece combustível ao motor, transportando-o do tanque até os injetores (nos motores modernos) ou até o carburador (nos motores mais antigos).",
                image: "../img/pecas/pecas-motor/bombaCombustivel.png"
            },
        }
    },
    transmissao: {
        image: "../img/pecas/sistemaTransmissao.png",
        text: "A transmissão é um dos principais componentes do sistema de propulsão de um veículo, sendo responsável por transferir a potência gerada pelo motor para as rodas, permitindo queocarro se movimente. Ela também tem a função de ajustar a relação de rotação entre o motor e as rodas, de acordo com a velocidade e as condições de condução, o que permite ocontroleeficiente da velocidade e do torque do veículo.",
        additional: {
            embreagem: {
                text: "Em carros com transmissão manual, a embreagem é um componente essencial para desacoplar o motor da transmissão, permitindo que o motorista troque as marchas sem danificar osistema. Para mais detalhes, consulte o setor responsável pelo sistema de embreagem.",
                image: "../img/pecas/transmissao/embreagem.png"
            },
            caixaMarchas: {
                text: "A parte central da transmissão, onde as engrenagens que controlam as diferentes marchas estão localizadas. Em transmissões manuais, o motorista seleciona as marchasmanualmente. Em automáticas, o sistema controla as trocas.",
                image: "../img/pecas/transmissao/caixaMarchas.png"
            },
            diferencial: {
                text: "O diferencial permite que as rodas do carro girem a velocidades diferentes. Ele distribui a potência do motor para as rodas de maneira que as duas possam girar de formaindependente. Ou seja, uma roda pode girar mais rápido que a outra quando o carro está fazendo curvas, sem causar danos ao sistema de transmissão.",
                image: "../img/pecas/transmissao/diferencial.png"
            },
            conversorTorque: {
                text: "No lugar da embreagem, as transmissões automáticas utilizam um conversor de torque, que usa fluido para transferir a potência do motor para a transmissão.",
                image: "../img/pecas/transmissao/conversorTorque.png"
            },
            diferencial: {
                text: "São responsáveis por transferir o movimento gerado pela transmissão para as rodas.",
                image: "../img/pecas/transmissao/eixoTransmissao.png"
            },
        }
    },
    embreagem: {
        image: "../img/pecas/sistemaEmbreagem.png",
        text: "A embreagem é um componente essencial do sistema de transmissão de um veículo com câmbio manual, permitindo a desaceleração e a troca de marchas de forma suave. Ela conectaedesconecta o motor da transmissão, possibilitando que o motorista altere as marchas sem que o motor perca potência ou cause danos à transmissão.",
        additional: {
            pedal: {
                text: "É o componente que o motorista pisa para desacoplar o motor da transmissão. Quando o pedal é pressionado, a força é transmitida para o sistema de embreagem.",
                image: "../img/pecas/sistema-embreagem/pedalEmbreagem.jpeg"
            },
            plato: {
                text: "É responsável por pressionar o disco de embreagem contra o volante do motor. Sua função é garantir que a conexão entre o motor e a transmissão seja firmemente estabelecidaquando o pedal não está pressionado.",
                image: "../img/pecas/sistema-embreagem/platoEmbreagem.png"
            },
            rolamento: {
                text: "Permite que o disco de embreagem se movimente suavemente quando o pedal é pressionado e facilita o acoplamento e desacoplamento.",
                image: "../img/pecas/sistema-embreagem/rolamentoEmbreagem.png"
            },
            volanteEmbreagem: {
                text: "É a parte do motor que está em contato direto com o disco de embreagem. Ele ajuda a transmitir a rotação do motor para a transmissão.",
                image: "../img/pecas/sistema-embreagem/volanteEmbreagem.png"
            },
            diferencial: {
                text: "São responsáveis por transferir o movimento gerado pela transmissão para as rodas.",
                image: "../img/pecas/sistema-embreagem/rolamentoEmbreagem.png"
            },
        }
    },
    suspensao: {
        image: "../img/pecas/sistemaSuspensao.png",
        text: "O sistema de suspensão de um carro é responsável por garantir o conforto e a estabilidade do veículo, absorvendo os impactos provenientes do solo e mantendo as rodas em contatocoma estrada de maneira constante. Ele também ajuda a controlar o movimento da carroceria durante curvas, aceleração e frenagem. Além disso, a suspensão melhora a dirigibilidade econtribuipara a segurança ao evitar que o veículo se descontrole devido a forças externas, como buracos ou ondulações na estrada.",
        additional: {
            amortecedores: {
                text: "Os amortecedores ajudam a controlar o movimento das molas e reduzem os impactos e a vibração que são transmitidos para o carro. Eles trabalham em conjunto com as molas paracontrolar o movimento das rodas.",
                image: "../img/pecas/sistema-suspensao/amortecedores.png"
            },
            molas: {
                text: "As molas são responsáveis por suportar o peso do carro e absorver os impactos da estrada. Elas podem ser do tipo helicoidal (mais comuns), a lâmina (molas retas) ou outrostipos, dependendo do design do veículo.",
                image: "../img/pecas/sistema-suspensao/molas.png"
            },
            bucha: {
                text: "Essas peças de borracha ou outros materiais flexíveis ajudam a absorver os impactos e reduzem o atrito entre os componentes da suspensão.",
                image: "../img/pecas/sistema-suspensao/buchasSuporte.png"
            },
            bracoControle: {
                text: "São peças que conectam as rodas ao chassi e permitem que as rodas se movam verticalmente de acordo com as irregularidades da estrada.",
                image: "../img/pecas/sistema-suspensao/bracosControle.png"
            },
            barraEstabilizadora: {
                text: "Ajuda a reduzir o rolamento do carro nas curvas, garantindo que as rodas de um lado do carro se movam mais ou menos ao mesmo tempo que as do outro lado para manter o equilíbrio",
                image: "../img/pecas/sistema-suspensao/barraEstabilizadora.png"
            },
            pivoTerminal: {
                text: "O pivô de direção, também conhecido como pivô de suspensão, é uma peça que permite o movimento da suspensão, como o giro das rodas. Ele faz a ligação entre a suspensão e aspartes móveis do sistema de direção. Ele atua como um ponto de rotação para a roda, permitindo que ela gire ao ser acionada pelo volante.",
                image: "../img/pecas/sistema-suspensao/pivoTerminais.png"
            },
        }
    },
    freios: {
        image: "../img/pecas/sistemaFreio.png",
        text: "O sistema de freios é um dos componentes mais críticos de um carro, responsável pela segurança do veículo, permitindo que ele desacelere e pare de maneira eficaz quando omotoristaaciona o pedal de freio. O sistema de freios deve ser confiável e eficiente para garantir que o veículo pare de forma controlada, mesmo em situações de emergência.",
        additional: {
            pastilhas: {
                text: "São as peças que pressionam contra os discos de freio (no sistema de freio a disco) para reduzir a velocidade do veículo. Em sistemas de freio a tambor, são chamadas de sapatasde freio.",
                image: "../img/pecas/sistema-freio/pastilhas.png"
            },
            discoFreio: {
                text: "São as superfícies contra as quais as pastilhas de freio pressionam para desacelerar o veículo. Eles ficam acoplados às rodas e giram junto com elas.",
                image: "../img/pecas/sistema-freio/discoFreio.png"
            },
            pincas: {
                text: "São as partes do sistema de freio a disco que seguram as pastilhas e as pressionam contra os discos de freio quando o pedal é acionado.",
                image: "../img/pecas/sistema-freio/pincas.png"
            },
            tambor: {
                text: "Em sistemas de freio a tambor, é a peça que gira junto com a roda. As sapatas de freio pressionam contra o tambor para diminuir a velocidade.",
                image: "../img/pecas/sistema-freio/tambor.png"
            },
            cilindroMestre: {
                text: "É o componente responsável por gerar a pressão no sistema hidráulico de freio quando o motorista pressiona o pedal. Ele empurra o fluido de freio para os cilindros de roda.",
                image: "../img/pecas/sistema-freio/cilindroMestre.png"
            },
            cilindroRoda: {
                text: "Nos sistemas de freio a tambor, os cilindros de roda são responsáveis por empurrar as sapatas de freio contra o tambor. Em carros com freios a disco, o cilindro de roda ésubstituído pelas pinças.",
                image: "../img/pecas/sistema-freio/cilindroRoda.png"
            },
            fluido: {
                text: "O fluido hidráulico transmite a pressão do cilindro mestre para as outras partes do sistema de freio, permitindo que as pastilhas ou sapatas exerçam pressão nas superfícies defrenagem.",
                image: "../img/pecas/sistema-freio/fluido.png"
            },
            absorvedor: {
                text: "Nos sistemas de freios a disco, os pistões são movidos pela pressão do fluido para acionar as pinças de freio. Eles também ajudam a controlar a força aplicada nas pastilhas defreio.",
                image: "../img/pecas/sistema-freio/absorvedorChoque.png"
            },
        }
    },
    direcao: {
        image: "../img/pecas/sistemaDirecao.png",
        text: "O sistema de direção de um carro é responsável por permitir que o motorista controle a trajetória do veículo de forma eficiente e segura. Ele transmite o movimento do volanteparaas rodas, permitindo que o carro seja direcionado na direção desejada.",
        additional: {
            volanteDirecao: {
                text: "O volante é o componente que o motorista usa para controlar a direção do veículo. Ele está conectado ao sistema de direção e permite que o motorista faça curvas e altere atrajetória do carro.",
                image: "../img/pecas/sistema-direcao/volanteDirecao.png"
            },
            colunaDirecao: {
                text: "A coluna de direção conecta o volante ao mecanismo de direção (geralmente o pinhão e a cremalheira ou a caixa de direção). Ela transmite o movimento do volante para o sistemade direção.",
                image: "../img/pecas/sistema-direcao/colunaDirecao.png"
            },
            caixaDirecao: {
                text: "A caixa de direção é o componente que converte o movimento rotacional do volante em movimento linear, ajudando a mover as rodas do veículo. Pode ser do tipo caixa de direção depinhão e cremalheira (mais comum) ou do tipo caixa de direção de setor e braçadeiras.",
                image: "../img/pecas/sistema-direcao/caixaDirecao.png"
            },
            pinhao: {
                text: "O pinhão é um pequeno pinhão de engrenagem conectado ao volante, enquanto a cremalheira é uma barra dentada que se move lateralmente. O movimento do pinhão gira a cremalheira,fazendo as rodas se moverem.",
                image: "../img/pecas/sistema-direcao/pinhaoCremalheira.png"
            },
            barrasDirecao: {
                text: "São as barras que conectam o mecanismo de direção (caixa de direção ou cremalheira) às rodas dianteiras, transmitindo o movimento do sistema de direção para as rodas.",
                image: "../img/pecas/sistema-direcao/barrasDirecao.png"
            },
            bracosDirecao: {
                text: "São as peças que conectam as barras de direção às rodas, ajudando a mover as rodas para a esquerda ou para a direita.",
                image: "../img/pecas/sistema-direcao/bracosDirecao.png"
            },
            terminaisDirecao: {
                text: "Localizados nas extremidades das barras de direção, os terminais de direção conectam as barras às rodas, permitindo que o movimento da direção seja transferido para as rodas deforma eficiente.",
                image: "../img/pecas/sistema-direcao/terminaisDirecao.png"
            },
        }
    },
    arrefecimento: {
        image: "../img/pecas/sistemaArrefecimento.png",
        text: "O sistema de arrefecimento (ou sistema de resfriamento) de um carro é fundamental para controlar a temperatura do motor, evitando que ele superaqueça e garantindo que funcionedemaneira eficiente e segura. O motor de um veículo gera muito calor durante o funcionamento, e sem um sistema adequado de arrefecimento, esse calor poderia danificar o motor eoutroscomponentes do veículo.",
        additional: {
            radiador: {
                text: "O radiador é o componente que dissipa o calor do fluido de arrefecimento. Ele é responsável por resfriar o fluido de arrefecimento quente, enviando-o de volta ao motor paracontinuar o ciclo de arrefecimento.",
                image: "../img/pecas/sistema-arrefecimento/radiador.png"
            },
            bombadagua: {
                text: "A bomba d'água é responsável por circular o fluido de arrefecimento através do motor e do radiador. Ela mantém o fluido em movimento, ajudando a transferir o calor do motorpara o radiador.",
                image: "../img/pecas/sistema-arrefecimento/bombaDagua.png"
            },
            termostato: {
                text: "O termostato regula a temperatura do motor controlando o fluxo do fluido de arrefecimento. Quando o motor atinge a temperatura ideal de funcionamento, o termostato se abre,permitindo que o fluido circule. Se a temperatura estiver baixa, o termostato fica fechado, evitando o fluxo do fluido para o radiador.",
                image: "../img/pecas/sistema-arrefecimento/termostato.png"
            },
            mangueira: {
                text: "São as mangueiras que conectam os diversos componentes do sistema de arrefecimento, permitindo o fluxo do fluido de arrefecimento entre o motor, o radiador e a bomba d'água.",
                image: "../img/pecas/sistema-arrefecimento/mangueiras.png"
            },
            valvulaAlivio: {
                text: "Localizada no radiador ou na tampa do radiador, essa válvula permite que o sistema de arrefecimento libere o excesso de pressão, evitando que o sistema se danifique.",
                image: "../img/pecas/sistema-arrefecimento/valvulaAlivioPressao.png"
            },
            ventoinha: {
                text: "A ventoinha ajuda a reduzir a temperatura do fluido de arrefecimento no radiador, especialmente quando o carro está parado ou em baixa velocidade. Ela é ativada automaticamentequando a temperatura do motor sobe demais.",
                image: "../img/pecas/sistema-arrefecimento/ventoinhas.png"
            },
            reservatorio: {
                text: "É o local onde o fluido de arrefecimento excedente é armazenado quando o sistema de arrefecimento esquenta. Ele permite que o fluido se expanda e se contraia à medida que atemperatura muda, sem causar vazamentos ou danos ao sistema.",
                image: "../img/pecas/sistema-arrefecimento/reservatorioExpansao.png"
            },
            fluidoArrefecimento: {
                text: "O fluido de arrefecimento, também conhecido como anticongelante, circula pelo sistema para absorver o calor do motor e transferi-lo para o radiador. Ele também ajuda a preveniro congelamento do motor em temperaturas baixas e evita a corrosão dos componentes do sistema de arrefecimento.",
                image: "../img/pecas/sistema-arrefecimento/fluidoArrefecimento.jpg"
            },
        }
    },
    eletrico: {
        image: "../img/pecas/sistemaEletrico.png",
        text: "O sistema elétrico de um carro tem como principal função fornecer energia elétrica para o funcionamento de diversos componentes do veículo, desde o motor até os acessóriosinternose externos. Ele é responsável por garantir que os sistemas eletrônicos, os sistemas de ignição e os dispositivos auxiliares do carro operem corretamente.",
        additional: {
            bateria: {
                text: "A bateria armazena a energia elétrica e fornece a energia necessária para iniciar o motor, além de alimentar os componentes elétricos quando o motor está desligado. Ela éresponsável por fornecer a energia para a partida e para sistemas como luzes, rádio, etc.",
                image: "../img/pecas/sistema-eletrico/bateria.png"
            },
            alternadorEletrico: {
                text: "O alternador é um gerador de eletricidade que carrega a bateria enquanto o motor está funcionando e alimenta os sistemas elétricos do carro (como luzes e sistemas deinfotainment). Ele converte a energia mecânica do motor em energia elétrica.",
                image: "../img/pecas/sistema-eletrico/alternador.png"
            },
            motorArranque: {
                text: "O motor de arranque é um motor elétrico responsável por iniciar o motor do carro. Ele gira o motor de combustão interna para que ele comece a funcionar.",
                image: "../img/pecas/sistema-eletrico/motorArranque.png"
            },
            fusiveis: {
                text: "Os fusíveis protegem os circuitos elétricos de sobrecarga ou curto-circuito, interrompendo o fluxo de eletricidade quando necessário. Relés são interruptores elétricos quecontrolam o fluxo de corrente para componentes específicos, como faróis ou bombas de combustível.",
                image: "../img/pecas/sistema-eletrico/fusiveisReles.png"
            },
            distribuidor: {
                text: "É um painel que organiza e distribui a energia elétrica para diferentes circuitos do carro. Contém fusíveis e, em alguns casos, disjuntores para proteger os sistemas elétricos",
                image: "../img/pecas/sistema-eletrico/distribuidorEnergia.png"
            },
            cabos: {
                text: "Os cabos e fios conectam todos os componentes elétricos entre si, transmitindo a corrente elétrica entre a bateria, alternador, motor de arranque, sensores, atuadores e outrossistemas.",
                image: "../img/pecas/sistema-eletrico/cabos.png"
            },
            painel: {
                text: "O painel de instrumentos exibe informações importantes sobre o funcionamento do carro, como nível de combustível, temperatura do motor, velocidade, rotação do motor (RPM),voltagem da bateria e outros sinais relacionados aos sistemas elétricos do veículo.",
                image: "../img/pecas/sistema-eletrico/painel.jpg"
            },
            sensores: {
                text: "Sensores monitoram as condições do veículo e transmitem essas informações para o sistema de controle eletrônico, como a ECU (Unidade de Controle do Motor). Atuadores, por suavez, executam ações com base nessas informações, como ajustar o combustível ou controlar sistemas de emissões.",
                image: "../img/pecas/sistema-eletrico/sensores.png"
            },
            ecu: {
                text: "A ECU é o \"cérebro\" do sistema eletrônico do carro, controlando uma variedade de sistemas, incluindo o motor, os freios (em sistemas ABS), a transmissão, e sistemas desegurança. Ela recebe dados dos sensores e ajusta o funcionamento de vários componentes do veículo.",
                image: "../img/pecas/sistema-eletrico/ECU.png"
            },
            luzes: {
                text: "O sistema elétrico também alimenta as luzes internas e externas do veículo, como faróis, lanternas, luzes de freio, indicadores de direção, e luzes internas, garantindo avisibilidade e segurança.",
                image: "../img/pecas/sistema-eletrico/luzesFarois.jpg"
            },
        }
    },
};

// Função para atualizar conteúdo principal
function updateContent(service) {
    const image = document.getElementById("content-image");
    const text = document.getElementById("content-text");

    if (contentData[service]) {
        image.src = contentData[service].image;
        text.textContent = contentData[service].text;

        // Atualiza os botões adicionais
        updateAdditionalButtons(service);
    }
}

// Função para exibir os botões adicionais
function updateAdditionalButtons(service) {
    const buttonsContainer = document.getElementById("downbar");
    buttonsContainer.innerHTML = "";
    buttonsContainer.style.display = "block"; 

    if (contentData[service]?.additional) {
        for (const [key, info] of Object.entries(contentData[service].additional)) {
            const button = document.createElement("button");
            button.classList.add("box"); 
            button.textContent = key.replace(/([A-Z])/g, ' $1').trim(); 
            button.onclick = () => updateContentFromSubsidiary(info);

            buttonsContainer.appendChild(button);
        }
    }
}

// Função para exibir o conteúdo dos botões adicionais
function updateContentFromSubsidiary(info) {
    const image = document.getElementById("content-image");
    const text = document.getElementById("content-text");

    image.src = info.image || "../img/default.png";
    text.textContent = info.text || "Informação não disponível.";
}

// Função para resetar a página
function adjustSidebarHeight(category) {
  const sidebarRight = document.getElementById("downbar");
  const buttons = document.querySelectorAll(`.additional-${category}`);
  
  // Limita a altura da sidebar com base no número de botões
  const buttonHeight = 65; 
  const padding = 40; 
  const maxHeight = window.innerHeight - padding;
  
  const requiredHeight = buttons.length * buttonHeight + padding;
  
  sidebarRight.style.height = `${Math.min(requiredHeight, maxHeight)}px`;
  sidebarRight.style.overflowY = requiredHeight > maxHeight ? "scroll" : "visible";
}

// Função para aplicar a classe 'selected' ao item clicado e garantir que outros fiquem cinzas
function handleBoxClick(event) {
  // Remove a classe 'selected' de todos os .box
  document.querySelectorAll('.box').forEach(box => {
    box.classList.remove('selected');
  });

  // Adiciona a classe 'selected' ao box clicado, mantendo a cor cinza
  event.currentTarget.classList.add('selected');
}

// Função para gerenciar a classe 'active' nos botões
function handleButtonClick(event) {
  // Remove a classe 'active' de todos os botões
  document.querySelectorAll('.sidebar button').forEach(button => {
    button.classList.remove('active');
  });

  // Adiciona a classe 'active' ao botão clicado
  event.currentTarget.classList.add('active');
}

// Adiciona o evento de clique para todos os botões na sidebar
document.querySelectorAll('.sidebar button').forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Adiciona o evento de clique para todos os botões no downbar
document.querySelectorAll('.downbar button').forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Adiciona o evento de clique para todos os sistemas (com a classe 'box')
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', handleBoxClick);
});