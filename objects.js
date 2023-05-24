// Challenge 1: Merge Objects
function mergeObjects(obj1, obj2) {
  // Write your code here
  return {...obj1, ...obj2}
}

// Challenge 2: Calculate Average Age
function calculateAverageAge(persons) {
  // Write your code here
  let totalAge = 0;
  persons.forEach  (person => {
    totalAge += person.age
  });
  return totalAge / persons.length
}

// Challenge 3: Filter Students by Grade
function filterStudentsByGrade(students, grade) {
  // Write your code here
  const passArr = [];

  for (student in students) {
    // console.log(students[student])
    //student is a key. not an actual obj property name. have to use [] with key, not '.'
    if (students[student].grade === grade) passArr.push(students[student].name)
  }
 
  return passArr
}
const students = {
  student1: { name: 'Alice', grade: 'A' },
  student2: { name: 'Bob', grade: 'B' },
  student3: { name: 'Charlie', grade: 'A' },
};
filterStudentsByGrade(students, 'A')

// Challenge 4: Remove Property
function removeProperty(obj, propertyName) {
  // Write your code here
  delete obj[propertyName]
  return obj
}

// Challenge 5: Calculate Total Score
function calculateTotalScore(students) {
  // Write your code here
  let total = 0
  for (student in students) {
    total += students[student].score
  }
  return total
}

module.exports = {
  mergeObjects,
  calculateAverageAge,
  filterStudentsByGrade,
  removeProperty,
  calculateTotalScore,
};
