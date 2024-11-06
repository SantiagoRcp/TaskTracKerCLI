import readFileTasks from "./readFileTasks.js";
import {color} from "./auxiliaries.js";

function taskAllList() {
    const tasks = readFileTasks();
    if (tasks.length === 0) {
        console.log("No tasks yet");
        return;
    }

    tasks.forEach(task => {
        console.log(`\tId: ${task.id}
        ${color.yellow}Task: ${task.task.padEnd(15)}
        ${color.cyan}Status: ${task.status}
        ${color.green}Created: ${task.createdAt}
        ${color.green}Update: ${task.updatedAt}${color.reset}\n`);
    })
}

function taskToDoList(){
    const tasks = readFileTasks();
    const taskToDo = tasks.filter(task => task.status === "ToDo");
    if (taskToDo.length === 0){
        console.log(`${color.error} No tasks yet ${color.reset}`);
        return;
    }

    taskToDo.forEach(task =>{
        console.log(`\tId: ${task.id}
        ${color.yellow}Task: ${task.task.padEnd(15)}
        ${color.cyan}Status: ${task.status}
        ${color.green}Created: ${task.createdAt}
        ${color.green}Update: ${task.updatedAt}${color.reset}\n`);
    });
}

function taskInProgressList() {
    const tasks = readFileTasks();
    const taskInProgress = tasks.filter(task => task.status === "In progress");
    if (taskInProgress.length === 0){
        console.log(`${color.error} No tasks yet ${color.reset}`);
        return;
    }

    taskInProgress.forEach(task =>{
        console.log(`\tId: ${task.id}
        ${color.yellow}Task: ${task.task.padEnd(15)}
        ${color.cyan}Status: ${task.status}
        ${color.green}Created: ${task.createdAt}
        ${color.green}Update: ${task.updatedAt}${color.reset}\n`);
    });
}

function taskDoneList() {
    const tasks = readFileTasks();
    const taskDone = tasks.filter(task => task.status === "Done");
    if (taskDone.length === 0){
        console.log(`${color.error} No tasks yet ${color.reset}`);
        return;
    }

    taskDone.forEach(task => {
        console.log(`\tId: ${task.id}
        ${color.yellow}Task: ${task.task.padEnd(15)}
        ${color.cyan}Status: ${task.status}
        ${color.green}Created: ${task.createdAt}
        ${color.green}Update: ${task.updatedAt}${color.reset}\n`);
    });
}

export {
    taskAllList,
    taskDoneList,
    taskToDoList,
    taskInProgressList
}