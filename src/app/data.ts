import { TaskDTO } from "../../_dto/types";

export const tasks: TaskDTO[] = [
    {
        id: 1,
        user_id: 101,
        title: "Finish frontend UI",
        due_on: new Date("2025-01-10"),
        status: "Completed",
    },
    {
        id: 2,
        user_id: 101,
        title: "Prepare API documentation",
        due_on: new Date("2025-01-14"),
        status: "Completed",
    },
    {
        id: 3,
        user_id: 101,
        title: "Fix authentication bug",
        due_on: new Date("2025-02-01"),
        status: "Pending",
    },
    {
        id: 4,
        user_id: 101,
        title: "Review database schema",
        due_on: new Date("2025-02-05"),
        status: "Pending",
    },
    {
        id: 5,
        user_id: 102,
        title: "Deploy staging server",
        due_on: new Date("2025-01-05"),
        status: "Completed",
    },
    {
        id: 6,
        user_id: 102,
        title: "Run unit tests",
        due_on: new Date("2025-02-08"),
        status: "Pending",
    },
    {
        id: 7,
        user_id: 102,
        title: "Write task automation scripts",
        due_on: new Date("2025-01-20"),
        status: "Completed",
    },
    {
        id: 8,
        user_id: 103,
        title: "Optimize API response time",
        due_on: new Date("2025-02-10"),
        status: "Pending",
    },
    {
        id: 9,
        user_id: 103,
        title: "Update user onboarding flow",
        due_on: new Date("2025-01-12"),
        status: "Completed",
    },
    {
        id: 10,
        user_id: 103,
        title: "Test payment integration",
        due_on: new Date("2025-02-15"),
        status: "Pending",
    },
];
