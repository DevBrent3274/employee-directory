class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.emial = email;
  }

  // This function will take in the new name
  getName() {
    // if (this.name) is an acceptable name {
    //  console.log(`${this.name} is available`);
    return this.name
    //} else {
    //  console.log(`The name ${this.name} is not allowed, try letters only.`);
      return false
  }
  
  // This function will take in valid id as numbers only
  getId(){
    // if (this.id works with allowed characters) {
    //  console.log(`This ${this.id} is available.`);
      return this.id
    //} else {  
    //  console.log("please enter numbers only");
      return false;
    //}
  }

  //This function will take in valid email 
  getEmail(){
    // if (email is tested to be valid)
    return this.email
    // else
    // console.log("Please enter a valid email address");
    // return false;
  }

  getRole(){
    return 'Employee';
  }
}

module.exports = Employee;