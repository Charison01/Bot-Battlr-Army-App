import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, onEnlist, onRelease}) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} onRelease={onRelease}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
