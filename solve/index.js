var expect = function (val = '') {
    function toBe(expected) {
       if (val === expected) {
         return true;
       } else {
        return  new Error("Not Equal");
       }
     }
     function  notToBe(unexpected) {
       if (val !== unexpected) {
         return true;
       } else {
         return new Error("Equal");
       }
     }
 
     return {
         notToBe,
         toBe,
     }
 };
 
 
  console.log(expect(5).toBe(5)); 
  console.log( expect(5).notToBe(5)); 
  console.log( expect(5).toBe(null)); 

