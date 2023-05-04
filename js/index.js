//modo oscuro
const btnSwitch = document.getElementById("switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

// create cards project
const itemContainerId = document.querySelector("#itemContainerId");

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
  renderProjects(projects);
}

function renderProjects(projects) {
  projects.forEach((project) => {
    const newProject = document.createElement("div");
    newProject.className = "project";
    newProject.setAttribute("data-id", project.id);
    newProject.innerHTML =
      //estructura de la card que muestra el projecto
      `
      <div class="project-img">
        <img src="${project.img}" alt="${project.title}">
        <h1>${project.title}</h1>
      </div>
      <div class="project-buttons">
        <a href="${project.urlGitHub}" target="_blank">GitHub</a>
        <a href="${project.urlServer}" target="_blank">Live Demo </a>
      </div>`;
    itemContainerId.append(newProject);
  });
}

render();

renderProjects();

