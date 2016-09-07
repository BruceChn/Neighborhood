(function(){
    'use strict';
    angular
        .module('myApp')
        .directive('tooltip', function(){
            var directive = {

                restrict: 'A',
                link:link
            };
            return directive;
            function link(scope,element){
                    $(element).hover(function(){
                        // on mouseenter
                        $(element).tooltip('show');
                    }, function(){
                        // on mouseleave
                        $(element).tooltip('hide');
                    });

            }
        });
})();
