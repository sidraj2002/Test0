var numArray = new Array();
numArray = [1,2,3,4,5,4,3,7];

var peak = pFinder(numArray);

function pFinder(numArray){
  var numPeak;
    for(j=1; j<numArray.length; j++){
      if(numArray[0]>numArray[j]){
        numPeak = numArray[0];
      }
    }
      for(j=numArray.length-2; j>0; j--){
        if(numArray[numArray.length-1]>numArray[j]){
          numPeak = numArray[numArray.length-1];
        }
    }
    if(numPeak == undefined){
      var temp = numArray[numArray.length/2];
      for(i=numArray.length/2-1; i>=0;){
        if(temp < numArray[i]){
          temp = numArray[i];
          i--;
        }else if(temp > numArray[i]){

        }
      }
      while(numArray.)
      for(i=numArray.length/2;)
    }
console.log(numArray[numArray.length-1]);
    return numPeak;
}
console.log(peak);
