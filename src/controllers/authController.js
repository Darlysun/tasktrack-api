const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async register(req, res) {
    const { name, email, password } = req.body;

    const userExist = await prisma.user.findUnique({ where: { email } });
    if (userExist) return res.status(400).json({ error: "Email already registered" });

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hash }
    });

    return res.json({ id: user.id, name: user.name, email: user.email });
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    return res.json({ token });
  }
};
