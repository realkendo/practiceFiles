// let name = "Kenneth";
// let age = 4;
// let isOnline = false;

// if(age > 17){
//     // action 
//     console.log("Adult ");
// }else{
//     console.log("Under age ");
// }

// types of operators
// 1. arithmetic operatosr = +,-, /, *, %
// 2. boolean (comparison) - ==,
// 3. assignment; =
// 4. logical operators = &&, || 




// const body = document.querySelector('body');
const input = document.querySelector('.myInput');
const btn = document.querySelector('.btn');

btn.addEventListener("click", ()=>{
    let userInput = input.value;

    const getPrime = () => {
        for(let i = 1; i < userInput; i++){
            if(userInput < 1){
                return(`${userInput} is not prime number`);
            }
            else if(i > 1 && userInput % i !== 0){
                return (`${userInput} is a prime number`);
            }else if(i > 1 && userInput % i === 0){
                let factors = new Array();
                factors.push(i);
                return(`${userInput} is not a prime number, because ${factors} is a factor`);

            }
        }
    }
    
    console.trace(getPrime());
})

// btn.addEventListener('click', (e) => {
//     console.log("clicked");
// });




