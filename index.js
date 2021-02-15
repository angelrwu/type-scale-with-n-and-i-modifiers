function frequencyFormula(f0,r,i,n){
    let f1 = f0 * Math.pow(r,(i / n)) 
    return f1;
}

function scaleGenerator(f0 = 16, n = 6, r = 2){
    //f0 is the base value of the scale. The value from which you wish to start.
    // let f0 = 16;
    //n is for total Notes and any ratio generates n+2 usefule notes beyond it's range of 0-1 for the exponential i/n so the range 0-1 and n+1 or  0-2 or n or 0 or n+2  should still be useful
    // let n = 6;
    //r is the ratio from which we are creating this range the max value will be a multiple of this the ratio ex: r = 2 n = 3 and i =3 so the upper value will be f0(base value)* r  in this case f0*2.
    // let r = 2;

    let goldenRatio = 1.61803398875;
    let pi = Math.PI;
    let e = Math.E;
    
    // let indexOfBaseScale = Array(n).fill(0);
    // indexOfBaseScale = indexOfBaseScale.map((value,index)=>{return index});

    let baseScale = Array(n).fill(f0);
    baseScale = baseScale.map((value, index)=>{return frequencyFormula(value,r,index,n)});
    return baseScale;
}

function renderScale(f0 = 16, n = 6, r = 2){
    baseScale = scaleGenerator(f0, n, r);
    // let f0 = 16;
    index = 0;
    for (const iterator of document.getElementsByClassName("note")) {
        iterator.style.fontSize = baseScale[index]+"px";
        index++;
    };

    index = 0;
    for (const iterator of document.getElementsByClassName("noteInfo")) {
        iterator.innerHTML = (baseScale[index]/f0).toFixed(2)+"em / " + baseScale[index].toFixed(2)+"px";
        index++;
    };
}
renderScale();

function getData(){
    // baseSize
    // ratio 
    // notes
    f0 = document.getElementById("baseSize").value;
    r = document.getElementById("ratio").value;
    n = document.getElementById("notes").value;
    console.log(document.getElementById("baseSize").value);
    renderScale(f0, n, r);
}

function removeNote(isBeforeOrAfter, isAdd){
    console.log(isBeforeOrAfter,isAdd);
    renderScale(f0 = 16, n = 6, r = 2);
}
// document.addEventListener()