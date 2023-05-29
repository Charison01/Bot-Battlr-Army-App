import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, onRelease, onEnlist}) {
  //your bot army code here...



  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* ...and here... */}
          {bots.map((bot) => (
            <div className="column" key={bot.id}>
              <div className="ui card">
                <BotCard bot = {bot} onRelease={onRelease} onEnlist={onEnlist}/>

              </div>
            </div>
          ))}
          {/* Your Bot Army */}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
