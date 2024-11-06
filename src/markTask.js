import readFileTasks from "./readFileTasks.js";
import {saveTask} from "./saveTask.js";
import {color} from "./auxiliaries.js";

function markInProgress(id) {
    const tasks = readFileTasks();
    const idTask =tasks.findIndex(task => task.id === parseInt(id));
    if(idTask === -1) {
        console.log(`${color.error} Task No Found ${color.reset}`);
        return;
    }

    tasks[idTask].status = "In progress";
    tasks[idTask].updatedAt = new Date().toLocaleString();

    const isSave = saveTask(tasks) ;
    console.log(!isSave.error ? `${color.green}Task marked successfully${color.reset}` : isSave.message);
}

function markDone(id) {
    const tasks = readFileTasks();
    const idTask =tasks.findIndex(task => task.id === parseInt(id));

    if(idTask === -1) {
        console.log(`${color.error} Task No Found ${color.reset}`);
        return;
    }

    tasks[idTask].status = "Done";
    tasks[idTask].updatedAt = new Date().toLocaleString();

    const isSave = saveTask(tasks) ;
    console.log(!isSave.error ? `${color.green} Task mark successfully${color.reset}` : isSave.message);
}

export{
    markInProgress,
    markDone
}