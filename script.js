//1)Movie class
// class Movie{
//   constructor(title,studio,rating){
//     this.title=title;
//     this.studio=studio;
//     if(rating==undefined)
//     {
//       this.rating="PG"
//     }
//     else{
//       this.rating=rating;
//     }
//   }
//   getPG(arry){
//     var result=[];
//     for(var i=0;i<arry.length;i++)
//     {
//       if(arry[i].rating=="PG")
//       {
//         result.push(arry[i]);
//       }
//     }
//     return result;
//   }
// }
// var movie1= new Movie("ABC","MARVEL");
// var movie2= new Movie("XYZ","DC","PG15");
// var movie3=new Movie("CDE","FV");
// var movie4=new Movie("GNH","KK","PG123");
// var arry=[movie1,movie2,movie3,movie4];
// console.log(movie1.getPG(arry));
//output:-
// //0
// : 
// Movie {title: 'ABC', studio: 'MARVEL', rating: 'PG'}
// 1
// : 
// Movie {title: 'CDE', studio: 'FV', rating: 'PG'}
//=================================================================================================

//2)class Circle 
// class Circle {
//   constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//   }
//   get radiusCircle() {
//     return this.radius;
//   }
//   get colorCircle() {
//     return this.color;
//   }
//   set radiusCircle(radius) {
//     this.radius = radius;
//   }
//   set colorCircle(color) {
//     this.color = color;
//   }
//   get toString() {
//     return `"Circle[radius=${this.radius}, color=${this.color}]"`;
//   }
//   get areaCircle() {
//     return Math.PI * this.radius * this.radius;
//   }
//   get circumferenceCircle() {
//     return 2 * Math.PI * this.radius;
//   }
// }
// var obj1 = new Circle(1.0, "red");
// console.log(obj1.radiusCircle); //get radiusCircle

// obj1.radiusCircle = 2.2;
// console.log(obj1.radiusCircle); //set radiusCircle

//==================================================================================
//3)
//   class Person{
//     constructor(name,age,salary,gender)
//     {
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//         this.gender=gender;
//     }
// }
// var a= new Person("kumaresan","23","25000","male");
// console.log(a.name);
// console.log(a.age);
// console.log(a.salary);
// console.log(a.gender);
//===============================================================================



       



