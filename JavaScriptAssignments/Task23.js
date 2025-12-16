class Student {
  constructor(name, gradeLevel, gpa) {
    // TODO: save the parameters as properties on this object
    this.name = name;
    this.gradeLevel = gradeLevel;
    this._gpa = gpa;
  }

  set gpa(newGpa) {
    if (newGpa > 0 && newGpa < 4.0) this._gpa = newGpa;
    else {
      console.error("Gpa must be in between 0.0 or 4.0");
      this._gpa = 0;
    }
  }
  get gpa() {
    return this._gpa;
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

const s4 = new Student("Noah", 1, 2);

// TODO: log them and a descriptive sentence for each
s1.displayStudent();
s2.displayStudent();
s3.displayStudent();
console.log(`${s4.gpa}`);
s1.gpa = 9;
