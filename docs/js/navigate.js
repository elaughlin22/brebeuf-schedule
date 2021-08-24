var input = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
    document.getElementById("10"),
    document.getElementById("11"),
    document.getElementById("12"),
    document.getElementById("13"),
    document.getElementById("14"),
    document.getElementById("15"),
    document.getElementById("16"),
];
var radio = [
    [document.getElementById("1-1"), document.getElementById("1-2"), document.getElementById("1-3")],
    [document.getElementById("2-1"), document.getElementById("2-2"), document.getElementById("2-3")],
    [document.getElementById("3-1"), document.getElementById("3-2"), document.getElementById("3-3")],
    [document.getElementById("4-1"), document.getElementById("4-2"), document.getElementById("4-3")],
    [document.getElementById("5-1"), document.getElementById("5-2"), document.getElementById("5-3")],
    [document.getElementById("6-1"), document.getElementById("6-2"), document.getElementById("6-3")],
    [document.getElementById("7-1"), document.getElementById("7-2"), document.getElementById("7-3")],
    [document.getElementById("8-1"), document.getElementById("8-2"), document.getElementById("8-3")],
    [document.getElementById("9-1"), document.getElementById("9-2"), document.getElementById("9-3")],
    [document.getElementById("10-1"), document.getElementById("10-2"), document.getElementById("10-3")],
    [document.getElementById("11-1"), document.getElementById("11-2"), document.getElementById("11-3")],
    [document.getElementById("12-1"), document.getElementById("12-2"), document.getElementById("12-3")],
    [document.getElementById("13-1"), document.getElementById("13-2"), document.getElementById("13-3")],
    [document.getElementById("14-1"), document.getElementById("14-2"), document.getElementById("14-3")],
    [document.getElementById("15-1"), document.getElementById("15-2"), document.getElementById("15-3")],
    [document.getElementById("16-1"), document.getElementById("16-2"), document.getElementById("16-3")],
]

function remindRequired() {
    document.getElementById("check-required").style.display = "block";
}
function hideRequired() {
    document.getElementById("check-required").style.display = "none";
}

function startLockout() {
    document.getElementById("lockout").style.display = "block";
}
function endLockout() {
    document.getElementById("lockout").style.display = "none";
}