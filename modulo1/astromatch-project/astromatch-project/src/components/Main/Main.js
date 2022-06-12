import React, { useState } from "react";
import MenuBar from "../MenuBar/MenuBar";

function Main() {
  const [selectedPage, setSelectedPage] = useState("choose-profile");

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "choose-profile":
        return <ProfilePage />;
      case "match-list":
        return <MatchListPage />;
      default:
        return <ProfilePage />;
    }
  };

  const usarChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };

  const usarMatchListPage = () => {
    setSelectedPage("match-list");
  };

  return (
    <MainContainer>
      <MenuBar
        usarChooseProfilePage={usarChooseProfilePage}
        usarMatchListPage={usarMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  );
}

export default Main;