import { integer, pgTable, PrimaryKey, uuid, varchar, primaryKey, pgEnum, text } from "drizzle-orm/pg-core";
import { JobListingTable } from "./jobListing";
import { UserTable } from "./user";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const jobListingApplications = ['applied', 'denied', 'interested', 'interviewed', 'hired'] as const;
export type JobListingApplication = typeof jobListingApplications[number]
export const applicationStageEnum = pgEnum('job_listing_application_stage', jobListingApplications)

export const jobListingApplicationTable = pgTable(
    "job_listing_applications",
    {
        jobListingId: uuid()
            .references(() => JobListingTable.id, { onDelete: "cascade" })
            .notNull(),
        userId: varchar()
            .references(() => UserTable.id, { onDelete: "cascade" })
            .notNull(),
        coverLetter: text(),
        rating: integer(),
        stage: applicationStageEnum().notNull().default("applied"),
        createdAt,
        updatedAt
    },
    table => [primaryKey({ columns: [table.jobListingId, table.userId] })]
)

export const jobListingApplicationRelations = relations(
    jobListingApplicationTable,
    ({ one }) => ({
        jobListing: one(JobListingTable, {
            fields: [jobListingApplicationTable.jobListingId],
            references: [JobListingTable.id]
        }),
        user: one(UserTable, {
            fields: [jobListingApplicationTable.userId],
            references: [UserTable.id]
        })
    })
)