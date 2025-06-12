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

  // Creo la colonna per ogni membro con flex-row
  const col = createColElements("div", "col-4", "d-flex", "flex-row", "align-items-center", "my-3");

  // Creo il box immagine
  const imgBox = document.createElement("div");
  imgBox.classList.add("me-3"); // margine a destra per separare
  col.appendChild(imgBox);

  // Inserisco l'immagine nel box
  const imgEl = createImgElements("img", img, "w-75");
  imgBox.appendChild(imgEl);

  // Creo il box descrizione
  const descBox = document.createElement("div");
  descBox.classList.add("d-flex", "flex-column");
  col.appendChild(descBox);

  // Inserisco nome, ruolo, email nel box descrizione
  const nameEl = document.createElement("h5");
  nameEl.textContent = member_name;
  descBox.appendChild(nameEl);

  const roleEl = document.createElement("p");
  roleEl.textContent = role;
  descBox.appendChild(roleEl);

  const emailEl = document.createElement("p");
  emailEl.textContent = email;
  descBox.appendChild(emailEl);
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
function createImgElements(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.setAttribute("src", `./img/${img}`);
  imgEl.setAttribute("alt", "team member image");
  return imgEl;
}
