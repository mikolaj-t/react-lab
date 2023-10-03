const students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
const numbers = [2, 5, 8, 10];
const data = [
  {
    teacherName: "Jan Nowak",
    teacherAge: 36,
    active: true,
    students: [
      {
        name: "Maciej Janosz",
        age: 12
      },
      {
        name: "Wojciech Kowalski",
        age: 15
      },
      {
        name: "Wioletta PoznaÄšÂska",
        age: 1000000
      }
    ]
  },
  {
    teacherName: "Mariusz Flasinski",
    teacherAge: 56,
    active: true,
    students: [
      {
        name: "Jan Kot",
        age: 12
      },
      {
        name: "Jan Ziobro",
        age: 15
      },
      {
        name: "Adam Malysz",
        age: 41
      }
    ]
  },
  {
    teacherName: "Wojciech Kuzak",
    teacherAge: 44,
    active: false,
    students: [
      {
        name: "Janina Wronska",
        age: 22
      },
      {
        name: "John Dover",
        age: 7
      },
      {
        name: "Emil Petterson",
        age: 46
      }
    ]
  }
];

const taskFilter = () => {
  return students.filter(student => student.startsWith("M")).join(", ")
};

const taskMap = () => {
  return numbers.map(number => number * number).join(", ")
};

const taskReduce = () => {
  return numbers.reduce((a, b) => a + b, 0)
}

const task

function App() {
  return (
    <div>
      <p>
        <b>Results of filter:</b> {taskFilter()}
      </p>
      <p>
        <b>Results of map:</b> {taskMap()}
      </p>
      <p>
        <b>Results of reduce:</b> {taskReduce()}
      </p>
    </div>
  );
}

export default App;