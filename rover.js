class Rover {
   // Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.position = position
      this.mode = mode
      this.generatorWatts = generatorWatts
      
   }
   receiveMessage(message){ 
        
      
      let response = {
         message : message.name,
         results: []
      }

      for(let i = 0; i < message.commands.length; i++){ 
         if (message.commands[i].commandType === 'STATUS_CHECK'){
            let statusCheck = {
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position,

               }
               
            }
            response.results.push(statusCheck)

         }
         if(message.commands[i].commandType === 'MODE_CHANGE'){
            let modeChange = {
               completed: true
               
            }
            this.mode = message.commands[i].value
            response.results.push(modeChange)
         }
         if(message.commands[i].commandType === 'MOVE'){
            if (this.mode === 'LOW_POWER'){
               let moveCommand ={
                  completed: false
               } 
               response.results.push(moveCommand);
            } else {
               let moveCommand ={
               completed: true,
               
            }
            this.position= message.commands[i].value
            response.results.push(moveCommand);
         }




         }
      
         
            

      }
      return response
   }


   
   
}


module.exports = Rover;