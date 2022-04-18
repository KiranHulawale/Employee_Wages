// Constants
let EMP_RATE_PER_HOUR = 20;
let IS_PART_TIME = 1;
let IS_FULL_TIME = 2;
let NUM_OF_WORKING_DAYS = 20;
let MAX_HRS_IN_MONTH = 100;

// Variables
let isPresent = 1;
let monthlyWage = 0;
let empHrs = 0, empWage = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck) {
    case IS_PART_TIME:
        empHrs = 4;
        break
    case IS_FULL_TIME:
        empHrs = 8;
        break
    default:
        empHrs = 0;
    }
    totalEmpHrs += empHrs;
}

monthlyWage = totalEmpHrs * EMP_RATE_PER_HOUR;
console.log("Employee Monthly Wage = " + monthlyWage);