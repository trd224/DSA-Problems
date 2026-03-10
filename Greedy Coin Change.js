const arr = [10, 5, 2, 1];
let total = 27;


function takeCoin(arr, total) {

  const coinsArr = [];

  for (let i = 0; i < arr.length; i++) {

    while (total >= arr[i]) {

      coinsArr.push(arr[i]);  // take this coin

      total = total - arr[i]; // subtract

    }                          // repeat while fits

  }                            // next denomination

  return coinsArr;

}

console.log(takeCoin(arr, total))