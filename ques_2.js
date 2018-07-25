/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObject={greeting:'hii',color:'red'}
var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:12
*/
/*
Exception: SyntaxError: missing } after function body
@Scratchpad/1:20
*/