const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTgwNTkyODEwNTkyNDM2MjI0.XOTGmA._XX3c_i_Ot8Lh_SwMm8nXshwkIM);
