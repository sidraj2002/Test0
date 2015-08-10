var array1 = [1,2,3];

function mean(array1) {
  var avg = 0;
  var count = 0;
for ( i=0; i < array1.length; i++) {
  //console.log(i);
  avg += array1[i];
  count++;
  console.log(avg);

}
 mean = avg/count;
return mean;
}

console.log(mean(array1));
