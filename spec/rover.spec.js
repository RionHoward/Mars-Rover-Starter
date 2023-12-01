const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!
  it ("constructor sets position and default values for mode and generatorWatts.", function(){
    let testRover = new Rover (1234);
    expect(testRover.position).toEqual(1234);
    
    expect(testRover.mode).toEqual('NORMAL')
    
    expect(testRover.generatorWatts).toEqual(110);
  })
  //Test #8
  it ("response returned by receiveMessage contains the name of the message", function(){
    let rover = new Rover(1234)
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual('Test message with two commands');



  })
  //Test #9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function (){
    let rover = new Rover(1234)
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(commands.length);

  })
  //Test #10
  it("responds correctly to the status check command", function(){
    let rover = new Rover(1234)
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Status Check', commands);
    let response = rover.receiveMessage(message);

    expect(response.results[1].completed).toEqual(true)
    expect(response.results[1].roverStatus.mode).toEqual('LOW_POWER')
    expect(response.results[1].roverStatus.generatorWatts).toEqual(110)
    expect(response.results[1].roverStatus.position).toEqual(1234)
  
  })
  //Test #11
  it("responds correctly to the mode change command", function(){
    
      let rover = new Rover(1234)
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      let message = new Message('Responds to mode change', commands);
      let response = rover.receiveMessage(message);
      
      expect(response.results[0].completed).toEqual(true)
      
  })
  //Test #12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
    let rover = new Rover(1234)
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), new Command('MOVE', 55)];
    let message = new Message('Trying to move in Low Power', commands);
    let response = rover.receiveMessage(message);
    console.log(commands)
    expect(response.results[2].completed).toEqual(false)
      
      
      
  })
  //Test #13
  it("responds with the position for the move command", function(){
    let rover = new Rover(1234)
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), new Command('MOVE', 55)];
      let message = new Message('New position', commands);
      let response = rover.receiveMessage(message);
      expect(response.results[0].completed).toEqual(true)
  })




});
