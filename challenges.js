/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️


function calculateLateFee (NumOfdays, overduerate) 
{return NumOfdays * overduerate}
console.log (calculateLateFee(10, 0.25))





// Extra Task:
// - Convert the function into a function expression.

const calculatelatefee = function (numOfdays, overduerate)
{return numOfdays * overduerate};
console.log(calculatelatefee(20, 0.25));



/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other color: "That's a unique choice!"

Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const FavColor = prompt ("Please enter your favorite color")

function findColorMeaning(FavColor)
{if (FavColor === "blue"){
   return "You love calm and peace.";
   
} 
else if (FavColor === "red") 
{
   return "You are passionate and bold.";
}
else if (FavColor === "green")
{
   return "You are connected to nature.";
}
    else if (FavColor === "yellow")
    {
      return "You radiate happiness and energy.";
       }
       else {
         return "That is unique choice!.";
       }
}

console.log(findColorMeaning(FavColor));

// Extra Task:
// - Rewrite the function using an arrow function.

const FavColor2 = prompt ("Enter your favorite color")

const findColorMeaning2=(FavColor2) =>
FavColor2 === "blue"?  "You love calm and peace.":
 FavColor2 === "red" ? "You are passionate and bold.":
 FavColor2 === "green"? "You are connected to nature.":
 FavColor2 === "yellow"?  "You radiate happiness and energy.":
"That is unique choice!.";
 

console.log(findColorMeaning2(FavColor2));

/*
Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function logCase(clientName,caseNumber)
{
   return caseNumber+ " " +clientName
}


const clientName = "John Doe";
const caseNumber = 12345

console.log(`Case # ${logCase(caseNumber, clientName)}'s case is now logged.`)


// Extra Task:
// - Rewrite the function as an arrow function.

const logcase = (clientname, casenumber) => 
  console.log(`Case #${clientname} ${casenumber}'s case is now logged.`);

logcase("John Doe2", 123456);



/*
Task 4 : Attendance Tracker 🚀🚀🚀🚀

You’re a teacher tracking student attendance. Write a function called 
`markAttendance` that takes a student’s name and a boolean `isPresent` 
value. If the student is present, log:

"[studentName] is present."

If the student is absent, log:

"[studentName] is absent."

Example:
Input: markAttendance("Amina", true)
Output: "Amina is present."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const studentName = prompt("Student Name");
const isPresent = prompt("Are you present? Please type yes or no");

function markAttendance(studentName, isPresent) {
  if (isPresent === "yes") {
    console.log(`${studentName} is present`);
  } 
  else 
  {
    console.log(`${studentName} is absent`);
  }
}

markAttendance(studentName, isPresent);



// Extra Task:
// - Convert the function into a function expression.

const studentname = prompt("Student Name");
const ispresent = prompt("Are you present? Please type yes or no");

const markattendance = function(studentname, ispresent) 
 {
  if (ispresent === "yes") 
   {
    console.log(`${studentName} is present`);
  } 
  else
   {
    console.log(`${studentname} is absent`);
  }
};

markAttendance(studentname, ispresent);


//STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

//You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

//1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.



const calculateAverage = function (test1,test2,test3)
  {return (test1 + test2 + test3) /3};

const average = calculateAverage (79,85,92)
console.log(`The average test score is ${average.toFixed(2)}`)


//2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
//   - "A" for average scores of 90 and above
//   - "B" for scores between 80 and 89
//   - "C" for scores between 70 and 79
//   - "F" for scores below 70
const determineGrade = function(average)
{
if (average >= 90 && average <= 100)
  {
    console.log ("Grade A")
  }

else if (average >= 80 && average <= 89)
  {
    console.log("Grade B")
}

  else if (average >= 70 && average <= 79)
{
    console.log("Grade C")
}

  else if (average < 70)
  {
    console.log("Grade F")
}
else
 {
  console.log ("Invalid")
}
}

console.log(determineGrade(69))


/*
3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"
     */
const calculateAverage2 = function (t1, t2, t3) {
  return (t1 + t2 + t3) / 3;
};

const determineGrade2 = function (average2) {
  if (average2 >= 90 && average2 <= 100) {
    return "A";
  } else if (average2 >= 80 && average2 <= 89) {
    return "B";
  } else if (average2 >= 70 && average2 <= 79) {
    return "C";
  } else {
    
    return "F";
  }
};

const generateReport = function (studentName3, score1, score2, score3) {
  const average2 = calculateAverage2(score1, score2, score3);
  const letterGrade = determineGrade2(average2);
  return `${studentName3} - Average Score: ${average2}, Grade: ${letterGrade}`;
};

console.log(generateReport("Amina", 85, 90, 78));



//4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

const studentName3 = prompt("Enter student name:");
const t1 = Number(prompt("Enter score for Test 1:"));
const t2 = Number(prompt("Enter score for Test 2:"));
const t3 = Number(prompt("Enter score for Test 3:"));

/*
Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

*/

/*
Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.
*/