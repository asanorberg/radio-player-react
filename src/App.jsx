import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ChannelList from "./components/ChannelList";
import Search from "./components/Search";
import Skeleton from "./skeletons/Skeleton";

import "./App.css";

function App() {
  const [channels, setChannels] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then((result) => result.json())
      .then((data) => {
        setChannels(data.channels);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // }, 4000);
  }, []);

  const useStorageState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useStorageState("search", "");

  const searchedChannels = channels.filter(
    (channel) =>
      channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      channel.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="wrapper">
      <div>
        <Search
          id="search"
          value={searchTerm}
          onInputChange={handleSearch}
        ></Search>
      </div>
      {!loading && (
        <div className="channel-list">
          <ChannelList channels={searchedChannels} />
        </div>
      )}

      {loading && [1, 2, 3, 4, 5, 6, 7].map((n) => <Skeleton key={n} />)}
    </div>
  );
}

export default App;
