/*
 *
 * References:
 *
 * https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
 * https://stackoverflow.com/questions/1625865/replace-anchor-text-with-jquery
 * https://stackoverflow.com/questions/3039310/how-do-i-clear-the-text-contents-of-a-div-in-javascript
 * https://api.jquery.com/jquery.each/
 * 
*/

$("#song-form").hide();

$("#by-name").on("click", function () {

    $("#song-form").toggle();
});

$("#submit").on("click", function () {

    let artist = $("#artist").val();
    let songName = $("#song").val();
    let lyricsUrl = "https://api.lyrics.ovh/v1/" + artist + "/" + songName;
    let infoUrl = "/data/information.json";
    let lyricLines;
    let songInfo;

    let lyricsRequest = $.ajax({

        url: lyricsUrl,
        type: 'GET',
        dataType: 'json',
        success: function (result) {

            lyricLines = result.lyrics;

        }
    });

    let infoRequest = $.ajax({

        url: infoUrl,
        type: 'GET',
        dataType: 'json',
        success: function (result) {

            songInfo = result;
        }
    });

    $.when(lyricsRequest, infoRequest).then(function () {

        let lines = lyricLines.split("\n");

        // Referred to the jQuery API regarding the syntax for a foreach loop.

        $.each(lines, function (index, line) {

            $("#name-lyrics").append(line + "<br />");
        });

        $.each(songInfo, function (index, info) {

            if ((artist == info.artist) && (songName == info.song)) {

                // Referred to StackOverflow regarding how to change the source
                // attribute of an image tag.

                $("#cover").attr("src", info.img);
                $("#song-info").append("<strong>Album: </strong>" + info.album + "<br / >");
                $("#song-info").append("<strong>Genre: </strong>" + info.genre + "<br / >");
                $("#audio").attr("href", info.url);
                $("#audio").attr("target", "_blank");

                // Referred to StackOVerflow regarding how to change anchor tag
                // text.

                $("#audio").text("Listen To This Song");

            } 
        }); 
    });
});

$("#clear").on("click", function () {

    // Referred to StackOverflow regarding how to clear text contents of
    // an element.

    $("#name-lyrics").empty();
    $("#song-info").empty();
    $("#cover").attr("src", "");
    $("#audio").attr("href", "");
    $("#audio").attr("target", "");
    $("#audio").text("");
});