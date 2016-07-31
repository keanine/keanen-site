var pokeNames = [];
var pokeSeen = [];
var pokeOwn = [];

var gen = 1;

function AmntCaught() {
    var temp = 0;
    for (i = 0; i < pokeOwn.length; i++) {
        if (pokeOwn[i]) {
            temp++;
        }
    }
    document.getElementById("Stats").innerHTML += ("<p>OWN: " + temp + "</p>");
    return temp;
}

function AmntSeen() {
    document.getElementById("Stats").innerHTML = "";
    var temp = 0;

    for (i = 0; i < pokeSeen.length; i++) {
        if (pokeSeen[i]) {
            temp++;
        }
    }
    document.getElementById("Stats").innerHTML += ("<p>SEEN: " + temp + "</p>");
    return temp;
}

function Create()
{
    document.getElementById("PokeList").innerHTML = ""
    if (localStorage.getItem("list_names") === null)
    {
        SetData();
    }
    LoadAllData();

    AmntSeen();
    AmntCaught();

    for (i = 1; i < pokeNames.length + 1; i++)
    {
        if (typeof (Storage) !== "undefined")
        {
            // Code for localStorage/sessionStorage.

            var entryID = "'entry" + FormatNum(i, 3) + "'";
            var imageID = "'image" + FormatNum(i, 3) + "'";
            var ownID = "'own" + FormatNum(i, 3) + "'";

            if (pokeSeen[i - 1] == true)
            {
                var link = 'Pokemon/' + pokeNames[i - 1].toLowerCase() + '.html';
                var style = 'style = "text-decoration: none; color: #000;"';

                document.getElementById("PokeList").innerHTML +=
                    '<li class="PokeEntry" id="' + entryID + '"> <div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <a href="' + link + '" ' + style + '><div class="PokeInfo">' + FormatNum(i, 3) + ' - ' + pokeNames[i - 1] + '</div></a><div class="PokeCatch" id="' + ownID + '" onClick="ToggleOwn(' + imageID + ')"></div></li>';

                document.getElementById(imageID).style.backgroundImage = "url('Resources/Gen" + gen + "/" + "Pokemon/" + i + ".png')";

                if (pokeOwn[i - 1] == true)
                {
                    document.getElementById(ownID).style.backgroundImage = "url('Resources/Gen" + gen + "/CaughtBall.png')";
                }
            }
            else
            {
                document.getElementById("PokeList").innerHTML +=
                    '<li class="PokeEntry" id="' + entryID + '"> <div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <div class="PokeInfo">' + FormatNum(i, 3) + ' - ' + '----------' + '</div></li>';
            }
        }
        else 
        {
            alert("Sorry! No Web Storage support..");
        }
    }
    document.getElementById("PokeList").innerHTML +=
        '<li class="PokeEntry" onClick="ClearLocalStorage()">Clear Data</li>';

    //    if(greenMode)
    //    {
    //        var elements = document.getElementsByClassName("PokeEntry");
    //
    //        document.body.style.backgroundColor = "#83b60f";
    //        document.body.style.color = "#313330";
    //
    //        for (var i = 0; i < elements.length; i++) {
    //            elements[i].style.backgroundColor = "#83b60f";
    //        }
    //    }
}

function ClearLocalStorage()
{
    localStorage.clear();
    Create();
}

var nameArray = [];
var seenArray = [];
var ownArray = [];

function SetData()
{
    localStorage.clear();
    nameArray = [];
    seenArray = [];
    ownArray = [];

    CreatePokemon("Kanto");

    localStorage.setItem("list_names", JSON.stringify(nameArray));
    localStorage.setItem("list_seen", JSON.stringify(seenArray));
    localStorage.setItem("list_own", JSON.stringify(ownArray));
}

function LoadAllData()
{
    pokeNames = GetData("list_names");
    pokeSeen = GetData("list_seen");
    pokeOwn = GetData("list_own");
}

function CreatePokemonEntry(_name, _seen, _own)
{
    nameArray.push(_name.toUpperCase());
    seenArray.push(_seen);
    ownArray.push(_own);
}

function GetData(listName)
{
    var storedData = localStorage.getItem(listName);

    if (storedData)
    {
        return JSON.parse(storedData);
    }
}

function ToggleSeen(imageId) {
    var formattedNum = imageId.substr(5, 3);

    var num = parseInt(formattedNum);

    if (num - 1 < pokeSeen.length) {
        pokeSeen[num - 1] = !pokeSeen[num - 1];
    }
    if (pokeSeen[num - 1] == false)
    {
        pokeOwn[num - 1] = false;
    }

    localStorage.setItem("list_seen", JSON.stringify(pokeSeen));
    localStorage.setItem("list_own", JSON.stringify(pokeOwn));

    UpdateList(num, formattedNum);
}

function ToggleOwn(imageId) {
    var formattedNum = imageId.substr(5, 3);

    var num = parseInt(formattedNum);

    if (num - 1 < pokeOwn.length) {
        pokeOwn[num - 1] = !pokeOwn[num - 1];
    }
    localStorage.setItem("list_own", JSON.stringify(pokeOwn));

    UpdateList(num, formattedNum);
}

