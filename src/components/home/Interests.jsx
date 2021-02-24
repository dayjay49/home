import React from "react";

const divStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const Interests = () => {
  return (
    <div
      id="interests"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
              <div className="col text-center">
                <p className="lead text-center" style={{ fontSize: "28px" }}>
                  Gaming
                </p>
                <img src="https://img.icons8.com/nolan/2x/controller.png" />
                <p className="lead text-center">
                  I have always loved gaming. Gameboys were the first devices I
                  played games on. Then playstation games had become my
                  interests, and now I have limited myself on PC gaming. My
                  favourite games right now include Dead by Daylight and
                  Valorant!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{ fontSize: "28px" }}>
                  Music
                </p>
                <img src="https://img.icons8.com/nolan/2x/headphones.png" />
                <p className="lead text-center">
                  I love all kinds of genres in music. My favourite genres
                  always change time to time, but my current favourites are
                  Korean Hip-Hop and R&B. I have always had an interest in
                  producing/making my own beats so I can enjoy having fun jam
                  sessions with my friends!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{ fontSize: "28px" }}>
                  Tennis
                </p>
                <img src="https://img.icons8.com/nolan/2x/tennis.png" />
                <p className="lead text-center">
                  I first played tennis in grade 9 in High School. Before that,
                  I preferred playing basketball and soccer. But I loved how it
                  is an individual-focused sport vs. team-sport. I had played
                  competitively for my high school, but stopped playing
                  competitively since university. I still love playing friendly
                  matches with my friends!
                </p>
              </div>
              <div className="col text-center">
                <p className="lead text-center" style={{ fontSize: "28px" }}>
                  Food
                </p>
                <img src="https://img.icons8.com/nolan/128/meal.png" />
                <p className="lead text-center">
                  I LOVE all kinds of food. Coming from a Korean background, I
                  love Korean cuisine and my favourite dish is pork belly BBQ
                  with kimchi-jjigae. My other favourite dishes include sushi,
                  tom yum, and sharwarmas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
