exports.run = (client, message, args) => {
    let replies = ["1% gay 🏳️‍🌈", "2% gay 🏳️‍🌈", "3% gay 🏳️‍🌈", "4% gay 🏳️‍🌈", "5% gay 🏳️‍🌈", "6% gay 🏳️‍🌈", "7% gay 🏳️‍🌈", "8% gay 🏳️‍🌈", "9% gay 🏳️‍🌈", "10% gay 🏳️‍🌈", "11% gay 🏳️‍🌈", "12% gay 🏳️‍🌈", "13% gay 🏳️‍🌈", "14% gay 🏳️‍🌈", "15% gay 🏳️‍🌈", "16% gay 🏳️‍🌈", "17% gay 🏳️‍🌈", "18% gay 🏳️‍🌈", "19% gay 🏳️‍🌈", "20% gay 🏳️‍🌈", "21% gay 🏳️‍🌈", "22% gay 🏳️‍🌈", "23% gay 🏳️‍🌈", "24% gay 🏳️‍🌈", "25% gay 🏳️‍🌈", "26% gay 🏳️‍🌈", "27% gay 🏳️‍🌈", "28% gay 🏳️‍🌈", "29% gay 🏳️‍🌈", "30% gay 🏳️‍🌈", "31% gay 🏳️‍🌈","32% gay 🏳️‍🌈","33% gay 🏳️‍🌈","34% gay 🏳️‍🌈","35% gay 🏳️‍🌈","36% gay 🏳️‍🌈","37% gay 🏳️‍🌈","38% gay 🏳️‍🌈","39% gay 🏳️‍🌈","40% gay 🏳️‍🌈","41% gay 🏳️‍🌈","42% gay 🏳️‍🌈","43% gay 🏳️‍🌈","44% gay 🏳️‍🌈","45% gay 🏳️‍🌈","46% gay 🏳️‍🌈","47% gay 🏳️‍🌈","48% gay 🏳️‍🌈","49% gay 🏳️‍🌈","50% gay 🏳️‍🌈","51% gay 🏳️‍🌈","52% gay 🏳️‍🌈","53% gay 🏳️‍🌈","54% gay 🏳️‍🌈","55% gay 🏳️‍🌈","56% gay 🏳️‍🌈","57% gay 🏳️‍🌈","58% gay 🏳️‍🌈","59% gay 🏳️‍🌈","60% gay 🏳️‍🌈","61% gay 🏳️‍🌈","62% gay 🏳️‍🌈","63% gay 🏳️‍🌈","64% gay 🏳️‍🌈","65% gay 🏳️‍🌈","66% gay 🏳️‍🌈","67% gay 🏳️‍🌈","68% gay 🏳️‍🌈","69% gay 🏳️‍🌈","70% gay 🏳️‍🌈","71% gay 🏳️‍🌈","72% gay 🏳️‍🌈","73% gay 🏳️‍🌈","74% gay 🏳️‍🌈","75% gay 🏳️‍🌈","76% gay 🏳️‍🌈","77% gay 🏳️‍🌈","78% gay 🏳️‍🌈","79% gay 🏳️‍🌈","80% gay 🏳️‍🌈","81% gay 🏳️‍🌈","82% gay 🏳️‍🌈","83% gay 🏳️‍🌈","84% gay 🏳️‍🌈","85% gay 🏳️‍🌈","86% gay 🏳️‍🌈","87% gay 🏳️‍🌈","88% gay 🏳️‍🌈","89% gay 🏳️‍🌈","90% gay 🏳️‍🌈","91% gay 🏳️‍🌈","92% gay 🏳️‍🌈","93% gay 🏳️‍🌈","94% gay 🏳️‍🌈","95% gay 🏳️‍🌈","96% gay 🏳️‍🌈","97% gay 🏳️‍🌈","98% gay 🏳️‍🌈","99% gay 🏳️‍🌈","100% gay 🏳️‍🌈",];
    let long = Math.floor((Math.random() * replies.length));
    message.channel.send(`> You are ${replies[long]}`)
}

const Discord = require("discord.js");
const client = new Discord.Client();