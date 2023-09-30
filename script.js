

const { ActivityTypes, TurnContext } = require('botbuilder');

const onMessage = async (turnContext) => {
  if (turnContext.activity.type === ActivityTypes.Message) {
    const replyText = `You said: "${turnContext.activity.text}"`;
    await turnContext.sendActivity(replyText);
  }
};

module.exports.MyBot = {
  onMessage,
};