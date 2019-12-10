
$("#song-form").hide();

$("#by-name").on("click", function () {

    $("#song-form").toggle();
});

$("#submit").on("click", function () {

    let artist = $("#artist").val();
    let songName = $("#song").val();
    let lyricsUrl = "https://api.lyrics.ovh/v1/" + artist + "/" + songName;
    let lyricLines;

    let request = $.ajax({

        url: lyricsUrl,
        type: 'GET',
        dataType: 'json',
        success: function (result) {

            lyricLines = result.lyrics;

        }
    });

    $.when(request).then(function () {

        let lines = lyricLines.split("\n");

        $.each(lines, function (index, line) {

            $("#name-lyrics").append(line + "<br />");
        });
    });

});

$("#clear").on("click", function () {

    $("#name-lyrics").empty();
});