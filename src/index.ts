// es6 module import
import { v4 as uuidV4 } from "uuid"

// declare task type
type Task = { id: string, title: string, completed: boolean, createdAt: Date }


// get the html elements
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

// Task array
const tasks: Task[] = loadTasks()

// render tasks to page
tasks.forEach(addListItem)

// Eventlistener on form
form?.addEventListener("submit", e => {

  // prevent default event
  e.preventDefault()

  // get the input value
  if (input?.value == "" || input?.value == null) return

  // todo task
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  // push task to task array
  tasks.push(newTask)
  saveTasks(tasks)

  // add item to list
  addListItem(newTask)
  console.log("added item")

  // clear input
  input.value = ""

})

function addListItem(task: Task) {

  // create html elements
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)

  // Eventlistener
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks(tasks)
    console.log(tasks)
  })

}

function saveTasks(tasks: Task[]) {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}