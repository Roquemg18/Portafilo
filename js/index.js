const itemContainerId = document.querySelector("#itemContainerId");

async function getProjects() {
  try {
    const response = await fetch("../json/projects.json");
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
    newProject.innerHTML = `
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

// funcion menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
