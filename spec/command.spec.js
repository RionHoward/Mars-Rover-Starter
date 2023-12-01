const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
     //However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
  //Test question #1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  //Test question #2
  it("constructor sets command type", function(){
    let testCommand = new Command("command")
    expect(testCommand.commandType).toEqual("command");
  })
  //Test question #3
  it("Constructor sets a value passed in as the 2nd argument", function(){
    let testCommand2 = new Command("command", "secondCommand");
    expect(testCommand2.value).toEqual("secondCommand");
  })


});