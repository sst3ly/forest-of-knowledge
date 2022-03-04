document.getElementsByClassName("L2").style.visibility = "hidden"

function selectionL1(selection){
  if(selection == "math"){
    alert("Selected math!")
    document.getElementById("L2Smth").style.visibility="visible"
  }
}
