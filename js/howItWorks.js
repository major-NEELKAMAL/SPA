
myApp.controller('HowItWorks',function($scope,$sce){
   $scope.howItWorks =$sce.trustAsHtml('<h2>\n' +
       '                How Does Getting A Website Through Us, Get You More Business?\n' +
       '            </h2>\n' +
       '            <ol class="numbered-circles">\n' +
       '                <li>\n' +
       '                    <span class="list-number">1</span>\n' +
       '                    <h3>\n' +
       '                        Get A Website Through Us\n' +
       '                    </h3>\n' +
       '                    <p>\n' +
       '                        We Create Your Website in less than 15 minutes\n' +
       '                    </p>\n' +
       '                </li>\n' +
       '                <li>\n' +
       '                    <span class="list-number">2</span>\n' +
       '                    <h3>\n' +
       '                        Easily Update Your Website\n' +
       '                    </h3>\n' +
       '                    <p>\n' +
       '                        Update your website regularly with updates, offers and promos. The more you update, the more business you get!\n' +
       '                    </p>\n' +
       '                </li>\n' +
       '                <li>\n' +
       '                    <span class="list-number">3</span>\n' +
       '                    <h3>\n' +
       '                        Get Discovered When People Search For Your Products &amp; Services\n' +
       '                    </h3>\n' +
       '                    <p>\n' +
       '                        Your Website gets discovered, ranks you better in google search and gives you more traffic on your website.\n' +
       '                    </p>\n' +
       '                </li>\n' +
       '                <li>\n' +
       '                    <span class="list-number">4</span>\n' +
       '                    <h3>\n' +
       '                        More Inquires means more business\n' +
       '                    </h3>\n' +
       '                    <p>\n' +
       '                        More Traffic converts to more leads which converts to more business and more profit\n' +
       '                    </p>\n' +
       '                </li>\n' +
       '            </ol>');
});