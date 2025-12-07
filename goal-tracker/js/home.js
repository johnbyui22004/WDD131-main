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

      // Goal text
      const text = document.createElement("span");
      text.textContent = `${goal.title} - ${goal.desc}`;
      text.style.textDecoration = goal.completed ? "line-through" : "none";

      // Clicking text toggles completion
      text.addEventListener("click", () => {
        goal.completed = !goal.completed;
        text.style.textDecoration = goal.completed ? "line-through" : "none";
        localStorage.setItem("goals", JSON.stringify(goals));
      });

      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");

      removeBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // prevents goal from toggling when clicking remove
        goals.splice(index, 1);
        localStorage.setItem("goals", JSON.stringify(goals));
        displayGoals();
      });

      li.appendChild(text);
      li.appendChild(removeBtn);

      goalList.appendChild(li);
    });
  }
});
