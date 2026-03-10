const prices = [7,1,5,3,6,4];

function maxProfit(arr){
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minPrice){
            minPrice = arr[i]
        }
        maxProfit = Math.max(maxProfit, arr[i] - minPrice)
    }
    return maxProfit;
}

console.log(maxProfit(prices));