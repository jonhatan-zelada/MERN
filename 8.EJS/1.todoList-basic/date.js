//read to simplify: https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/


exports.getDate = function (){
//module.exports.getDate = function (){
    let today = new Date();
    
    let options = {
        weekday: "long", 
        day: "numeric",
        month: "long"
    };

    return day = today.toLocaleDateString("en-US",options);

}


exports.getDay = function (){
    let today = new Date();
    let options = {
    weekday: "long"
    };
    return day = today.toLocaleDateString("en-US",options);

};

console.log(module.exports);