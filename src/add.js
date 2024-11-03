import { writeFileSync } from "node:fs";
import { color } from "./auxiliaries.js";
import { readFileTasks } from "./readFileTasks.js";

let tasks = readFileTasks();

function getId() {
  if (tasks.length === 0) { return 1;}

  const lastTask = tasks[tasks.length - 1];
  return lastTask.id + 1;
}

export default function addTask(task) {
  const id = getId();
  const newTask = {
    id,
    task,
    status: "added",
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
  };

  tasks.push(newTask);

  writeFileSync("tasks.json", JSON.stringify(tasks));
  console.log(`${color.yellow} Task Added Successfully ${color.cyan}(Id: ${newTask.id})`);
}
