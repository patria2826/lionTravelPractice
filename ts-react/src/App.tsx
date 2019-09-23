import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <PokemonSearch name="A" numberOfPokemons={5}/> */}
      <PokemonSearch name="B"/>
    </div>
  );
}

export default App;
