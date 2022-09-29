  function drawRect(ctx, startX, startY, width, height, color) {
    ctx.beginPath();
    ctx.rect(startX, startY, width, height);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
}
  function drawCircle(ctx, centerX, centerY, radius, color) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }
  // Italia
    const italia = document.getElementById("italia");
    const ictx = italia.getContext("2d");
      italia.width = 600;
      italia.height = 300;
        drawRect (ictx, 0, 0, italia.width/3, italia.height, "green");
        drawRect (ictx, italia.width*2/3, 0, italia.width, italia.height, "red");
  // Japan
    const japan = document.getElementById("japan");
    const jctx = japan.getContext("2d");
      japan.width = 600;
      japan.height = 400;
        drawCircle(jctx, japan.width/2, japan.height/2, 120, "red");
  // Irland
    const irland = document.getElementById("irland");
    const rctx = irland.getContext("2d");
      irland.width = 600;
      irland.height = 300;
        drawRect (rctx, 0, 0, irland.width/3, irland.height, "green");
        drawRect (rctx, irland.width*2/3, 0, irland.width, irland.height, "orange");