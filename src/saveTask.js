import {writeFileSync} from 'node:fs'
import {color} from "./auxiliaries.js";

export function saveTask(tasks) {
    try {
        writeFileSync('tasks.json', JSON.stringify(tasks))
        return {error: false, message: `${color.green} Task saved successfully ${color.reset}`};
    } catch (error) {
        return {error:true, message:`\n${color.error} Error: ${error} ${color.reset}`};
    }
}