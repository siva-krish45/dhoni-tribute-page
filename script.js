const btn = document.querySelectorAll(".btn");
const notification = document.querySelector(".notification");
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        this.classList.add("show");
        notification.style.display = "none";
    },{once: true});

}