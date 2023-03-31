let allTopics = document.querySelectorAll(".topic");
allTopics.forEach((topic) => {
  topic.addEventListener("click", openInner);
});

function openInner(e) {
  if (e.target.parentElement.lastElementChild.style.display == "none") {
    e.target.removeEventListener("click", openInner);
    e.target.parentElement.lastElementChild.style.display = "block";
    e.target.parentElement.lastElementChild.style.animation =
      "showUp 1.5s ease";
    e.target.parentElement.addEventListener(
      "animationend",
      e.target.addEventListener("click", closeInner)
    );
  }

}

function closeInner(e) {
  if (e.target.parentElement.lastElementChild.style.display == "block") {
    e.target.parentElement.lastElementChild.classList.add("close");
    e.target.parentElement.lastElementChild.addEventListener(
      "transitionend",
      () => {
        e.target.parentElement.lastElementChild.style.display = "none";
        e.target.parentElement.lastElementChild.classList.remove("close");
        e.target.addEventListener("click", openInner);
        
      }
    );
  }
}
