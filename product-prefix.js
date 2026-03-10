// const arr = [1,2,3,4];

// const prefix = new Array(arr.length);

// prefix[0] = arr[0]

// for(let i = 1; i < arr.length; i++){
//     prefix[i] = prefix[i - 1] * arr[i - 1]
// }

// console.log(prefix)



const arr = [1,2,3,4];

const prefix = [];
prefix[0] = 1

for(let i = 1; i < arr.length; i++){
    prefix.push(prefix[i - 1] * arr[i - 1])
}

console.log(prefix)