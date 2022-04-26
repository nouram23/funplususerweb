import feedback from "backend/middlewares/apis/feedback";

const feedbacks = feedback()();

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(feedbacks);
  } else if (req.method === "POST") {
    const info = req.body.values;
    const newFeedback = {
      name: info.name,
      phone: info.phone,
      email: info.email,
      about: info.about,
      type: info.type,
    };
    feedbacks.push(newFeedback);
    res.status(201).json(newFeedback);
  }
}
