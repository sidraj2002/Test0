var str = "123456776323"

var result = largestNum(str);

function largestNum(str){

  for(i=0; i<str.length; i++){
    var temp = str[i];
    for(j=0; j<str.length; j++){
      if(temp < str[j]){
        temp = str[j]
      }else{
        temp = temp;
      }
    }

  }
  return temp
}
console.log(result);
