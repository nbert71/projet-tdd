import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// run inside `async` function
prisma.user.create({
    data: {
      name: 'Bob',
      email: 'Bob@prisma.io',
    },
  }).then()
