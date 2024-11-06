import process from  "node:process";
import readCommand from "./readCommand.js";
import { color, splitCommand } from "./auxiliaries.js";
import addTask from "./add.js";
import help from "./help.js";
import updateTask from "./update.js";
import {taskAllList, taskDoneList, taskInProgressList, taskToDoList} from "./listTask.js";
import { markDone, markInProgress } from "./markTask.js";
import deleteTask from "./deleteTassk.js";

export function commandsManager() {
  readCommand((command) => {
    const [comm, parameters] = splitCommand(command);

    switch (comm) {
      case "add":
        addTask(parameters);
        commandsManager();
        break;

      case "update":
        const [id, taskUpdate] = splitCommand(parameters);
        updateTask(id, taskUpdate);
        commandsManager();
        break;

      case "mark-done":
        markDone(parameters);
        commandsManager();
        break;

      case "mark-in-progress":
        markInProgress(parameters);
        commandsManager();
        break;

      case "list-all":
        taskAllList();
        commandsManager();
        break;

      case "list-todo":
        taskToDoList();
        commandsManager();
        break;

      case "list-in-progress":
        taskInProgressList();
        commandsManager();
        break;

      case "list-done":
        taskDoneList();
        commandsManager();
        break;

      case "delete":
        deleteTask(parameters);
        commandsManager();
        break;


      case "help":
        help();
        commandsManager();
        break;

      case "exit":
        console.clear();
        console.log(`${color.cyan}Bye bye!!!${color.reset}`);
        process.exit(1);
        break;

      default:
        console.error(`${color.error} Unrecognized command ${color.reset}`);
        console.log(
          `${color.yellow} Run the ${color.green}help ${color.yellow}command to see the commands, ${color.reset}`
        );
        commandsManager();
        break;
    }
  });
}
