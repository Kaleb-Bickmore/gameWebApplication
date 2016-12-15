var express=require('express');
var app=express();
var nameToUse;
var request=require('superagent');
var parser=require('body-parser');
var pgp = require('pg-promise')();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + '/views/css'));
app.use(parser.urlencoded({extended:false}))
app.use(parser.json())

app.get('/',function(req,res){
  res.render('index',{q:questions});
});

app.post('/results',function(req,res){
  var fullName = req.body.name;
  var password = req.body.password;
  nameToUse=fullName
            res.render('results', {
              name:fullName

             });

  });

  app.post('/resultsOfQuiz',function(req,res){
    var fullName = nameToUse;
    var x=0;
      var question1=req.body.question1;
      var question2=req.body.question2;
      var question3=req.body.question3;
      var question4=req.body.question4;
      var question5=req.body.question5;
      if(question1=="indiana"){
         x++;
     }
      if(question2=="burt macklin"){
         x++;
     }
      if(question3=="duke silver"){
         x++;
     }
      if(question4=="lil sebastian"){
         x++;
     }
     if(question5=="mouse rat"){
         x++;
     }
     var y;
     if(x==5){
         y="complete success, you are a true pawneean!"
     }
     if(x==4||x==3){
         y="almost good enough!"

     }
     if(x==2||x==1){
         y="you are sitting on the edge of failure."
     }
     if(x==0){
         y="complete failure."
     }
     function createUsers(req, res, next) {
  db.none('insert into users(name, score)' +
      'values(${'+fullName+'}, ${'+x+'})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
        
        });
    })
    .catch(function (err) {s
      return next(err);
    });
}
     db.any('SELECT * FROM users')
      .then(function(user){

     res.render('resultsOfQuiz', {
       name:fullName,
       message:y,
       score:x,
       users:user

      });
        .catch(function(err){
           return next(err);
           });



         });
app.listen(3000);
console.log('server on port 3000')
