import {writeFileSync} from 'node:fs'
import {color} from "./auxiliaries.js";

export function saveTask(tasks) {
    try {
        writeFileSync('tasks.json', JSON.stringify(tasks))
        return true;
    } catch (error) {
        console.error(`${color.error} Error: \n${error} ${color.reset}`);
        return false;
    }
}