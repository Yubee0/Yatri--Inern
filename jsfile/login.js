
if(localStorage.getItem("loginToken")) {
    document.querySelector("#loginbutton").style.display = "none";
    document.querySelector("#registerbutton").style.display = "none";
    document.querySelector(".blog").style.display = "block";
    document.querySelector(".logout").style.display = "block";
} else {
    document.querySelector("#loginbutton").style.display = "block";
    document.querySelector("#registerbutton").style.display = "block";
    document.querySelector(".blog").style.display = "none";
    document.querySelector(".logout").style.display = "none";
}

document.querySelector('.logout').addEventListener('click', function() {
    localStorage.clear();
    location.reload()
});









