import readFileTasks from "./readFileTasks.js";
import {saveTask} from "./saveTask.js";

const tasks = readFileTasks();

export default function updateTask(id, taskUpdate) {
    const idTask = parseInt(id);

    const taskIndex = tasks.findIndex(task => task.id === idTask);
    if (taskIndex === -1) {return false;}

    tasks[taskIndex].task = taskUpdate;
    tasks[taskIndex].updatedAt = new Date().toLocaleDateString();

    return saveTask(tasks) ;
}
