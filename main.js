// const User  = {
// name: "Aziz",
// id: 20,
// email: "comsaziz2@g",
// gender: "male",
// Availab: true

// address:{
// add1:"Malqa",
// add2:"Qeblatien",
// add3:"Monissiyah",

//   city:{
// ci:"Madina",
// ci2:"Riyadh",

// arr:{
// list:["JS,Flutter,Nodejs,expressjs"],


// }
//   }

// }


// }


// console.log(User)
// console.log(User.name)
// User.id = 24
// console.log(User.id)
// delete User.email
// console.log(User.email)
// console.log(User.address)
// console.log(User.address.city.ci1)
// console.log(User.address.city.arr.list[2])



characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },

  ];
// let beye = characters.find(ex => ex.eye_color === "blue").name;
//  console.log(beye);

//  let cg = characters.find(ex => ex.mass > 50).gender;
//  console.log(cg);

//  let ge = characters.find(ex => ex.height < 200)
//  console.log(ge);

//  let all = characters.filter(ex => ex.gender == "male")
//  console.log(all);
// let allname = characters.map(ex => ex.name);
// console.log(allname);

// let allhieght = characters.map(ex => ex.height);
// console.log(allhieght);


// let sortmass = characters.sort((a, b) => a.mass - b.mass);
// console.log(sortmass);

// let sortmass1 = characters.sort((a, b) => b.mass - a.mass);
// console.log(sortmass1);

 let masst = characters.every(ex => ex.mass > 40);
 console.log(masst);

 let hiegh = characters.every(ex => ex.height < 200);
 console.log(hiegh);

 let somme = characters.some(ex => ex.eye_color == "blue");
 console.log(somme);

 let somme1 = characters.some(ex => ex.height > 210);
 console.log(somme1);



 




