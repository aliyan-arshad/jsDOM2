var con = document.querySelector("#container");
var icon = document.querySelector("i");


con.addEventListener("dblclick", function () {
    icon.style.transform = "translate(-50%,-50%) scale(1)"
  icon.style.opacity = 0.8
    setTimeout(() => {
        icon.style.opacity = 0
    }, 2000);

    setTimeout(() => {
        icon.style.transform = "translate(-50%,-50%) scale(0)"
    }, 3000);

})

