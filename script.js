// Algorithm for detecting frequency mistakes:
// 1. Gather recordings: golden truth recording, student recording
// TODO(zoe): get recording from mp3

// 2. Identify notes for each recording (convert recording to list of notes)
// TODO(zoe): hardcoding notes for now, utilize audio library later (mp3-->frequencies-->notes)
var goldenNotes = ['A', 'D', 'C', 'B', 'A'];
var perfectStudentNotes = ['A', 'D', 'C', 'B', 'A'];
var incorrectStudentNotes = ['E', 'D', 'B', 'B', 'A'];
var tooManyStudentNotes = ['A', 'D', 'C', 'B', 'A', 'G'];

// 3. Compare the lists and identity/record differences 
function compareNotes(goldenNotes, studentNotes) {
  for (let i = 0; i < goldenNotes.length; i++) {
    console.log(i);
  }
}

// 4. Tell user what differences/mistakes were
compareNotes(goldenNotes, perfectStudentNotes);

// Try again!

