import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { UserNotificationSettingTable } from "./userNotificationSetting";
import { UserResumeTable } from "./userResume";
import { OrganizationUserSettingsTable } from "./organizationUserSetting";

export const UserTable = pgTable('users', {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar().notNull(),
    email: varchar().notNull().unique(),
    createdAt,
    updatedAt
})

export const UserRelations = relations(
    UserTable,
    ({ one, many }) => ({
        notificationSettings: one(UserNotificationSettingTable),
        resume: one(UserResumeTable),
        organizationUserSettings: many(OrganizationUserSettingsTable)
    })
)