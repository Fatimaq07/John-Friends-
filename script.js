/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  employees
    .map(emp => {
      if (emp.profession === "developer") {
        console.log(emp);
      }
    });
}

function PrintDeveloperbyForEach() {
  employees.forEach(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
   employees = employees.filter(emp => emp.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "Alex", age: "23", profession: "developer" },
    { id: 6, name: "Maria", age: "22", profession: "designer" },
    { id: 7, name: "Leo", age: "21", profession: "intern" }
  ];
  
  const combined = employees.concat(newArray);
  console.log(combined);
}
