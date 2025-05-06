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

// 4. Compare notes with selected recording between perfect, incorrect, and too many. show results to user.

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // if enter key is pressed, compare with perfect notes
    var resultsPerfect = compareNotes(goldenNotes, perfectStudentNotes);
    console.log(resultsPerfect);
    var resultsTextElement = document.querySelector('#results-text');
    console.log(resultsTextElement);
    resultsTextElement.value = resultsPerfect;
  } else if (event.key === 'Escape') { // Check if the pressed key is Escape
    var resultsIncorrect = compareNotes(goldenNotes, incorrectStudentNotes);
    console.log(resultsIncorrect);
    var resultsTextElement = document.querySelector('#results-text');
    console.log(resultsTextElement);
    resultsTextElement.value = resultsIncorrect;
  } else if (event.key === 'q') {
    var resultsTooMany = compareNotes(goldenNotes, tooManyStudentNotes);
    console.log(resultsTooMany);
    var resultsTextElement = document.querySelector('#results-text');
    console.log(resultsTextElement);
    resultsTextElement.value = resultsTooMany;
});

