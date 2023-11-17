const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAUsuarios(req, res) {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
}

module.exports = {
  getAUsuarios,
};