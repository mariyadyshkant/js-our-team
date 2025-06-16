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
const row = gridEl("div", "row", "d-flex", "flex-row", "flex-wrap", "justify-content-center", "bg-light");
document.querySelector(".container").appendChild(row);
let imgBox = "";
let descBox = "";

for (let i = 0; i < teamMembers.length; i++) {
  const { imgBox, descBox } = gridStructure();
  const { member_name, role, email, img } = teamMembers[i];
  const imgEl = imgElem("img", img, "w-100");
  imgBox.appendChild(imgEl);
  descBox.appendChild(textElem("h5", member_name, "fs-3", "mb-5", "bg-danger-subtle"));
  descBox.appendChild(textElem("p", role, "fw-bolder"));
  descBox.appendChild(textElem("p", email, "text-primary"));

}

// Funzioni di creazione elementi
function gridEl(tag, ...classes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
}

function gridStructure() {
  const col = gridEl("div", "col-4", "d-flex", "flex-row", "align-items-center", "justify-content-around", "my-3");
  row.appendChild(col);
  imgBox = gridEl("div", "me-3");
  col.appendChild(imgBox);
  descBox = gridEl("div", "d-flex", "flex-column", "justify-content-between", "lh-1");
  col.appendChild(descBox);
  return { col, imgBox, descBox };
}

function imgElem(tag, img, ...classes) {
  const imgEl = document.createElement(tag);
  imgEl.classList.add(...classes);
  imgEl.src = img;
  imgEl.alt = "team member image";
  return imgEl;
}
function textElem(tag, text, ...classes) {
  const textEl = document.createElement(tag);
  textEl.classList.add(...classes);
  textEl.textContent = text;
  return textEl;
}