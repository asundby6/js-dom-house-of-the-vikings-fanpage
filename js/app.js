class Ragnar {
    individualQuote = "It gladdens me to know that Odin prepares for a feast!" + 
                        "Soon I shall be drinking ale from curved horns." +
                        "This hero that comes into Valhalla does not lament his death." + 
                        "I shall not enter Odin’s hall with fear." +
                        "There, I shall wait for my sons to join me." + 
                        "And when they do, I will bask in their tales of triumph." + 
                        "The Aesir will welcome me. My death comes without apology." +
                        "And I welcome the Valkyries to summon me home!"; 

    individualBio = "Ragnar Lothbrok Sigurdsson (Old Norse: Ragnarr Loðbrók, Ragnar means keeper of the fort and Lothbrok means shaggy breeches) is a Viking farmer and warrior who yearns to raid the rumored riches of undiscovered England. His first wife is Lagertha, and they have two children named Gyda and Bjorn. His second wife is Aslaug, and they have four sons named Ubbe, Hvitserk, Sigurd, and Ivar. Ragnar is the younger brother of Rollo. He becomes King of Kattegat.";

    individualStatus = "Health : Deceased \nEpisode : The 44th Episode \nYear of Death : 817 AD";
}

class Bjorn {
    individualQuote = "";

    individualBio = "Björn, also known as Bjorn Ironside, is the King of Kattegat. He is the son of Ragnar Lothbrok and Lagertha and the oldest of Ragnar’s many sons.";

    individualStatus = "Health : Deceased \nEpisode : The 88th Episode \nYear of Death : 821 AD";
}

class Lagertha {
    individualQuote = "My son didn't brand you for being loyal to Ivar! He branded you for being disloyal to Ragnar, and everything Ragnar stood for! And if I have to die for what Ragnar and I believed in, it is worth it.";

    individualBio = "Lagertha is the first and former wife of Ragnar Lothbrok and the former Queen of Kattegat. She is the mother of Björn. Lagertha is an Earl and a fierce shield-maiden.";

    individualStatus = "Health : Deceased \nEpisode : The 75th Episode \nYear of Death : 821 AD";
}


class Athelstan {
    individualQuote = "For everything there is a season, and a time for every matter under the sun. A time to be born, a time to die; a time to plant, and to pluck up what is planted; a time to kill, and a time to heal…";

    individualBio = "Athelstan (Old English: Æðelstān, Old Norse: Aðalsteinn; meaning noble stone) is a young Anglo-Saxon Christian monk taken as a slave by Ragnar Lothbrok from the Lindisfarne Monastery. He is torn between Viking and Christian beliefs, and becomes an adviser and friend to both Ragnar and King Ecbert.";

    individualStatus = "Health : Deceased \nEpisode : The 25th Episode";
}

class Floki {
    individualQuote = "I joke about many things, son of Ragnar. But never about ship-building.	";

    individualBio = "Floki Vilgerðarson is a boat builder and incorrigible trickster, who also happens to be Ragnar Lothbrok's eccentric and closest friend. He is the husband of Helga, and they have a daughter named Angrboda.";

    individualStatus = "Health : Alive";
}

class Rollo {
    individualQuote = "Up into the overturned keel. Clamber, with a heart of steel. Cold is the ocean's spray. When your death is on its way. With maidens you have had your way. Each must die some day!	";

    individualBio = "Rollo of Normandy, originally known as Rollo Sigurdsson, is Ragnar Lothbrok's older brother and the Duke of Normandy. He is the husband of the Frankish Princess Gisla, and the father of William, Marcellus, and Celsa. Prior to his marriage, Rollo was known as a fearsome Viking warrior, with an impulsive streak, and wrought with internal struggles.";

    individualStatus = "Health : Alive";
}


/*
<ul id="charList">
<li id="ragnar">Ragnar Lothbrok</li>
<li id="bjorn">Bjorn</li>
<li id="lagertha">Lagertha</li>
<li id="athelstan">Athelstan</li>
<li id="floki">Floki</li>
<li id="rollo">Rollo</li>
</ul>          
*/

const bioButton = document.getElementById("bioButton");

const bioButton1 = document.getElementById("bioButton1");
const bioButton2 = document.getElementById("bioButton2");
const bioButton3 = document.getElementById("bioButton3");


const statusButton = document.getElementById("statusButton");


const submitButton = document.getElementById("submitButton");

const textBox = document.getElementById("textBox");

let displayMessages = document.getElementById("displayMessages");




bioButton1.addEventListener("click", () => {
    bioRagnar = Ragnar.individualBio;
    displayBio(bioRagnar);
  
})

statusButton1.addEventListener("click", () => {


})

submitButton.addEventListener("click", (character) => {
    let submit
})


function displayBio(characterBio) {
    characterBio = individualBio;
    console.log(characterBio);
}

function displayStatus(characterStatus) {

}

function display_searchSubmit(characterSearch) {

}

// function randomizeCharacters() {
//
// }


/*
Bonus
Create a button that, when clicked, arranges all characters in alphabetical order.

Create another button that randomly shuffles the characters.

Add other functionality and interactivity as you see fit.
*/






