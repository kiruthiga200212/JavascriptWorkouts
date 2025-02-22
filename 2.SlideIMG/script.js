
var section = document.getElementById("section-one")
var textChange = document.getElementById("text")

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var image = document.getElementById("images");
    var text = document.getElementById("text").getElementsByTagName('h1')[0];
    var para = document.getElementById("para").getElementsByTagName('h1')[0];

    document.documentElement.scrollTop > 180
    if (document.documentElement.scrollTop > 180) {
       
        image.src="./img/img2.png";
        text.innerHTML = "New Paintings";
        para.innerHTML = "How this painting Works?";
    } else if (document.documentElement.scrollTop < 280){
      
        text.innerHTML = "Cuve Paintings";
        image.src="./img/img3.png";
       
        para.innerHTML = "Recreate the old Cuve painting !";
    }
}

