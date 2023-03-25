document.getElementsByClassName("L2").style.visibility = "hidden"

function selectionL1(selection){
  if(selection == "math"){
    if(document.getElementById("L2Smth").style.visibility == "visible"){
      document.getElementById("L2Smth").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Smth").style.visibility="visible"
    }
  }
  if(selection == "sci"){
    if(document.getElementById("L2Ssci").style.visibility == "visible"){
      document.getElementById("L2Ssci").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Ssci").style.visibility="visible"
    }
  }
  if(selection == "hist"){
    if(document.getElementById("L2hist").style.visibility == "visible"){
      document.getElementById("L2hist").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Shist").style.dispaly="visible"
    }
  }
  if(selection == "inet"){
    if(document.getElementById("L2Snet").style.visibility == "visible"){
      document.getElementById("L2Snet").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Snet").style.visibility = "visible"
    }
  }
  if(selection == "edu"){
    if(document.getElementById("L2Sedu").style.visibility == "visible"){
      document.getElementById("L2Sedu").style.visibility == "hidden"
    }
  }
  if(selection == "tech"){
    if(document.getElementById("L2Stch").style.visibility == "visible"){
      document.getElementById("L2Stch").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Stch").style.visibility == "visible"
    }
  }
  if(selection == "wrld"){
    if(document.getElementById("L2Stch").style.visibility == "visible"){
      document.getElementById("L2Swrld").style.visibility == "hidden"
    }
    else{
      document.getElementById("L2Swrld").style.visibility == "visible"
    }
  }
}
