const {
    mergeObjects,
    calculateAverageAge,
    filterStudentsByGrade,
    removeProperty,
    calculateTotalScore,
  } = require('./objects.js');
  
  describe('mergeObjects', () => {
    it('should merge two objects into a new object', () => {
      const obj1 = { name: 'John', age: 25 };
      const obj2 = { occupation: 'Developer', country: 'USA' };
      expect(mergeObjects(obj1, obj2)).toEqual({
        name: 'John',
        age: 25,
        occupation: 'Developer',
        country: 'USA',
      });
    });
  });
  
  describe('calculateAverageAge', () => {
    it('should calculate the average age of an array of persons', () => {
      const persons = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
      ];
      expect(calculateAverageAge(persons)).toEqual(30);
    });
  });
  
  describe('filterStudentsByGrade', () => {
    it('should filter students by grade and return an array of names', () => {
      const students = {
        student1: { name: 'Alice', grade: 'A' },
        student2: { name: 'Bob', grade: 'B' },
        student3: { name: 'Charlie', grade: 'A' },
      };
      expect(filterStudentsByGrade(students, 'A')).toEqual(['Alice', 'Charlie']);
    });
  });
  
  describe('removeProperty', () => {
    it('should remove a property from an object and return the modified object', () => {
      const student = { name: 'Alice', age: 25, grade: 'A' };
      expect(removeProperty(student, 'grade')).toEqual({
        name: 'Alice',
        age: 25,
      });
    });
  });
  
  describe('calculateTotalScore', () => {
    it('should calculate the total score of students', () => {
      const students = {
        student1: { name: 'Alice', score: 80 },
        student2: { name: 'Bob', score: 90 },
        student3: { name: 'Charlie', score: 75 },
      };
      expect(calculateTotalScore(students)).toEqual(245);
    });
  });
  