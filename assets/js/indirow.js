
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modall = document.getElementById("myModall");
var btnn = document.getElementById("myBtn");
var spann = document.getElementsByClassName("closee")[0];
btnn.onclick = function () {
    modall.style.display = "block";
}
spann.onclick = function () {
    modall.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modall) {
        modall.style.display = "none";
    }
}


window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}

window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_closee();
    }
}

function lightbox_openn() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideoo");
    window.scrollTo(0, 0);
    document.getElementById('lightt').style.display = 'block';
    document.getElementById('fadee').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_closee() {
    var lightBoxVideoo = document.getElementById("VisaChipCardVideoo");
    document.getElementById('lightt').style.display = 'none';
    document.getElementById('fadee').style.display = 'none';
    lightBoxVideoo.pause();
}