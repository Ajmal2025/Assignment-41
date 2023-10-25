"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicianNames) {
    for (const name of magicianNames) {
        console.log(name);
    }
}
const magicians = ["Samri", "Goga", "Chintu", "Black"];
showMagicians(magicians);
