export default function meAPIS(req, res) {
  return async () => {
    res.json(req.session.user);
    // return {
    //   name: "name",
    // };
  };
}
