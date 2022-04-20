export default function (req, res) {
  return () => {
    return [
      {
        name: "Designer",
      },
      {
        name: "Frontend developer",
      },
      {
        name: "Backend developer",
      },
      {
        name: "Full stack developer",
      },
    ];
  };
}
