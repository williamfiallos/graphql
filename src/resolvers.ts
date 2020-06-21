import * as bcrypt from "bcrypt";

interface LoginArguments {
    email: string
    password: string
}
export const resolvers = {
    Query: {
        login: async (_: any, { email, password }: LoginArguments) => {
        const fakeEmailFromDb = "test@test.com"
        const fakePasswordFromDb = await bcrypt.hash("test", 10);

        if (email !== fakeEmailFromDb) {
            throw new Error(`User with email: ${email} does not exist!`)
        }

        const valid = await bcrypt.compare(password, fakePasswordFromDb)

        if (!valid) {
            throw new Error("Email and Password do not match!");
        }

            return {
                email: fakeEmailFromDb,
                accessToken: "WOW"
            };
        },
    },
};