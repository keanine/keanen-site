document.addEventListener("DOMContentLoaded", function() {
    const template_left = document.getElementById('template_video_left');
    const template_right = document.getElementById('template_video_right');
    var video_elements_left = document.getElementsByClassName("media_video_left");
    var video_elements_right = document.getElementsByClassName("media_video_right");
    
    for (var i = 0; i < video_elements_left.length; i++) {
        create_video_button(template_left, video_elements_left.item(i).id);
    }
    for (var i = 0; i < video_elements_right.length; i++) {
        create_video_button(template_right, video_elements_right.item(i).id);
    }
});

function create_video_button(template, video_id)
{
    var container = document.getElementById(video_id);

    const clone = template.content.cloneNode(true);
    container.appendChild(clone);

    container.querySelector("#video_container").addEventListener("click", function() { open_gallery(video_id); });
    // container.querySelector("#video_thumbnail").setAttribute("src", "https://img.youtube.com/vi/" + video_id + "/maxresdefault.jpg");
    container.querySelector("#video_thumbnail").setAttribute("src", "https://img.youtube.com/vi/" + video_id + "/hqdefault.jpg");
}

function exit_gallery()
{
    var gallery = document.getElementById('gallery');
    gallery.hidden = true;
    var gallery_media = document.getElementById('gallery_media');
    gallery_media.setAttribute("src", "about:blank");
}

function open_gallery(video_id)
{
    var gallery = document.getElementById('gallery');
    gallery.hidden = false;

    var gallery_media = document.getElementById('gallery_media');
    gallery_media.setAttribute("src", "https://www.youtube.com/embed/" + video_id + "?autoplay=1");
}