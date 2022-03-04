document.getElementsByClassName("L2").style.display = "none"

function selectionL1(selection){
  if(selection == "math"){
    if(document.getElementById("L2Smth").style.display == "block"){
      document.getElementById("L2Smth").style.display == "none"
    }
    else{
      document.getElementById("L2Smth").style.display="block"
    }
  }
  if(selection == "sci"){
    if(document.getElementById("L2Ssci").style.display == "block"){
      document.getElementById("L2Ssci").style.display == "none"
    }
    else{
      document.getElementById("L2Ssci").style.display="block"
    }
  }
  if(selection == "hist"){
    if(document.getElementById("L2hist").style.display == "block"){
      document.getElementById("L2hist").style.display == "none"
    }
    else{
      document.getElementById("L2Shist").style.dispaly="block"
    }
  }
  if(selection == "inet"){
    if(document.getElementById("L2Snet").style.display == "block"){
      document.getElementById("L2Snet").style.display == "none"
    }
    else{
      document.getElementById("L2Snet").style.display = "block"
    }
  }
  if(selection == "edu"){
    if(document.getElementById("L2Sedu").style.display == "block"){
      document.getElementById("L2Sedu").style.display == "none"
    }
  }
  if(selection == "tech"){
    if(document.getElementById("L2Stch").style.display == "block"){
      document.getElementById("L2Stch").style.display == "none"
    }
    else{
      document.getElementById("L2Stch").style.display == "block"
    }
  }
  if(selection == "wrld"){
    if(document.getElementById("L2Stch").style.display == "block"){
      document.getElementById("L2Swrld").style.display == "none"
    }
    else{
      document.getElementById("L2Swrld").style.display == "block"
    }
  }
}
