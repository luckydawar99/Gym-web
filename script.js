function home() {
    document.getElementById("homes").style.color = " rgb(27, 253, 27)"
    document.getElementById("plans").style.color = " white"
    document.getElementById("contacts").style.color = " white"
    document.getElementById("blogs").style.color = " white"
    document.getElementById("programs").style.color = " white"
}
function program() {
    document.getElementById("homes").style.color = " white"
    document.getElementById("plans").style.color = " white"
    document.getElementById("contacts").style.color = " white"
    document.getElementById("blogs").style.color = " white"
    document.getElementById("programs").style.color = "rgb(27, 253, 27)"
}
function plan() {
    document.getElementById("homes").style.color = " white"
    document.getElementById("plans").style.color = " rgb(27, 253, 27)"
    document.getElementById("contacts").style.color = " white"
    document.getElementById("blogs").style.color = " white"
    document.getElementById("programs").style.color = " white"
}
function blog() {
    document.getElementById("homes").style.color = " white"
    document.getElementById("plans").style.color = " white"
    document.getElementById("contacts").style.color = " white"
    document.getElementById("blogs").style.color = " rgb(27, 253, 27)"
    document.getElementById("programs").style.color = " white"
}
function contact() {
    document.getElementById("homes").style.color = " white"
    document.getElementById("plans").style.color = " white"
    document.getElementById("contacts").style.color = "rgb(27, 253, 27) "
    document.getElementById("blogs").style.color = " white"
    document.getElementById("programs").style.color = " white"
}

//submit
function submit() {
    let name = document.getElementById("Name")
    let number = document.getElementById("number")
    if (name.value == "") {
        alert("Please enter your name")
    } else if (number.value == "") {
        alert("Plese enter your Number")
    } else {
        alert("Thanks for join :" + name.value)
    }


}