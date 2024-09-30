import {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard';

function Pokedex({query}) {
    const LIMIT = 50;
    const DB_URL = 'https://pokeapi.co/api/v2/pokemon/'

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon(){
            const pkmnList = []
            try{    
                for(let i=1; i<1026; i++){
                    const response = await fetch(DB_URL + i);
                    const data = await response.json();
                    const pkmn = {
                        id: i,
                        name: data.name,
                        img: data.sprites.front_default,
                        types: data.types.map((entry)=>entry.type.name)
                    }
                    pkmnList.push(pkmn);
                    
                }
                setPokemon(pkmnList);
            }
            catch(err){
                console.error(err);
            }
        }
        getPokemon();
    }, [])

    function loading(){
        return <h1>Loading...</h1>
    }
    function loaded(){
        return  <div className="cardContainer">
                    {pokemon.map((pkmn)=> <PokemonCard {...pkmn}/>)}
                </div>
    }

  return (pokemon?loaded():loading())
  
}

export default Pokedex