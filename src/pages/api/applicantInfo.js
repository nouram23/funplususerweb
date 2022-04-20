import applicantInfo from "backend/middlewares/apis/applicantInfo";

const infos = applicantInfo()();

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(infos);
  } else if (req.method === "POST") {
    const info = req.body.values;
    const newInfo = {
      name: info.name,
      phone: info.phone,
      email: info.email,
    };
    infos.push(newInfo);
    res.status(201).json(newInfo);
  }
}
