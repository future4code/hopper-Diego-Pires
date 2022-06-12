import React, { useEffect, useState } from "react";
import axios from "axios";

import OptionButtons from "./ChooseButtons";
import ProfileView from "./ProfileCard";
import ProfileView from "./profileView";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https:xyzpegarperfil"
      )
      .then((res) => {
        console.log("PERFIL: ", res.data.profile);
        setProfileToChoose(res.data.profile);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      id: profileToChoose.id,
      choice: choice
    };
    setProfileToChoose(undefined);
    axios
      .post(
        "https:xyzpegarpost",
        body
      )
      .then((res) => {
        console.log(res);
        getProfileToChoose();
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileView profile={profileToChoose} />
          <OptionButtons onClickNo={onClickNo} onClickYes={onClickYes} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ChooseProfilePage;
