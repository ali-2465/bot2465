const tmi = require('tmi.js');
const config = require('./config.js');

// Define configuration options
const opts = {
  identity: {
    username: "bot2465",
    password: config.password
  },
  channels: [
    "ali2465", "kunszg", "haxk", "fallenxy", "emredesu", "okabar", "supinic", "dnaflamingo", "alexrock5963_", "mustiraikkonen"
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();


// remove comment signs below to see how JSON works and looks like, don't commit this to github when its uncommented
(async () => {

	// const got = require('got');
	// const apiCall = await got('https://kunszg.xyz/api/stats').json();

	// console.log(apiCall);
	// console.log("\n==========================\n");
	// console.log("this is how you access objects in javascript:\n");
	// console.log("commits on kunszgbots github: " + apiCall.github.commits);
})();

// Called every time a message comes in
function onMessageHandler(channel, user, message, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = message.trim();

  // If the command is known, let's execute it
  if (commandName === ")ping" || commandName === ")bing") {
    client.say(channel, `🅱ing :o`);
    return;
  } 
  if (commandName === ')info') {
    client.say(channel, `@${user['username']} I'm a simple chat bot that doesn't do anything useful, for now. Made by ali2465 :)`)
    return;
  }
  if (commandName === ')test') {
    const num = Math.floor(Math.random() * 999999999999) + 1; 
    client.say(channel, `@${user['username']} Test! # ${num}`);
    return;
  } 
  if (commandName === ')dice') {
    const num = Math.floor(Math.random() * 6) + 1; 
    client.say(channel, `🎲 ${user['username']} rolled a ${num}.`);
    return;
  } 
  if (commandName.split(' ')[0]  === ')kill') {
    const msg = message.toLowerCase().split(" ");
    if (!msg[1]) {
      client.say(channel, "No victim provided. :/");
      return;
    } 
    if (((msg[1] === "themselves" || msg[1] === "himself") || msg[1] === "herself" || msg[1] === "themself" || msg[1] === "itself")) {
      client.say(channel, 'No.');
      return;
    }
    if (msg[1] === "bot2465" || msg[1] === "me") {
      client.say(channel, "You can't kill the bot! >(");
      return;
    }
    if (msg[1] === "yourself" || msg[1] === "myself") {
      client.say(channel, "That doesn't make any sense! >(")
      return;
    }
    if (msg[1] === "em" || msg[1] === "them" || msg[1] === "'em") {
      client.say(channel, "Who are you trying to kill? RlyTho")
      return;
    }
    if (message.split(' ')[2]) {
      client.say(channel, `${user['username']} just killed ${msg[1]} ${message.split(' ')[2]}`);
      return; 
    }
      client.say(channel, `${user['username']} just killed ${msg[1]} monkaS`)
      return;
  } 
  if (commandName === ')commands') {
    client.say(channel, `)ping, )info, )test, )dice, )kill, )repo`);
    return;
  } 
  if (commandName === ')ec' && (user['user-id'] === '194267009' || user['user-id'] === '109259500')) {
    client.say(channel, `$gift cookie emredesu`);
    return;
  } 
  if (commandName === ')repo') {
    client.say(channel, `Link to the repository :) 👉 https://github.com/ali-2465/bot2465`);
    return;
  } 
  if (commandName === '!xd' && (channel === "#haxk" || channel === "#ali2465" )) {
    client.say(channel, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⠛⠛⠿⠿⣿⣿⣿⣿⣿ 
                         ⣿⣿⣯⡉⠉⠉⠙⢿⣿⠟⠉⠉⠉⣩⡇⠄⠄⢀⣀⣀⡀⠄⠄⠈⠹⣿⣿⣿ 
                         ⣿⣿⣿⣷⣄⠄⠄⠈⠁⠄⠄⣠⣾⣿⡇⠄⠄⢸⣿⣿⣿⣷⡀⠄⠄⠘⣿⣿ 
                         ⣿⣿⣿⣿⣿⣶⠄⠄⠄⠠⣾⣿⣿⣿⡇⠄⠄⢸⣿⣿⣿⣿⡇⠄⠄⠄⣿⣿ 
                         ⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠙⢿⣿⣿⡇⠄⠄⠸⠿⠿⠿⠟⠄⠄⠄⣰⣿⣿ 
                         ⣿⡿⠟⠁⠄⢀⣰⣶⣄⠄⠄⠈⠻⣿⡇⠄⠄⠄⠄⠄⠄⠄⢀⣠⣾⣿⣿⣿ 
                         ⣿⣷⣶⣶⣶⣿⣿⣿⣿⣷⣶⣶⣶⣿⣷⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿`);
    return;
  }
  if (commandName === ')friday' && (channel === "#ali2465" || channel === "#haxk" || channel === "#emredesu")) {
    client.say(channel, "🕺 https://youtu.be/DfEnIFV2-mc 🕺")
    return;
  }
  if (commandName === 'IkuWut' && (channel === "#ali2465" || channel === "mustiraikkonen")) {
    client.say(channel, "IkuWut 🤙 WUUUUUUUT ")
    return;
  }
  if (commandName === ')restart' && (user['user-id'] === '194267009' || user['user-id'] === '178087241')) {
    // check if current plaform is supported
    if (process.platform === "win32") {
      client.say(channel, 'This command cannot be ran outside of Linux, you should use it on server version of the bot :)');
      return;
    }

    try {
      const shell = require('child_process');

      const pullFromRepo = shell
        .execSync('sudo git pull')
        .toString()
        .split('\n')

      if (pullFromRepo[0].toLowerCase().includes('already up to date')) {
        client.say(channel, `PunOko bot is already up to date`);
        return;
      }

      const formattedResponse = pullFromRepo[0].toLowerCase().split('.')[0] + 
        ' | ' + pullFromRepo.splice(3).join('\n').replace(/-{2,}/g, "").replace(/\+{2,}/g, "");

      client.say(channel, `VoHiYo ${formattedResponse}`);
                  
      setTimeout(() => {
        shell.execSync(`pm2 restart bot`);
      }, 1000);
      return;
    } catch (err) {
      console.log(err)
    }
  }
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
} 