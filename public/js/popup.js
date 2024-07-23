const popup = document.getElementById("popup");
const dismiss = document.getElementById("popup_close");

setTimeout(function () {
  popup.classList.add("popup_show");
}, 2000);

dismiss.addEventListener("click", function () {
  popup.classList.remove("popup_show");
  popup.classList.add("popup_close");
});
