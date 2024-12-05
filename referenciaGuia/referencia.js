const contentData = {
  motor: {
    image: "",
    text: "O sistema do motor de um carro é fundamental para o funcionamento do veículo, pois é ele quem converte a energia armazenada no combustível em movimento. O motor de um carro é um dos componentes mais complexos e vitais do veículo, e ele está intimamente relacionado com outros sistemas, como o sistema de ignição, o sistema de arrefecimento.",
  },
  transmissao: {
    image: "",
    text: "A transmissão é um dos principais componentes do sistema de propulsão de um veículo, sendo responsável por transferir a potência gerada pelo motor para as rodas, permitindo que ocarro se movimente. Ela também tem a função de ajustar a relação de rotação entre o motor e as rodas, de acordo com a velocidade e as condições de condução, o que permite o controleeficiente da velocidade e do torque do veículo.",
  },
  embreagem: {
    image: "",
    text: "A embreagem é um componente essencial do sistema de transmissão de um veículo com câmbio manual, permitindo a desaceleração e a troca de marchas de forma suave. Ela conecta edesconecta o motor da transmissão, possibilitando que o motorista altere as marchas sem que o motor perca potência ou cause danos à transmissão.",
  },
  suspensao: {
    image: "",
    text: "O sistema de suspensão de um carro é responsável por garantir o conforto e a estabilidade do veículo, absorvendo os impactos provenientes do solo e mantendo as rodas em contato coma estrada de maneira constante. Ele também ajuda a controlar o movimento da carroceria durante curvas, aceleração e frenagem. Além disso, a suspensão melhora a dirigibilidade e contribuipara a segurança ao evitar que o veículo se descontrole devido a forças externas, como buracos ou ondulações na estrada.",
  },
  freios: {
    image: "",
    text: "O sistema de freios é um dos componentes mais críticos de um carro, responsável pela segurança do veículo, permitindo que ele desacelere e pare de maneira eficaz quando o motoristaaciona o pedal de freio. O sistema de freios deve ser confiável e eficiente para garantir que o veículo pare de forma controlada, mesmo em situações de emergência.",
  },
  direcao: {
    image: "",
    text: "O sistema de direção de um carro é responsável por permitir que o motorista controle a trajetória do veículo de forma eficiente e segura. Ele transmite o movimento do volante paraas rodas, permitindo que o carro seja direcionado na direção desejada.",
  },
  arrefecimento: {
    image: "",
    text: "O sistema de arrefecimento (ou sistema de resfriamento) de um carro é fundamental para controlar a temperatura do motor, evitando que ele superaqueça e garantindo que funcione demaneira eficiente e segura. O motor de um veículo gera muito calor durante o funcionamento, e sem um sistema adequado de arrefecimento, esse calor poderia danificar o motor e outroscomponentes do veículo.",
  },
  eletrico: {
    image: "",
    text: "O sistema elétrico de um carro tem como principal função fornecer energia elétrica para o funcionamento de diversos componentes do veículo, desde o motor até os acessórios internose externos. Ele é responsável por garantir que os sistemas eletrônicos, os sistemas de ignição e os dispositivos auxiliares do carro operem corretamente. ",
  },
};

// função de updateContent
function updateContent(service, textAlign = "justify") {
  const image = document.getElementById("content-image");
  const text = document.getElementById("content-text");

  if (contentData[service]) {
    image.src = contentData[service].image;
    text.textContent = contentData[service].text;
    text.style.textAlign = textAlign;
  }
}