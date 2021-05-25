import axios from "axios";
import { navigate } from "gatsby";

export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};

const setUser = (user) =>
  window.localStorage.setItem("user", JSON.stringify(user));

export const handleLogin = async ({ email, pass, isLoading }) => {
  if (email === "" || pass === "")
    return alert("Email dan Password tidak boleh kosong");

  try {
    const login = await axios.post(
      `${process.env.API_URL}user/login`,
      { email: email, password: pass },
      { headers: { Authorization: process.env.API_TOKEN } }
    );

    if (login.status === 200) {
      setUser({ user: login.data });
      return navigate("/");
    }
  } catch (error) {
    return error.response.status;
  }
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.user;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
