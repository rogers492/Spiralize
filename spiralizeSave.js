// save the current equation and parameters.  This is the event listener for the SAVE button
function spiralizeSave(e) {
  // check if we've saved before and what the next available primary key is
  if (localStorage.spiralNextPrimaryKey) {
    spiralPrimaryKey = localStorage.spiralNextPrimaryKey;
  } else {
      spiralPrimaryKey = '1'; // note that the key is a string!
  }

  // increment the next primary key
  localStorage.spiralNextPrimaryKey = (Number(spiralPrimaryKey) + 1).toString();

  // collect the save data into an object
  var spiralSaved = {};
    spiralSaved.selected = spiralSelected;
    spiralSaved.xOrg = xOrg.value;
    spiralSaved.yOrg = yOrg.value;
    spiralSaved.aSca = aSca.value;
    spiralSaved.pPow = pPow.value;
    spiralSaved.cSca = cSca.value;
    spiralSaved.iSca = iSca.value;
    spiralSaved.jSca = jSca.value;
    spiralSaved.kSca = kSca.value;
    spiralSaved.bSca = bSca.value;
    spiralSaved.qPow = qPow.value;
    spiralSaved.nTurns = nTurns.value;
    spiralSaved.sSteps = sSteps.value;
    spiralSaved.desc = document.getElementById('spiralDesc').value;

  // save the data object with the primary key
  var spiralSavedJSON = JSON.stringify(spiralSaved);
  localStorage.setItem(spiralPrimaryKey, spiralSavedJSON );
console.log( spiralPrimaryKey, "JSON-I", spiralSavedJSON );
}

var spiralSaveButton = document.getElementById('spiralSave');
spiralSaveButton.addEventListener('click', spiralizeSave, false );
