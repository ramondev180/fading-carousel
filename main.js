let items=document.querySelectorAll(".item");
let i=1;
setInterval(()=>{
    items.forEach(item => {
        item.classList.remove("active");
    });
   items[i].classList.add("active");
   i++;
    if(i>items.length-1){
        i=0;
    }
},3000)