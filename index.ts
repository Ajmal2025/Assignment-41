

// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function showMagicians(magicianNames: string[]): void {
    for (const name of magicianNames) {
        console.log(name);
    }
}

const magicians: string[] = ["Samri", "Goga", "Chintu", "Black"];
showMagicians(magicians);
