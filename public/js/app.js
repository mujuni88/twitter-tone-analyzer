'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngResource'])
    .controller('HomeCtrl', HomeCtrl)
    .directive('enterSubmit', enterSubmit);

function HomeCtrl($scope, $http) {
    var vm = this;
    
    vm.analyze = analyze;
    vm.getImageFromTweet = getImageFromTweet;
    vm.getTones = getTones;
    vm.getToneClass = getToneClass;
    vm.getScore = getScore;
    vm.isLoading = false;
    vm.dummyTones = [
        {
            "score": 0.515005,
            "tone_id": "anger",
            "tone_name": "Anger"
        },
        {
            "score": 0.022964,
            "tone_id": "disgust",
            "tone_name": "Disgust"
        },
        {
            "score": 0.02921,
            "tone_id": "fear",
            "tone_name": "Fear"
        },
        {
            "score": 0.508345,
            "tone_id": "joy",
            "tone_name": "Joy"
        },
        {
            "score": 0.033378,
            "tone_id": "sadness",
            "tone_name": "Sadness"
        }
    ];
    
    function analyze(query){
        vm.isLoading = true;
        $http.get('/api/twitter/' + query).
        success(function(data) {
            vm.form = data;
            vm.isLoading = false;
        });
    }
    
    function getImageFromTweet(tweet){
        return tweet.user.profile_image_url.replace('_normal', '');
    }
    
    function getTones(tones){
        if(!tones) return;
        
        return tones.document_tone.tone_categories[0].tones;
    }
    
    function getToneClass(tone_id){
        var classes = {
            "anger":"progress-bar-danger",
            "disgust":"progress-bar-warning",
            "fear":"progress-bar-info",
            "joy":"progress-bar-success",
            "sadness":"progress-bar-sad",
        };
        
        console.log('TONE ID', tone_id,classes[tone_id]);
        
        return classes[tone_id];
    }
    
    function getScore(score){
        
        var out = {
            width:Math.floor(parseFloat(score) * 100)+"%"
        };
        
        console.log(out, score);
        return out;
    }
}

function enterSubmit() {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                var code = event.keyCode || event.which;
                if (code === 13) {
                    if (!event.shiftKey) {
                        event.preventDefault();
                        scope.$apply(attrs.enterSubmit);
                    }
                }
            });
        }
    }
}