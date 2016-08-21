
function spiralize(xOriginNew, yOriginNew) {
  // save the spiral selected
    localStorage.spiralSaved = spiralSelected;
  // check if the User has changed the origin and if so, set the new origins for both spiral plot and caption text
    //console.log("org", xTextOrigin, yTextOrigin);
  if ( xOriginNew != xOrigin ) {
    var xOriginOffset = xOriginNew - xOrigin;
    ctx.translate( xOriginOffset, 0 );
    xTextOrigin = xTextOrigin - xOriginOffset;
    xOrigin = xOriginNew;
  }
  if ( yOriginNew != yOrigin ) {
    var yOriginOffset = yOriginNew - yOrigin;
    ctx.translate( 0, yOriginOffset );
    yTextOrigin = yTextOrigin - yOriginOffset;
    yOrigin = yOriginNew;
  }

      // console.log("tra", xTextOrigin, yTextOrigin);

  // begin path at origin
  ctx.beginPath();

  for (t = s; t < n; t = t + s) {
      // calc next point using polar coords
      switch (spiralSelected) {
        case 'simple equiangular':   // r = e^(0.1t) : Equiangular/Logarithmic/Bernoulli's spiral
          r = Math.pow(Math.E, (0.1*t));
          break;
        case 'equiangular':     // r = c * e^(t cot b) : Equiangular/Logarithmic/Bernoulli's spiral - alt: b is the equiangle
          r = cSca.value * Math.pow(Math.E, (t * (1/Math.tan(bSca.value))));
          break;
        case 'r=t^p':
          r = Math.pow(t, pPow.value);    // r = t^p : Variation on Archimedes spiral
          break;
        case 'parabolic':    // r = t^2 : Parabolic/Fermat's spiral
          r = t*t;
          break;
        case 'archimedes':    // r = a * t : Archimedes spiral
          r = aSca.value * t;
          break;
        case 'ln':
          r = iSca.value*Math.log(t);   // r = i(ln(t)) : Variation on Archimedes spiral
          break;
        case 'powreciprocal':
          r = jSca.value / Math.pow(t, qPow.value);
          break;
        case 'reciprocal':
          r = kSca.value / t;
          break;
        case 'golden':
          r = Math.pow(Math.E, (0.30635*t));
          break;
        default:
          alert('Oops! No spiral was selected');
          break;
      }
      // convert polar coords to cartesian coords
      // x = r cos t
      // y = r sin t
        x = r*Math.cos(t);
        y = r*Math.sin(t);

      // add new point to path
        ctx.lineTo(x, y);
      // draw the whole path
        ctx.stroke();
  }

  // plot the text...
  if (showEquation.checked) {
    switch (spiralSelected) {
      case 'simple equiangular':   // r = e^(0.1t) : Equiangular/Logarithmic/Bernoulli's spiral
        caption1 = "r(t) = e";
        caption2 = "0.1t";
        break;
      case 'equiangular':   // r = c * e^(t cot b) : Equiangular/Logarithmic/Bernoulli's spiral - alt: b is the equiangle
        caption1 = "r(t) = ce";
        caption2 = "    t cot b";
        break;
      case 'r=t^p':
        caption1 = "r(t) = t";
        caption2 = pPow.value;
        break;
      case 'parabolic':
        caption1 = "r(t) = t";
        caption2 = "2";
        break;
      case 'archimedes':
        caption1 = "r(t) = at";
        caption2 = "";
        break;
      case 'ln':
        caption1 = "r(t) = i(ln(t))";
        caption2 = "";
        break;
      case 'powreciprocal':
        caption1 = "r(t) = j/t";
        caption2 = "    q";
        break;
      case 'reciprocal':
        caption1 = "r(t) = k(1/t)";
        caption2 = "";
        break;
      case 'golden':
        caption1 = "r(t) = e";
        caption2 = "0.30635t";
        break;
      default:
        caption1 = "";
        caption2 = "";
        break;
    }

    // for aesthetic reasons I want the text to run up the right side of the plot, so to get the text to do that...
    ctx.rotate(-90*Math.PI/180); // rotate the whole canvas by 90 deg about the origin, wherever that is, which by default is at top left, not centre!
    // transpose TextOrigin x and y to account for the 90 deg rotation
      var textOriginTranspose = xTextOrigin;
      xTextOrigin = -yTextOrigin;
      yTextOrigin = textOriginTranspose;
      // console.log("ro1", xTextOrigin, yTextOrigin);

    // now write the vertical text; caption1 is the normal text and caption2 is the superscript text
    ctx.fillText( caption1, xTextOrigin, yTextOrigin ); // normal text in 24px Georgia (default set in initialize routine)
    ctx.font = "16px Georgia"; // smaller font for superscript
    ctx.textBaseline = "bottom";  // shift the text baseline to superscript
    ctx.fillText( caption2, xTextOrigin+75, yTextOrigin-8); // superscript text in 16px Georgia
    ctx.font = "24px Georgia"; // set font size back to default
    ctx.textBaseline = "alphabetic"; // set font baseline back to default

    ctx.rotate(+90*Math.PI/180); // rotate the canvas back once the text is plotted, otherwise it gets very confusing!
    // transpose TextOrigin x and y again to account for the second 90 deg rotation
      var textOriginTranspose = xTextOrigin;
      xTextOrigin = yTextOrigin;
      yTextOrigin = -textOriginTranspose;
      // console.log("ro2", xTextOrigin, yTextOrigin);
  }
}
