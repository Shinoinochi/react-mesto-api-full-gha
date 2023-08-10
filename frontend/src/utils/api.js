export default class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._header = headers;
  }
  _checkData(res) {
    return res.ok? res.json(): Promise.reject(`Ошибка: ${res.status}`);
  }

  getLikes(method, cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: method,
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then((res) => {
       return this._checkData(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if(isLiked) {
      return api.getLikes('PUT', cardId).catch((err) => {
        console.log(err);
      });
    }
    else {
      return api.getLikes('DELETE', cardId).catch((err) => {
        console.log(err);
      });
    }
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(res => {
      return this._checkData(res);
    });
  }

  addNewCard(data) {
    return fetch(this._url + '/cards ', {
      method: 'POST',
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => {
      return this._checkData(res);
    });
  }

  getUserData() {
    return fetch(this._url +'/users/me', {
      method: 'GET',
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(res => {
      return this._checkData(res);
    });
  }

  editUser(name, about) {
    return fetch(this._url +'/users/me', {
      method: 'PATCH',
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      return this._checkData(res);
    });
  }

  setUserLogo(link) {
    return fetch(this._url +'/users/me/avatar', {
      method: 'PATCH',
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => {
      return this._checkData(res);
    });  
  }

  deleteCard(id) {
     return fetch(this._url + '/cards/' + id, {
      method: 'DELETE',
      headers: { 
        ...this._header,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then((res) => {
      return this._checkData(res);
    });
  }

  _getErrorAuth(res) {
    return res.json().then((res) => {
      throw new Error(res.message);
    });
  }
  registration(password, email) {
    return fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      if (res.ok) return res.json();
      return this._getErrorAuth(res);
    });
  }

  login(password, email) {
    return fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({password, email})
    })
    .then(res => {
      if (res.ok) {
        return res.json()};
      return this._getErrorAuth(res);
    });
  }

  checkToken(token) {
    return fetch('http://localhost:4000/users/me', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${token}`,
      }
    })
    .then(res => { 
      return res.json()
    })
    .then(data => {
      return data
    })
    .catch((err) => {
      console.log(err.status);
    })
  }
}

export const api = new Api({
  baseUrl: 'http://localhost:4000',
  headers: {
    "Content-Type": 'application/json'
  }
  });