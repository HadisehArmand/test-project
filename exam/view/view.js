
const BASE_URLVW = 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/';

const api = async () => {
  try {
    const responseVW = await axios.get(`${BASE_URLVW}`);
    const counterVW = responseVW.data.length
    const dataVW = responseVW.data
    let somethingVW = document.getElementsByTagName('table');
    let tbodyVW = document.getElementsByTagName('tbody');
    let tablecaVW = somethingVW[0];
    
    for (let i = 0; i < counterVW; i++) {
      let trVW = document.createElement('tr');
      let td1VW = document.createElement('td');
      let td2VW = document.createElement('td');
      let td3VW = document.createElement('td');
      let td4VW = document.createElement('td');
      let td5VW = document.createElement('td');
      let td6VW = document.createElement('td');
    
      let idVW = document.createTextNode(dataVW[i]['id']);
      let FirstNameVW = document.createTextNode(dataVW[i]['firstname']);
      let LastNameVW = document.createTextNode(dataVW[i]['lastname']);
      let EmailVW = document.createTextNode(dataVW[i]['email']);
      let PasswordVW = document.createTextNode(dataVW[i]['password']);
      let AvatarVW = document.createElement("img");
      AvatarVW.setAttribute('src', dataVW[i]['avatar']);
      AvatarVW.setAttribute('alt', 'na');
      AvatarVW.setAttribute('height', '50px');
      AvatarVW.setAttribute('width', '50px');
    
      td1VW.appendChild(idVW);
      td2VW.appendChild(FirstNameVW);
      td3VW.appendChild(LastNameVW);
      td4VW.appendChild(EmailVW);
      td5VW.appendChild(PasswordVW);
      td6VW.appendChild(AvatarVW);

      trVW.appendChild(td1VW);
      trVW.appendChild(td2VW);
      trVW.appendChild(td3VW);
      trVW.appendChild(td4VW);
      trVW.appendChild(td5VW);
      trVW.appendChild(td6VW);
    
      tablecaVW.appendChild(trVW);
    }
    tbodyVW.appendChild(tablecaVW);
    SetAction("View","yes")
  } catch (errors) {
    SetAction("View","No")
    console.error(errors);
  }
};
api()