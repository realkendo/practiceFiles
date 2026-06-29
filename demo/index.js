const myArray = new Array(2, 4, 3, 5);
// const myObject = new Object("name":"");

const twoSum = (_array, _target) => {
  let indices = [];

  for (let i = 0; i < _array.length; i++) {
    for (let j = i + 1; j < _array.length; j++) {
      if (_array[i] + _array[j] === _target) {
        indices.push(i);
        indices.push(j);
      }
    }
  }

  return indices;
};

console.log(twoSum(myArray, 8));
