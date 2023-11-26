function returnFirstItem<T>(arr:T[]):T|string{
    if (arr.length){
        return arr[0];
    } return "zero lengthed array";
}

console.log(returnFirstItem([1,2,3]))
console.log(returnFirstItem([]))

function swapTwoElementsofArray<T,B>(arr:[T,B]):[B,T]{
    let new_arr:[B,T]=[arr[1],arr[0]];
    return new_arr;
}

console.log(swapTwoElementsofArray([1,'2']))