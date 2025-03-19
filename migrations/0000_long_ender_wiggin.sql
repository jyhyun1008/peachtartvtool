CREATE TABLE "users" (
	"pid" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_pid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"handle" varchar(50) NOT NULL,
	"knownas" varchar(50) NOT NULL,
	"accentcolor" varchar(10),
	"group" varchar(50),
	"email" varchar(255) NOT NULL,
	"avatar" varchar(355),
	"avatarlong" varchar(355),
	"bio" varchar(500),
	"biolong" text,
	"links" text,
	"createdat" timestamp NOT NULL,
	"lastlogin" timestamp,
	CONSTRAINT "users_handle_unique" UNIQUE("handle"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "videos" (
	"pid" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "videos_pid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"url" varchar(100) NOT NULL,
	"title" varchar(100) NOT NULL,
	"owner" integer NOT NULL,
	"category" varchar(10)
);
