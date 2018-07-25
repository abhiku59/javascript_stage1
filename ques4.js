/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */var library=[
   {
     title: 'bill gates',
     reading_status: true
   },
   {
   title: 'steve jobs',
   reading_status: true
   },
   {
   title: 'sinbad',
   reading_status: false
   }];
 for (var i = 0; i < library.lenght; i++)
   {
     if(library[i].readingstatus){
       console.log('book read');
     }
     else {
       console.log('not read');
     }
   }
 
