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



client.on('ready', () => {
  client.user.setActivity("Made by mihai ᴿᴳ#4328", {
    type: "STREAMING",
    url: "https://twitch.tv/mihai200677"
});
});


client.login('Ur token here');
