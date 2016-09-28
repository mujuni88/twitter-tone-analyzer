var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var secrets = require('../config/secrets.js');

var tone_analyzer = new ToneAnalyzerV3({
    username: secrets.watson.username,
    password: secrets.watson.password,
    version_date: '2016-05-19'
});

exports.getToneAnalysis = function(req, res, next){
    
    // retrieve all tweets,
    // tweet.user: tweet.text + \n
    
    var text = req.tweets.reduce(function(prev, curr){
        return prev+curr.text+'\n';
    }, '');

    tone_analyzer.tone({ text: text }, function(err, tone) {
        if (err) {
            console.log(err);
            return;
        }
                
        console.log(JSON.stringify(tone, null, 2));
        // res.render('api/twitter', {
        //     title: 'Twitter API',
        //     tweets: req.tweets,
        //     tone:tone
        // });
        res.json({
            tweets:req.tweets,
            tones:tone
        });
        });
}