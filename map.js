
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [12, 22, 33, 44, 55];
let result = []
for (let num of nums) {
    result.push(num * 2);
}

console.log(result)

// Using map()
const multiByTwo = function (nums) {
    
    return nums * 2;
}

const mapresults = nums.map(multiByTwo);

console.log(mapresults)

// Simplified w/ map()
let nums3 = [8, 9, 10, 15, 18];
const simplified = nums3.map(function (nums3) { return nums3 * 2 });
console.log(simplified);
 
// Simplfied w/ map() + arrow function
let num2 = [1, 2, 3, 4, 5];

const results = num2.map(num2 => num2 * 2);

console.log(results);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];


  const studentNameAndId = students.map(students => [students.name, students.id]);
  console.log(studentNameAndId);

  const studentSkill = students.map(students => [students.skill]);
  console.log(studentSkill);
