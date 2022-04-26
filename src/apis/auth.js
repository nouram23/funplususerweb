import request from "utils/request";

export const login = (data) => request.post("/api/login", data);
export const me = (data) => request.post("/api/me", data);
export const logout = (data) => request.post("/api/logout", data);
export const signup = (data) => request.post("/api/signup", data);
export const passwordForget = (data) =>
  request.post("/api/password_forget", data);
export const re_again_otp = (data) => request.post("/api/re_again_otp", data);
export const check_otp = (data) => request.post("/api/check_otp", data);

export const password_change = (data) =>
  request.post("/api/password_change", data);

/// password_change
