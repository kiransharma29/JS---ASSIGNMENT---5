n = Number(prompt('enter the number',));
let arr = [ ];
for(i=0;i<=n;i++)
{
arr.push(i);
}
console.log(arr);
//filter

let odd = arr.filter(el => el%2!=0);
console.log(odd);
let arrcubes = odd.map(el => el**3);
console.log(arrcubes);