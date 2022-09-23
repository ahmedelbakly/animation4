const container = document.getElementsByClassName("container");
console.log(container);

for (let i = 0; i <= 50; i++) {
  const element = document.createElement("h1");
  const text= document.createTextNode("")
  element.appendChild(text);
  element.classList.add("block");
  container[0].appendChild(element);
}

const animateBlocks = () => {
  anime({
    targets: ".block",

    translateX: () => {
     return anime.random(-700, 700);
    },
    translateY: () => {
     return anime.random(-500, 500);
    },
    scale: () => {
     return anime.random(1,4);
    },
    easing: "linear",
    duration:3000,
    delay: anime.stagger(10),
      complete:animateBlocks,
  });

  
};

animateBlocks();
