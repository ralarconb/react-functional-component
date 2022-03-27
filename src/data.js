const tasks = [
  { name: "Get up", id: 1 },
  { name: "Make the bed", id: 2 },
  { name: "Take a shower", id: 3 },
];

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find((task) => task.id === id);
}
