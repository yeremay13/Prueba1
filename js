function initialize(){
    const headerMenuIcon =document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);
}


function showSideMenu(){
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("side-menu-close");
    sideMenu.classList.add("side-menu-open");
}

initialize();

function initialize2(){
    const headerMenuIcon =document.getElementById("header-menu-icon2");
    headerMenuIcon.addEventListener("click", unshowSideMenu);
}

function unshowSideMenu(){
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("side-menu-open");
    sideMenu.classList.add("side-menu-close");
}

initialize2();
