window.addEventListener('load', init);

function init()
{
    //We add event listeners on all elements. 2 with (default) bubbling and 2 with capturing
    document.getElementById('element1').addEventListener('click', element1ClickHandler);
    document.getElementById('button1').addEventListener('click', button1ClickHandler);
    document.getElementById('element2').addEventListener('click', element2ClickHandler, true);
    document.getElementById('button2').addEventListener('click', button2ClickHandler, true);
}

function element1ClickHandler(e)
{
    console.log("EL1: " + e);
    e.stopPropagation();
}

function button1ClickHandler(e)
{
    console.log("BTN1: " + e);
    e.stopPropagation();
}

function element2ClickHandler(e)
{
    console.log("EL2: " + e);
    e.stopPropagation();
}

function button2ClickHandler(e)
{
    console.log("BTN2: " + e);
    e.stopPropagation();
}

