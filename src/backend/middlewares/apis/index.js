import backend_configs from "backend/config";
import loginAPIS from "./login";
import logoutAPIS from "./logout";
import meAPIS from "./me";
import uploadAPI from "./upload";
import upload_signature from "./upload_signature";
import signup from "./signup";

import re_again_otp from "./re_again_otp";
import check_otp from "./check_otp";
import password_forgetAPI from "./password_forget";
import password_changeAPI from "./password_change";

function api_middleware(req, res) {
  req.api_urls = backend_configs.api_urls;

  req.apis = {
    login: loginAPIS(req, res),
    me: meAPIS(req, res),
    logout: logoutAPIS(req, res),
    upload: uploadAPI(req, res),
    upload_signature: upload_signature(req, res),
    signup: signup(req, res),
    re_again_otp: re_again_otp(req, res),
    check_otp: check_otp(req, res),
    password_forget: password_forgetAPI(req, res),
    password_change: password_changeAPI(req, res),
  };
}
export default api_middleware;
