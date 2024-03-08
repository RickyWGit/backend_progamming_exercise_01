function prima(x){
    if (x <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++){
        if (x % i === 0){
            return false;
        }
    }
    return true;
}

console.log("Prima adalah: ")
for (let i = 1; i <= 100; i++){
    if (prima(i)){
        console.log(i);
    }
}