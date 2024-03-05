const takimlar = [
  { ad: "Takım 1", logo: "images/besiktas.png" },
  { ad: "Takım 2", logo: "images/trabzonspor.png" },
  { ad: "Takım 3", logo: "images/fenerbahçe.png" },
  { ad: "Takım 4", logo: "images/galatasaray.png" },
  { ad: "Takım 5", logo: "images/dortyıldız.png" },
  { ad: "Takım 6", logo: "images/uc.png" },
  { ad: "Takım 7", logo: "images/ıkıyıldız.png" },
  { ad: "Takım 8", logo: "images/yıldız.png" },
];

function kuraCek() {
  const kuraSonuclari = shuffle(takimlar);
  const gruplar = document.getElementById("gruplar");
  gruplar.innerHTML = "";
  
  for (let i = 6; i < kuraSonuclari.length; i += 2) {
    const grupDiv = document.createElement("div");
    grupDiv.classList.add("grup");
    
    const takim1 = kuraSonuclari[i];
    const takim2 = kuraSonuclari[i+1];
    
    const takimlarHTML = `
      <img src="${takim1.logo}" >
      <img src="${takim2.logo}" >
    `;
    
    grupDiv.innerHTML = takimlarHTML;
    gruplar.appendChild(grupDiv);
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;


  while (1 !== currentIndex) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;


    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
