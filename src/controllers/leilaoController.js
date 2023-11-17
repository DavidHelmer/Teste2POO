const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getLeiloes(req, res) {
  const leiloes = await prisma.leilao.findMany();
  res.json(leiloes);
}

module.exports = {
  getLeiloes,
};