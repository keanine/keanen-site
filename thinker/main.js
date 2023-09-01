const options = { hour12: false, hour: '2-digit', minute: '2-digit', weekday: 'long', year: '2-digit', month: '2-digit', day: '2-digit' };

window.addEventListener("DOMContentLoaded", (event) => {
    const profiles = [];
    profiles.push(new Author("keanine", "#BB0000", "#BB4444"));
    profiles.push(new Author("link", "#33AA33", "#55BB55"));
    profiles.push(new Author("doomguy", "#5555FF", "#8888FF"));

    const posts = [];
    posts.push(new Post(profiles[0], new Date("01/01/23 12:52"), "Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod."));
    posts.push(new Post(profiles[0], new Date("06/04/23 08:44"), "\"Go to bed, you'll feel better in the morning\" is the human version of \"Did you turn it off and turn it back on again?\""));
    posts.push(new Post(profiles[1], new Date("07/07/23 05:53"), "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume"));
    posts.push(new Post(profiles[2], new Date("02/18/23 23:21"), "Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still."));
    posts.push(new Post(profiles[0], new Date("04/29/23 17:23"), "If my calculator had a history, it would be more embarrassing than my browser history."));
    posts.push(new Post(profiles[1], new Date("05/03/23 12:55"), "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you."));
    posts.push(new Post(profiles[0], new Date("12/03/23 13:12"), "As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook."));
    posts.push(new Post(profiles[2], new Date("10/16/23 13:25"), "The Olympics should have a 'For Fun' section at the end of all the games so all the athletes can try different sports."));
    posts.push(new Post(profiles[1], new Date("04/14/23 08:00"), "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting."));
    posts.push(new Post(profiles[0], new Date("08/22/23 07:42"), "What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we're here but they've agreed not to contact us until we figure it out for ourselves."));
    posts.push(new Post(profiles[0], new Date("02/24/23 07:45"), "It's weird to think that nighttime is the natural state of the universe and daytime is only caused by a nearby, radiating ball of flame."));

    for (var i = 0; i < posts.length; i++) {
        addThink(posts[i]);
    }
});

function addThink(post)
{
    return addThinkManually(post.author, post.date, post.content);
}

function addThinkManually(author, date, content)
{
    const template = document.getElementById("template_post");
    const clone = template.content.cloneNode(true);

    //clone.querySelector(".post_author").style.backgroundColor = author.color;
    clone.querySelector(".post_author").style.color = author.color;
    // clone.querySelector(".post").style.backgroundColor = author.colorSecondary;

    clone.querySelector(".post_author").append("@" + author.name);
    clone.querySelector(".post_content").append(content);
    clone.querySelector(".post_date").append("THINKed on " + formatDate(date));
    clone.querySelector(".author_avatar").src = "profiles/" + author.name + ".png"
    
    document.getElementById("feed").appendChild(clone);
}

function formatDate(date)
{
    const dateTimeFormat = new Intl.DateTimeFormat('en-GB', options);
    const date_parts = dateTimeFormat.formatToParts(date);

    return date_parts[0].value + ", " + 
    date_parts[2].value + "/" + 
    date_parts[4].value + "/" + 
    date_parts[6].value + " at " + 
    date_parts[8].value + ":" + 
    date_parts[10].value;
}

class Post
{
    constructor(author, date, content)
    {
        this.author = author;
        this.date = date;
        this.content = content;
    }
}

class Author
{
    constructor(name, color, colorSecondary)
    {
        this.name = name;
        this.color = color;
        this.colorSecondary = colorSecondary;
    }
}