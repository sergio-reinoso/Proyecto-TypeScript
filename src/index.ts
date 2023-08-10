import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
    .then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))
    .finally( () => console.log('Fin de get pokemon') )