import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
    },
    {
      name: "Jeff Benzos",
      url:
        "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e"
    },{
      name:"Flower",
      url:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
    },{
      name:"Flower",
      url:"data:image/jpeg;base64,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"
    },{
      name:"Flower",
      url:"https://ichef.bbci.co.uk/news/976/cpsprodpb/957C/production/_111686283_pic1.png"
    },{
      name:"Flower",
      url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*"
    },{
      name:"Flower",
      url:"data:image/jpeg;base64,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"
    },{
      name:"Flower",
      url:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg"
    }
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfframe = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfframe(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;