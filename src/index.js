// You should implement your task here.
module.exports = function towelSort(matrix) {
// function towelSort(matrix) {
  if (matrix == undefined) {
    return []
  }
  if (matrix.length ==0) {
    return []
  }
  
    let forward = false;
    let sorted = [];
    matrix.forEach((element) => {
        forward = !forward;
        if (forward) {
            //no sort
            element.forEach((symbol) => {
                sorted.push(symbol);
            });
        } else {
            //sort
            for (let index = element.length-1; index >= 0; index--) {
                sorted.push(element[index]);
            }
        }
    });
    return sorted;
};


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(towelSort(matrix));