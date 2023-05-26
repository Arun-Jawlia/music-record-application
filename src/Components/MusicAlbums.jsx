import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import getMusicRecord from "../Redux/AppReducer/action.js";

const MusicAlbums = () => {
  const dispatch = useDispatch();

  const { music_records, loading, error } = useSelector((state) => {
    return {
      music_records: state.AppReducer.music_records,
      loading: state.AppReducer.loading,
      error: state.AppReducer.error,
    };
  }, shallowEqual);

  console.log(music_records);

  useEffect(() => {
    dispatch(getMusicRecord);
  }, []);

  return (
    <>
      {music_records.length > 0 &&
        music_records?.map((album) => {
          return (
            <div>
              <div>{album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div>{album.genre}</div>
              <div>{album.year}</div>
            </div>
          );
        })}
    </>
  );
};

export default MusicAlbums;
