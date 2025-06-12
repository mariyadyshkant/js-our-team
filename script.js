const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// Ho bisogno di una funzione per creare la struttura della griglia all'interno del cointainer di partenza

function createRowElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".container").appendChild(divEl);
};

createRowElements("div", "row", "d-flex", "flex-row", "flex-wrap", "justify-content-center");

// Altra funzione per creare le colonne

function createColElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".row").appendChild(divEl);
};

createColElements("div", "col-12", "col-md-6", "col-lg-4", "d-flex", "justify-content-center");

// Funzione per creare le card
function createCardElements(tag, ...classes) {
  const divEl = document.createElement(tag);
  divEl.classList.add(...classes);
  document.querySelector(".col-12").appendChild(divEl);
};

createCardElements("div", "card", "d-flex", "flex-row", "text-center");

// Funzione per creare il contenuto della card