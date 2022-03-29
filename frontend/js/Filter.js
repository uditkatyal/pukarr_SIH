document.getElementById('og-filters').onchange = function(){
    var dataRows = document.getElementsByClassName('data-row');
    add_class_hide(dataRows);
    var experience= document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var availability = document.getElementById('availability').value;
    var relocation = document.getElementById('relocation').value;
    var location = document.getElementById('location').value;
    var filterValues = new Array(experience, education, availability, relocation,location);
    var filteredBy = filterValues.filter(Boolean);
    var flag = 0;
    var flag_no = 0;
    
    for(i=0; i<dataRows.length; i++){
        for(j=0; j<filteredBy.length; j++){
          if(dataRows[i].classList.contains(filteredBy[j])){
            flag++;
          }
          else{
            flag--;
          }
        }
        if(flag == filteredBy.length){
          dataRows[i].classList.remove("hide"); 
        }
        flag = 0;
    }
    for(k=0; k<dataRows.length; k++){
     if(dataRows[k].classList.contains('hide')){
       flag_no++;
     }
     else{
       flag_no--;
     }
    }
    if(dataRows.length == flag_no){
      document.getElementById('no-match').classList.remove("hide"); 
    }
  }
  
  
  function remove_class_hide(selectedRows){
    for(a=0; a<selectedRows.length; a++){
      selectedRows[a].classList.remove("hide"); 
    }
  }
  function add_class_hide(selectedRows){
    for(b=0; b<selectedRows.length; b++){
      selectedRows[b].classList.add("hide"); 
    }
  }