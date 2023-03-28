let allTopics = document.querySelectorAll(".topic")
allTopics.forEach((topic)=>{
    topic.addEventListener("click",(e)=>{
        if(e.target.parentElement.lastElementChild.style.display =="none"){
            e.target.parentElement.lastElementChild.style.display = "block"
            e.target.parentElement.lastElementChild.style.animation = "showUp 1.5s ease"
        }else if (e.target.parentElement.lastElementChild.classList == "inner close"){
            e.target.parentElement.lastElementChild.classList.remove("close")
            e.target.parentElement.lastElementChild.style.display = "none"

        }else {
            e.target.parentElement.lastElementChild.classList.add("close");
            e.target.parentElement.lastElementChild.addEventListener("transitionend", ()=>{
                e.target.parentElement.lastElementChild.style.display = "none";
                e.target.parentElement.lastElementChild.classList.remove("close")

            })

        }
    });
});