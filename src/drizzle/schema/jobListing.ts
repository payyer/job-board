import { boolean, index, integer, pgEnum, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { OrganizationTable } from "./organization";
import { relations } from "drizzle-orm";
import { jobListingApplicationTable } from "./jobListingApplication";

export const wageIntervals = ['hourly', 'yearly'] as const;
export type WageInterval = typeof wageIntervals[number];
export const wageIntervalEnum = pgEnum("job_listings_wage_intervals", wageIntervals);


export const locationRequirements = ['in-office', 'hybrid', 'remote'] as const; // as const ensures that the type is a tuple
export type LocationRequirement = typeof locationRequirements[number];
export const locationRequirementEnum = pgEnum("job_listings_location_requirement", locationRequirements);

export const experienceLevels = ['fresher', 'mid-level', 'senior'] as const; // as const ensures that the type is a tuple
export type ExperienceLevel = typeof experienceLevels[number];
export const experienceLevelEnum = pgEnum("job_listings_experience", experienceLevels);


export const josListingStatues = ['draft', 'published', 'delisted'] as const; // as const ensures that the type is a tuple
export type josListingStatus = typeof josListingStatues[number];
export const josListingStatusEnum = pgEnum("job_listings_status", josListingStatues);

export const jobListingType = ['internship', 'part-time', 'full-time'] as const; // as const ensures that the type is a tuple
export type josListingType = typeof jobListingType[number];
export const jobListingTypeEnum = pgEnum("job_listings_type", jobListingType);


export const JobListingTable = pgTable('job_listings', {
    id,
    organizationId: varchar()
        .references(() => OrganizationTable.id, { onDelete: "cascade" })
        .notNull(),
    title: varchar().notNull(),
    description: varchar().notNull(),
    wage: integer(),
    wageInterval: wageIntervalEnum(),
    stateAbbreviation: varchar(),
    city: varchar(),
    isFeatured: boolean().notNull().default(false),
    locationRequirement: locationRequirementEnum().notNull(),
    experienceLevel: experienceLevelEnum().notNull(),
    status: josListingStatusEnum().notNull().default('draft'),
    type: jobListingTypeEnum().notNull(),
    postedAt: timestamp({ withTimezone: true }),
    createdAt,
    updatedAt
},
    table => [index().on(table.stateAbbreviation)]
)

export const jobListingReferences = relations(JobListingTable, ({ one, many }) => ({
    organization: one(OrganizationTable, {
        fields: [JobListingTable.organizationId],
        references: [OrganizationTable.id]
    }),
    applications: many(jobListingApplicationTable)
}))