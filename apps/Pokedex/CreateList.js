var pokeNames = [];
var pokeSeen = [];
var pokeOwn = [];

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

    for (i = 1; i < 151; i++)
    {
        if (typeof (Storage) !== "undefined")
        {
            // Code for localStorage/sessionStorage.

            var entryID = "'entry" + FormatNum(i, 3) + "'";
            var imageID = "'image" + FormatNum(i, 3) + "'";

            if (pokeSeen[i - 1] == true)
            {
                var link = 'Pokemon/' + pokeNames[i - 1].toLowerCase() + '.html';
                var style = 'style = "text-decoration: none; color: #000;"';

                document.getElementById("PokeList").innerHTML +=
                    '<li class="PokeEntry" id="' + entryID + '"> <div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <a href="' + link + '" ' + style + '><div class="PokeInfo">' + FormatNum(i, 3) + ' - ' + pokeNames[i - 1] + '</div></a></li>';

                document.getElementById(imageID).style.backgroundImage = "url('Resources/Pokemon/" + pokeNames[i - 1].toLowerCase() + ".png')";
            }
            else if(i != 151)
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

function CreatePokemon(region)
{
    if (region == "Kanto")
    {
        CreatePokemonEntry("Bulbasaur",  false, false);
        CreatePokemonEntry("Ivysaur",    false, false);
        CreatePokemonEntry("Venusaur",   false, false);
        CreatePokemonEntry("Charmander", false, false);
        CreatePokemonEntry("Charmeleon", false, false);
        CreatePokemonEntry("Charizard",  false, false);
        CreatePokemonEntry("Squirtle",   false, false);
        CreatePokemonEntry("Wartortle",  false, false);
        CreatePokemonEntry("Blastoise",  false, false);
    }
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

function ToggleSeen(imageId)
{
    var formattedNum = imageId.substr(5, 3);
    
    var num = parseInt(formattedNum);

    if (num - 1 < pokeSeen.length) {
        pokeSeen[num - 1] = !pokeSeen[num - 1];
    }
    localStorage.setItem("list_seen", JSON.stringify(pokeSeen));

    var entryID = "'entry" + formattedNum + "'";
    var imageID = "'image" + formattedNum + "'";

    if (pokeSeen[num - 1])
    {
        var link = 'Pokemon/' + pokeNames[num - 1].toLowerCase() + '.html';
        var style = 'style = "text-decoration: none; color: #000;"';

        document.getElementById(entryID).innerHTML = '<div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <a href="' + link + '" ' + style + '><div class="PokeInfo">' + formattedNum + ' - ' + pokeNames[num - 1] + '</div></a>';
        document.getElementById(imageID).style.backgroundImage = "url('Resources/Pokemon/" + pokeNames[num - 1].toLowerCase() + ".png')";
    }
    else
    {
        document.getElementById("'entry" + formattedNum + "'").innerHTML = '<div class="PokeImage" id="' + imageID + '" onClick="ToggleSeen(' + imageID + ')"></div> <div class="PokeInfo">' + formattedNum + ' - ' + '----------' + '</div>';
    }

    AmntSeen();
    AmntCaught();
}

//Other

function FormatNum(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}