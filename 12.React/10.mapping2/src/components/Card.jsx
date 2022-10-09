import React from "react";

function Card(prop) {
  return (

        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {prop.emoji}
            </span>
            <span>{prop.name}</span>
          </dt>
          <dd>
          {prop.meaning}
          </dd>
        </div>

  );
}

export default Card;