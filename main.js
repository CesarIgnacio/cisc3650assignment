/** 
 * This function makes the button "Add Acticity" add a new element in the list.
 * Each element has a checkbox that strikethrough the text, an output calendar
 * that allows the user to select a date for their task, and a delete button.
*/
function addElement() {
  // Read the 
  let input = document.getElementById("myInput")
  let bigList = document.getElementById("myUL");

  if (input.value == "") {
    alert("Need to add a task")
  } else {
    let placeHolder = document.createElement("li")

    // Add the checkBox element to the list-element
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    placeHolder.appendChild(checkBox)

    // Binding Function - Strikthrough text when clicked
    checkBox.onclick = function () {
      if (checkBox.checked) {
        placeHolder.style.setProperty("text-decoration", "line-through")
      } else {
        placeHolder.style.setProperty("text-decoration", "none")
      }
    }

    // Add the content of the input box
    placeHolder.appendChild(document.createTextNode(input.value))

    // Add calendar
    let calendario = document.createElement("input")
    calendario.setAttribute("type", "date")
    placeHolder.appendChild(calendario)

    // Add the delete button
    let delButton = document.createElement("button")
    delButton.setAttribute("class", "delDesign")
    delButton.innerHTML = '<img src = "icon.png" height="15px" width="20px">'
    placeHolder.appendChild(delButton)
    delButton.onclick = function() {
      bigList.removeChild(placeHolder)
    }

    // Finally add the element to the list
    bigList.appendChild(placeHolder)

    // Reset the input value
    input.value = ""
  }
}

/**
 * These upcomming functionalities are associated with the two elements of the list that are
 * pre-inserted in the To-Do List
 */
// Checkbox for the initial values
function isCheck() {
  let input1 = document.getElementById("input1")
  let input2 = document.getElementById("input2")
  let el1 = document.getElementById("el1")
  let el2 = document.getElementById("el2")

  // Checkbox for element 1
  if (input1.checked) {
    el1.style.setProperty("text-decoration", "line-through")
  } else {
    el1.style.setProperty("text-decoration", "none")
  }
  // Checkbox for element 2
  if (input2.checked) {
    el2.style.setProperty("text-decoration", "line-through")
  } else {
    el2.style.setProperty("text-decoration", "none")
  }
}

// Delete button for element 1
function del1() {
  let el1 = document.getElementById("el1")
  el1.remove()
}

// Delete button for element 2
function del2() {
  let el2 = document.getElementById("el2")
  el2.remove()
}
