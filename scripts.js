//alert('this is a test');
//this is the test
//test test
/*var app = angular.module("mainBody", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", { 
        templateUrl: "https://s3.amazonaws.com/essestudio.com/home/home.html"
    })
    .when("/staff", { 
        templateUrl: "https://s3.amazonaws.com/essestudio.com/staff/staff.html"
    });

});*/

function menuBar() { 
    //alert('running menuBar function');
   // debugger;
    var menu = document.getElementById("secondary");
    //var menuList = document.getElementsByClassName("menu");
    var menuItems = document.getElementsByClassName("menu-li");
    //var primary = document.getElementById("primary");

    console.log(menu.style.display)
    if(menu.style.width != '40%')
    {
        //debugger; 
        menu.style.width = "40%";
        setTimeout(function(){
            for (var i = 0; i < menuItems.length; i++)
            {
                //menuItems[i].attributes.transition-delay(2s);
                menuItems[i].style.width = "100%";
               // menuItems[i].style.display = 'block';
                
            }
        }, 500); 
      //  primary.style.display = "none";
    }
    else
    { 
        
        for (var i = 0; i < menuItems.length; i++)
        {
            menuItems[i].style.width = "0";
            //menuItems[i].style.display = "none";
        }
        menu.style.width = "0"; 
      //  primary.style.display = 'block';
    }
    
    //document.getElementById("menu-container").style.display = "block";
    
    //console.log(menu);
    //menu.style.display = 'block';

}


