import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { OrganizationTable } from "./organization";
import { relations } from "drizzle-orm";

export const OrganizationUserSettingsTable = pgTable(
    'organization_user_settings',
    {
        userId: varchar()
            .notNull()
            .references(() => UserTable.id),
        organizationId: varchar()
            .notNull()
            .references(() => OrganizationTable.id),
        newApplicationEmailNotifications: boolean().notNull().default(false),
        minimumRating: integer(),
        createdAt,
        updatedAt
    }
)

export const OrganizationUserSettingRelations = relations(
    OrganizationUserSettingsTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [OrganizationUserSettingsTable.userId],
            references: [UserTable.id]
        }),
        organization: one(OrganizationTable, {
            fields: [OrganizationUserSettingsTable.organizationId],
            references: [OrganizationTable.id]
        })
    })
)