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
  createColElements("div", "col-12", "col-md-6", "col-lg-4", "d-flex", "justify-content-center");
  // Creo la card
  createCardElements("div", "card", "d-flex", "flex-row", "text-center");
  // Aggiungo l'immagine
  createCardImgElements("img", img, "card-img-top", "rounded-circle", "w-50", "mt-3");
  // Creo il corpo della card
  createCardBodyElements("div", "card-body", "d-flex", "flex-column", "align-items-center");
  // Titolo con il nome
  createCardTitleElements("h5", member_name, "card-title", "mt-3");
  // Testo con ruolo ed email
  createCardTextElements("div", role, email, "card-text");
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
function createCardElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".col-12:last-child").appendChild(divEl);
  return divEl;
}
function createCardBodyElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".card:last-child").appendChild(divEl);
  return divEl;
}
function createCardTitleElements(tag, member_name, ...classes) {
  const titleEl = document.createElement(tag);
  titleEl.innerHTML = `<h5 class="card-title">${member_name}</h5>`;
  document.querySelector(".card-body:last-child").appendChild(titleEl);
}
function createCardTextElements(tag, role, email, ...classes) {
  const descriptionEl = document.createElement(tag);
  descriptionEl.classList.add(...classes);
  descriptionEl.innerHTML = `
    <p class="card-text">${role}</p>
    <p class="card-text">${email}</p>
  `;
  document.querySelector(".card-body:last-child").appendChild(descriptionEl);
}
function createCardImgElements(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.setAttribute("src", `./img/${img}`);
  imgEl.setAttribute("alt", "team member image");
  document.querySelector(".card:last-child").appendChild(imgEl);
  return imgEl;
}
