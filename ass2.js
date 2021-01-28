// Assignment 2 - Javascript Code 
// by: Kevin Nolan 
// ---This code adds and removes cells in a table and displays their lengths 

function addCell() //adds a new cell
{
    var tRow = document.getElementById("inputTable").insertRow(1);
    var cell1 = tRow.insertCell(0);
    var cell2 = tRow.insertCell(1);
    //add value into the text box row
    cell1.innerHTML = '<td><input type="text" id="userInput" oninput="getLength()" '
                        + 'class="td1" placeholder="Enter text: "></td>';
    //add value into length row
    cell2.innerHTML = '<p id="output"></p></td>';

}

function eraseCell() //removes the cell line by line
{
    var total = document.getElementById("inputTable").rows.length;
    if (total > 1)
    {
        document.getElementById("inputTable").deleteRow(total -1 );
    }
}

function getLength() // gets the length and displays it
{
    document.getElementById("output").innerHTML = document.getElementById("userInput").value.length;
}  

function sortCells() //sorts the cells
{
    var inputs, i, x, y;
    var table = document.getElementById("inputTable");
    var switchVals = true;
    var swapInputs = true;

    /*Loop continues until all values are swapped correctly in order*/
    while (switchVals) {
        //start by saying: no switching is done:
        switchVals = false;
        inputs = table.rows;

        /*Start at the first table row and go through all values*/
        for (i = 1; i < (inputs.length - 1); i++) {
             swapInputs = false;
            /*Compare the 2 values, one from one row and next from the one after*/
            x = inputs[i].getElementsByTagName("TD")[1];
            y = inputs[i + 1].getElementsByTagName("TD")[1];

            if (x.innerHTML.valueOf() > y.innerHTML.valueOf()) {  //check the values of rows to see if switch
                //if swap needed, then mark as true and break loop
                swapInputs = true;
                break;
            }
        }
        if (swapInputs) {
            /*If swapInputs = true, then swap the values and then
            * set switch to True. */
            inputs[i].parentNode.insertBefore(inputs[i + 1], inputs[i]);
            switchVals = true;
        }
    }
}