// Animal Sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal Names
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const { bessie, dolly, babe, little } = animalNames;

// Animal Colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const { blackAndWhite, black, pink } = animalColors;

// Rainbow Colors 
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Declare six rainbow color variables using initials. Removed indigo because it wasn't working.
const [r, o, y, g, b, , v] = rainbowColors; 

// Assigning 'indg' for indigo
const [, , , , , indg] = rainbowColors; 

// Muppet
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, job, partner } = muppet;

const muppetDetails = {
  songs: ["The Rainbow Connection", "Moving Right Along", "Bein' Green", "I Hope That Something Better Comes Along"],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

const { songs: [, song2, , song4], nested: { job: nestedJob, partner: nestedPartner } } = muppetDetails;
