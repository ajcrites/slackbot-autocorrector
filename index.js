const slackbot = require("node-slackbot");
const config = require("./config.json");
const lodash = require("lodash");
const bot = new slackbot(config.token);

if (!lodash.isObject(config.replacements)) {
    console.error("You must specify a replacements object");
    process.exit(1);
}

bot.use((message, cb) => {
  if ("message" == message.type) {
      let matched = false;
      let newMessage = message.text;
      lodash.each(config.replacements, (replace, search) => {
          search = new RegExp(search, "g");
          if (search.test(newMessage)) {
              matched = true;
              newMessage = newMessage.replace(search, replace);
          }
      });

      if (matched) {
          bot.api('chat.update', {
              ts: message.ts,
              channel: message.channel,
              text: newMessage,
              parse: "none",
          });
      }
  }
  cb();
});

bot.connect();
