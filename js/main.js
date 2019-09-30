let toggleNavStatus = false;

toggleNav = function(){
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarUl = document.querySelector(".sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".sidebar a");

    if (toggleNavStatus === false){
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "320px";

    
    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght; i++) {
        getSidebarLinks[i].style.opacity = "2";
    }

    toggleNavStatus = true;
 }

 else if (toggleNavStatus === true){
    
    getSidebar.style.width = "0px";

    
    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
 }
}
