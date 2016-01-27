var str0 = "abcdefghi"
var str1 = "jklfgmnop"


var comChar = new Array();

var result = strMatch(str0,str1);

function strMatch(str0,str1){
for(i=0; i<str0.length; i++){
  for(j=0; j<str1.length; j++)
  if(str0[i] == str1[j]){
    comChar.push([str0[i]])
  }
}
return comChar;
}
console.log(result);
