import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { courseStatuses } from "./course-data"

const courses = Array.from({ length: 100 }, () => ({
    id: `COURSE-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
    status: faker.helpers.arrayElement(courseStatuses).value,
    }))

fs.writeFileSync(
    path.join(__dirname, "courses.json"),
    JSON.stringify(courses, null, 2)
)

console.log("✅ Courses data generated.")