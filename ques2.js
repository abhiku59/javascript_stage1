/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var iArray = [];
var size = 5;
var largest=0;
for(var i=0;i<size;i++){
  iArray[i]=prompt('enter element'+(i+1));
  
}
console.log(iArray);
for(var j=0;j<5;j++)
  if(iArray[j]>largest){
    var largest=iArray[j];
  }

console.log(largest);




