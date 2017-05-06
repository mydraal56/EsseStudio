//alert('this is a test');
//this is the test
//test test

function pageLoad(page) { 
    var g = document.getElementById("MainPage");
    
    $("#MainPage").load(page);
}

function menuBar() { 
    //alert('running menuBar function');
   // debugger;
    var menu = document.getElementById("menuList");
    var primary = document.getElementById("primary");

    console.log(menu.style.display)
    if(menu.style.display != 'block')
    {
        menu.style.display = "block";
        primary.style.display = "none";
    }
    else
    { 
        menu.style.display = 'none';
        primary.style.display = 'block';
    }
    
    //document.getElementById("menu-container").style.display = "block";
    
    //console.log(menu);
    //menu.style.display = 'block';

}