/* Import */
import { v4 as uuidV4 } from "uuid"
import { drawSmiley, drawBubble, drawText, drawStickMan, drawHeart } from "./drawings";


/* Task type */
type Task = { id: string, title: string, completed: boolean, createdAt: Date };

/* HTML ELements */
const list = document.querySelector<HTMLUListElement>("#list");
const addBtn = document.querySelector<HTMLButtonElement>("div.input-group button");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

/* Task array */
const tasks: Task[] = loadTasks()

/* Render tasks to the page */
tasks.forEach(addListItem)


/* Add Eventlistener to button */
addBtn?.addEventListener("click", e => {

  /* Input value */
  if (input?.value == "" || input?.value == null) {
    console.warn("cant create todo without title")
    return
  }

  /* Create new todo task object */
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  /* Push task to array */
  tasks.push(newTask)
  saveTasks(tasks)

  /* Add item to list */
  addListItem(newTask)
  console.log("added task ", newTask.title)

  /* Clear the input value */
  input.value = ""

})

/** Add a list item to the DOM and save it to local storage */
function addListItem(task: Task) {

  /* Create HTML Elements */
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const closeSpan = document.createElement("span");
  const closeIcon = document.createElement("i");
  /* Change attributes */
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  closeIcon.classList.add("fa", "fa-times");
  /* Append to the DOM */
  closeSpan.append(closeIcon);
  label.append(checkbox, task.title);
  item.append(label);
  item.append(closeSpan);
  list?.append(item);
  /* Add done class id completed */
  if (task.completed) { checkbox.closest("li")?.classList.add("done") }

  /* Checkbox Eventlistener */
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked; // mark as completed
    checkbox.closest("li")?.classList.toggle("done"); // toggle done class
    saveTasks(tasks); // save to local storage
    checkbox.closest("li")?.classList.contains("done") ?
      console.log("marked task ", task.title, " as completed") :
      console.log("marked task ", task.title, " as todo");
    console.log("tasks ", tasks);
  })

  /* Close Span Eventlistener */
  closeSpan.addEventListener("click", () => {
    closeSpan.closest("li")?.remove(); // remove from DOM
    const thisTask = tasks.filter(x => x.id == task.id)[0]; // filter tasks array
    tasks.splice(tasks.indexOf(thisTask), 1); // remove this task
    saveTasks(tasks); // save to local storage
    console.log("removed task ", thisTask.title);
    console.log("tasks ", tasks);
  })

}

/** Save stringified tasks array to local storage */
function saveTasks(tasks: Task[]) {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

/** Return parsed tasks array from local storage */
function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}

/* Canvas Drawings */
const canvasSmiley = document.querySelector<HTMLCanvasElement>("canvas.smiley");
if (canvasSmiley) drawSmiley(canvasSmiley);
const canvasBubble = document.querySelector<HTMLCanvasElement>("canvas.bubble");
if (canvasBubble) drawBubble(canvasBubble);
const canvasText = document.querySelector<HTMLCanvasElement>("canvas.text");
if (canvasText) drawText(canvasText);
const canvasStickMan = document.querySelector<HTMLCanvasElement>("canvas.stickman");
if (canvasStickMan) drawStickMan(canvasStickMan);
const canvasHeart = document.querySelector<HTMLCanvasElement>("canvas.heart");
if (canvasHeart) drawHeart(canvasHeart);