// Menu responsive

let menu = document.querySelector('#icon-menu');
let nav = document.querySelector('.nav');

menu.onclick = ()=>{
  menu.classList.toggle('bx-x')
  nav.classList.toggle('open')
};

// First Section Animation
const sr = ScrollReveal ({
  distance:'40px',
  duration: 2500,
  reset: true
});

sr.reveal('.about-text span',{delay:520, origin:'top'})
sr.reveal('.about-text h1',{delay:600, origin:'left'})
sr.reveal('.about-text p',{delay:680, origin:'right'})
sr.reveal('.about-img',{delay:800, origin:'right'})



// Skill section
var skills = [
  { HTML: "<i class='bx bxl-html5'></i>" },
  { "C++": "<i class='bx bxl-c-plus-plus' ></i>" },
  { CSS: "<i class='bx bxl-css3' ></i>" },
  { JavaScript: "<i class='bx bxl-javascript' ></i>" },
  { Python: "<i class='bx bxl-python' ></i>" },
  { "React Js": "<i class='bx bxl-react' ></i>" },
];

var skillsContainer = document.getElementById("skills-container");

skills.forEach(function (skill) {
  var skillName = Object.keys(skill)[0];
  var skillIcon = skill[skillName];

  let html = `
  <div class="icon ${skillName}">${skillIcon}</div>
  <h2>${skillName}</h2>
  `;

  var skillElement = document.createElement("div");
  skillElement.setAttribute("class", "skill");
  skillElement.innerHTML = html;
  skillsContainer.appendChild(skillElement);
});



// Projects Section
var repositories = [
  {
    title: "Tic Tac Toe",
    description: `An interactive Tic Tac Toe game built with JavaScript, offering classic gameplay, 
    responsive design, and clear, well-commented code.`,
    language: "JavaScript",
    link: "https://github.com/fatmaashraf1/tic_tac_toe_js",
    lastUpdate: "Updated on Mar 17",
  },
  {
    title: "Student-affairs-website",
    description: `The Student Affairs Website is created as a project submission for the "IS231" course.
    It involves HTML, CSS, and AJAX for the front-end,Python with the Django framework for the back-end,
    and JavaScript for client-side validations`,
    language: "Python",
    link: "https://github.com/fatmaashraf1/Student-affairs-website",
    lastUpdate: "Updated on Jun 20",
  },
  {
    title: "Flight-Reservation-System ",
    description: `The Flight Reservation System is developed as a project submission for the "IS211" course. 
    It is designed to assess knowledge and implementation of relational databases.`,
    language: "C#",
    link: "https://github.com/fatmaashraf1/Flight-Reservation-System",
    lastUpdate: "Updated on Jun 23",
  },
  {
    title: "quraan-kareem",
    description: "Quraan Kareem | قرآن كريم",
    language: "JavaScript",
    link: "https://github.com/fatmaashraf1/quraan-kareem",
    lastUpdate: "Updated on Feb 12",
  },
  {
    title: "leaderboard-template",
    description: "Leaderboard template for 180 Daraga Student Activity.",
    language: "JavaScript",
    link: "https://github.com/fatmaashraf1/leaderboard-template",
    lastUpdate: "Updated on Jun 1",
  },
  {
    title: "Toffee Store",
    description: `The Toffee Store System is designed and developed as a project submission for the "CS251" course, 
    with a strong emphasis on applying object-oriented programming concepts.`,
    language: "C++",
    link: "https://github.com/fatmaashraf1/SoftwareEngineering1-ToffeeStore",
    lastUpdate: "Updated on May 19",
  },
];



var repositoriesContainer = document.getElementById("repositories-container");

repositories.forEach(function (repositoryData) {
  var repositoryElement = document.createElement("div");
  repositoryElement.className = "repository";

  var titleElement = document.createElement("div");
  titleElement.className = "repository-title";

  var titleicon = document.createElement("img");
  titleicon.src = "./assests/repo.png";
  titleicon.className = "repo-icon";
  titleElement.append(titleicon);

  var title = document.createElement("h2");
  title.textContent = repositoryData.title;
  title.className = "repo-tittle";
  titleElement.append(title);

  var descriptionElement = document.createElement("div");
  descriptionElement.className = "repository-description";
  descriptionElement.textContent = repositoryData.description;

  // color of language  
  var languageElement = document.createElement("div");
  languageElement.className = "repository-language";

  // Check on the language to set the color
  var languageColor = document.createElement("p");
  languageColor.className = "language-color";
  if (repositoryData.language === "Python") {
    languageColor.style.backgroundColor = "blue";
  } else if (repositoryData.language === "JavaScript") {
    languageColor.style.backgroundColor = "#ffff28";
  } else if (repositoryData.language === "C#") {
    languageColor.style.backgroundColor = "green";
  }
  else if (repositoryData.language === "C++") {
    languageColor.style.backgroundColor = "#ff607b";
  }

  languageElement.append(languageColor);

  var language = document.createElement("p");
  language.className = "repo-language";
  language.textContent = repositoryData.language;
  languageElement.append(language);

  var lastUpdate = document.createElement("p");
  lastUpdate.className = "repo-update";
  lastUpdate.textContent = repositoryData.lastUpdate;
  languageElement.append(lastUpdate);


  var linkElement = document.createElement("div");
  linkElement.className = "repository-link";

  var linkAnchor = document.createElement("a");
  linkAnchor.href = repositoryData.link;
  linkAnchor.target = "_blank";
  linkAnchor.textContent = "View on GitHub";

  linkElement.appendChild(linkAnchor);

  repositoryElement.appendChild(titleElement);
  repositoryElement.appendChild(descriptionElement);
  repositoryElement.appendChild(languageElement);
  repositoryElement.appendChild(linkElement);

  repositoriesContainer.appendChild(repositoryElement);
});



// Contact Section sendMails
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = "Message from " + name;
  const emailBody = message + " From: " + email;
  const mailtoLink = "mailto:fatmaserry16@gmail.com?subject=" + subject + "&body=" + emailBody;
  window.location.href = mailtoLink;
}