for (var i=1; i<150; i++){
  //use TRUE to test whether the cases are true or valid. Using the variable means the program does not execute properly
switch(true) {
    case i % 3 ===0 && i % 5 ===0 && i % 7 ===0:
  console.log("Fizz Buzz Bang!");
  break;
      case i % 3 ===0 && i % 5 ===0:
  console.log("Fizz Buzz!");
  break;
  case i%3===0:
    console.log("Fizz!");
    break;
  case i % 5 ===0:
  console.log("Buzz!");
  break;
    case i % 7 ===0:
  console.log("Bang!");
  break;
  default:
  console.log(i);
  break;
} 
}