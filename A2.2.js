let galleryItemsData = [
  {
    id: "A",
    letter: "a",
    Image: "img/A.png",
    p: "ANT",
  },
  {
    id: "B",
    letter: "b",
    Image: "img/B.png",
    p: "BEAR",
  },
  {
    id: "C",
    letter: "c",
    Image: "img/C.png",
    p: "CAR",
  },
  {
    id: "D",
    letter: "d",
    Image: "img/D.png",
    p: "DOLPHIN",
  },
  {
    id: "E",
    letter: "e",
    Image: "img/E.png",
    p: "ELEPHNAT",
  },
  {
    id: "F",
    letter: "f",
    Image: "img/F.png",
    p: "FROG",
  },
  {
    id: "G",
    letter: "g",
    Image: "img/G.png",
    p: "GIRL",
  },
  {
    id: "H",
    letter: "h",
    Image: "img/H.png",
    p: "HELICOPTER",
  },
  {
    id: "I",
    letter: "i",
    Image: "img/I.png",
    p: "ICECREAM",
  },
  {
    id: "J",
    letter: "j",
    Image: "img/J.png",
    p: "JEEP",
  },
  {
    id: "K",
    letter: "k",
    Image: "img/K.png",
    p: "KEYBOARD",
  },
  {
    id: "L",
    letter: "l",
    Image: "img/L.png",
    p: "LEAF",
  },
  {
    id: "M",
    letter: "m",
    Image: "img/M.png",
    p: "MANGO",
  },
  {
    id: "N",
    letter: "n",
    Image: "img/N.png",
    p: "NOSE",
  },
  {
    id: "O",
    letter: "o",
    Image: "img/O.png",
    p: "ONION",
  },
  {
    id: "P",
    letter: "p",
    Image: "img/P.png",
    p: "PIG",
  },
  {
    id: "Q",
    letter: "q",
    Image: "img/Q.png",
    p: "QUEUE",
  },
  {
    id: "R",
    letter: "r",
    Image: "img/R.png",
    p: "RABBIT",
  },
  {
    id: "S",
    letter: "s",
    Image: "img/S.png",
    p: "SPARROW",
  },
  {
    id: "T",
    letter: "t",
    Image: "img/T.png",
    p: "TIGER",
  },
  {
    id: "U",
    letter: "u",
    Image: "img/U.png",
    p: "UNIFORM",
  },
  {
    id: "V",
    letter: "v",
    Image: "img/V.png",
    p: "VEGETABLE",
  },
  {
    id: "W",
    letter: "w",
    Image: "img/W.png",
    p: "WATERMELON",
  },
  {
    id: "X",
    letter: "x",
    Image: "img/X.png",
    p: "X-RAY",
  },
  {
    id: "Y",
    letter: "y",
    Image: "img/Y.png",
    p: "YOUGURT",
  },
  {
    id: "Z",
    letter: "z",
    Image: "img/Z.png",
    p: "ZIP",
  },
  {
    id: "small L",

    Image: "img/Small_Letters.png",
    p: "",
  },
  {
    id: "cap L",
    Image: "img/Capital_Letters.png",
    p: "",
  },
];

let gallery = document.getElementById("gallery");

let generateGallery = () => {
  return (gallery.innerHTML = galleryItemsData
    .map((x) => {
      let { id, letter, Image, p } = x;
      if (letter) {
        return `
              <div class="image-item" id=${id}>
                <div class="letter">${letter}</div>
                <img src=${Image} class="image" />
                <p>${p}</p>
              </div>
              `;
      } else {
        return `
              <div class="image-item" id=${id}>
                <img src=${Image} class="image" />
                <p>${p}</p>
              </div>
              `;
      }
    })
    .join(""));
};

generateGallery();

generateGallery();
