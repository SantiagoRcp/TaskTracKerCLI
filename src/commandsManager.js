import readCommand from "./readCommand.js";
import {color, splitCommand} from "./auxiliaries.js";
import addTask from "./add.js";
import help from "./help.js";
import updateTask from "./update.js";
import {taskAllList} from "./listTask.js";

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
        const isSave =updateTask(id, taskUpdate);
        const message = !isSave ? `${color.error} Task No Found ${color.reset}` : `${color.cyan}Task Update Successfully ${color.reset}`;
        console.log(message);
        commandsManager();
        break;

      case "list-all":
        taskAllList();
        break;

      case "help":
        help();
        commandsManager();
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
