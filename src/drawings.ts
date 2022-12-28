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
export function drawStickMan(canvas: HTMLCanvasElement) {
  const ctxStickMan = canvas.getContext("2d");
  if (ctxStickMan) {
    /* Style */
    ctxStickMan.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctxStickMan.fillStyle = "rgba(0, 0, 0, 0.3)";
    /* Head */
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
    /* Body */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 90);
    ctxStickMan.lineTo(200, 180);
    ctxStickMan.stroke();
    /* Arms */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 100);
    ctxStickMan.lineTo(150, 130);
    ctxStickMan.moveTo(200, 100);
    ctxStickMan.lineTo(250, 130);
    ctxStickMan.stroke();
    /* Legs */
    ctxStickMan.beginPath();
    ctxStickMan.moveTo(200, 180);
    ctxStickMan.lineTo(150, 280);
    ctxStickMan.moveTo(200, 180);
    ctxStickMan.lineTo(250, 280);
    ctxStickMan.stroke();
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

