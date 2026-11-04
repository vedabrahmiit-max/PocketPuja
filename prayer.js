const urlParams =
new URLSearchParams(window.location.search);

const prayerId =
urlParams.get("id");

const prayer =
prayers[prayerId];

if (prayer) {

    document.getElementById(
        "title"
    ).innerHTML =
    prayer.title;

    document.getElementById(
        "content"
    ).innerHTML =
    prayer.content;

}
else {

    document.getElementById(
        "title"
    ).innerHTML =
    "Prayer Not Found";

    document.getElementById(
        "content"
    ).innerHTML =
    "Content unavailable.";

}