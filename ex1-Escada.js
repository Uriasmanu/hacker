// n = 6
// degrau = "#"
// vazio = " "

// for (i = 0; i < n; i++) {
//    console.log( (vazio.repeat(n - i)) + (degrau.repeat(i)))
// }

const n = 6

for (let i = 1; i <= n; i++){
   space = " ".repeat(n-i);
   hesh = "#".repeat(i);
   console.log(space + hesh)
}