function UpdateList(num, formattedNum)
{
    var entryID = "'entry" + formattedNum + "'";
    var imageID = "'image" + formattedNum + "'";
    var ownID = "'own" + formattedNum + "'";

    if (pokeSeen[num - 1]) {
        var link = 'Pokemon/' + pokeNames[num - 1].toLowerCase() + '.html';
        var style = 'style = "text-decoration: none; color: #000;"';

        document.getElementById(entryID).innerHTML = '<div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <a href="' + link + '" ' + style + '><div class="PokeInfo">' + formattedNum + ' - ' + pokeNames[num - 1] + '</div></a><div class="PokeCatch" id="' + ownID + '" onClick="ToggleOwn(' + imageID + ')"></div>';
        document.getElementById(imageID).style.backgroundImage = "url('Resources/Gen" + gen + "/" + "Pokemon/" + num + ".png')";

        if (pokeOwn[num - 1] == true) {
            document.getElementById(ownID).style.backgroundImage = "url('Resources/Gen" + gen + "/CaughtBall.png')";
        }
    }
    else {
        document.getElementById("'entry" + formattedNum + "'").innerHTML = '<div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <div class="PokeInfo">' + formattedNum + ' - ' + '----------' + '</div>';
    }

    AmntSeen();
    AmntCaught();
}

