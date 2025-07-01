import { boolean, pgTable, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const UserNotificationSettingTable = pgTable(
    "user_notification_settings",
    {
        userId: varchar()
            .notNull()
            .references(() => UserTable.id),
        newJobEmailNotifications: boolean().notNull().default(false),
        aiPromt: varchar(),
        createdAt,
        updatedAt
    }
)

export const UserNotificationSettingRelations = relations(
    UserNotificationSettingTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [UserNotificationSettingTable.userId],
            references: [UserTable.id]
        })
    })
)