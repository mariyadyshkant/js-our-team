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
    img: "./img/male2.png"
  },
  {
    member_name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./img/female2.png"
  },
  {
    member_name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./img/male3.png"
  },
  {
    member_name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./img/female3.png"
  }
];

// Creo la row una sola volta
const row = createRowElements("div", "row", "d-flex", "flex-row", "flex-wrap", "justify-content-center", "bg-light");

for (let i = 0; i < teamMembers.length; i++) {
  const { member_name, role, email, img } = teamMembers[i];

  // Creo la colonna per ogni membro e salvo il riferimento
  const col = createColElements("div", "col-4", "d-flex", "flex-row", "align-items-center", "justify-content-around", "my-3");
  row.appendChild(col);

  // Creo il box immagine e inserisco l'immagine
  const imgBox = createImgBox("div", "me-3");
  col.appendChild(imgBox);
  const imgEl = createImgElements("img", img, "w-100");
  imgBox.appendChild(imgEl);


  // Creo il box descrizione e inserisco nome, ruolo, email
  const descBox = createDescriptionBox("div", "d-flex", "flex-column", "justify-content-between", "lh-1");
  col.appendChild(descBox);
  descBox.appendChild(createTextElement("h5", member_name, "fs-3", "mb-5", "bg-danger-subtle"));
  descBox.appendChild(createTextElement("p", role, "fw-bolder"));
  descBox.appendChild(createTextElement("p", email, "text-primary"));

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
  // document.querySelector(".row").appendChild(divEl);
  return divEl;
}
function createImgBox(tag, ...classes) {
  const imgBox = document.createElement(tag);
  imgBox.classList.add(...classes);
  // document.querySelector(".col").appendChild(imgBox);
  return imgBox;
}
function createDescriptionBox(tag, ...classes) {
  const descBox = document.createElement(tag);
  descBox.classList.add(...classes);
  // document.querySelector(".col").appendChild(descBox);
  return descBox;
}
function createImgElements(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.src = img;
  imgEl.alt = "team member image";
  return imgEl;
}
function createTextElement(tag, text, ...classes) {
  const textEl = document.createElement(tag);
  textEl.classList.add(...classes);
  textEl.textContent = text;
  return textEl;
}