import {color} from "./auxiliaries.js";

export default  function help() {
    console.log(`${color.white} # Adding a new task`);
    console.log(`${color.cyan} add ${color.reset}Name_Task\n`);

    console.log(`${color.white} # Updating and deleting tasks`);
    console.log(`${color.cyan} update ${color.reset}Id_Task\n`);

    console.log(`${color.white} # Marking a task as in progress or done`);
    console.log(`${color.cyan} mark-in-progress ${color.reset}Id_Task\n`);
    console.log(`${color.cyan}mark-done ${color.reset}Id_Task\n`);

    console.log(`${color.white} # Listing all tasks`);
    console.log(`${color.cyan} list\n`);

    console.log(`${color.white} # Listing tasks by status`);
    console.log(`${color.cyan} list-done`);
    console.log(`${color.cyan} list-todo`);
    console.log(`${color.cyan} list-in-progress${color.reset}`) ;
}

