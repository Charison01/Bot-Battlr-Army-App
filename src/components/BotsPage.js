import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const dataAPI = "http://localhost:8002/bots"

function BotsPage() {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])
  const [bots, setBots] = useState([]);
  // Fetching data from the server


  useEffect(() => {
    fetch(dataAPI)
    .then((response) => response.json())
    .then((data) => setBots(data))
  },[bots])



  function deleteBot(bot){
    fetch(`${dataAPI}/${bot.id}`,
    {method:"DELETE"})
    .then(setEnlistedBots((previousEnlistedBots) => previousEnlistedBots.filter((deletedBot) => deletedBot.id !== bot.id) ))
    alert(`Bot with ID ${bot.id} has been deleted`)

  }
  //Handle the enlisting of bots into the army
  const handleEnlist = (bot) => {

    // const botAlreadyEnlisted =enlistedBots.find((existingBot) => existingBot.id === bot.id)
    const botClassExists = enlistedBots.find(existingBot => existingBot.bot_class === bot.bot_class)
    if(!enlistedBots.includes(bot) && !botClassExists) {
    
      //add bot to the enlisted array of robots
      const updatedEnlistedBots = [...enlistedBots, bot];
      setEnlistedBots(updatedEnlistedBots)
    } else return
  }
  //Handle discharge of bot from the army
  const handleDischarge = (bot) => {
    setEnlistedBots(enlistedBots.filter((armyBot) => armyBot.id !== bot.id)) //Removing bot from the army
  }

  return (
    <div>
      <YourBotArmy bots={enlistedBots} onRelease={deleteBot} onEnlist={handleDischarge}/>
      <BotCollection bots={bots} onEnlist={handleEnlist} onRelease={deleteBot}/>
    </div>
  )
}

export default BotsPage;
