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

  ctx.fillRect(10, 10, 100, 100);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(size, canvas.height / 2);
  ctx.stroke();
});
