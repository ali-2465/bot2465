const tmi = require('tmi.js');
const config = require('./config.js');

// Define configuration options
const opts = {
  identity: {
    username: "bot2465",
    password: config.password
  },
  channels: [
    "ali2465", "kunszg", "haxk", "alzexx", "fallenxy", "emredesu"
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
function onMessageHandler (channel, user, message, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = message.trim();

  // If the command is known, let's execute it
  if (commandName === ')ping') {
    client.say(channel, `🅱ing :o`);
    return;
  } 
  if (commandName === ')info') {
    client.say(channel, `@${user['username']} I'm a simple chat bot that doesn't do anything useful, for now. Made by ali2465 :)`)
    return;
  }
  if (commandName === ')test') {
    const num = Math.floor(Math.random() * 999999999999) + 1; 
    client.say(channel, `Test! # ${num}`);
    return;
  } 
  if (commandName === ')dice') {
    const num = Math.floor(Math.random() * 6) + 1; 
    client.say(channel, `🎲 You rolled a ${num}.`);
    return;
  } 
  if (commandName === ')kill') {
    client.say(channel, `⣿⣿⣿⣿⣿⣿⣿⠟⣉⣉⣉⡉⠉⠙⠛⠿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⠋⣰⣿⣿⣿⣿⣿⣦⠄⠄⠄⠙⠋⢁⣠⣤⣄⠄⠄⠈⢻⣿⣿⣿ ⣿⣿⣿⣿⡟⢁⣾⣿⣿⣿⣿⣿⣿⣿⣷⣴⣤⣤⣶⣿⣿⣿⣿⣧⠄⠄⠂⢹⣿⣿ ⣿⣿⡿⠋⣴⣿⣿⣿⡿⠟⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⡆⠄⠄⠄⣿⣿ ⣿⠟⣠⣾⣿⣿⣿⠏⣰⣾⣿⣿⣷⡌⢻⣿⣿⣿⠋⣴⣶⣶⣶⣦⡁⠄⠄⠄⣿⣿ ⠏⠄⣛⣿⣿⣿⣿⡀⣿⣿⣦⣿⣿⡟⠘⣿⣿⣿⠘⣿⣿⣤⣿⣿⡇⠄⠄⠄⠘⢿ ⠄⢠⠁⡖⢬⡛⢯⠄⠈⠙⠛⠛⠉⠄⣰⣿⣿⣿⣄⠈⠙⠛⠛⠋⠄⠄⢀⡔⢲⠘ ⡆⠄⢢⡙⠦⣙⠶⠤⣄⣀⡀⠄⠴⠿⠿⢿⣿⣿⣿⣷⣤⣀⡀⠄⣀⠔⡁⠴⠖⢠ ⡇⠄⠄⢻⣶⣌⠳⢦⣄⡀⠉⠉⠉⠑⠒⠲⠶⠶⠶⠶⣶⣶⡶⠟⣡⠜⠄⠄⢰⣿ ⣿⠄⠄⠄⠻⣿⣿⣦⣍⡻⢷⣦⣄⡀⠄⠄⠄⠄⠄⠄⠄⢀⣠⡾⢃⠄⠄⠄⣸⣿ ⢋⣴⣆⠄⠄⠈⠻⢿⣿⣿⣶⣬⣉⡛⠷⣶⣦⣤⣤⣴⠶⠟⡋⠔⠁⠄⢀⣴⣿⣿ ⣿⣿⣿⣷⣦⣀⠄⠄⠉⠻⠿⢿⠿⢿⣷⣶⣤⠤⠤⠖⠒⠁⠄⠄⢀⣴⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⣦⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿ 枯れる`);
    return;
  } 
  if (commandName === ')commands') {
    client.say(channel, `)ping, )info, )test, )dice, )kill`);
    return;
  } 
  if (commandName === ')daily%' && (user['user-id'] === '194267009')) {
    client.say(channel, `$% dayave`);
    return;
  } 
  if (commandName === ')ec' && (user['user-id'] === '194267009' || user['user-id'] === '109259500')) {
    client.say(channel, `$gift cookie emredesu`);
    return;
  } 
  if (commandName === '!xd') {
    client.say(channel, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⠛⠛⠿⠿⣿⣿⣿⣿⣿ 
                         ⣿⣿⣯⡉⠉⠉⠙⢿⣿⠟⠉⠉⠉⣩⡇⠄⠄⢀⣀⣀⡀⠄⠄⠈⠹⣿⣿⣿ 
                         ⣿⣿⣿⣷⣄⠄⠄⠈⠁⠄⠄⣠⣾⣿⡇⠄⠄⢸⣿⣿⣿⣷⡀⠄⠄⠘⣿⣿ 
                         ⣿⣿⣿⣿⣿⣶⠄⠄⠄⠠⣾⣿⣿⣿⡇⠄⠄⢸⣿⣿⣿⣿⡇⠄⠄⠄⣿⣿ 
                         ⣿⣿⣿⣿⠟⠁⠄⠄⠄⠄⠙⢿⣿⣿⡇⠄⠄⠸⠿⠿⠿⠟⠄⠄⠄⣰⣿⣿ 
                         ⣿⡿⠟⠁⠄⢀⣰⣶⣄⠄⠄⠈⠻⣿⡇⠄⠄⠄⠄⠄⠄⠄⢀⣠⣾⣿⣿⣿ 
                         ⣿⣷⣶⣶⣶⣿⣿⣿⣿⣷⣶⣶⣶⣿⣷⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿`);
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

      const formatedResponse = pullFromRepo[0] + ' ' + (
        pullFromRepo[2]
        .replace(/-{2,}/g, "")
        .replace(/\+{2,}/g, "");   
        )

      console.log(pullFromRepo, formatedResponse);

      return
      if (pullFromRepo.toLowerCase().includes('already up to date')) {
        client.say(channel, `PunOko bot is already up to date`);
        return;
      }
      client.say(channel, `VoHiYo FBCatch ${pullFromRepo}`);
                  
      setTimeout(() => {
        shell.execSync(`sudo pm2 restart bot.js`);
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
// What the fuck is this code?