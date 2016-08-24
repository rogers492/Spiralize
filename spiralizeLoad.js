// Load a previously saved equation and parameters.

    var spiralSaved =[]; // array to load saved data objects into

//This is the event listener for the LOAD button
function spiralizeLoad(e) {
// check if we've saved any and if so, reload
  if (localStorage.spiralNextPrimaryKey) {

    var spiralSavedKey = "";
    var select = document.getElementById("spiralSavedList");

    for(var i = Number(localStorage.spiralNextPrimaryKey)-1; i >= 1; --i) {
        var option = document.createElement('option');

        spiralSavedKey = i.toString();
        spiralSaved[i] = JSON.parse(localStorage.getItem(spiralSavedKey));

      console.log("OBJ-O", spiralSaved[i].xOrg);
        option.text = option.value = spiralSaved[i].desc;
        select.add(option, 0);
    }
  } else {
      alert('Oops! No saved data found' );
  }


}

var spiralLoadButton = document.getElementById('spiralLoad');
spiralLoadButton.addEventListener('click', spiralizeLoad, false );

// this is the event listener for the saved spirals pick-list
function spiralizePick(e) {
  var spiralIndex = 1 + this.selectedIndex;
  var spiralOption = this.options[this.selectedIndex].text;

  document.getElementById('spiralDesc').value = spiralIndex + ':' + spiralOption;

//    document.getElementById('spiralDesc').value = spiralSaved.selected;

    console.log("OBJ-P", spiralSaved[1].xOrg);

  document.getElementById('xOrg').value = spiralSaved[spiralIndex].xOrg;
  document.getElementById('yOrg').value = spiralSaved[spiralIndex].yOrg;
  document.getElementById('aSca').value = spiralSaved[spiralIndex].aSca;
  document.getElementById('pPow').value = spiralSaved[spiralIndex].pPow;
  document.getElementById('cSca').value = spiralSaved[spiralIndex].cSca;
  document.getElementById('iSca').value = spiralSaved[spiralIndex].iSca;
  document.getElementById('jSca').value = spiralSaved[spiralIndex].jSca;
  document.getElementById('kSca').value = spiralSaved[spiralIndex].kSca;
  document.getElementById('bSca').value = spiralSaved[spiralIndex].bSca;
  document.getElementById('qPow').value = spiralSaved[spiralIndex].qPow;
  document.getElementById('nTurns').value = spiralSaved[spiralIndex].nTurns;
  document.getElementById('sSteps').value = spiralSaved[spiralIndex].sSteps;

// update the selected radio btn
  spiralSelected = spiralSaved[spiralIndex].selected;
  radiobtn = document.getElementById(spiralSelected);
  radiobtn.checked = true;


}

var select = document.getElementById('spiralSavedList');
select.addEventListener('click', spiralizePick, false );

// enable the pick list here !!!
