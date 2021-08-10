'use strict';

/**
 * Send a user a link to their avatar
 */

// Import the discord.js module

// Create an instance of a Discord client

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'av') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
  });
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with ";kick"
    if (message.content.startsWith(';kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`. Ai dat afara pe ${user.tag}. Speram sa ai motive bune!`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('nu poti sa dai afara pe acest membru');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });


 
 /**
  * Emitted for general debugging information.
  * @event Client#debug
  * @param {string} info The debug information
  */


// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // If the message is '!rip'
  if (message.content === ';rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});




client.on('ready', () => {
  console.log(`Conectat ca ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Conectat cu succes la botul cu numele de ${client.user.tag}!`);
});



// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('put your token here');
