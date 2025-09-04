const win = document.getElementById("win")!;
const lose = document.getElementById("lose")!;
const userReturn = document.getElementById("return")!;

//ADD PROMISE TO EVENT LISTENER
document.getElementById("play")?.addEventListener("click", ()=>{
        const myPromise =  new Promise((resolve,reject)=>{
            let result = Math.random();
            
            if(result >.5){
                resolve("You Win!");
                //DISPLAY WIN 
                win.style.display = "block";
                lose.style.display = "none";
            }else{
                //DISPLAY LOSE
                reject("Game Over!");
                lose.style.display = "block";
                win.style.display = "none";
            }
            
        });

    myPromise
        //PROMISE SUCCESS
        .then((data:any)=>{
            console.log(data)})
        //PROMISE FAIL
        .catch((error:any)=>console.log(error));
});


//PART 2
const fetchAdviceBy = (id:number) =>{
        fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response) => response.json())
        .then((data)=>{
            userReturn.innerText = data.slip.advice;
        })
        .catch((error)=>{
            console.error('Error fetching advice: ', error);
        });
}
                    
  
   

