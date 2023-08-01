window.addEventListener("DOMContentLoaded", (event) => {
    // const clone = template.content.cloneNode(true)

    // var feed_posts = document.getElementsByClassName("post");

    // for (var i = 0; i < feed_posts.length; i++) {
    //     feed_posts.item(i).querySelector(".post_author").append(feed_posts.item(i).getAttribute("author"));
    //     feed_posts.item(i).querySelector(".post_content").append(feed_posts.item(i).getAttribute("content"));
    //     feed_posts.item(i).querySelector(".post_date").append(feed_posts.item(i).getAttribute("date"));
    // }

    addThink("keanine", "01/01/23", "Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.");
    addThink("keanine", "01/01/23", "\"Go to bed, you'll feel better in the morning\" is the human version of \"Did you turn it off and turn it back on again?\"");
    addThink("keanine", "01/01/23", "Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume");
    addThink("keanine", "01/01/23", "Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.");
    addThink("keanine", "01/01/23", "If my calculator had a history, it would be more embarrassing than my browser history.");
    addThink("keanine", "01/01/23", "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.");
    addThink("keanine", "01/01/23", "As a kid my parents taught me to not believe everything I see on TV, now I have to teach them to not believe everything they see on Facebook.");
    addThink("keanine", "01/01/23", "The Olympics should have a 'For Fun' section at the end of all the games so all the athletes can try different sports.");
    addThink("keanine", "01/01/23", "Tall people are expected to use their reach to help shorter people, but if a tall person were to ask a short person to hand them something they dropped on the floor it'd be insulting.");
    addThink("keanine", "01/01/23", "What if Earth is like one of those uncontacted tribes in South America, like the whole Galaxy knows we're here but they've agreed not to contact us until we figure it out for ourselves.");
});

function addThink(author, date, content)
{
    const template = document.getElementById("template_post");

    const clone = template.content.cloneNode(true);
    clone.querySelector(".post_author").append("@" + author);
    clone.querySelector(".post_content").append(content);
    clone.querySelector(".post_date").append("thinked on " + date + "");
    
    document.getElementById("feed").appendChild(clone);
}