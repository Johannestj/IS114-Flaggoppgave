  function drawRect(ctx, startX, startY, width, height, color) { // the function draws rectangles, needs only the values 
    ctx.beginPath();                                             // drawRect(ctx, startX, startY, width, height, color) 
    ctx.rect(startX, startY, width, height);                     // to draw another rectangle.
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
}

  function drawCircle(ctx, centerX, centerY, radius, color) { // the function draws rectangles, needs only the values 
    ctx.beginPath();                                          // drawCircle(ctx, centerX, centerY, radius, color)
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);          // to draw another circle
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }

  // Italia
    const italia = document.getElementById("italia"); // retrives the id from html and creates a constant.
    const ictx = italia.getContext("2d");             // constant for italia ctx. same goes for the other flags.
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