import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard";
import axios from "axios";
import LazyLoad from "react-lazyload";
import "./PokeGame.css";

interface pokemonNameAndId {
  name: string;
  id: number;
}

function PK(team1: number, team2: number): boolean {
  return team1 - team2 > 0;
}

function PokeGame(props: any) {
  const pokeLimit = 807;
  const memberCnt = 6;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/`;
  const [battlePoints, setBattlePoints] = useState<{ [id: string]: number }[]>([]);

  const [team1, setTeam1] = useState<pokemonNameAndId[]>([]);
  const [team2, setTeam2] = useState<pokemonNameAndId[]>([]);

  const getTeam = (
    setTeam: (f: (pokemon: pokemonNameAndId[]) => pokemonNameAndId[]) => void
  ) => {
    for (let i = 0; i < memberCnt; i++) {
      axios
        .get(`${POKE_API}${Math.floor(Math.random() * pokeLimit)}`)
        .then(response => {
          setTeam((prev: pokemonNameAndId[]) => {
            //to do the rest things, prev(original value of team1) must not be empty
            return [
              ...prev,
              { name: response.data.name, id: response.data.id }
            ];
          });
        });
    }
  };

  useEffect(() => {
    getTeam(setTeam1);
    getTeam(setTeam2);
  }, []);


  useEffect(() => { console.log(battlePoints) })
  return (
    <div className="PokeGame">
      <div className="PokeGame-team">
        <h2>Team 1</h2>
        <LazyLoad>

          {(team1.length > 0 && team2.length > 0) &&
            <div className="PokeGame-members">
              {team1.map((pokemon, i) => {
                return (
                  <div key={i} className="PokeGame-each-member">
                    <Pokecard
                      pokeName={pokemon["name"]}
                      id={pokemon["id"]}
                      getBP={(battlePoint: number) => { setBattlePoints((prev) => { return [...prev, { [pokemon["id"].toString()]: battlePoint }] }) }}
                    ></Pokecard>
                    {/* {battlePoints[team1[i].id] > battlePoints[team2[i].id] && <div className="PokeGame-winner">Winner!!</div>} */}
                  </div>
                );
              })}
            </div>}
        </LazyLoad>

      </div>
      <div className="PokeGame-team">
        <h2>Team 2</h2>
        <div className="PokeGame-members">
          {team2.length > 0 &&
            team2.map((pokemon, i) => {
              return (
                <div key={i} className="PokeGame-each-member">
                  <Pokecard
                    pokeName={pokemon["name"]}
                    id={pokemon["id"]}
                    getBP={(battlePoint: number) => { setBattlePoints((prev) => { return [...prev, { [pokemon['id']]: battlePoint }] }) }}
                  ></Pokecard>
                  <div className="PokeGame-winner">Winner!!</div>
                </div>
              );
            })}
        </div>
      </div>
      {/* {() => {
        if (team1.length > 0 && team2.length > 0) {
            for(let i =0;i<memberCnt;i++){
                PK(team1[i],team2[i])
            }
        }
      }} */}
    </div>
  );
}
export default PokeGame;
