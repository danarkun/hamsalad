function emotion(emot) {
    var pic;
    if (emot == 1) {
        pic = "Happy.jpg"
    } else if (emot == 2) {
        pic = "Sad.jpg"
    } else if (emot == 3) {
        pic = "Excited.png"
    }  else {
        pic = "Unmotivated.jpg"
    }
    document.getElementById('face').src = pic;
}