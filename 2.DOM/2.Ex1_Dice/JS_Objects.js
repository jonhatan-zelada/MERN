//Create a object
var housekeeper = {
    name: "Lucy",
    age: "33",
    yearOfExperience: 12,
    cleaninRepertoire: ["bathroom","lobby","bedroom"]
    
}
housekeeper.age;
housekeeper.cleaninRepertoire[1];


/** FACTORY */
/** A easier way to create an object */

// COnstructor function
/** rule: function name must be capitalized */

function Worker (name, age, licence, languages){ 
    this.name = name;
    this.age = age;
    this.licence = licence;
    this.languages = languages;
}

var worker1 = new Worker("Luis", 34, "A32323",["Russian","English"]);