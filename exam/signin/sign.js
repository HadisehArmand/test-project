
let BASE_URL_POST = 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/';
let FISG = document.getElementById("FI")
let LISG = document.getElementById("LI")
let EISG = document.getElementById("EI")
let PISG = document.getElementById("PI")
let AISG = document.getElementById("AI")
let post = async (data) => {
    try {
        const response1 = await axios.post(`${BASE_URL_POST}`, data, {
            headers: {
                'content-type': 'application/json',
            },
        });
        SetAction("SigUp","yes")
        return 1
    } catch (errors) {
        console.error(errors);
        SetAction("SigUp","No")
        return 0
    }
};
async function submitDATA() {
    let objSG = new Object();
    objSG.firstname = FISG.value
    objSG.lastname = LISG.value
    objSG.email = EISG.value
    objSG.password = PISG.value
    objSG.avatar = AISG.value
    let jsonStringSG = JSON.stringify(objSG);
    let resSG = await post(jsonStringSG)
    if (resSG == 1) {
        window.location = "http://127.0.0.1:5500/exam/view/view.html"
    }
}


