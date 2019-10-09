import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard";
import axios from "axios";
import "./PokeGame.css";

interface pokemonNameAndId {
  name: string;
  id: number;
}

function PK(team1: number, team2: number): boolean {
  return team1 - team2 > 0;
}

function PokeGame(props: any) {
  const pokeLimit = 806;
  const memberCnt = 6;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/`;
  const [battlePoints, setBattlePoints] = useState<{ [id: string]: number }[]>(
    []
  );
  const [startPK, setStartPK] = useState<boolean>(false);

  const [team1, setTeam1] = useState<pokemonNameAndId[]>([]);
  const [team2, setTeam2] = useState<pokemonNameAndId[]>([]);

  const getTeam = (
    setTeam: (f: (pokemon: pokemonNameAndId[]) => pokemonNameAndId[]) => void
  ) => {
    for (let i = 0; i < memberCnt; i++) {
      axios
        .get(`${POKE_API}${Math.floor(Math.random() * pokeLimit) + 1}`)
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

  return (
    <div className="PokeGame">
      {team1.length > 0 && team2.length > 0 && (
        <div>
          <div className="PokeGame-team">
            <h2>Team 1</h2>
            <div className="PokeGame-members">
              {team1.map((pokemon, i) => {
                return (
                  <div key={i} className="PokeGame-each-member">
                    <Pokecard
                      pokeName={pokemon["name"]}
                      id={pokemon["id"]}
                      getBP={(battlePoint: number) => {
                        setBattlePoints(prev => {
                          return [
                            ...prev,
                            { [pokemon["id"].toString()]: battlePoint }
                          ];
                        });
                      }}
                    ></Pokecard>
                    {((): any => {
                      if (startPK) {
                        const oppoent = team2.map(pokemon => {
                          return pokemon["id"].toString();
                        })[i];
                        const idObj = battlePoints.filter(element => {
                          const key = Object.keys(element)[0];
                          if (
                            key === pokemon["id"].toString() ||
                            key === oppoent
                          ) {
                            return element[key];
                          }
                        });
                        if (idObj.length === 2) {
                          if (idObj[0][pokemon["id"]] && idObj[1][oppoent]) {
                            return (
                              idObj[0][pokemon["id"]] > idObj[1][oppoent] && (
                                <div className="PokeGame-winner">Winner!!</div>
                              )
                            );
                          }
                        }
                      }
                    })()}
                  </div>
                );
              })}
            </div>
          </div>
          {battlePoints[memberCnt * 2 - 1] && (
            <button
              onClick={() => {
                setStartPK(true);
              }}
            >
              Battle
            </button>
          )}
          <div className="PokeGame-team">
            <h2>Team 2</h2>
            <div className="PokeGame-members">
              {team2.map((pokemon, i) => {
                return (
                  <div key={i} className="PokeGame-each-member">
                    <Pokecard
                      pokeName={pokemon["name"]}
                      id={pokemon["id"]}
                      getBP={(battlePoint: number) => {
                        setBattlePoints(prev => {
                          return [...prev, { [pokemon["id"]]: battlePoint }];
                        });
                      }}
                    ></Pokecard>
                    {((): any => {
                      if (startPK) {
                        const oppoent = team1.map(pokemon => {
                          return pokemon["id"].toString();
                        })[i];
                        const idObj = battlePoints.filter(element => {
                          const key = Object.keys(element)[0];
                          if (
                            key === pokemon["id"].toString() ||
                            key === oppoent
                          ) {
                            return element[key];
                          }
                        });
                        if (idObj.length === 2) {
                          console.log(idObj);
                          console.log(
                            `${idObj[0][oppoent]} vs ${idObj[1][pokemon["id"]]}`
                          );
                          if (idObj[0][oppoent] && idObj[1][pokemon["id"]]) {
                            return (
                              idObj[0][oppoent] < idObj[1][pokemon["id"]] && (
                                <div className="PokeGame-winner">Winner!!</div>
                              )
                            );
                          }
                        }
                      }
                    })()}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default PokeGame;
