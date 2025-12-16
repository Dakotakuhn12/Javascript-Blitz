class Person {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Person: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, gradeLevel, gpa) {
    // TODO: call super with name
    // TODO: set gradeLevel and _gpa
    super(name);
  }

  set gradeLevel(newgradeLevel) {
    if (newgradeLevel > 0) this._gradeLevel = newgradeLevel;
    else {
      consonle.error("gradeLevel must be over 1 - setting to 1");
      this._gradeLevel = 0;
    }
  }
}
// Test code

// const p = new Person("Alex");

// const s = new Student("Jamie", 11, 3.4);

// console.log(p.describe());

// console.log(s.describe());
