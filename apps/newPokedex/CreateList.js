function Create()
{
    for(i = 0; i < 151; i++)
    {
        if(pokeCount > i && pokeSeen[i] == true)
        {
            //Get Data
            var pokemonName = GetPokeName(i);

            document.getElementById("PokeList").innerHTML +=        
                '<li class="PokeEntry"> <div class="PokeImage" id="image' + FormatNum(i + 1, 3) + '"></div> <div class="PokeInfo">' + FormatNum(i + 1, 3) + ' - ' + pokemonName + '</div></li>';

            document.getElementById("image" + FormatNum(i + 1, 3)).style.backgroundImage = "url('Resources/Pokemon/" + FormatNum(i + 1, 3) + ".png')";
        }
        else
        {
            document.getElementById("PokeList").innerHTML +=
                '<li class="PokeEntry"> <div class="PokeImage"></div> <div class="PokeInfo">' + FormatNum(i + 1, 3) + ' - ----------</div></li>';
        }
    }

    if(greenMode)
    {
        var elements = document.getElementsByClassName("PokeEntry");

        document.body.style.backgroundColor = "#83b60f";
        document.body.style.color = "#313330";

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#83b60f";
        }
    }
}

function FormatNum(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}