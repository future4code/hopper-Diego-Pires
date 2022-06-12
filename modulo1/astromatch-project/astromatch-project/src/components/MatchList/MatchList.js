import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchListItem from "./MatchListItem";


function MatchListPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://xyzpegarmatches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}

export default MatchListPage;