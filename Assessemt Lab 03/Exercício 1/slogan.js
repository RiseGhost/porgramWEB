let phrases = [
    "Avengers Assemble.",
    "By Crom!",
    "By the goddess!",
    "By the White Wolf!",
    "Cats come when they feel like it. Not when they're told.",
    "Cowabunga.",
    "Criminals are a cowardly, superstitious lot.",
    "Didn't I kill you already?",
    "Fair Play.",
    "Flame on!",
    "For there must always, always be a Zorro.",
    "Give me a scotch. I'm starving.",
    "Go Joes!",
    "Great Krypton!",
    "Great Scott!",
    "He may have my soul but he doesn't have my spirit.",
    "Here I come to Save the Day.",
    "Hulk, SMASH!",
    "I am Diana, princess of the Amazons.",
    "I am the law.",
    "I hear everything.",
    "I hope justice is found here today… before justice finds you.",
    "I'm the best I am at what I do.",
    "I'm the best there is at what I do.",
    "I'm the fastest man alive.",
    "I'm here to fight for truth, and justice, and the American way.",
    "Imperius Rex!",
    "It's a bird, It's a plane, It's Superman.",
    "It's clobberin' time!",
    "Merciful Minerva.",
    "Odin's beard.",
    "Oh my stars and garters.",
    "Shazam.",
    "Sometimes when you cage the beast, the beast gets angry.",
    "Sworn to protect a world that hates and fears them.",
    "The Caped Crusader, The Dark Knight.",
    "The Emerald Crusader.",
    "The man without fear.",
    "The strangest teens of all!",
    "The world's mightiest mortal!",
    "This is my gift, my curse. Who am I? I'm Spider-man.",
    "Trapped in a world he never made.",
    "Truth, justice and the",
    "Truth, Justice and the American Way.",
    "Up, up, and away!",
    "With great power comes great responsibility.",
    "Wonder Twin Powers Activate.",
    "You can't come to any harm when you're falling.",
    "You can't trap justice! It's an idea, a BELIEF!",
    "You wanna get nuts?",
    "You wouldn't like me when I'm angry.",
]

let characters = []

function quote(heroName) {
    heroName = heroName.trim()

    // Validation
    if (heroName == "") {
        return "Please insert a name for the hero.";
    }

    // Result
    let Herophase = characters.filter(hero => hero.name == heroName);
    if (Herophase.length > 0) {
        return Herophase[0].phrase;
    } else {
        // Getting Hero Slogan
        let chosenPhrase = phrases.splice(Math.floor(Math.random() * phrases.length), 1);
        characters.push({ name: heroName, phrase: chosenPhrase[0] });
        return chosenPhrase[0];
    }
}

function printf(){
    document.getElementById("final").innerHTML = quote(document.getElementById("name").value);
}
