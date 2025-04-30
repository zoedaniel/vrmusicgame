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
  if (goldenNotes.length != studentNotes.length) {
    console.log('Incorrect number of notes. Please try again.');
    return;
  }
  for (let i = 0; i < goldenNotes.length; i++) {
    console.log(i);
    console.log(goldenNotes[i]);
    console.log(studentNotes[i]);
    if (goldenNotes[i] != studentNotes[i]) {
      console.log('Uh oh. You made a mistake!');
      console.log(`Expected note: ${goldenNotes[i]}, but got: ${studentNotes[i]}!`);
    }
  }
}

// 4. Tell user what differences/mistakes were
compareNotes(goldenNotes, perfectStudentNotes);
compareNotes(goldenNotes, incorrectStudentNotes);
compareNotes(goldenNotes, tooManyStudentNotes);

// Try again!

