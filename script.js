window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth * 0.8;
  canvas.height = window.innerHeight * 0.8;

  // Canvas settings
  ctx.fillStyle = "green";
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 30;
  ctx.lineCap = "round";

  // Effect settings
  let size = 200;
  let sides = 10;
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(1, 1);
  ctx.rotate(0.9);
  // ctx.fillRect(0,0,canvas.width,canvas.height);

  for (let i = 0; i < sides; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size, 0);
    ctx.stroke();
    ctx.rotate((Math.PI * 2) / sides);
    ctx.scale(0.99, 0.99);
    ctx.translate(30, 50);
  }

  ctx.restore();
});
