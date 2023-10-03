/* eslint-disable react/prop-types */
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDeletedWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeletedWatched={onDeletedWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
