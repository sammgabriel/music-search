
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

        $.each(lines, function (index, line) {

            $("#name-lyrics").append(line + "<br />");
        });

        $.each(songInfo, function (index, info) {

            if ((artist == info.artist) && (songName == info.song)) {

                $("#cover").attr("src", info.img);
                $("#song-info").append("<strong>Album: </strong>" + info.album + "<br / >");
                $("#song-info").append("<strong>Genre: </strong>" + info.genre + "<br / >");
                $("#audio").attr("href", info.url);
                $("#audio").attr("target", "_blank");
                $("#audio").text("Listen To This Song");
            }
        }); 
    });
});

$("#clear").on("click", function () {

    $("#name-lyrics").empty();
});