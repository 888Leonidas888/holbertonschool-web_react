// 1. Let's build a Teacher interface

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: string | boolean | number | undefined;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.slice(0,1)}.${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

console.log(printTeacher('John', 'Doe'));
