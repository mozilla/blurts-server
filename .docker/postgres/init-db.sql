CREATE USER blurts WITH ENCRYPTED PASSWORD 'blurts';
CREATE DATABASE blurts WITH OWNER 'blurts';
CREATE DATABASE "test-blurts" WITH OWNER 'blurts';

ALTER DEFAULT privileges IN SCHEMA public GRANT ALL ON tables to blurts;
