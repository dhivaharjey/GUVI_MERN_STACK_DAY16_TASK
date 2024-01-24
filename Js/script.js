document.getElementById("reTry").addEventListener("click", () => {
  let countDown = function (endTime) {
    if (endTime > 0) {
      let d = document.getElementById("countDown");
      d.innerHTML = endTime;
      setTimeout(function () {
        countDown(endTime - 1);
      }, 1000);
    }
  };
  countDown(10);
  setTimeout(() => {
    document.getElementById("countDown").innerText = "Happy independance day";
  }, 10000);
});
