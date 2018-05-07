/* Given a list of students, where each student has at least 5 scores, 
output a given student's highest 5 scores */

const scores = [
  { id: 1, score: 76 },
  { id: 2, score: 82 },
  { id: 2, score: 96 },
  { id: 1, score: 100 },
  { id: 1, score: 92 },
  { id: 2, score: 99 },
  { id: 1, score: 72 },
  { id: 2, score: 77 },
  { id: 2, score: 88 },
  { id: 1, score: 86 },
  { id: 1, score: 90 },
  { id: 2, score: 89 }
];

// Iterate thru scores
const studentScores = scores.reduce((acc, val) => {
  console.log(val.id);
  // If id already in accumulator, push val into its array
  if (val.id in acc) {
    acc[val.id].push(val.score);
    // If not found, create item with array, assign val
  } else {
    acc[val.id] = [val.score];
  }
  return acc;
}, {});

const getAverage = id => {
  // Sort scores from high to low
  let student = studentScores[id];
  const scoreSort = student.sort((a, b) => b - a);

  // Get top 5 scores
  const top5 = scoreSort.slice(0, 5);

  // Get score average
  const total = top5.reduce((acc, val) => (acc += val), 0);
  const average = total / 5;

  return console.log(`StudentID: ${id}, Average: ${average}`);
};

const students = Object.keys(studentScores);

students.map(studentId => getAverage(studentId));
