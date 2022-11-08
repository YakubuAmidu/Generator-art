window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Canvas settings
  ctx.fillStyle = "green";
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 30;
  ctx.lineCap = "round";

  ctx.fillRect(10, 10, 100, 100);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(canvas.width / 2 - 300, canvas.height / 2);
  ctx.stroke();
});
