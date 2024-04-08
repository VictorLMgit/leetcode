/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    let i = 0;

    while(i != students.length){

        if(students[0] == sandwiches[0]){
            students.shift();
            sandwiches.shift();
            i=0;
            continue;
        }

        const currentStudent = students.shift();
        students.push(currentStudent);
        i++;
    }

    return i;
};

const students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1];
const r = countStudents(students, sandwiches);
console.log(r);