module.exports.run = async (client, message) => {

    if (!message.member.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please join a vc.")
    if(!message.member.voiceChannel.joinable) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "I don't have permissions to join this VC.");

    message.guild.voiceConnection.player.dispatcher.resume();

    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Resumed.")

}
module.exports.help = {
    name: "resume"
}

