// Constants
let EMP_RATE_PER_HOUR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;

// Variables
let isPresent = 1;
let empCheck = Math.floor(Math.random() * 10) % 3;
let empHrs = 0, empWage = 0;

switch(empCheck){
    case IS_PART_TIME:
        empHrs = 4;
        break
    case IS_FULL_TIME:
        empHrs = 8;
        break
    default:
        empHrs = 0;
}

empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee Wage = "+empWage);