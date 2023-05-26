import React, { useEffect } from "react";
import styled from "styled-components";
import MusicAlbums from "../Components/MusicAlbums";
import FilterSort from "../Components/FilterSort";

const MusicRecords = () => {
  return (
    <Wrapper>
      <WrapperFilter>
        <FilterSort />
      </WrapperFilter>
      <WrapperAlbums>
        <MusicAlbums />
      </WrapperAlbums>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  background-color: #e8f4f8;
`;

// border : ${({color})=>`1px solid ${color}`}

const WrapperFilter = styled.div`
  width: 20%;
  border: 1px solid lightgray;
  padding:10px;
  `;
  const WrapperAlbums = styled.div`
  width: 75%;
  border: 1px solid lightgray;
  padding:10px;
  overflow: scroll;
  scroll-behavior: smooth;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center; 
  grid-gap:10px;
  text-align: center;
`;

export default MusicRecords;
