var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1515215004,
  channelSecret: de6356263149968ff67a8f7096695b4c,
  channelAccessToken: f7jvSe73MPl9OMJ1XD5bifOes6EWrUg1CmAwnjw5+b3vMgZjwPE7tYfpkCmRpPoZNM38aWkkImA0dG1iUKi23XHrXqf+4ERoQnlUm8KyIPJxe2pN5NJP15GTXWX1lgnyER5fwhjC9rtkY1z1lRpthAdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});