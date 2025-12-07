document.addEventListener("DOMContentLoaded", () => {
  const detailsList = document.getElementById("details-list");
  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  if(goals.length === 0){
    detailsList.innerHTML = "<li>No goals found. Add some on the Home page!</li>";
    return;
  }

  goals.forEach(goal => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${goal.title}</strong>: ${goal.desc} - Completed: ${goal.completed ? "Yes" : "No"}`;
    detailsList.appendChild(li);
  });
});
