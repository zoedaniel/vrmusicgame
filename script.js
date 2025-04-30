// Algorithm for detecting frequency mistakes:
// Gather recordings: golden truth recording, student recording
// Identify notes for each recording (convert recording to list of notes)
// Golden truth: a, b, c, b, a
//           0  1  2  3  4
// golden_truth[0] = a
// golden_truth[1] = b
// golden_truth[2] = c
// golden_truth[3] = b
// golden_truth[4] = a
// Student: a, b, c, a flat, a
// Compare the lists and identity/record differences 
// Tell user what differences/mistakes were
// Try again!
