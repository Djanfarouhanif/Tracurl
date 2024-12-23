const ctx = document.getElementById("myChart");
const toggle = document.getElementById("toggle");
const navToggle = document.getElementById("nav-toggle");
const allContainer = document.querySelector(".all-container");
const newProject = document.getElementById("new-project");
const project = document.getElementById("project");
console.log(project);
//  Nav bar section pour toggle
toggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-toggle");
  allContainer.classList.toggle("toggle-container");
});

// section pour ajouter un niveeau projet
newProject.addEventListener("click", () => {
  project.classList.toggle("new-project");
  console.log(project);
});
//  Partie pour afficher la graphique
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["12dec.", "13dec.", "14dec.", "15dec.", "16dec.", "17dec."],
    datasets: [
      {
        label: "view",
        data: [0, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
