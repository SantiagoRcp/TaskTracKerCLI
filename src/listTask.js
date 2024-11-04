import readFileTasks from "./readFileTasks.js";

const tasks = readFileTasks()

function taskAllList() {
    if (tasks.length === 0) {
        console.log("No tasks yet");
        return;
    }

    tasks.forEach(task => {
        console.log(`Id: ${task.id}  \tTask: ${task.task.padEnd(15)} Status: ${task.status}`);
    })
}

function taskDoneList() {}

function taskToDoList(){}

function taskInProgressList() {}

export {
    taskAllList,
    taskDoneList,
    taskToDoList,
    taskInProgressList
}