// Data for the buttons
const contentData = {
    motor: {
      image: "motor.png",
      text: "O moto é o coração do carro, é o que faz o carro andar.",
    },
    engine: {
      image: "engine.jpg",
      text: "Engine servicing involves tuning, cleaning, and repairing your engine for optimal performance.",
    },
    tires: {
      image: "tires.jpg",
      text: "We replace and align your tires for a smoother and safer ride.",
    },
    oil: {
      image: "oil.jpg",
      text: "Oil changing ensures your engine stays lubricated and runs efficiently.",
    },
  };
  
  // Function to update content
  function updateContent(service) {
    const image = document.getElementById("content-image");
    const text = document.getElementById("content-text");
  
    if (contentData[service]) {
      image.src = contentData[service].image;
      text.textContent = contentData[service].text;
    }
  }
  