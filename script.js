const teamMembers = [
  {
    member_name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png"
  },
  {
    member_name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png"
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

  // Creo la colonna per ogni membro
  createColElements("div", "col-4", "d-flex", "align-items-center");
  // Creo la card
  // createCardElements("div", "card", "d-flex", "flex-row", "text-center");
  // Aggiungo l'immagine
  createImgElements("img", img, "card-img-top", "w-50");
  // Creo il corpo della card
  // createBodyElements("div", "card-body", "d-flex", "flex-column", "align-items-center");
  // Titolo con il nome
  createDescriptionElements("h5", member_name);
  // Testo con ruolo ed email
  // createDescriptionElements("p", role);
  // createDescriptionElements("p", email);
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
// function createCardElements(tag, ...classes) {
//   const divEl = document.createElement(tag);
//   divEl.classList.add(...classes);
//   document.querySelector(".col-12:last-child").appendChild(divEl);
//   return divEl;
// }
// function createCardBodyElements(tag, ...classes) {
//   const divEl = document.createElement(tag);
//   divEl.classList.add(...classes);
//   document.querySelector(".card:last-child").appendChild(divEl);
//   return divEl;
//}
function createDescriptionElements(tag, property, ...classes) {
  const descriptionEl = document.createElement(tag);
  descriptionEl.classList.add(...classes);
  descriptionEl.innerHTML = `
    <h5 class="card-title">${property.member_name}</h5>
    <p class="card-text">${property.role}</p>
    <p class="card-text">${property.email}</p>
  `;
  document.querySelector(".col-4").appendChild(descriptionEl);
  return descriptionEl;
};
function createImgElements(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.setAttribute("src", `./img/${img}`);
  imgEl.setAttribute("alt", "team member image");
  document.querySelector(".col-4").appendChild(imgEl);
  return imgEl;
}
