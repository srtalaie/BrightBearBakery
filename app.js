$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();

    let url = "/insta-collage";

    $.ajax({
        url: url,
        method: 'GET'
    }).then(function(response){
        let data = response.data;
        data.forEach(pics => {
            $('.insta-collage').append(`
                <a href="${pics.link}" target="_blank"><img class="responsive-img" src=${pics.images.thumbnail.url}></a>
            `)
        });
    });
});

