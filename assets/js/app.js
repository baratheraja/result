var app = angular.module('K15', ["ngRoute","ngSanitize","ngTouch","mobile-angular-ui","ngCookies","angular-flexslider"])

app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/',          {templateUrl: "home.html"});
  $routeProvider.when('/Home',    {templateUrl: "home.html"}); 
  $routeProvider.when('/admin',   {templateUrl: "admin.php"}); 

});


app.controller('mainController', function($rootScope, $scope,$cookies,$http){
$scope.names="";
$http.get("http://www.w3schools.com/website/Customers_JSON.php")
    .success(function(response) {$scope.names = response; })
     .error(function () {
      console.log('error')
    });
     console.log($scope.names);
     
$rootScope.count=0;
$rootScope.max_count=6;
 
$rootScope.events=["Contraptions","","","",""];

 $rootScope.winners1=[
 {
    eve:"1",
    position:"next-round",
    data:[
          [
            {name:"11",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"12",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"13",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"14",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"15",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]

         ]
  },
 {
    eve:"2",
    position:"Winners",
    data:[
        [
            {name:"21",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"22",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"23",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"23",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"25",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  },
 {
    eve:"3",
    position:"Winners",
    data:[
          [
            {name:"31",id:"k!1231",college:"College of Engineering Guindy"},
            {name:"33",id:"k!3453",college:"College of Engineering Guindy"}
          ],
          [
            {name:"34",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"35",id:"k!sdf57",college:"College of Engineering Guindy"}
          ],
          [
            {name:"36",id:"k!sdsasr",college:"College of Engineering Guindy"},
            {name:"37",id:"k!sdf5fg7",college:"College of Engineering Guindy"},
            {name:"34",id:"k!sdf23",college:"College of Engineering Guindy"},
 
          ]

          ]
        
        
  },
 {
    eve:"4",
    position:"Winners",
    data:[
        [
            {name:"41",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"42",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"43",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"44",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"45",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  },
 {
    eve:"5",
    position:"Winners",
    data:[
        [
            {name:"51",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"52",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"53",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"54",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"55",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  },
 {
    eve:"6",
    position:"Winners",
    data:[
        [
            {name:"61",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"62",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"63",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"64",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"65",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  },
 {
    eve:"7",
    position:"Winners",
    data:[
        [
            {name:"barathe",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"vn",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"ak",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"arun",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"sfsr",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  },
 {
    eve:"8",
    position:"Winners",
    data:[
        [
            {name:"barathe",id:"k!1234",college:"College of Engineering Guindy"},
            {name:"vn",id:"k!2345",college:"College of Engineering Guindy"},
            {name:"ak",id:"k!3456",college:"College of Engineering Guindy"}
          ],
          [
            {name:"arun",id:"k!sdf23",college:"College of Engineering Guindy"},
            {name:"sfsr",id:"k!sdf57",college:"College of Engineering Guindy"}

          ]
        ]
  }
 ];
 
 //$rootScope.winners2={eve:"Circuit-craze",position:"next-round",data:{["k!2312","Ragav","K!1234","harish","K!2323","sabari"],["k!2312","Rav","K!1234","werish","K!2323","scxvari"],["k3243!2312","dsfgav","sdf234","barish","K!2323","sdsdri"]}};
 $rootScope.disp=1;
 //$scope.winners3={position:"next-round",data:{["k!2312","Ragav","K!1234","harish","K!2323","sabari"],["k!2312","Rav","K!1234","werish","K!2323","scxvari"],["k3243!2312","dsfgav","sdf234","barish","K!2323","sdsdri"]};


 $scope.event={
  Engineering:["Contraptions","BIM","Godspeed","TCS Innovate","Paper Presentation","e-Zone","Circuit craze"],
  Coding:["Onsite Programming Contest ","Onsite Debugging","Heptathlon","Microsoft's Tame the Code"],
  Management:["Chaos Theory","K! Idol","Marketing Madness"],
  Quizzes:["K! Open Quiz","Biz Quiz","Sci-tech Quiz","School Quiz"],
  Online:["Athena","Cerebra","Dalal bull","Riddles of the Sphinx","Sherlock","Online Programming Contest"],
  Robotics:["RoboWars","To the ArK!","K!ronicles of Mars","Hawker Bot"],
  General:["Alcatraz","Math modeling","The fourth estate"]};

  $scope.event_categories=['General','Engineering','Robotics','Online','Quizzes','Coding','Management'];
  
  $scope.updates=['1.French police free hostages from two buildings following a shooting at the headquarters of satirical magazine Charlie Hebdo in Paris.',
  '2.Maithripala Sirisena is elected President of Sri Lanka.',
  '3.Lithuania becomes the 19th member of the Eurozone.',
  '4.sdsdsdgfdggfdgffffffffffffffffffffffffffffffffffffffffffff',
  '5.sdsdsffffffffffffffffffffffffdsd',
  '6.fgdgfbvbgfngfhhhhhhhhhhhhhhhgfgh',
  '7.Archaeologists announce the discovery of the tomb of Khentakawess III, a previously unknown ancient Egyptian queen.'
  ];

});


app.controller('Updater', ['$scope',function($scope){

  $scope.addUpdate=function(){
          console.log("Adding "+ $scope.updateData);
          $scope.updates.push($scope.updateData);
          console.log($scope.updates);
        };

}]);

app.controller('r1Controller', function($scope,$rootScope,$http){
  if($rootScope.disp==1)
  { 
    
    $http.get("http://www.w3schools.com/website/Customers_JSON.php")
    .success(function(response) {$scope.details = response;});
     $scope.eventname=$rootScope.events[0];    
    $rootScope.count++;
    
  }


  $scope.chooseNext=function(){
   
    
    
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
   
$http.get("http://www.w3schools.com/website/Customers_JSON.php")
    .success(function(response) {$scope.details = response;});

        
  $scope.eventname=$rootScope.events[0];
   
    //console.log("http://techteam.kurukshetra.org.in/result_check.php?event_name=Contraptions");
  };

});

app.controller('r2Controller', function($scope,$rootScope){


  if($rootScope.disp==1)
  { 
    $scope.eventname=$rootScope.winners1[1].eve;
    $scope.details=$rootScope.winners1[1];
    $rootScope.count++;
  }


  $scope.chooseNext=function(){
      // body...
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
    $scope.eventname=$rootScope.winners1[$scope.count].eve;
    $scope.details=$rootScope.winners1[$scope.count];
    
    };
  

});
app.controller('r3Controller', function($scope,$rootScope){

  if($rootScope.disp==1)
  { 
    $scope.eventname=$rootScope.winners1[2].eve;
    $scope.details=$rootScope.winners1[2];
  }


  $scope.chooseNext=function(){
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
    $scope.eventname=$rootScope.winners1[$scope.count].eve;
    $scope.details=$rootScope.winners1[$scope.count];
    
  

  };

});
app.controller('r4Controller', function($scope,$rootScope){

  if($rootScope.disp==1)
  { 
    
    $scope.eventname=$rootScope.winners1[3].eve;
    $scope.details=$rootScope.winners1[3];
    $rootScope.count++;
    
  }

  $scope.chooseNext=function(){
      // body...
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
    $scope.eventname=$rootScope.winners1[ $scope.count].eve;
    $scope.details=$rootScope.winners1[ $scope.count];
    
    
  };

});
app.controller('r5Controller', function($scope,$rootScope){


  if($rootScope.disp==1)
  { 
    $scope.eventname=$rootScope.winners1[4].eve;
    $scope.details=$rootScope.winners1[4];
    $rootScope.count++;
    
  }

  
  $scope.chooseNext=function(){
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
    $scope.eventname=$rootScope.winners1[ $scope.count].eve;
    $scope.details=$rootScope.winners1[ $scope.count];
    
    };

});
app.controller('r6Controller', function($scope,$rootScope){

  if($rootScope.disp==1)
  { 
    $scope.eventname=$rootScope.winners1[5].eve;
    $scope.details=$rootScope.winners1[5];
    $rootScope.count++;
    }

  
  $scope.chooseNext=function(){
    $rootScope.count=($rootScope.count+1)%$rootScope.max_count;
    $scope.eventname=$rootScope.winners1[ $scope.count].eve;
    $scope.details=$rootScope.winners1[ $scope.count];
    
    
   };

});