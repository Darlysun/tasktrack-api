const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async list(req, res) {
    const tasks = await prisma.task.findMany({
      where: { userId: req.userId }
    });
    return res.json(tasks);
  },

  async create(req, res) {
    const { title } = req.body;

    const task = await prisma.task.create({
      data: { title, userId: req.userId }
    });

    return res.json(task);
  },

  async toggle(req, res) {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: { id: Number(id), userId: req.userId }
    });

    if (!task) return res.status(404).json({ error: "Task not found" });

    const updated = await prisma.task.update({
      where: { id: task.id },
      data: { done: !task.done }
    });

    return res.json(updated);
  },

  async remove(req, res) {
    const { id } = req.params;

    await prisma.task.delete({ where: { id: Number(id) } });

    return res.json({ message: "Task removed" });
  }
};
