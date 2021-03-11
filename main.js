// Your code here.

const getFirstName = person => person.firstName;

const getLastName = person => person.lastName;

const getFullName = person => `${person.firstName} ${person.lastName}`;

const setFirstName = (person, newFirstName) => person.firstName = newFirstName;

const setAge = (person, newAge) => person.age = newAge;

const giveBirthday = person => {
  let ageExists = 'age' in person;
  if(!!ageExists) {
    person.age += 1;
  } 
}

const marry = function(spouse1, spouse2) {
  spouse1.married = true;
  spouse2.married = true;

  spouse1.spouseName = `${spouse2.firstName} ${spouse2.lastName}`;
  spouse2.spouseName = `${spouse1.firstName} ${spouse1.lastName}`;
}

const divorce = function(spouse1, spouse2) {
  spouse1.married = false;
  spouse2['married'] = false;
  delete spouse1.spouseName;
  delete spouse2['spouseName'];
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
