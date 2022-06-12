import React from "react";
import styled from "styled-components";

const ProfileViewContainer = styled.div`
  margin: 10px;
  border: 1px solid black;
  max-height: 400px;
`;

const ProfileImage = styled.img`
  width: 100%;
  display: block;
`;

const ProfileDetails = styled.div`
  padding: 16px;
`;

function ProfileView(props) {
  return (
    <ProfileViewContainer>
      <ProfileImage src={props.profile.photo} alt="Imagem de perfil" />
      <ProfileDetails>
        <p>
          {props.profile.name}, {props.profile.age}
        </p>
        <p>{props.profile.bio}</p>
      </ProfileDetails>
    </ProfileViewContainer>
  );
}

export default ProfileView;