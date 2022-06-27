$ mkdir 2.Mongoose_CRUD
$ cd Mongoose_CRUD/
/Mongoose_CRUD$ touch app.js
/Mongoose_CRUD$ npm init -y

#install  Mongo Driver
Mongoose_CRUD$ npm i mongoose



//* Run mongodb server*/

//* complete a program on app.js and start the server
/Mongoose_CRUD$ nodemon app.js


//Insert one record

const people= new People({
    name: "Juan",
    age: 32,
    rol: "IT Dev"
});

people.save();
