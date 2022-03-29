function findEvenIndex(arr) {

    // Assigning the length of the array arr
    arrlength = arr.length

    // Here we create an new array called newarr so we can put the value of 0 at both ends of the array, the purpose of this is to avoid getting an error when we add the values of the elements at the first index which is null in the original array. We use the unshift and push function to achieve this purpose
    newarr = []

    for (i = 0; i <= arrlength - 1; i++) {
        newarr.push(arr[i])
    }
    newarr.unshift(0)
    newarr.push(0)

    // console.log(newarr)

    // The left array from index, we start at the index 1 since this is the original index of the array, and we set the limit to be the length of the newarr minus 2 because this is also the from the length of the original array, then we take the sum in each iteration by using the reduce function, then pushing it to the theLeftArray array for later comparison to the right array
    theLeftArray = []
    for (i = 1; i <= newarr.length - 2; i++) {
        // console.log(newarr.slice(0, i))
        sliceArr = newarr.slice(0, i)
        // console.log(sliceArr)
        sumleft = sliceArr.reduce((a, b) => a + b)
        // console.log(sumleft)

        theLeftArray.push(sumleft)
    }
    // console.log(`This is the left array ${theLeftArray}`)
    // console.log('=====')


    //The right array from index
    theRightArray = []
    newarrlength = newarr.length
    for (i = 1; i <= newarrlength - 2; i++) {
        newarr.splice(1, 1)
        // console.log(newarr)

        sumright = newarr.reduce((a, b) => a + b)
        // console.log(sumright)

        theRightArray.push(sumright)
    }
    // console.log(`This is the right array ${theRightArray}`)
    console.log('=====')
    console.log('This is the left array')
    console.log(theLeftArray)
    console.log('This is the right array')
    console.log(theRightArray)
    console.log('=====')

    for (i = 0; i <= theLeftArray.length - 1; i++) {
        // console.log(theLeftArray[i], theRightArray[i])

        if (theLeftArray[i] == theRightArray[i]) {
            // We use the break in order not to continue the loop and output it the moment it finds the equal elements
            console.log(`The index ${i} is where the sum of the left and right elements of the array is equal`)
            break

            // Here, we use the condition if the index reaches the length of the array without finding an equal element, we return -1
        } else if (i == theLeftArray.length - 1) {
            console.log('There is no index where the sum on the left and the sum on the right will be equal')
            console.log(-1)
        }

    }
}
findEvenIndex([20, 10, -80, 10, 10, 15, 35])