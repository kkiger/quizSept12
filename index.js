var fullName = function(firstName, lastName) {
  console.log("Their full name is" + firstName + lastName)
};
fullName(kali, kiger)

var people [{
  name: "kali"
},{
  name: "andy"
}{
  name: "whitney"
}];


var returnArrayNamespeople = people.map(function(name){
  return name
}