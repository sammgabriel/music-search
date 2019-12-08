
$("#song-form").hide();

$("#by-name").on("click", function () {

    $("#song-form").toggle();
});

$("#submit").on("click", function () {

    var artist = $("#artist").val();
    var songName = $("#song").val();
    var url = "https://api.lyrics.ovh/v1/" + artist + "/" + songName;

    $.getJSON(url, function (result) {

        $("#name-lyrics").append("<h2>" + "Lyrics" + "</h2>");

        $("#name-lyrics").append(result.lyrics);
    });
});