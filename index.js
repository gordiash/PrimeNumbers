const getNumber = ()=>{
    let n = document.querySelector('#input').value
    n = parseInt(n)
    return isNaN(n) || n<0 || n>10e3 ? false : n
}

const isPrime = (n)=>{
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}


function primeArray(number = 0){
    let pArray = []

    for(let i = 2; i <= number; i++){
        if(isPrime(i)){
            pArray.push(' ' + i);
        }
    }
    return pArray
}


const printResult = ()=>{
    const number = getNumber()
    const arr = primeArray(number)
    const child = document.querySelector('#result')
    
    if(number !== false){
        child.textContent = arr
    }else{
        child.textContent = "Wprowadzona błędną liczbę"
    }

}

const input = document.querySelector('#input')
  
input.addEventListener('keyup', printResult)
    

