/* eslint-disable react/prop-types */
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import tempMovieData from "./data/tempMovieData";
// import SearchInput from "./components/navbar/SearchInput";
// import NumResult from "./components/navbar/NumResult";
// import Box from "./components/main/Box";
// import WatchedSummary from "./components/main/WatchedSummary";
// import WatchedMoviesList from "./components/main/WatchedMoviesList";
// import MovieList from "./components/main/MovieList";
// import tempWatchedData from "./data/tempWatchedData";

import StarRating from "./components/stars/StarRating";

function App() {
  // const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);

  return (
    <StarRating
      defaultRating={2}
      messages={["bad", "good", "awesome", "perfect", "amazing"]}
    />
    // <>
    //   <Navbar>
    //     <SearchInput />
    //     <NumResult movies={movies} />
    //   </Navbar>
    //   <Main>
    //     <Box>
    //       <MovieList movies={movies} />
    //     </Box>
    //     <Box>
    //       <WatchedSummary watched={watched} />
    //       <WatchedMoviesList watched={watched} />
    //     </Box>
    //   </Main>
    // </>
  );
}

export default App;
