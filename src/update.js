import readFileTasks from "./readFileTasks.js";
import {saveTask} from "./saveTask.js";
import {color} from "./auxiliaries.js";

export default function updateTask(id, taskUpdate) {
    const tasks = readFileTasks();
    const idTask = parseInt(id);
    const taskIndex = tasks.findIndex(task => task.id === idTask);

    if (taskIndex === -1) {
        console.log(`${color.error} Task No Found ${color.reset}`);
        return;
    }

    tasks[taskIndex].task = taskUpdate;
    tasks[taskIndex].updatedAt = new Date().toLocaleString();

    const isSave = saveTask(tasks) ;
    console.log(!isSave.error ? `${color.green}Task updated successfully${color.reset}` : isSave.message)
}
