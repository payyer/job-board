import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { JobListingTable } from "./jobListing";
import { OrganizationUserSettingsTable } from "./organizationUserSetting";

export const OrganizationTable = pgTable('organizations', {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar(),
    createdAt,
    updatedAt
})

export const OrganizationRelations = relations(
    OrganizationTable,
    ({ many }) => ({
        jobListing: many(JobListingTable),
        organizationUserSetting: many(OrganizationUserSettingsTable)
    })
)