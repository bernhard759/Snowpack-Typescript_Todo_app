import {v4 as uuidV4} from "../_snowpack/pkg/uuid.js";
import {drawSmiley, drawBubble, drawText, drawStickMan, drawHeart} from "./drawings.js";
import "./style.css.proxy.js";
const list = document.querySelector("#list");
const addBtn = document.querySelector("div.input-group button");
const input = document.querySelector("#new-task-title");
const tasks = loadTasks();
tasks.forEach(addListItem);
addBtn?.addEventListener("click", (e) => {
  if (input?.value == "" || input?.value == null) {
    console.warn("cant create todo without title");
    return;
  }
  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  saveTasks(tasks);
  addListItem(newTask);
  console.log("added task ", newTask.title);
  input.value = "";
});
function addListItem(task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const closeSpan = document.createElement("span");
  const closeIcon = document.createElement("i");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  closeIcon.classList.add("fa", "fa-times");
  closeSpan.append(closeIcon);
  label.append(checkbox, task.title);
  item.append(label);
  item.append(closeSpan);
  list?.append(item);
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    checkbox.closest("li")?.classList.toggle("done");
    saveTasks(tasks);
    checkbox.closest("li")?.classList.contains("done") ? console.log("marked task ", task.title, " as completed") : console.log("marked task ", task.title, " as todo");
    console.log("tasks ", tasks);
  });
  closeSpan.addEventListener("click", () => {
    closeSpan.closest("li")?.remove();
    const thisTask = tasks.filter((x) => x.id == task.id)[0];
    tasks.splice(tasks.indexOf(thisTask), 1);
    saveTasks(tasks);
    console.log("removed task ", thisTask.title);
    console.log("tasks ", tasks);
  });
}
function saveTasks(tasks2) {
  localStorage.setItem("TASKS", JSON.stringify(tasks2));
}
function loadTasks() {
  const taskJSON = localStorage.getItem("TASKS");
  if (taskJSON == null)
    return [];
  return JSON.parse(taskJSON);
}
const canvasSmiley = document.querySelector("canvas.smiley");
if (canvasSmiley)
  drawSmiley(canvasSmiley);
const canvasBubble = document.querySelector("canvas.bubble");
if (canvasBubble)
  drawBubble(canvasBubble);
const canvasText = document.querySelector("canvas.text");
if (canvasText)
  drawText(canvasText);
const canvasStickMan = document.querySelector("canvas.stickman");
if (canvasStickMan)
  drawStickMan(canvasStickMan);
const canvasHeart = document.querySelector("canvas.heart");
if (canvasHeart)
  drawHeart(canvasHeart);
