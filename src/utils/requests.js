const base_url = "http://localhost:5000/";

// Login
export const LOGIN = async (url, email, password) => {
  const user = {
    email: email,
    password: password,
  };

  const res = await fetch(base_url + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }); 

  const response = await res.json();
  return response;
};
