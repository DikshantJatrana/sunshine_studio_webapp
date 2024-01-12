var contain = document.querySelector(".element");
var fixed = document.querySelector(".fixed");
contain.addEventListener("mouseenter",()=>{
    fixed.style.display = "block";
});
contain.addEventListener("mouseleave",()=>{
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".bar");
elems.forEach((e)=>{
    e.addEventListener("mouseover",()=>{
        var link = e.getAttribute("data-image");
        fixed.style.backgroundImage = `URL(${link})`;
    })
})