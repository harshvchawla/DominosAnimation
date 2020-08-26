console.log("Loading index.js");
const globalCountOfDominosTotal = 351;

for (var dominoCreationCounter = 1; dominoCreationCounter <= globalCountOfDominosTotal; dominoCreationCounter++) {
    var thisDomino = document.createElement("img");
    thisDomino.id = "dominoId"+dominoCreationCounter;
    thisDomino.src="assets/domino.jpg";
    document.getElementById('allDominosDiv').appendChild(thisDomino);
}
$('#allDominosDiv img').addClass('eachDominosClass');

let globalDelayValue = 20;
function Wait() {
    console.log("this delay="+globalDelayValue);
    return new Promise(r => setTimeout(r, globalDelayValue))
}

let globalDominoTransitionCounter = 0;
function getProm() {
    return new Promise(resolve => {
        thisElementId = "#dominoId"+globalDominoTransitionCounter++;
        console.log("this element id="+thisElementId);
        $(thisElementId).addClass('rotateClass');
        resolve();
    })
}

let chain = Promise.resolve();
$( "img" ).click(function() {
    let thisId = $(this).attr('id');
    let dominoNumber = thisId.match(/(\d+)/)[0];
    console.log("dominoClicked entered having id="+thisId+", and num="+dominoNumber);
    
    globalDominoTransitionCounter = dominoNumber;

    for(var dominoTransitionCounter=dominoNumber; dominoTransitionCounter<=globalCountOfDominosTotal; dominoTransitionCounter++)
    {
        console.log("transitioning dominoNum="+dominoTransitionCounter);
        chain = chain.then(()=>getProm())
         .then(Wait);
    }

  });