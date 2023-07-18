
let retrievedObjectLG = localStorage.getItem('users');
retrievedObjectLG = JSON.parse(retrievedObjectLG)
let EILG = document.getElementById("EI")
let PILG = document.getElementById("PI")

function checkuser() {
    for (let index = 0; index < retrievedObjectLG.length; index++) {
        if (retrievedObjectLG[index]['email'] == EILG.value && retrievedObjectLG[index]['password'] == PILG.value) {
            SetAction("Login","yes")
            alert("User Login Success !")
            window.location = "http://127.0.0.1:5500/exam/index.html"
            break
        }else{
            SetAction("Login","yes")
            alert("User Login not success !")
            break
        }
    }
}