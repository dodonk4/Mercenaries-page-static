const menuButton = document.getElementById("menu-button");
const theUl = document.getElementById("the-ul");
const sections = document.getElementsByTagName("section");
console.log(sections[0].id)
console.log(typeof sections)
theUl.setAttribute("isshown", "false");

menuButton.addEventListener("click", () => {
    const valueOfUl = theUl.getAttribute("isshown"); 
    if(valueOfUl === "true"){

        Array.from(sections).forEach(section => {
            section.style = "opacity: 1";
        });

        document.body.style = "overflow-y: auto";

        theUl.style = "left: -100%;";
        theUl.setAttribute("isshown", "false");
        

    }else if(valueOfUl === "false"){

        Array.from(sections).forEach(section => {
            section.style = "opacity: 0";
        });

        document.body.style = "overflow-y: hidden";//This isn't working in mobile. Search the reason and solve it

        theUl.style = "left: 0%;";
        theUl.setAttribute("isshown", "true");

    }else{

        throw new Error;

    }
    
})

