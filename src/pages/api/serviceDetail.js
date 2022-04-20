import serviceDetail from "backend/middlewares/apis/serviceDetail";

const detailed = serviceDetail()();

export default function handler(req, res) {
  res.status(200).json(detailed);
}
