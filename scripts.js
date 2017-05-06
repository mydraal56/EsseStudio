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


