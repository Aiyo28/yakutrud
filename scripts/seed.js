import * as placeholderJobs from "./vacancy_data.json" assert { type: "json" };
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let vacancies = JSON.parse(JSON.stringify(placeholderJobs.default));
vacancies = vacancies.map((job) => {
    job.salary = parseInt(job.salary);
    job.createdAt = new Date(job.createdAt).toISOString();
    return job;
});
console.log(vacancies);

async function main() {
    await Promise.all(
        vacancies.map(async (job) => {
            await prisma.job.upsert({
                where: {
                    slug: job.slug,
                },
                update: job,
                create: job,
            });
        }),
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("Error while seeding database:", e);
        await prisma.$disconnect();
        process.exit(1);
    });