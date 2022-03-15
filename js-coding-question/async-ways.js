// Callbacks

function printString(){
  console.log("Jay"); 
  setTimeout(function()  { console.log("Jeevan"); }, 500); 
  console.log("Joy")
}

printString();

// Promises

// Creating a Promise

const myFirstPromise = new Promise((resolve, reject) => { 
  const condition = true;   
  if(condition) {
       setTimeout(function(){
           resolve("Promise is resolved!"); 
      }, 500);
  } else {    
      reject('Promise is rejected!');  
  }
});

// Using Promise

const demoPromise= function() {
  myFirstPromise
  .then((successMsg) => {
      console.log("Success:" + successMsg);
  })
  .catch((errorMsg) => { 
      console.log("Error:" + errorMsg);
  })
}

demoPromise();

// Async-await

const helloPromise = function() {
  return new Promise(function(resolve, reject) {
    const message = "Hi, How are you!";

    resolve(message)
  });
}


async function demoPromise() {
  try {
    let message  = await helloPromise();
    console.log(message);

  }
  catch(error){ 
      console.log("Error:" + error.message);
  }
}

demoPromise();
