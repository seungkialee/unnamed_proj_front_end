let registerUrl = "http://localhost:3000/api/v1/users";

// function handleErrors(response) {
//   if(!response.ok){
//     return response.json()
//   }
//   return response;
// }

export const register = (username, email, phone, password) => {
  return dispatch => {
    fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          phone: phone,
          password: password
        }
      })
    })
      .then(r => r.json())
      .then(r => {
        dispatch({ type: "RESPONSE_RESULT", payload: r });
      });
  };
};

// export const loginToggle = event => {
//   type: "LOGIN_TOGGLE";
// };

//
// .catch(error=>{dispatch({type: "ERRORS", payload: error})
// dispatch({type: "ERRORS", payload: error})
// })
// .then(handleErrors)
// .then(r=>console.log("ok", r.json()))
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
