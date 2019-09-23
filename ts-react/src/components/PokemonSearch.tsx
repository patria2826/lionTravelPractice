import React, { Component } from 'react';
import User from '../interfaces/User.interface';

interface SearchState {
    err: boolean,
    pokemon: Pokemon
}

interface Pokemon {
    name: string,
    numberOfAbilities: number,
    baseExp: number,
    imgUrl: string
}

class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User) {
        super(props);
        this.state = {
            err: false,
            pokemon: null
        }
        this.pokemonRef = React.createRef();
    }
    onSearchClick = () => {
        const inputVal = this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`)
            .then(result => {
                if (result.status !== 200) {
                    this.setState({ err: true });
                    return;
                }
                result.json().then(data => {
                    this.setState({
                        err: false,
                        pokemon: {
                            name: data.name,
                            numberOfAbilities: data.abilities.length,
                            baseExp: data.base_experience,
                            imgUrl: data.sprites.front_default
                        }
                    })
                })
            })
    }
    render() {
        const { name: userName, numberOfPokemons } = this.props;
        const { err, pokemon } = this.state;

        let resultMarkUp;

        if (err) {
            resultMarkUp = <p>Pokemon not found, please try again.</p>
        } else if (this.state.pokemon) {
            resultMarkUp = <div>
                <img src={pokemon.imgUrl} alt="pokemon" className="pokemon-img" />
                <p>{pokemon.name} has {pokemon.numberOfAbilities} abilities and {pokemon.baseExp} base exp points.</p>
            </div>
        }

        return (
            <div>
                <p>User {userName}{numberOfPokemons && <span> has {numberOfPokemons} pokemons</span>}.</p>
                <input type="text" ref={this.pokemonRef} />
                <button onClick={this.onSearchClick} className="my-btn">Search</button>
                {resultMarkUp}
            </div>
        )
    }
}
export default PokemonSearch;