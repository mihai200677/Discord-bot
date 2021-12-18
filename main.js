const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log('_____________________________________')
  console.log('|')
  console.log('|')
  console.log(`| Logged in as ${client.user.tag}!`);
  console.log('|')
  console.log('|')
  console.log('_____________________________________')
});



// WORKING STATUS FOR PUT DOWN: STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
client.on('ready', () => {
  client.user.setActivity('Made by Made by mihai ᴷˣ#4328',{ type: 'PLAYING' });
   console.log("Activity set work")
});

//HERE YOU CAN SET IDLE ETC
client.on('ready', () => {
  client.user.setStatus('online');
    console.log("Status work")
    });



client.login('Ur token here');
