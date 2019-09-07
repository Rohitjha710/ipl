function reduce(arr, implementer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++)
    accumulator = implementer(accumulator, arr[i]);
  return accumulator;
}
function map(arr, mapFunction) {
  const Array = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunction(arr[i]);
    Array.push(result);
  }
  return Array;
}
function filter(Array, filterFunc) {
  const mapresult = [];
  for (let i = 0; i < Array.length; i++) {
    const result = filterFunc(Array[i]);
    if (result) {
      mapresult.push(Array[i]);
    }
  }

  return mapresult;
}
module.exports = { Reduce: reduce, Map: map,Filter:filter };
