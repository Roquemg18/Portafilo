document.addEventListener("DOMContentLoaded", async () => {
  async function getlanguages() {
    try {
      const response = await fetch("../assets/json/programmingLanguages.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function render() {
    const languages = await getlanguages();
    generateLanguageFront(languages);
    generateLanguageBackend(languages);
  }

  // Contenedor donde se insertarán los lenguajes
  const container = document.getElementById("article-container");
  const containerBackend = document.getElementById("article-container-backend");

  // Función para generar el HTML de cada article
  function generateLanguageFront(languages) {
    languages.forEach((language) => {
      const newLanguage = document.createElement("article");
      newLanguage.setAttribute("data-id", language.id);
      newLanguage.innerHTML = `
                    <img
                      src="${language.img}"
                      alt="Experience icon"
                      class="icon round-logo"
                    />
                    <div>
                      <h3>${language.name}</h3>
                    </div>
        `;

      if(language.type === "frontend") {
          container.append(newLanguage);
      }else {
        containerBackend.append(newLanguage);
      }
    });
  }

  render();
});
