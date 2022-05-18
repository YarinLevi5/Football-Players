import Header from "../components/Header-Folder/Header";
import playersData from "../playersData.json";
import PlayerCard from "./PlayerCard";
import Footer from "./Footer/Footer";
import React from "react";
import PlayerItems from "./PlayersItems";
import navJson from "../nav.json";
import titlesJson from "../titles.json";

function Wrapper() {
  let getNavTitles = () =>
    navJson.map((li, idx) => <Header key={idx} nav={li} />);

  let getPlayerDetails = () => {
    return playersData.map((player, idx) => (
      <>
        <PlayerCard key={idx} player={player} />
        <Footer key={idx + 1} player={player} />
      </>
    ));
  };

  let getTitles = () =>
    titlesJson.map((title, idx) => (
      <PlayerItems key={idx} title={title.title} />
    ));

  let getNavItems = () =>
    playersData.map((nav, idx) => <PlayerItems key={idx} item={nav.item} />);

  return (
    <React.Fragment>
      {getNavTitles()}
      {getPlayerDetails()}
      {getTitles()}
      {getNavItems()}
    </React.Fragment>
  );
}

export default Wrapper;
