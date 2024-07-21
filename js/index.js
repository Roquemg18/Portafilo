//modo oscuro
const btnSwitch = document.getElementById("switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

// create cards project
async function getProjects() {
  try {
    //busca los datos de los projectos y los asigna a una variable
    const response = await fetch("../assets/json/projects.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function render() {
  const projects = await getProjects();
  generateProductHTML(projects);
  configSwiper();
}

// Contenedor donde se insertarán los productos
const container = document.getElementById("project-container");

// Función para generar el HTML de cada producto
function generateProductHTML(projects) {
  projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.className = "swiper-slide";
    newProject.setAttribute("data-id", project.id);
    newProject.innerHTML = `
            <div class="project-content">
                <div class="project-txt">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="project-technologies">
                  ${project.technologies.map(tech => `
                    <span class="tech ${tech.class}">${tech.name}</span>
                  `).join('')}
                </div>
                <div class="project-img">
                    <img class="projectImg" src="${project.img}" />
                </div>
            </div>
            <div class="containerButtonProject">
                <a href="${project.urlGitHub}" class="btnProject">GitHub</a>
                <a href="${project.urlServer}" class="btnProject">Server</a>
            </div>
    `;
    container.append(newProject);
  });
}
function configSwiper() {
  // Inicializar Swiper
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      depth: 500,
      modifier: 1,
      slideShadows: true,
      rotate: 0,
      stretch: 0,
    },
  });
}

render();
