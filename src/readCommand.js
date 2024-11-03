import {createInterface} from "node:readline";
import {stdin as input, stdout as output} from "node:process"
import {color} from "./auxiliaries.js";


const rl = createInterface({input, output});

export default function readCommand (callback) {
    rl.question(`\n${color.green}Task:  ${color.reset}`, (command)=>{
        callback(command);
    });
}

