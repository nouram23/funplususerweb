import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async (req, res) => {
    if (req.method === "POST") {
      const { theme } = req.body;

      req.session.theme = theme;

      await req.session.save();
      res.json({});
      return;
    }

    if (!req.session.theme) {
      req.session.theme = "dark";
      await req.session.save();
    }

    res.json({
      theme: req.session.theme,
    });
  },
  {
    cookieName: "theme",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
