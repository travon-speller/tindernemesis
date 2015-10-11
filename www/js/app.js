// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])

.directive('noScroll', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {
            $element.on('touchmove', function (e) {
                e.preventDefault();
            });
        }
    }
})

.controller('CardsCtrl', function ($scope) {
    var cardTypes = [
        { image: 'foot.jpg', title: 'So much grass #hippster' },
        { image: 'foot.jpg', title: 'Way too much Sand, right?' },
        { image: 'foot.jpg', title: 'Beautiful sky from wherever' }
    ];

    $scope.cards = cardTypes;

    $scope.addCard = function (i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }

    for (var i = 0; i < 3; i++) $scope.addCard();

    $scope.cardSwipedLeft = function (index) {
        console.log('Left swipe');
    }

    $scope.cardSwipedRight = function (index) {
        console.log('Right swipe');
    }

    $scope.cardDestroyed = function (index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
});