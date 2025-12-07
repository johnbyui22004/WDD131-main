const detailsList = document.getElementById("details-list");
const goals = JSON.parse(localStorage.getItem("goals")) || [];

goals.forEach(goal => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${goal.title}</strong>: ${goal.desc} - Completed: ${goal.completed ? "Yes" : "No"}`;
  detailsList.appendChild(li);
});
