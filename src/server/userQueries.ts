import prisma from "./db"

// Documentation: https://www.prisma.io/docs/orm/prisma-client/queries

export const getAllUsers = async () => {
    return await prisma.user.findMany()
}