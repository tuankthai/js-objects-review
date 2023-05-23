// Challenge 1: Merge Objects
function mergeObjects(obj1, obj2) {
  // Write your code here
  return {...obj1, ...obj2}
}

// Challenge 2: Calculate Average Age
function calculateAverageAge(persons) {
  // Write your code here
  let totalAge = 0;
  persons.forEach(person => {
    totalAge += person.age
  });
  return totalAge / persons.length
}

// Challenge 3: Filter Students by Grade
function filterStudentsByGrade(students, grade) {
  // Write your code here
  const passArr = students.filter(student => student.grade === 'grade')
  // console.log(passArr)
  const nameArr = [];
  passArr.forEach(pass => nameArr.push(pass.name))
  // console.log(nameArr)
  return nameArr
}

// Challenge 4: Remove Property
function removeProperty(obj, propertyName) {
  // Write your code here
}

// Challenge 5: Calculate Total Score
function calculateTotalScore(students) {
  // Write your code here
}

module.exports = {
  mergeObjects,
  calculateAverageAge,
  filterStudentsByGrade,
  removeProperty,
  calculateTotalScore,
};
