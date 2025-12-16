class Student {
  constructor(name, gradeLevel, gpa) {
    // TODO: save the parameters as properties on this object
    this.name = name;
    this.gradeLevel = gradeLevel;
    this.gpa = gpa;
  }

  displayStudent() {
    console.log(
      `${this.name} is in grade ${this.gradeLevel} with a GPA of ${this.gpa}`
    );
  }
}

// TODO: create at least three Student objects

const s1 = new Student("Lebron", 12, 4.5);

const s2 = new Student("Dakota", 11, 4.0);

const s3 = new Student("Jordan", 10, 3.5);

// TODO: log them and a descriptive sentence for each
s1.displayStudent();
s2.displayStudent();
s3.displayStudent();
