
var pokeCount = 0;
var pokeNames = [];
var pokeSeen = [];
var pokeCaught = [];

var greenMode = false;

window.onload = CreateDatabase();


function AddPokemon(name, type1, type2, seen, caught)
{
    pokeCount++;
    pokeNames.push(name.toUpperCase());
    pokeSeen.push(seen);
    pokeCaught.push(caught);
}

function CreateDatabase()
{
    AddPokemon("Bulbasaur",  "Grass", "Poison", true, false);
    AddPokemon("Venasaur",   "Grass", "Poison", true, false);
    AddPokemon("Ivysaur",    "Grass", "Poison", true, false);
    AddPokemon("Charmander", "Fire",  "---",    true, false);
    AddPokemon("Charmeleon", "Fire",  "---",    true, false);
    AddPokemon("Charizard",  "Fire",  "Flying", true, false);
    AddPokemon("Squirtle",   "Water", "---",    true, false);
    AddPokemon("Wartortle",  "Water", "---",    true, false);
    AddPokemon("Blastoise",  "Water", "---",    true, false);
}

function GetPokeName(pokeIndex)
{
    return pokeNames[pokeIndex];
}

function AmntCaught() {
    var temp = 0;

    for (i = 0; i < pokeCaught.length; i++) {
        if (pokeCaught[i]) {
            temp++;
        }
    }
    document.write(temp);
    return temp;
}

function AmntSeen() {
    var temp = 0;

    for (i = 0; i < pokeSeen.length; i++) {
        if (pokeSeen[i]) {
            temp++;
        }
    }
    document.write(temp);
    return temp;
}