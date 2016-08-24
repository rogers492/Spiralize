// instantiate the canvas...
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");

// initialize the global variables

  // for the spiral plot...
    // set the ink color
      ctx.strokeStyle = "red";
    // set canvas mid-point as DEFAULT origin on the form text input boxes - User may change this later
      xOrg.value = myCanvas.width/2;
      yOrg.value = myCanvas.height/2;
    // remember what these DEFAULTS are
      xOrigin = xOrg.value;
      yOrigin = yOrg.value;
    // set canvas origin to match DEFAULTS
      ctx.translate( xOrigin, yOrigin );

    // set some defaults that will generate an initial plot
      pPow.value = 3;     // for power p in r=t^p

      cSca.value = 0.7;   // for scale factor c in equiangular
      bSca.value = 1.45;  // for scale factor b in equiangular

      aSca.value = 7;    // for scale factor a in archimedes

      jSca.value = 100;  // for scale factor j in power reciprocal
      qPow.value = 0.5;  // for power q in power reciprocal

      kSca.value = 1000;  // for scale factor k in reciprocal

      iSca.value = 100;  // for scale factor i in i(ln(t))

      nTurns.value = 20;
      sSteps.value = 60;

      n = nTurns.value*Math.PI;      // limit of t (theta) ie: how many turns around the spiral goes
      s = Math.PI/sSteps.value;     // granularity of steps - pick a value that resolves to a curve rather than a polygon

    // set defaults for spiral equation
        spiralSelected = 'golden'; // to match the DEFAULT radio button selected

        x = 0;
        y = 0;
        r = 0;

    // for the text caption, set the DEFAULT origin
      xTextOrigin = 0.97*myCanvas.width/2;
      yTextOrigin = 0.97*myCanvas.height/2;
    // set the font
      ctx.font="24px Georgia";
    // initialize the caption text
      caption1 = "";
      caption2 = "";

// now check what was last plotted and use it to overide the default

if (localStorage.spiralLastPlotted) {
  spiralSelected = localStorage.spiralLastPlotted;
  radiobtn = document.getElementById(spiralSelected);
  radiobtn.checked = true;
}
