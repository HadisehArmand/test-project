let SIDEE = localStorage.getItem("id")
let retrievedObjectEE = localStorage.getItem('users');

retrievedObjectEE = JSON.parse(retrievedObjectEE)
let FIEE = document.getElementById("FI")
let LIEE = document.getElementById("LI")
let EIEE = document.getElementById("EI")
let PIEE = document.getElementById("PI")
let AIEE = document.getElementById("AI")
for (let index = 0; index < retrievedObjectEE.length; index++) {
    if (retrievedObjectEE[index]['id'] == SIDEE) {
        var BASE_URL_PUtEE = 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/' + SIDEE;
        let userEE = retrievedObjectEE[index]
        FIEE.defaultValue = userEE['firstname']
        LIEE.defaultValue = userEE['lastname']
        EIEE.defaultValue = userEE['email']
        PIEE.defaultValue = userEE['password']
        AIEE.defaultValue = userEE['avatar']
    }
}
let put = async (data) => {
    try {
        const response1 = await axios.put(`${BASE_URL_PUtEE}`, data, {
            headers: {
                'content-type': 'application/json',
            },
        });
        return 1
    } catch (errors) {
        console.error(errors);
        SetAction("Edit","No")
        return 0
    }
};
async function submitDATA() {
    let objEE = new Object();
    objEE.firstname = FIEE.value
    objEE.lastname = LIEE.value
    objEE.email = EIEE.value
    objEE.password = PIEE.value
    objEE.avatar = AIEE.value
    objEE.id = SIDEE
    let jsonStringEE = JSON.stringify(objEE);
    let resEE = await put(jsonStringEE)
    if (resEE == 1) {
        SetAction("Edit","yes")
        window.location = "http://127.0.0.1:5500/exam/view/view.html"
    }
}


