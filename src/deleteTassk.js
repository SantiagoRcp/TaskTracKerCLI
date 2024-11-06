import readFileTasks from "./readFileTasks.js";
import {color} from "./auxiliaries.js";
import {saveTask} from "./saveTask.js";

export default function deleteTask(id) {
    const tasks = readFileTasks();
    const taskId =tasks.findIndex(task => task.id === parseInt(id));
    if(taskId === -1) {
        console.log(`${color.error}Task id ${id} not found${color.reset}`);
        return;
    }

    tasks.splice(taskId, 1);
    const isSave = saveTask(tasks);
    console.log(!isSave.error ? `${color.green} Task deleted successfully.` : isSave.message);
}

