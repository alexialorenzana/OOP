// Abstraction of a washing machine

// Options for the wash cycle
type WashOptions = {
dryLevel: 'low' | 'medium' | 'high'
temperature: 'cold',
duration: 'hour',
ecoEnabled: false
}

// The abstraction
class WashingMachine {
// Private instance variables
   
  
public startCycle (options: WashOptions): void {
// Parse the options
// Get access to the physical layer
// Convert options into commands
// Lots of low-level code
// And so on...
}
      
   
  
}
// right now the only public method is the startCycle method
// the client does not need to know about the private instance variables within the class
// the client also does not neeed to know about any ohter private methods 

// Obtain access to the abstraction
import { WashingMachine } from '../washer'
 
// Create an instance
const washer = new WashingMachine();

// Usage
washer.startCycle({
dryLevel: 'medium',
temperature: 'cold',
duration: 'hour',
ecoEnabled: false
});

// for someone to use this abstraction, all they need to know is the existnece of the startCycle mehthod
// and how to call it, all other details are abstracted away with this class 


/* By keeping what’s not necessary for the client to know abstracted away,
we reduce confusion and make it easy for other developers to know how to use our code and extend it. */


// the public interface = startCycle(options)
// why? because it's simple and easy for human beings to understand

/* the implementation = startCycle (options){
// Parse the options
// Get acces to the physical layer
// Convert options into commands
// Lots of low-level code
// And so on
}


// Implementation complexities abstracted away and understood only by developers and domain exerts */














