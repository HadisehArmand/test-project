var loggersysLL = {}
function SetAction(Action, isSucces) {
    if (localStorage.getItem('logsystem') != null) {
        loggersysLL = JSON.parse(localStorage.getItem("logsystem"))
    } else {
        localStorage.setItem("logsystem", JSON.stringify(loggersysLL))
    }
    let currentdateLL = new Date();
    let innerobjLL = [];
    innerobjLL.push(Action)
    innerobjLL.push(currentdateLL.getDate() + "/"
        + (currentdateLL.getMonth() + 1) + "/"
        + currentdateLL.getFullYear())
    innerobjLL.push(isSucces)
    let timerLL = currentdateLL.getHours() + ":"
        + currentdateLL.getMinutes() + ":"
        + currentdateLL.getSeconds()
    loggersysLL[timerLL] = innerobjLL
    localStorage.setItem("logsystem", JSON.stringify(loggersysLL))
}

function drawLOG() {
    console.log("enettterer")
    let dataLL = JSON.parse(localStorage.getItem("logsystem"))
    let somethingLL = document.getElementsByTagName('table');
    let tbodyLL = document.getElementsByTagName('tbody');
    let tablecaLL = somethingLL[0];
    for (const property in dataLL) {
        let trLL = document.createElement('tr');
        let td1LL = document.createElement('td');
        let td2LL = document.createElement('td');
        let td3LL = document.createElement('td');
        let td4LL = document.createElement('td');
        let action = document.createTextNode(dataLL[property][0]);
        let date = document.createTextNode(dataLL[property][1]);
        let time = document.createTextNode(property);
        let success = document.createTextNode(dataLL[property][2]);
        td1LL.appendChild(action);
        td2LL.appendChild(date);
        td3LL.appendChild(time);
        td4LL.appendChild(success);

        trLL.appendChild(td1LL);
        trLL.appendChild(td2LL);
        trLL.appendChild(td3LL);
        trLL.appendChild(td4LL);

        tablecaLL.appendChild(trLL);
    }

    tbodyLL.appendChild(tablecaLL);
}