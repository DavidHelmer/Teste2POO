const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getLances(req, res) {
    const lances = await prisma.lance.findMany();
    res.json(lances);
}

module.exports = {
    getLances,
};