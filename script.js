const teamMembers = [
  {
    member_name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./img/male1.png"
  },
  {
    member_name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./img/female1.png"
  },
  {
    member_name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png"
  },
  {
    member_name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png"
  },
  {
    member_name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png"
  },
  {
    member_name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png"
  }
];

// Creo la row una sola volta
createRowElements("div", "row", "d-flex", "flex-row", "flex-wrap", "justify-content-center");

for (let i = 0; i < teamMembers.length; i++) {
  const { member_name, role, email, img } = teamMembers[i];

  // Creo la colonna per ogni membro e salvo il riferimento
  const col = createColElements("div", "col-4", "d-flex", "flex-row", "align-items-center", "my-3");

  // Creo il box immagine e inserisco l'immagine
  const imgBox = createImgBox("div", "me-3");
  const imgEl = createImgElements("img", img, "w-75");
  imgBox.appendChild(imgEl);
  col.appendChild(imgBox);

  // Creo il box descrizione e inserisco nome, ruolo, email
  const descBox = createDescriptionBox("div", "d-flex", "flex-column");
  descBox.appendChild(createTextElement("h5", member_name));
  descBox.appendChild(createTextElement("p", role));
  descBox.appendChild(createTextElement("p", email));
  col.appendChild(descBox);
}

// Funzioni di creazione elementi
function createRowElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".container").appendChild(divEl);
  return divEl;
}
function createColElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".row").appendChild(divEl);
  return divEl;
}
function createImgBox(tag, ...classes) {
  const box = document.createElement(tag);
  box.classList.add(...classes);
  return box;
}
function createDescriptionBox(tag, ...classes) {
  const box = document.createElement(tag);
  box.classList.add(...classes);
  return box;
}
function createImgElements(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.src = img.startsWith("./img/") ? img : `./img/${img}`;
  imgEl.alt = "team member image";
  return imgEl;
}
function createTextElement(tag, text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}