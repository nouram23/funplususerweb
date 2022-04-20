import jobApplication from "backend/middlewares/apis/jobApplication";

const jobs = jobApplication()();

export default function handler(req, res) {
  res.status(200).json(jobs);
}
