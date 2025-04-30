-- Database: gaggle_test

-- DROP DATABASE IF EXISTS gaggle_test;

CREATE DATABASE gaggle_test
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.gaggle_users

-- DROP TABLE IF EXISTS public.gaggle_users;

CREATE TABLE IF NOT EXISTS public.gaggle_users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    external_user_id character varying(200) COLLATE pg_catalog."default" NOT NULL,
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


-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.tournaments

-- DROP TABLE IF EXISTS public.tournaments;

CREATE TABLE IF NOT EXISTS public.tournaments
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    year character varying(25) COLLATE pg_catalog."default" NOT NULL,
    description character varying(150) COLLATE pg_catalog."default" NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    winner_id uuid,
    CONSTRAINT tournaments_pkey PRIMARY KEY (id),
    CONSTRAINT fk_gaggle_users_tournaments_created_by FOREIGN KEY (winner_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournaments_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tournaments
    OWNER to postgres;
-- Index: fki_fk_gaggle_users_tournaments_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournaments_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournaments_updated_by
    ON public.tournaments USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_gaggle_users_tournaments_created_by

-- DROP INDEX IF EXISTS public.fki_gaggle_users_tournaments_created_by;

CREATE INDEX IF NOT EXISTS fki_gaggle_users_tournaments_created_by
    ON public.tournaments USING btree
    (winner_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.courses

-- DROP TABLE IF EXISTS public.courses;

CREATE TABLE IF NOT EXISTS public.courses
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(500) COLLATE pg_catalog."default" NOT NULL,
    address character varying(150) COLLATE pg_catalog."default" NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    CONSTRAINT courses_pkey PRIMARY KEY (id),
    CONSTRAINT fk_gaggle_users_courses_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_courses_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.courses
    OWNER to postgres;
-- Index: fki_fk_gaggle_users_courses_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_courses_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_courses_created_by
    ON public.courses USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_courses_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_courses_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_courses_updated_by
    ON public.courses USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.accolades

-- DROP TABLE IF EXISTS public.accolades;

CREATE TABLE IF NOT EXISTS public.accolades
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying(150) COLLATE pg_catalog."default" NOT NULL,
    value character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    CONSTRAINT accolades_pkey PRIMARY KEY (id),
    CONSTRAINT fk_gaggle_users_accolades_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_accolades_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.accolades
    OWNER to postgres;
-- Index: fki_fk_gaggle_users_accolades_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_accolades_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_accolades_created_by
    ON public.accolades USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_accolades_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_accolades_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_accolades_updated_by
    ON public.accolades USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.user_accolades

-- DROP TABLE IF EXISTS public.user_accolades;

CREATE TABLE IF NOT EXISTS public.user_accolades
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    user_id uuid NOT NULL,
    accolade_id uuid NOT NULL,
    CONSTRAINT user_accolades_pkey PRIMARY KEY (id),
    CONSTRAINT fk_accolades_user_accolades_accolade_id FOREIGN KEY (accolade_id)
        REFERENCES public.accolades (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_accolades_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_accolades_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_accolades_user_id FOREIGN KEY (user_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_accolades
    OWNER to postgres;
-- Index: fki_fk_accolades_user_accolades_accolade_id

-- DROP INDEX IF EXISTS public.fki_fk_accolades_user_accolades_accolade_id;

CREATE INDEX IF NOT EXISTS fki_fk_accolades_user_accolades_accolade_id
    ON public.user_accolades USING btree
    (accolade_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_accolades_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_accolades_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_accolades_created_by
    ON public.user_accolades USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_accolades_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_accolades_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_accolades_updated_by
    ON public.user_accolades USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_accolades_user_id

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_accolades_user_id;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_accolades_user_id
    ON public.user_accolades USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.tournament_courses

-- DROP TABLE IF EXISTS public.tournament_courses;

CREATE TABLE IF NOT EXISTS public.tournament_courses
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    tournament_id uuid NOT NULL,
    course_id uuid NOT NULL,
    winner_id uuid NOT NULL,
    CONSTRAINT tournament_courses_pkey PRIMARY KEY (id),
    CONSTRAINT fk_courses_tournament_courses_course_id FOREIGN KEY (course_id)
        REFERENCES public.courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournament_courses_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournament_courses_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournament_courses_winner_id FOREIGN KEY (winner_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_tournaments_tournament_courses_tournament_id FOREIGN KEY (tournament_id)
        REFERENCES public.tournaments (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tournament_courses
    OWNER to postgres;
-- Index: fki_fk_courses_tournament_courses_course_id

-- DROP INDEX IF EXISTS public.fki_fk_courses_tournament_courses_course_id;

CREATE INDEX IF NOT EXISTS fki_fk_courses_tournament_courses_course_id
    ON public.tournament_courses USING btree
    (course_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_tournament_courses_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournament_courses_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournament_courses_created_by
    ON public.tournament_courses USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_tournament_courses_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournament_courses_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournament_courses_updated_by
    ON public.tournament_courses USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_tournament_courses_winner_id

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournament_courses_winner_id;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournament_courses_winner_id
    ON public.tournament_courses USING btree
    (winner_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_tournaments_tournament_courses_tournament_id

-- DROP INDEX IF EXISTS public.fki_fk_tournaments_tournament_courses_tournament_id;

CREATE INDEX IF NOT EXISTS fki_fk_tournaments_tournament_courses_tournament_id
    ON public.tournament_courses USING btree
    (tournament_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.tournament_course_rounds

-- DROP TABLE IF EXISTS public.tournament_course_rounds;

CREATE TABLE IF NOT EXISTS public.tournament_course_rounds
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    course_id uuid NOT NULL,
    tournament_course_id uuid NOT NULL,
    course_round_number smallint NOT NULL,
    number_of_holes smallint NOT NULL,
    tournament_round_number smallint NOT NULL,
    start_date time without time zone NOT NULL,
    end_date time without time zone NOT NULL,
    penalty_date time without time zone,
    CONSTRAINT tournament_course_rounds_pkey PRIMARY KEY (id),
    CONSTRAINT fk_courses_tournament_course_rounds_course_id FOREIGN KEY (course_id)
        REFERENCES public.courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournament_course_rounds_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_tournament_course_rounds_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_tournament_courses_tournament_course_rounds_tournament_cours FOREIGN KEY (tournament_course_id)
        REFERENCES public.tournament_courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tournament_course_rounds
    OWNER to postgres;
-- Index: fki_fk_courses_tournament_course_rounds_course_id

-- DROP INDEX IF EXISTS public.fki_fk_courses_tournament_course_rounds_course_id;

CREATE INDEX IF NOT EXISTS fki_fk_courses_tournament_course_rounds_course_id
    ON public.tournament_course_rounds USING btree
    (course_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_tournament_course_rounds_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournament_course_rounds_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournament_course_rounds_created_by
    ON public.tournament_course_rounds USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_tournament_course_rounds_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_tournament_course_rounds_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_tournament_course_rounds_updated_by
    ON public.tournament_course_rounds USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_tournament_courses_tournament_course_rounds_tournament_c

-- DROP INDEX IF EXISTS public.fki_fk_tournament_courses_tournament_course_rounds_tournament_c;

CREATE INDEX IF NOT EXISTS fki_fk_tournament_courses_tournament_course_rounds_tournament_c
    ON public.tournament_course_rounds USING btree
    (tournament_course_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.user_course_infos

-- DROP TABLE IF EXISTS public.user_course_infos;

CREATE TABLE IF NOT EXISTS public.user_course_infos
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    user_id uuid NOT NULL,
    course_id uuid NOT NULL,
    handicap smallint NOT NULL DEFAULT 0,
    is_published boolean NOT NULL DEFAULT false,
    CONSTRAINT user_course_infos_pkey PRIMARY KEY (id),
    CONSTRAINT fk_courses_user_course_infos_course_id FOREIGN KEY (course_id)
        REFERENCES public.courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_infos_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_infos_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_infos_user_id FOREIGN KEY (user_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_course_infos
    OWNER to postgres;
-- Index: fki_fk_courses_user_course_infos_course_id

-- DROP INDEX IF EXISTS public.fki_fk_courses_user_course_infos_course_id;

CREATE INDEX IF NOT EXISTS fki_fk_courses_user_course_infos_course_id
    ON public.user_course_infos USING btree
    (course_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_infos_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_infos_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_infos_created_by
    ON public.user_course_infos USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_infos_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_infos_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_infos_updated_by
    ON public.user_course_infos USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_infos_user_id

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_infos_user_id;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_infos_user_id
    ON public.user_course_infos USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.user_round_infos

-- DROP TABLE IF EXISTS public.user_round_infos;

CREATE TABLE IF NOT EXISTS public.user_round_infos
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    user_id uuid NOT NULL,
    tournament_course_round_id uuid NOT NULL,
    gross_strokes smallint NOT NULL DEFAULT 0,
    is_published boolean NOT NULL DEFAULT false,
    CONSTRAINT user_round_infos_pkey PRIMARY KEY (id),
    CONSTRAINT fk_gaggle_users_user_round_infos_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_round_infos_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_round_infos_user_id FOREIGN KEY (user_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_tournament_course_round_user_round_infos_tcr_id FOREIGN KEY (tournament_course_round_id)
        REFERENCES public.tournament_course_rounds (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_round_infos
    OWNER to postgres;
-- Index: fki_fk_gaggle_users_user_round_infos_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_round_infos_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_round_infos_created_by
    ON public.user_round_infos USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_round_infos_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_round_infos_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_round_infos_updated_by
    ON public.user_round_infos USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_round_infos_user_id

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_round_infos_user_id;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_round_infos_user_id
    ON public.user_round_infos USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_tournament_course_round_user_round_infos_tcr_id

-- DROP INDEX IF EXISTS public.fki_fk_tournament_course_round_user_round_infos_tcr_id;

CREATE INDEX IF NOT EXISTS fki_fk_tournament_course_round_user_round_infos_tcr_id
    ON public.user_round_infos USING btree
    (tournament_course_round_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

-- Table: public.user_course_round_accolades

-- DROP TABLE IF EXISTS public.user_course_round_accolades;

CREATE TABLE IF NOT EXISTS public.user_course_round_accolades
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_by uuid NOT NULL,
    updated_by uuid,
    created_date timestamp without time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updated_date timestamp without time zone,
    is_deleted boolean NOT NULL DEFAULT false,
    user_id uuid NOT NULL,
    tournament_course_round_id uuid NOT NULL,
    accolade_id uuid NOT NULL,
    count smallint NOT NULL,
    is_published boolean NOT NULL DEFAULT false,
    CONSTRAINT user_course_round_accolades_pkey PRIMARY KEY (id),
    CONSTRAINT fk_accolades_user_course_round_accolades_accolade_id FOREIGN KEY (accolade_id)
        REFERENCES public.accolades (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_round_accolades_created_by FOREIGN KEY (created_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_round_accolades_updated_by FOREIGN KEY (updated_by)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_gaggle_users_user_course_round_accolades_user_id FOREIGN KEY (user_id)
        REFERENCES public.gaggle_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_tournament_course_round_course_round_accolades_tournament_co FOREIGN KEY (tournament_course_round_id)
        REFERENCES public.tournament_course_rounds (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_course_round_accolades
    OWNER to postgres;
-- Index: fki_fk_accolades_user_course_round_accolades_accolade_id

-- DROP INDEX IF EXISTS public.fki_fk_accolades_user_course_round_accolades_accolade_id;

CREATE INDEX IF NOT EXISTS fki_fk_accolades_user_course_round_accolades_accolade_id
    ON public.user_course_round_accolades USING btree
    (accolade_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_round_accolades_created_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_round_accolades_created_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_round_accolades_created_by
    ON public.user_course_round_accolades USING btree
    (created_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_round_accolades_updated_by

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_round_accolades_updated_by;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_round_accolades_updated_by
    ON public.user_course_round_accolades USING btree
    (updated_by ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_gaggle_users_user_course_round_accolades_user_id

-- DROP INDEX IF EXISTS public.fki_fk_gaggle_users_user_course_round_accolades_user_id;

CREATE INDEX IF NOT EXISTS fki_fk_gaggle_users_user_course_round_accolades_user_id
    ON public.user_course_round_accolades USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_fk_tournament_course_round_course_round_accolades_tournamen

-- DROP INDEX IF EXISTS public.fki_fk_tournament_course_round_course_round_accolades_tournamen;

CREATE INDEX IF NOT EXISTS fki_fk_tournament_course_round_course_round_accolades_tournamen
    ON public.user_course_round_accolades USING btree
    (tournament_course_round_id ASC NULLS LAST)
    TABLESPACE pg_default;

-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
