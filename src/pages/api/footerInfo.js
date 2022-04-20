import footerInfo from "backend/middlewares/apis/footerInfo";

const info = footerInfo()();

export default function handler(req, res) {
  res.status(200).json(info);
}
