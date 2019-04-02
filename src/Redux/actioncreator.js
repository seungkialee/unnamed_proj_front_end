let registerUrl = "http://localhost:3000/api/v1/users"

function handleErrors(response) {
  if(!response.ok)
    console.log(response)
  return response;
}

export const register = (username, email, phone, password) => {
  return dispatch => {
      fetch(registerUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: {username:username, email:email, phone:phone, password:password}})
    })
    .then(r=>r.json())
    .then(console.log)
    // .then(handleErrors)
    // .then(response => console.log("ok"))
    // .catch(error => console.log(error))
  }
}

// return dispatch => {
//     fetch("http://localhost:3001/api/v1/login", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer <token>`,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({user: username, password: password})
//     }).then(handleErrors).then(resp => resp.json()).then(user => dispatch({type: "LOG_IN", payload: user}));
//   };
// };
