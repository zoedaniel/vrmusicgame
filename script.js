// Algorithm for detecting frequency mistakes:
// 1. Gather recordings: golden truth recording, student recording
// TODO(zoe): get recording from mp3

// 2. Identify notes for each recording (convert recording to list of notes)
// TODO(zoe): hardcoding notes for now, utilize audio library later (mp3-->frequencies-->notes)
var goldenNotes = ['A', 'E', 'A', 'C#', 'F#', 'E', 'A', 'E', 'A', 'C#', 'F#', 'E'];
var perfectStudentNotes = ['A', 'E', 'A', 'C#', 'F#', 'E', 'A', 'E', 'A', 'C#', 'F#', 'E'];
var incorrectStudentNotes = ['A', 'E', 'A', 'C', 'F', 'E', 'A', 'E', 'A', 'C#', 'F', 'E'];
var tooManyStudentNotes = ['A', 'E', 'A', 'C#', 'F#', 'E', 'A', 'E', 'A', 'C#', 'F#', 'E', 'A', 'E'];

// 3. Compare the lists and identity/record differences 
function compareNotes(goldenNotes, studentNotes) {
  // Introduce variable to record/store results to show user
  var resultsText = "";
  
  // Check if user plays correct number of notes 
  if (goldenNotes.length != studentNotes.length) {
    resultsText = 'Incorrect number of notes. Please try again.';
    return resultsText;
  }
  // Introduce list to record/store any mistakes
  var mistakes = [];
  for (let i = 0; i < goldenNotes.length; i++) {
    console.log(i);
    console.log(goldenNotes[i]);
    console.log(studentNotes[i]);
    if (goldenNotes[i] != studentNotes[i]) {
      console.log('Uh oh. You made a mistake!');
      console.log(`Expected note: ${goldenNotes[i]}, but got: ${studentNotes[i]}!`);
      mistakes.push(`Expected note: ${goldenNotes[i]}, but got: ${studentNotes[i]} at position ${i+1}.`);
    }
  }
  // Tell user if there are any mistakes
  console.log(mistakes);
  if (mistakes.length === 0) {
    resultsText = "You played perfectly!";
  }
  else {
    resultsText = `Uh oh. You made ${mistakes.length} mistakes.`;
    for (let j = 0; j < mistakes.length; j++) {
      resultsText += "\n";
      resultsText += mistakes[j];
    }
  }
  return resultsText;
}

// 4. Play & compare notes with selected recording between perfect, incorrect, and too many notes.
// Show results to user.
document.addEventListener('keydown', function(event) {
  var resultsTextElement = document.querySelector('#results-text');
  if (event.key === '0') { // if 0 is pressed, play the teacher recording (no comparison)
    document.querySelector('#perfect-audio').play(); // perfect == teacher :)
  } else if (event.key === '1') { // if 1 is pressed, play & compare with perfect notes
    document.querySelector('#perfect-audio').play();
    var resultsPerfect = compareNotes(goldenNotes, perfectStudentNotes);
    console.log(resultsPerfect);
    console.log(resultsTextElement);
    resultsTextElement.setAttribute('value', resultsPerfect);
    console.log(resultsTextElement);
  } else if (event.key === '2') { // if 2 is pressed, play & compare with incorrect notes
    document.querySelector('#incorrect-audio').play();
    var resultsIncorrect = compareNotes(goldenNotes, incorrectStudentNotes);
    console.log(resultsIncorrect);
    console.log(resultsTextElement);
    resultsTextElement.setAttribute('value', resultsIncorrect);
    console.log(resultsTextElement);
  } else if (event.key === '3') { // if 3 is pressed, play & compare with too many notes
    document.querySelector('#too-many-notes-audio').play();
    var resultsTooMany = compareNotes(goldenNotes, tooManyStudentNotes);
    console.log(resultsTooMany);
    console.log(resultsTextElement);
    resultsTextElement.setAttribute('value', resultsTooMany);
    console.log(resultsTextElement);
}});
