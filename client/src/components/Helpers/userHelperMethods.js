const loginAccountService = async (emailValue, passwordValue) => {
  const response = await fetch(process.env.REACT_APP_LOGIN_FETCH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emailValue, passwordValue }),
  }).then(res => res.json());

  return response;
};

const registerAccountService = async (nameValue, emailValue, passwordValue) => {
  const response = await fetch(process.env.REACT_APP_REGISTER_FETCH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nameValue, emailValue, passwordValue }),
  }).then(res => res.json());

  return response;
};

export { loginAccountService, registerAccountService };
