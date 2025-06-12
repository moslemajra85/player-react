import players from '../Player';
import Player from './Player';

const PlayerList = () => {
  const results = players.map((p) => <Player player={p} />);

  console.log(results);
  return (
    <div className='players'>
      {players.map((p) => (
        <Player player={p} />
      ))}
    </div>
  );
};

export default PlayerList;
