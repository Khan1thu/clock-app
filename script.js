function time() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  document.querySelector(
    ".time"
  ).innerHTML = `${hours}h ${minutes}min ${seconds}s`;
}

setInterval(time, 1000);
