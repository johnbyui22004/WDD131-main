document.addEventListener("DOMContentLoaded", () => {
  const goalForm = document.getElementById("goal-form");
  const goalList = document.getElementById("goal-list");

  let goals = JSON.parse(localStorage.getItem("goals")) || [];

  displayGoals();

  goalForm.addEventListener("submit", function(e){
    e.preventDefault();
    const title = document.getElementById("goal-title").value;
    const desc = document.getElementById("goal-desc").value;

    if(title && desc){
      const goal = { title, desc, completed: false };
      goals.push(goal);
      localStorage.setItem("goals", JSON.stringify(goals));
      displayGoals();
      goalForm.reset();
    }
  });

  function displayGoals(){
    goalList.innerHTML = "";
    goals.forEach((goal, index) => {
      const li = document.createElement("li");
      li.textContent = `${goal.title} - ${goal.desc}`;
      li.style.textDecoration = goal.completed ? "line-through" : "none";

      li.addEventListener("click", () => {
        goal.completed = !goal.completed;
        li.style.textDecoration = goal.completed ? "line-through" : "none";
        localStorage.setItem("goals", JSON.stringify(goals));
      });

      goalList.appendChild(li);
    });
  }
});
