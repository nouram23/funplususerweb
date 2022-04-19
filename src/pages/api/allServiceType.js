import all_service_types from "backend/middlewares/apis/all_service_types";

const allType = all_service_types()();

export default function handler(req, res) {
  res.status(200).json(allType);
}
