const ctx = document.getElementById("myChart");
const toggle = document.getElementById("toggle");
const navToggle = document.getElementById("nav-toggle");
const allContainer = document.querySelector(".all-container");

console.log(allContainer);

toggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-toggle");
  allContainer.classList.toggle("toggle-container");
});

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
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
