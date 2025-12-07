// Demo goal details (placeholder for actual app)
const detailsList = document.getElementById("details-list");
const sampleGoals = [
  { title: "Exercise Daily", desc: "Go for a 30-minute run every day", completed: false },
  { title: "Read a Book", desc: "Read 20 pages per day", completed: true },
];

sampleGoals.forEach(goal => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${goal.title}</strong>: ${goal.desc} - Completed: ${goal.completed ? "Yes" : "No"}`;
  detailsList.appendChild(li);
});
