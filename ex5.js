//This program prints all odd numbers from positive [start] to [end] values.
let start=0, end=100;
for (let i=start; i<=end; i+=2) {
    if (i%2==1) {
        console.log(i);
    }
    else {
        i+=1;
        console.log(i);
    }
}