function chooseRoote() {
    var times = new Date();
    var nRoot = times.getSeconds() % 7;
    sessionStorage.setItem("nRoot", ++nRoot);
    sessionStorage.setItem("backPrev", "Maps.html");

    document.body.style.backgroundImage = "url('Targets/Target" + nRoot + "/Origin.jpg')";
    document.body.style.backgroundSize = "18.54pc 18.54pc";
    document.getElementById("info").style.backgroundColor = "rgb(130,130,130)";
}

function putValue() {
    sessionStorage.setItem("inputMaps", document.getElementById("testInput").value);
}