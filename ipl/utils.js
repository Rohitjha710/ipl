function reduce(arr, implementer, initialValue) 
{    
    let accumulator = initialValue === undefined ? 0 : initialValue           
     for(let i=0;i<arr.length;i++)       
     accumulator = implementer(accumulator, arr[i]);
      return accumulator;
 }
 module.exports=reduce;