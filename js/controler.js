var app =angular.module('myApp', []);
app.controller("dangnhap",function($scope){
   
    $scope.dangnhap =function(){
        
        if($scope.name=="Sang" && $scope.matkhau=="123"){
            alert("Dang nhap thanh cong");
        }
        else
        {
            alert("Dang nhap khong thanh cong");
        }
    }
    $scope.names =[
        {name:'Jani', country:'Norway'},
        {name:'Jani', country:'Norway'},
        {name:'Jani', country:'Norway'},
        {name:'Jani', country:'Norway'},
    ];
});

