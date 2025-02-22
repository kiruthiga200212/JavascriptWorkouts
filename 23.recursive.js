function goToLunch(person){
  if(person == 8 ) return true ;
  console.log(person)
  return goToLunch(person + 1)
}

console.log("OutCOme:", goToLunch(1))