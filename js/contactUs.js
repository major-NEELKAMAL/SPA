
myApp.controller('ContactUs',function($scope,$sce){
   var addr='S-59, 2nd Floor, Zoom Plaza Mall,'
        +'<br/>\n'
        +'below Maxus cinema,Gorai-2,'
        +'<br/>\n'
        +'Borivali (West),Mumbai, Maharashtra 400092';
    $scope.telNumber = '02233756330';
    $scope.mailId = 'hi@websites.co.in' ;
    $scope.address = $sce.trustAsHtml(addr);
});