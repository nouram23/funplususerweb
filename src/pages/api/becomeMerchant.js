import becomeMerchant from "backend/middlewares/apis/becomeMerchant";

const infos = becomeMerchant()();

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(infos);
  } else if (req.method === "POST") {
    const info = req.body.values;
    const newInfo = {
      companyName: info.companyName,
      phone: info.phone,
      email: info.email,
      workerName: info.workerName,
      serviceTypes: info.serviceTypes,
    };
    infos.push(newInfo);
    res.status(201).json(newInfo);
  }
}
