ALTER TABLE "users" ALTER COLUMN "uid" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_uid_unique" UNIQUE("uid");