const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "bot2465",
    password: "oauth:t0gcp8imlmysz5pm91ndeidw09350j"
  },
  channels: [
    "ali2465", "kunszg", "haxk", "okabar", "alzexx"
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === ')ping') {
    client.say(target, `🅱ing :o`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
  if (commandName === ')info') {
    client.say(target, `@${context['username']} I'm a simple chat bot that doesn't do anything useful, for now. Made by ali2465 :)`)
      console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
  if (commandName === ')test') {
    const num = Math.floor(Math.random() * 999999999999) + 1; 
    client.say(target, `Test! # ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
  if (commandName === ')dice') {
    const num = Math.floor(Math.random() * 6) + 1; 
    client.say(target, `🎲 You rolled a ${num}.`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
