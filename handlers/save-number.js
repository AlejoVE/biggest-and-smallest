function saveNumberHandler() {
  debugger;
  // read new number from user input
const newInput = Number(document.getElementById("input").value);
numbers.all.push(numbers.current);
  // read from state the data you will need for the next step
 
  // find the new biggest and smallest values
  if (numbers.smallest == Infinity){
    numbers.smallest = newInput;
  }  
  if (newInput > numbers.biggest){
    numbers.biggest = newInput;
  } else if(newInput < numbers.smallest){
    numbers.smallest = newInput;
  }
  // update state: new biggest, new smallest, new current & save the last current
  
  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerText = numbers.biggest;
  document.getElementById("smallest").innerText = numbers.smallest;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
