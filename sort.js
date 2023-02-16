
function findSum(A, B, n) {

    let hash = new Map();
    for (let i = 0; i < n; i++) {
        if (hash.has(A[i]))
            hash.set(A[i], 1 + hash.get(A[i]));
        else
            hash.set(A[i], 1);
 
        if (hash.has(B[i]))
            hash.set(B[i], 1 + hash.get(B[i]));
        else
            hash.set(B[i], 1);
    }
 
    let sum = 0;
    for (let num of hash) {
        if (parseInt((num[1]).toString()) == 1)
            sum += parseInt((num[0]).toString());
    }
 
    return sum;
 
}
 
let A = [22, 43, 2, 12, 33];
let B = [33, 18, 42, 16, 3];
 
let n = A.length;
 
console.log(findSum(A, B, n));




// Second Solution


function findSum(C, D, s)
{
    let sum = 0;
 
    let st = new Set();
    for (let i = 0; i < s; i++) {
        st.add(D[i]);
        sum += D[i];
    }
     
    for (let i = 0; i < s; i++) {
        if (!st.has(C[i])) {
            sum += C[i];
        }
        else {
            sum -= C[i];
        }
    }
 
    return sum;
}
 
    let D = [ 45, 14, 12, 2, 30 ];
    let C = [ 12, 48, 7, 6, 30 ];
 
    // size of array
    let s = A.length;
 
    // function call
    console.log(findSum(C, D, s));