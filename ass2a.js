// Assignment 2 - Part 1 - Javascript Code 
// by: Kevin Nolan 
// This code implements 3 different functions as described above each. 

function squareNumber() //squares and returns the number provided
{
 var inputValue = document.getElementById("input2").value;
 var result = inputValue * inputValue;

 document.getElementById("output2").innerHTML = String(result);
 console.log("The result of" + number + "squared is: " + result);
 return result;

}



function fixStart() //takes word, and removes all instances of it's first character
{
    var word = document.getElementById("input3").value;
    var first = word[0];
    var newWord = first;

  for(var i = 1; i < word.length; i++)
  {
    if(word[i] === first)
    {
       newWord += "*";
    }
    else
        newWord += word[i];
  }
  document.getElementById("output3").innerHTML = newWord;
  console.log("The new word is: " + word);
  return word;

} 

function notBad()
{
    var input = document.getElementById("input4").value;
    var notLocation = input.search("not");
    var badLocation = input.search("bad");
    var newWord = input[0];


    if(notLocation === -1 || badLocation === -1)
        document.getElementById("output4").innerHTML = input;
    else if(notLocation < badLocation) {
        for(var i = 1; i < notLocation; i++)
            newWord += input[i];

        newWord += " good";

        document.getElementById("output4").innerHTML = newWord;

    }


}  