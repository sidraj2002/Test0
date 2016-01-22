var strArray = new Array();
var popCountArr = new Array();
strArray = [1,2,3,4,7,5,6,1];

var popNumArr = arrCount(strArray);
var popNum = popElement(popNumArr);


      function popElement(popNumArr){ // find most number of repetitions
        var Num;
        var arrayLocate;
        Num= popNumArr[0];
        for (i=1;i<popNumArr.length; i++){
          if(Num<popNumArr[i]){
            Num = popNumArr[i];
            arrayLocate = i+1;
          }
        }
        var maxNum = new Array();
        maxNum.push(arrayLocate);
        maxNum.push(Num);
        return maxNum;
      }

      function arrCount(strArray){ // find number of repetitions
        var popCount=0, tempVar;

        for(i=0; i<strArray.length; i++){
        if(popCount != 0){
          popCountArr.push(popCount);
        }
          tempVar = strArray[i];
          popCount = 0;
          for(j=0; j<strArray.length; j++){
            if(tempVar == strArray[j]){
              popCount++;
            }else {
              popCount = popCount;
            }
          }
        }
        return popCountArr;
      }


//console.log(popCountArr);

console.log(popNumArr);
console.log(popNum);
console.log("repeated Element is:" + strArray['popNum[0]'])
