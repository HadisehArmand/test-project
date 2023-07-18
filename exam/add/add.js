
const BASE_URL = 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/';
const api = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const counter = response.data.length
    const data = response.data
    let something = document.getElementsByTagName('table');
    let tbody = document.getElementsByTagName('tbody');
    let tableca = something[0];

    for (let i = 0; i < counter; i++) {

      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let td6 = document.createElement('td');
      let td7 = document.createElement('td');
      let id = document.createTextNode(data[i]['id']);
      let FirstName = document.createTextNode(data[i]['firstname']);
      let LastName = document.createTextNode(data[i]['lastname']);
      let Email = document.createTextNode(data[i]['email']);
      let Password = document.createTextNode(data[i]['password']);
      let Avatar = document.createElement("img");
      Avatar.setAttribute('src', data[i]['avatar']);
      Avatar.setAttribute('alt', 'na');
      Avatar.setAttribute('height', '50px');
      Avatar.setAttribute('width', '50px');
      let rm = document.createElement("a");
      rm.setAttribute('class', 'disable-link');
      rm.setAttribute('title', 'delete');
      rm.addEventListener('click', function () {
        let userid = this.parentNode.parentNode.childNodes[0]['innerText']
        const deleter = async () => {
          try {
            const response = await axios.delete('https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/'+userid);
            location.reload();
            api()
          } catch (errors) {
            SetAction("Delete","NO")
            console.error(errors);
          }
        };
        deleter()
        SetAction("Delete","yes")
      });
      let rmIMG = document.createElement("img");
      rmIMG.setAttribute('src', 'https://img.icons8.com/?size=512&id=g8W7KYbM7nK3&format=png');
      rmIMG.setAttribute('class', 'img-link');
      rm.appendChild(rmIMG)
      let edit = document.createElement("a");
      edit.setAttribute('class', 'disable-link');
      edit.setAttribute('title', 'edit');
      edit.setAttribute('href', '../edit/edit.html');
      edit.addEventListener('click', function () {
        let USID = this.parentNode.parentNode.childNodes[0]['innerText']
        localStorage.setItem("id", USID);
      })
      let editIMG = document.createElement("img");
      editIMG.setAttribute('src', 'https://img.icons8.com/?size=512&id=71201&format=png');
      editIMG.setAttribute('class', 'img-link');
      edit.appendChild(editIMG)

      td1.appendChild(id);
      td2.appendChild(FirstName);
      td3.appendChild(LastName);
      td4.appendChild(Email);
      td5.appendChild(Password);
      td6.appendChild(Avatar);
      td7.appendChild(rm);
      td7.appendChild(edit);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);

      tableca.appendChild(tr);
    }
    tbody.appendChild(tableca);
  } catch (errors) {
    SetAction("Show page add/edit","yes")
    console.error(errors);
  }
};
api()