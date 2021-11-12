function checkForm(elem){
    let state = elem.state.value
    let sel = elem.select.value
    let checkedRadio =""

    let res = state * sel
    for(let radio of elem.state.values()){
        if(radio.checked){
            checkedRadio = radio.id
        }
    }




   document.getElementById("info").innerHTML = "$" + res + "US";
   document.getElementById("blocl_sel").innerHTML = innerHTML = checkedRadio;
  
  

    return false
}