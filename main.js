//Sanduich Icon Menu Side Bar (G1Z)


function menuSideFunction()
{
    if (document.getElementById('sandA').style.display !== "flex")
    {
        document.getElementById('sandA').style.display = "flex";
        
    }
    else
    {
        document.getElementById('sandA').style.display = "none";
    }
}

//Sanduich Icon Menu Top Bar (G3Z)
function menuMobFunction()
{
    if (document.getElementById('sandB').style.display !== "flex")
    {
        document.getElementById('sandB').style.display = "flex";
        document.getElementById('sandB').style.height = "100vh";
        
    }
    else
    {
        document.getElementById('sandB').style.display = "none";
        document.getElementById('sandB').style.height = "0vh";
    }
}