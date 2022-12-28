// build/_snowpack/pkg/uuid.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}

// build/dist/drawings.js
function drawSmiley(canvas) {
  const ctxSmiley = canvas.getContext("2d");
  if (ctxSmiley) {
    ctxSmiley.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxSmiley.beginPath();
    ctxSmiley.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctxSmiley.moveTo(110, 75);
    ctxSmiley.arc(75, 75, 35, 0, Math.PI, false);
    ctxSmiley.moveTo(65, 65);
    ctxSmiley.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctxSmiley.moveTo(95, 65);
    ctxSmiley.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctxSmiley.stroke();
  }
}
function drawBubble(canvas) {
  const ctxBubble = canvas.getContext("2d");
  if (ctxBubble) {
    ctxBubble.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxBubble.beginPath();
    ctxBubble.moveTo(75, 25);
    ctxBubble.quadraticCurveTo(25, 25, 25, 62.5);
    ctxBubble.quadraticCurveTo(25, 100, 50, 100);
    ctxBubble.quadraticCurveTo(50, 120, 30, 125);
    ctxBubble.quadraticCurveTo(60, 120, 65, 100);
    ctxBubble.quadraticCurveTo(125, 100, 125, 62.5);
    ctxBubble.quadraticCurveTo(125, 25, 75, 25);
    ctxBubble.stroke();
    ctxBubble.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctxBubble.font = "16px cursive";
    ctxBubble.fillText("my todos", 35, 60);
  }
}
function drawText(canvas) {
  const ctxText = canvas.getContext("2d");
  if (ctxText) {
    ctxText.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctxText.font = "28px cursive";
    ctxText.fillText("Hello world", 10, 50);
  }
}
function drawStickMan(canvas) {
  const ctxStickMan = canvas.getContext("2d");
  if (ctxStickMan) {
    ctxStickMan.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxStickMan.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctxStickMan.beginPath();
    ctxStickMan.arc(200, 50, 40, 0, Math.PI * 2, true);
    ctxStickMan.stroke();
    ctxStickMan.beginPath();
    ctxStickMan.arc(200, 60, 20, 0, Math.PI, false);
    ctxStickMan.stroke();
    ctxStickMan.beginPath();
    ctxStickMan.arc(190, 50, 3, 0, Math.PI * 2, true);
    ctxStickMan.arc(210, 50, 3, 0, Math.PI * 2, true);
    ctxStickMan.fill();
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 90);
    ctxStickMan.lineTo(200, 180);
    ctxStickMan.stroke();
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 100);
    ctxStickMan.lineTo(150, 130);
    ctxStickMan.moveTo(200, 100);
    ctxStickMan.lineTo(250, 130);
    ctxStickMan.stroke();
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 180);
    ctxStickMan.lineTo(150, 280);
    ctxStickMan.moveTo(200, 180);
    ctxStickMan.lineTo(250, 280);
    ctxStickMan.stroke();
  }
}
function drawHeart(canvas) {
  const ctxHeart = canvas.getContext("2d");
  if (ctxHeart) {
    ctxHeart.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxHeart.beginPath();
    ctxHeart.moveTo(75, 40);
    ctxHeart.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctxHeart.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctxHeart.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctxHeart.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctxHeart.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctxHeart.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctxHeart.stroke();
    const gradient = ctxHeart.createLinearGradient(0, 0, 200, 200);
    for (let i = 0.1; i < 0.99; i += 0.02) {
      console.log(i);
      gradient.addColorStop(i, "transparent");
      gradient.addColorStop(i, "gray");
      gradient.addColorStop(i + 2e-3, "gray");
      gradient.addColorStop(i + 2e-3, "transparent");
    }
    ctxHeart.fillStyle = gradient;
    ctxHeart.fill();
  }
}

// build/dist/index.js
var list = document.querySelector("#list");
var addBtn = document.querySelector("div.input-group button");
var input = document.querySelector("#new-task-title");
var tasks = loadTasks();
tasks.forEach(addListItem);
addBtn?.addEventListener("click", (e) => {
  if (input?.value == "" || input?.value == null) {
    console.warn("cant create todo without title");
    return;
  }
  const newTask = {
    id: v4(),
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
var canvasSmiley = document.querySelector("canvas.smiley");
if (canvasSmiley)
  drawSmiley(canvasSmiley);
var canvasBubble = document.querySelector("canvas.bubble");
if (canvasBubble)
  drawBubble(canvasBubble);
var canvasText = document.querySelector("canvas.text");
if (canvasText)
  drawText(canvasText);
var canvasStickMan = document.querySelector("canvas.stickman");
if (canvasStickMan)
  drawStickMan(canvasStickMan);
var canvasHeart = document.querySelector("canvas.heart");
if (canvasHeart)
  drawHeart(canvasHeart);
//# sourceMappingURL=index.js.map
