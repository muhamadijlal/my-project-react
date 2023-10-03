import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SearchInput from "./components/navbar/SearchInput";
import NumResult from "./components/navbar/NumResult";
import Box from "./components/main/Box";
import WatchedSummary from "./components/main/WatchedSummary";
import WatchedMoviesList from "./components/main/WatchedMoviesList";
import MovieList from "./components/main/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./customHooks/useMovies.js";
import { useLocalStorageState } from "./customHooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const { movies, error, loading } = useMovies(query);

  function handleSelectedMovie(id) {
    setSelectedID(id === selectedID ? null : id);
  }

  function handleDeletedWatched(id) {
    setWatched((watched) => watched.filter((movie) => id !== movie.imdbID));
  }

  function handleClosedDetail() {
    setSelectedID(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  return (
    <>
      <Navbar>
        <SearchInput query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {loading && <Loader />}
          {!loading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleClosedDetail}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeletedWatched={handleDeletedWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
