//1
const array = ["a", "ab", "abc", "cd", "def", "gh"];

function lengthAppearMost(arr) {

  const newArr = {}
  arr.forEach((i) => newArr[i] ? newArr[i] += 1 : newArr[i] = 1)
  let result = Object.keys(newArr).sort((a, b) => newArr[b] - newArr[a])[0]
  return console.log( result)
}

lengthAppearMost( array.map((string)=>string.length))


//2
const arr1 = [1, 4, 2, 3, 5];

function sum(arr) {
  let sortArr= arr.sort((a,b)=> a-b)
  let max = sortArr[sortArr.length -1]
  let maxSecond = sortArr[sortArr.length -2]
  let result = max + maxSecond
  return console.log(result)
}
sum(arr1);
