// GET request
function fecthData() {
  // console.log(fetch('https://reqres.in/api/users')) // Returns promise
  fetch('https://reqres.in/api/users')
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json(); // Return passes the data into second then
      // console.log(data); // Need to await the data to return before
    })
    .then((data) => {
      console.log(data);
      const html = data.data
        // .slice(4) //returns a shallow copy of a portion of an array into a new array object
        // .splice(1, 1, 1) //changes the contents of an array by removing or replacing existing elements
        .map((user) => {
          return `
          <div class="user">
          <p><img alt="${user.first_name}" src="${user.avatar}"></p>
          <p>Name: ${user.first_name}</p>
          <p>Email: ${user.email}</p>
          </div>
          `;
        })
        .join(''); // returns a new string by concatenating all of the elements in an array
      document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch((err) => console.log(err));
}
fecthData();

// POST Request
function postData() {
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'morpheus',
      job: 'leader',
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {})
    .catch((err) => console.log(err));
}

postData();
