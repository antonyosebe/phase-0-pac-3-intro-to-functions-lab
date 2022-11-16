function shout(string) {
    return string.toUpperCase();
}
function whisper(HELLO) {
    return HELLO.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase());
}
function sayHiToHeadphonedRoommate(hello) {
    if (hello.toLowerCase() === hello) {
        return "I can\'t hear you!"
    } else if (hello.toUpperCase() === hello) {
        return "YES INDEED!"
    } else (hello === "Let\'s have dinner together!")
    return "I would love to!"
}

