let slideIndex = 1

setTimeout(function(){
    showSlides(slideIndex)
}, 3200)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {

    var i
    var slides = document.getElementsByClassName("mySlides")

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    
    if (slides[slideIndex - 1].id != 'last') {
        slides[slideIndex - 1].style.display = "block";
            typeWriterSimpleText(
              slides[slideIndex - 1].id,
              slides[slideIndex - 1].innerHTML,
              0,
              70
            );
        document.getElementById("album").style.display = "none"
    } else {
        // document.getElementById("suiv").innerHTML = "Écouter l'Album"
        document.getElementById("suiv").remove();
        document.getElementById("album").style.display = "block";
    }

}
