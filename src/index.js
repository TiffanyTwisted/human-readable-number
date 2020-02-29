module.exports = function toReadable (number) {
  function Ex(a,pos){
    if (a == 0 && pos ) return 'zero';
      if (a ==0) return '';
      if (a ==1) return 'one';
      if (a ==2) return 'two';
      if (a ==3) return 'three';
      if (a ==4) return 'four';
      if (a ==5) return 'five';
      if (a ==6) return 'six';
      if (a ==7 ) return 'seven';
      if (a ==8) return 'eight';
      if (a ==9) return 'nine';
      if (a ==10) return 'ten';
      if (a ==11) return 'eleven';
      if (a ==12) return 'twelve';
      if (a ==13) return 'thirteen';
      if (a ==14) return 'fourteen';
      if (a ==15) return 'fifteen';
      if (a ==16) return 'sixteen';
      if (a ==17) return 'seventeen';
      if (a ==18) return 'eighteen';
      if (a ==19) return 'nineteen';
      if (a <= 29) return 'twenty '+ Ex(a%10);
      if (a <= 39) return 'thirty '+ Ex(a%10);
      if (a <= 49) return 'forty '+ Ex(a%10);
      if (a <= 59) return 'fifty '+ Ex(a%10);
      if (a <= 69) return 'sixty '+ Ex(a%10);
      if (a <= 79) return 'seventy '+ Ex(a%10);
      if (a <= 89) return 'eighty '+ Ex(a%10);
      if (a <= 99) return 'ninety '+ Ex(a%10);
      return '';
  }

  let year= String(number).split('').map(element => Number(element)) ;
  let finalString = "";
if (year.length == 3) // three digit number
{
    finalString += Ex(year[0]);
    finalString += " hundred";
    finalString += " " + Ex(Number(String(year[1])+String(year[2])));

}
else 
if(year.length == 2)
{
    finalString += Ex(Number(String(year[0])+String(year[1])));
}
else 
{
    finalString += Ex(year[0],true);
}

return  finalString.trim();


}
