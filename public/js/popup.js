const popup = document.getElementById("popup");
const dismiss = document.getElementById("popup_close");

if (popup && dismiss) {
  setTimeout(function () {
    popup.classList.add("popup_show");
  }, 2000);

  dismiss.addEventListener("click", function () {
    popup.classList.remove("popup_show");
    popup.classList.add("opacity-0");
  });
} else {
  console.error("Popup or dismiss button not found in the DOM.");
}
