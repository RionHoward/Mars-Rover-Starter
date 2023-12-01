const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
//Test #4
    it("throws error if name is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Name is required.'));
      });
//Test #5
    it("constructor sets name", function() {
        let constructorName = new Message("name")
        expect(constructorName.name).toEqual("name")
    })
//Test #6
    it("Contains a commands array passed into the consturctor as the 2nd argument", function(){
        let messageArray = new Message("name", ["commandsArray"]);
        expect(messageArray.commands).toEqual(["commandsArray"]);
  })

});
