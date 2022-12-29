/* Import */
import type { Task } from "./tasktype";

/** Draw a smiley */
export function drawSmiley(canvas: HTMLCanvasElement) {
  const ctxSmiley = canvas.getContext("2d");
  if (ctxSmiley) {
    ctxSmiley.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxSmiley.beginPath();
    ctxSmiley.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctxSmiley.moveTo(110, 75);
    ctxSmiley.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctxSmiley.moveTo(65, 65);
    ctxSmiley.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctxSmiley.moveTo(95, 65);
    ctxSmiley.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctxSmiley.stroke();
  }
}

/** Draw a speech bubble with text in it */
export function drawBubble(canvas: HTMLCanvasElement) {
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

/** Draw text */
export function drawText(canvas: HTMLCanvasElement) {
  const ctxText = canvas.getContext("2d");
  if (ctxText) {
    ctxText.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctxText.font = "28px cursive";
    ctxText.fillText("Hello world", 10, 50);
  }
}

/** Draw a stick man */
export function drawStickMan(canvas: HTMLCanvasElement, todos: Task[]) {
  const ctxStickMan = canvas.getContext("2d");
  if (ctxStickMan) {
    /* Style */
    ctxStickMan.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxStickMan.fillStyle = "rgba(0, 0, 0, 0.3)";
    /* Head */
    ctxStickMan.beginPath();
    ctxStickMan.arc(100, 80, 40, 0, Math.PI * 2, true);
    ctxStickMan.stroke();
    ctxStickMan.beginPath();
    ctxStickMan.arc(100, 90, 20, 0, Math.PI, false);
    ctxStickMan.stroke();
    /* Sunglasses if nothing todo */
    if (todos.filter(x => x.completed == false).length == 0) {
      ctxStickMan.beginPath();
      ctxStickMan.arc(89, 70, 8, 0, Math.PI * 2, true);
      ctxStickMan.arc(109, 70, 8, 0, Math.PI * 2, true);
      ctxStickMan.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctxStickMan.fill();
      ctxStickMan.beginPath();
      ctxStickMan.moveTo(65, 60);
      ctxStickMan.lineTo(82, 70);
      ctxStickMan.stroke();
      ctxStickMan.beginPath();
      ctxStickMan.moveTo(96, 70);
      ctxStickMan.lineTo(102, 70);
      ctxStickMan.stroke();
      ctxStickMan.beginPath();
      ctxStickMan.moveTo(116, 70);
      ctxStickMan.lineTo(134, 60);
      ctxStickMan.stroke();
    } else {
      ctxStickMan.beginPath();
      ctxStickMan.arc(90, 70, 3, 0, Math.PI * 2, true);
      ctxStickMan.arc(110, 70, 3, 0, Math.PI * 2, true);
      ctxStickMan.fill();
    }
    /* Body */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(100, 120);
    ctxStickMan.lineTo(100, 190);
    ctxStickMan.stroke();
    /* Arms */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(100, 130);
    ctxStickMan.lineTo(50, 160);
    ctxStickMan.moveTo(100, 130);
    ctxStickMan.lineTo(150, 160);
    ctxStickMan.stroke();
    /* Legs */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(100, 190);
    ctxStickMan.lineTo(70, 250);
    ctxStickMan.moveTo(100, 190);
    ctxStickMan.lineTo(130, 250);
    ctxStickMan.stroke();
    /* Speech bubble */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(195, 5);
    ctxStickMan.quadraticCurveTo(145, 5, 145, 42.5);
    ctxStickMan.quadraticCurveTo(145, 80, 170, 80);
    ctxStickMan.quadraticCurveTo(170, 100, 150, 105);
    ctxStickMan.quadraticCurveTo(180, 100, 185, 80);
    ctxStickMan.quadraticCurveTo(245, 80, 245, 42.5);
    ctxStickMan.quadraticCurveTo(245, 5, 195, 5);
    ctxStickMan.stroke();
    ctxStickMan.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctxStickMan.font = "16px cursive";
    const displayText = todos.filter(x => x.completed == false).length == 0 ? "Nothing \nto do" : "you have\n" + 
    todos.filter(x => x.completed == false).length + ((todos.filter(x => x.completed == false).length==1) ? " todo" : " todos");
    const lines = displayText.split('\n');
    for (let i = 0; i < lines.length; i++) {
      ctxStickMan.fillText(lines[i], 155, 40 + (i * 20));
    }

  }
}

/** Draw a heart symbol */
export function drawHeart(canvas: HTMLCanvasElement) {
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
    /* Gradient */
    const gradient = ctxHeart.createLinearGradient(0, 0, 200, 200);
    for (let i = 0.1; i < 0.99; i += 0.02) {
      gradient.addColorStop(i, "transparent");
      gradient.addColorStop(i, "gray");
      gradient.addColorStop(i + 0.002, "gray");
      gradient.addColorStop(i + 0.002, "transparent");
    }
    ctxHeart.fillStyle = gradient;
    ctxHeart.fill();
  }
}


