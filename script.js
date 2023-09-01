const menuButton = document.getElementById("menu-button");
const theUl = document.getElementById("the-ul");
theUl.setAttribute("isshown", "false");

menuButton.addEventListener("click", () => {
    const valueOfUl = theUl.getAttribute("isshown"); 
    console.log(valueOfUl);
    if(valueOfUl === "true"){
        theUl.style = "left: -100%;";
        theUl.setAttribute("isshown", "false");
    }else if(valueOfUl === "false"){
        console.log(theUl)
        theUl.style = "left: 0%;";
        theUl.setAttribute("isshown", "true");
    }else{
        throw new Error;
    }
    
})

console.log(menuButton);