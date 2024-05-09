// Question 1
async function myMessage(message, delay){
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message)
}
myMessage("I am a student at AkiraChix", 3000);

// Question 2
  async function getUserid(id) {
    for (const identity of id) {
      try {
        const userData = await userData(id);
        console.log(userData);
      } catch (error) {
        console.log(`The following users cannot be found ${id}: ${error}`);
      }
    }
  }
  getUserid([1, 2, 3, 4, 5]);


// Question 3
async function performTask(){
    try{
        await performTask();
        console.log("Task completed successfully");
    }catch{
        console.log("Error when performing task")
    }
}
performTask();

// Question 4
async function unstableTask(taskName, failureProbability){
    return new Promise ((resolve, reject) => {
        const randomNumber = Math.random();
        if(randomNumber > failureProbability){
            resolve(`Task ${taskName} completed successfully`);
        }
        else{
            reject(`${taskName} failed`)
        }
    })
    function executeTask(taskName){
        if(Math.random() < 0.3){
            throw new Error("Task failed");
        }
        else{
            console.log(`${taskName} succeeded`);
        }
        function executeWithRetries(taskName, retries, failureProbability){
            for(let retry = 0; retry<retries; retry++){
                try{
                    executeTask(taskName)
                }
                catch{
                    console.log(`Attempt ${taskName} succeeded after ${retries +1} failed: ${error.message}`);
                    if(retry === retries-1){
                        console.log(`${taskName} failed after ${retries} attempts`);
                    }
                }
            }
        }
        executeWithRetries("Read a book", 3, 0.3);
    }
    
}
console.log(unstableTask("Read a book", 3, 4));




