function solution(arr1, arr2) {
    var ans = []
    for (i=0; i < arr1.length; i++) {
        var k =[]
        for (j=0; j < arr1[i].length; j++){
            
            k.push(arr1[i][j] + arr2[i][j])
            console.log(k)
        } 
        ans.push(k)           
    }
    console.log(ans)
    // var answer = arr;
    // return console.log(answer);
}

arr1 = [[1,2,3],[4,5,6]]
arr2 = [[1,2,3],[4,5,6]]

solution(arr1, arr2)