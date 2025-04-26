-- Table: public.gaggle_users

-- DROP TABLE IF EXISTS public.gaggle_users;

CREATE TABLE IF NOT EXISTS public.gaggle_users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    first_name character varying COLLATE pg_catalog."default" NOT NULL,
    last_name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    external_user_id character varying COLLATE pg_catalog."default" NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    CONSTRAINT gaggle_users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.gaggle_users
    OWNER to postgres;