function FormatNum(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function CreatePokemon(region) {
    if (region == "Kanto") {
        CreatePokemonEntry("Bulbasaur", false, false);
        CreatePokemonEntry("Ivysaur", false, false);
        CreatePokemonEntry("Venusaur", false, false);
        CreatePokemonEntry("Charmander", false, false);
        CreatePokemonEntry("Charmeleon", false, false);
        CreatePokemonEntry("Charizard", false, false);
        CreatePokemonEntry("Squirtle", false, false);
        CreatePokemonEntry("Wartortle", false, false);
        CreatePokemonEntry("Blastoise", false, false);
        CreatePokemonEntry("Caterpie", false, false);
        CreatePokemonEntry("Metapod", false, false);
        CreatePokemonEntry("Butterfree", false, false);
        CreatePokemonEntry("Weedle", false, false);
        CreatePokemonEntry("Kakuna", false, false);
        CreatePokemonEntry("Beedrill", false, false);
        CreatePokemonEntry("Pidgey", false, false);
        CreatePokemonEntry("Pidgeotto", false, false);
        CreatePokemonEntry("Pidgeot", false, false);
        CreatePokemonEntry("Rattata", false, false);
        CreatePokemonEntry("Raticate", false, false);
        CreatePokemonEntry("Spearow", false, false);
        CreatePokemonEntry("Fearow", false, false);
        CreatePokemonEntry("Ekans", false, false);
        CreatePokemonEntry("Arbok", false, false);
        CreatePokemonEntry("Pikachu", false, false);
        CreatePokemonEntry("Raichu", false, false);
        CreatePokemonEntry("Sandshrew", false, false);
        CreatePokemonEntry("Sandslash", false, false);
        CreatePokemonEntry("Nidoran♀", false, false);
        CreatePokemonEntry("Nidorina", false, false);
        CreatePokemonEntry("Nidoqueen", false, false);
        CreatePokemonEntry("Nidoran♂", false, false);
        CreatePokemonEntry("Nidorino", false, false);
        CreatePokemonEntry("Nidoking", false, false);
        CreatePokemonEntry("Clefairy", false, false);
        CreatePokemonEntry("Clefable", false, false);
        CreatePokemonEntry("Vulpix", false, false);
        CreatePokemonEntry("Ninetales", false, false);
        CreatePokemonEntry("Jigglypuff", false, false);
        CreatePokemonEntry("Wigglytuff", false, false);
        CreatePokemonEntry("Zubat", false, false);
        CreatePokemonEntry("Golbat", false, false);
        CreatePokemonEntry("Oddish", false, false);
        CreatePokemonEntry("Gloom", false, false);
        CreatePokemonEntry("Vileplume", false, false);
        CreatePokemonEntry("Paras", false, false);
        CreatePokemonEntry("Parasect", false, false);
        CreatePokemonEntry("Venonat", false, false);
        CreatePokemonEntry("Venomoth", false, false);
        CreatePokemonEntry("Diglett", false, false);
        CreatePokemonEntry("Dugtrio", false, false);
        CreatePokemonEntry("Meowth", false, false);
        CreatePokemonEntry("Persian", false, false);
        CreatePokemonEntry("Psyduck", false, false);
        CreatePokemonEntry("Golduck", false, false);
        CreatePokemonEntry("Mankey", false, false);
        CreatePokemonEntry("Primeape", false, false);
        CreatePokemonEntry("Growlithe", false, false);
        CreatePokemonEntry("Arcanine", false, false);
        CreatePokemonEntry("Poliwag", false, false);
        CreatePokemonEntry("Poliwhirl", false, false);
        CreatePokemonEntry("Poliwrath", false, false);
        CreatePokemonEntry("Abra", false, false);
        CreatePokemonEntry("Kadabra", false, false);
        CreatePokemonEntry("Alakazam", false, false);
        CreatePokemonEntry("Machop", false, false);
        CreatePokemonEntry("Machoke", false, false);
        CreatePokemonEntry("Machamp", false, false);
        CreatePokemonEntry("Bellsprout", false, false);
        CreatePokemonEntry("Weepinbell", false, false);
        CreatePokemonEntry("Victreebel", false, false);
        CreatePokemonEntry("Tentacool", false, false);
        CreatePokemonEntry("Tentacruel", false, false);
        CreatePokemonEntry("Geodude", false, false);
        CreatePokemonEntry("Graveler", false, false);
        CreatePokemonEntry("Golem", false, false);
        CreatePokemonEntry("Ponyta", false, false);
        CreatePokemonEntry("Rapidash", false, false);
        CreatePokemonEntry("Slowpoke", false, false);
        CreatePokemonEntry("Slowbro", false, false);
        CreatePokemonEntry("Magnemite", false, false);
        CreatePokemonEntry("Magneton", false, false);
        CreatePokemonEntry("Farfetch'd", false, false);
        CreatePokemonEntry("Doduo", false, false);
        CreatePokemonEntry("Dodrio", false, false);
        CreatePokemonEntry("Seel", false, false);
        CreatePokemonEntry("Dewgong", false, false);
        CreatePokemonEntry("Grimer", false, false);
        CreatePokemonEntry("Muk", false, false);
        CreatePokemonEntry("Shellder", false, false);
        CreatePokemonEntry("Cloyster", false, false);
        CreatePokemonEntry("Gastly", false, false);
        CreatePokemonEntry("Haunter", false, false);
        CreatePokemonEntry("Gengar", false, false);
        CreatePokemonEntry("Onix", false, false);
        CreatePokemonEntry("Drowzee", false, false);
        CreatePokemonEntry("Hypno", false, false);
        CreatePokemonEntry("Krabby", false, false);
        CreatePokemonEntry("Kingler", false, false);
        CreatePokemonEntry("Voltorb", false, false);
        CreatePokemonEntry("Electrode", false, false);
        CreatePokemonEntry("Exeggcute", false, false);
        CreatePokemonEntry("Exeggutor", false, false);
        CreatePokemonEntry("Cubone", false, false);
        CreatePokemonEntry("Marowak", false, false);
        CreatePokemonEntry("Hitmonlee", false, false);
        CreatePokemonEntry("Hitmonchan", false, false);
        CreatePokemonEntry("Lickitung", false, false);
        CreatePokemonEntry("Koffing", false, false);
        CreatePokemonEntry("Weezing", false, false);
        CreatePokemonEntry("Rhyhorn", false, false);
        CreatePokemonEntry("Rhydon", false, false);
        CreatePokemonEntry("Chansey", false, false);
        CreatePokemonEntry("Tangela", false, false);
        CreatePokemonEntry("Kangaskhan", false, false);
        CreatePokemonEntry("Horsea", false, false);
        CreatePokemonEntry("Seadra", false, false);
        CreatePokemonEntry("Goldeen", false, false);
        CreatePokemonEntry("Seaking", false, false);
        CreatePokemonEntry("Staryu", false, false);
        CreatePokemonEntry("Starmie", false, false);
        CreatePokemonEntry("Mr. Mime", false, false);
        CreatePokemonEntry("Scyther", false, false);
        CreatePokemonEntry("Jynx", false, false);
        CreatePokemonEntry("Electabuzz", false, false);
        CreatePokemonEntry("Magmar", false, false);
        CreatePokemonEntry("Pinsir", false, false);
        CreatePokemonEntry("Tauros", false, false);
        CreatePokemonEntry("Magikarp", false, false);
        CreatePokemonEntry("Gyarados", false, false);
        CreatePokemonEntry("Lapras", false, false);
        CreatePokemonEntry("Ditto", false, false);
        CreatePokemonEntry("Eevee", false, false);
        CreatePokemonEntry("Vaporeon", false, false);
        CreatePokemonEntry("Jolteon", false, false);
        CreatePokemonEntry("Flareon", false, false);
        CreatePokemonEntry("Porygon", false, false);
        CreatePokemonEntry("Omanyte", false, false);
        CreatePokemonEntry("Omastar", false, false);
        CreatePokemonEntry("Kabuto", false, false);
        CreatePokemonEntry("Kabutops", false, false);
        CreatePokemonEntry("Aerodactyl", false, false);
        CreatePokemonEntry("Snorlax", false, false);
        CreatePokemonEntry("Articuno", false, false);
        CreatePokemonEntry("Zapdos", false, false);
        CreatePokemonEntry("Moltres", false, false);
        CreatePokemonEntry("Dratini", false, false);
        CreatePokemonEntry("Dragonair", false, false);
        CreatePokemonEntry("Dragonite", false, false);
        CreatePokemonEntry("Mewtwo", false, false);
        CreatePokemonEntry("Mew", false, false);
    }
}