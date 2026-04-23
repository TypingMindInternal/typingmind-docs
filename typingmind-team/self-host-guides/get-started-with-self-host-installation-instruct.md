---
title: 'Get started with self-host - Installation Instruction (Docker)'
---

<Info>
  To learn more about TypingMind Team Self-host version, visit [https://custom.typingmind.com/self-host](https://custom.typingmind.com/self-host)
</Info>

## Installation Instructions

To setup a self-host instance, you will need the following:

1. A server that support Docker.
2. MySQL 8.x for storing data.
3. An SMTP credential for sending emails.

### Step 1: Prepare a MySQL database

Use any database hosting provider that support MySQL 8.x.

Requirements:

- MySQL 8.x
- At least 1 dedicated CPU
- At least 4GB of RAM

After the database is up and running, take note of the database credentials for later steps.

### Step 2: Prepare SMTP credentials

The self-host instance uses SMTP to send emails (i.e., login OTP). You can use any SMTP provider. The only requirement is that it must support secure email transport (TLS) via port `465` or `587`. If you are using a self-signed certificate for your SMTP server, you need to set the `SMTP_ALLOW_SELF_SIGNED_CERTIFICATE` environment variable to `1`.

### Step 3: Prepare Environment Variables

Before going to the next step, make sure you have all of these environment variables ready.

**Hostname**: the hostname where you intend to deploy the app to.

```text
DEPLOYMENT_HOST_NAME=ai-chat.yourcompany.com
INSTANCE_BASE_HOSTNAME=ai-chat.yourcompany.com
```

**Database**: enter your MySQL credentials in connection string format as below. Make sure to include the paramaters (`ssl`, `timezone`,`namedPlaceholders`), in the connection string as shown below.

```text
DATABASE_URL='mysql://username:password@hostname/database_name?timezone=+00:00&namedPlaceholders=true'
```

**If you're using SSL connection for MySQL**: (`--require_secure_transport=ON.`), add `ssl={"rejectUnauthorized":true}` to the URL parameter. Then add this additional environment variable:

```text
FORCE_SECURE_DB_CONNECTION=1
```

**If you are using [planetscale.com](http://planetscale.com/)** as your database, add this additional variable so that the app use an appropriate database engine that supported by PlanetScale:

```text
USE_PLANETSCALE=1
```

**Instance info**. Will be shown in various places in the app.

```text
APP_CLOUD_NAME=Your Company Name
APP_CLOUD_EMAIL_DOMAIN=your.smtp.authorized.domain.com
```

**SMTP credentials**. Used for sending OTP emails when users login. Make sure the SMTP server is configurated and authorized to send emails using the `APP_CLOUD_EMAIL_DOMAIN` hostname, otherwise, emails may land in users' Spam folder.

```text
SMTP_HOST=
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_PORT=
```

Note: if you are using a self-signed certificate for your SMTP server, you need to set the `SMTP_ALLOW_SELF_SIGNED_CERTIFICATE` environment variable to `1`.

```text
SMTP_ALLOW_SELF_SIGNED_CERTIFICATE=1
```

**User-provided endpoints**. To safeguard against internal network exposure, all internal endpoints (e.g., IP addresses, localhost) are blocked by default for resources like custom models, plugins, and agents. If necessary, you can override this restriction by setting the ALLOW\_UNSAFE\_USER\_ENDPOINTS environment variable to `1`.

```text
ALLOW_UNSAFE_USER_ENDPOINTS=1
```

**Other mandatory variables**. Cookie secrets is used to sign data in cookies, you can generate it yourself or just use a random string. Instance key is provided to you as part of your purchase.

```text
COOKIE_SECRET=your-secure-secret-for-signing
INSTANCE_KEY=(this is the license key you received in your email)
```

### Step 4: Deploy with Docker

Connect this repository to your hosting provider to start the deployment. Here are some relevant details to help you with the setup:

Hardware requirements:

- At least 1 dedicated CPU
- At least 4GB of RAM

Our official docker image is hosted at `ghcr.io/typingmind/tm-self-host:latest`. To run the docker image, use the following command (change the `12151` port and the environment variables to your own):

```text
docker run -p 12151:12151 \\
  -e PORT=12151 \\
  -e INSTANCE_KEY='' \\
  -e DATABASE_URL='' \\
  -e APP_CLOUD_EMAIL_DOMAIN='' \\
  -e APP_CLOUD_NAME='' \\
  -e DEPLOYMENT_HOST_NAME='' \\
  -e COOKIE_SECRET='' \\
  -e CRON_SECRET='' \\
  -e INSTANCE_BASE_HOSTNAME='' \\
  -e SMTP_HOST='' \\
  -e SMTP_PASSWORD='' \\
  -e SMTP_PORT='' \\
  -e SMTP_USERNAME='' \\
  ghcr.io/typingmind/tm-self-host:latest -it
```

### Step 5: Verify your deployment

The HTTP server will run on the specified port number based on the `PORT` environment variable set by your hosting provider.

To verify that the app is running properly, send a request to the HTTP server (by visiting the hostname URL). If the request hit the server, you will see this log in the server's output:

```text
hostname {your.hostname.here}
```

When you first open the app, you will be redirected to `/setup` URL to set up your instance.

## Receiving Updates

To receive new updates, pull the docker image again from our official registry at `ghcr.io/typingmind/tm-self-host:latest`

Changelog can be viewed from the Admin panel or you can see it online here:

[https://www.typingmind.com/changelog](https://www.typingmind.com/changelog)

## Recommended modules

### Blob Storage

Blob Storage module is required if you want to use attachments features (upload images, files, documents).

TypingMind can be connected to a S3-compatible bucket for better storing files. When connected, TypingMind will use the S3-compatible bucket for storing various files during its operation like user chat attachments, admin-user uploaded files, support faster user data sync, and other purposes.

To connect the app to a S3-compatible bucket, set the following environment variables:

```text
BLOB_STORAGE_AWS_S3_REGION=
BLOB_STORAGE_AWS_S3_KEY=
BLOB_STORAGE_AWS_S3_SECRET=
BLOB_STORAGE_AWS_S3_BUCKET=
BLOB_STORAGE_AWS_S3_ENDPOINT=
```

Your S3-compatible storage provider must support at least the the following features from S3:

- Standard object operation: HeadObject, ListObjects, GetObject, PutObject, DeleteObject.
- Signed requests: GET and PUT.
- CORS configuration that allow TypingMind to call the service API from the browser.

Below is an example CORS configuration for Cloudflare R2:

```json
[
  {
    "AllowedOrigins": [
      "<https://typingmind.yourcompany.com>",
    ],
    "AllowedMethods": [
      "HEAD",
      "GET",
      "POST",
      "PUT"
    ],
    "AllowedHeaders": [
      "Content-Type",
      "Content-Language",
      "Content-Encoding",
      "Content-Disposition",
      "X-Amz-Acl"
    ],
    "ExposeHeaders": [
      "Content-Type",
      "Access-Control-Allow-Origin",
      "ETag",
      "Cache-Control",
      "Content-Disposition",
      "Content-Encoding",
      "Expires"
    ]
  }
]
```

By default, TypingMind assume the blob storage end point is reachable from public internet, so some attachments are sent as pre-signed URLs directly to the AI models. If your blob storage is only reachable from internal network, you need to set the following environment variable:

```text
BLOB_STORAGE_PRIVATE=1
```

When this variable is set, TypingMind will send attachments as Base64 URL, which is slower and less efficient.

## Optional modules

### Enable metrics tracking

Metrics tracking can be enable by setting the `DB_TRACK_METRICS`:

```text
DB_TRACK_METRICS=1
```

When enabled, related metrics will be collected in the `tbl_metrics` table in your database and can be synced to your data warehouse for analytics.

The metric payload is a schema-less JSON object contains useful information like: token usage, user, AI agent used, etc.

### Enable background cron jobs

Cron jobs are required for some features like sending daily/weekly report emails, cleaning up expired data, etc. To enable cron jobs, set the `CRON_SECRET` environment variable to a secure secret string.

```text
CRON_SECRET=your-secure-secret
```

If you are running multiple instances of the server, make sure to only enable cron jobs on only one server instance to avoid duplicated cron jobs.

### Custom SMTP email settings

Use `SMTP_SENDER_ADDRESS` to customize the sender address of the email sent by the app. By default, it uses `no-reply@${APP_CLOUD_EMAIL_DOMAIN}`.

```text
SMTP_SENDER_ADDRESS=example@yourcompany.com
```

Use `DISABLE_SMTP_SECURE` to disable secure connection to SMTP server. This is useful in some cases where your SMTP server needs the connection to be created on insecure mode then upgrade to secure mode at a later step.

```text
DISABLE_SMTP_SECURE=1
```

### Knowledge Base

Knowledge Base is an optional module that provide RAG (retrieval-augmented generation) processing pipeline TypingMind.

This module can only be enabled when:

- You are using the pre-built TypingMind Docker image provided above.
- Your TypingMind instance must be served over secure HTTPS connection.

To enable this module, add the following environment variable:

```text
KB_SECRET=your-secure-random-generated-secret
OPENAI_API_KEY=sk-...
PG_DATABASE_URL='postgresql://username:password@hostname/database_name'
```

TypingMind uses embedding models from OpenAI, so the `OPENAI_API_KEY` is used to access the OpenAI API.

The `PG_DATABASE_URL` is a connection strings to a PostgreSQL database with the following requirements:

- PostgreSQL version 16.x
- Must support `pgvector` extension for storing vector embeddings.
- At least 1 dedicated CPU, recommended at 2 dedicated CPUs.
- At least 4GB of RAM, recommended at 8GB of RAM.
- At least 30GB of storage space, recommended at 100GB of storage space.

After setting up the environment variables, restart the docker container and go to Admin Panel → Knowledge Base to set up the Knowledge Base module.

### Example deployment with docker compose

Below is an example `docker-compose.yml` file that you can use to deploy TypingMind with Docker Compose with minimal environment variables set.

```yaml
services:
  mysql:
    image: mysql:8.0
    container_name: tm-mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword123
      MYSQL_DATABASE: typingmind
      MYSQL_USER: tmuser
      MYSQL_PASSWORD: tmpassword123
    ports:
      - "3306:3306"
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      timeout: 10s
      retries: 5
      start_period: 30s

  postgres:
    image: pgvector/pgvector:pg16
    container_name: tm-postgres
    environment:
      POSTGRES_USER: pguser
      POSTGRES_PASSWORD: pgpassword123
      POSTGRES_DB: typingmind_pg
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U pguser -d typingmind_pg"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s

  minio:
    image: minio/minio:latest
    container_name: tm-minio
    environment:
      MINIO_ACCESS_KEY: minioadmin
      MINIO_SECRET_KEY: minioadmin123
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio-data:/data
    command: server /data --console-address ":9001"
    healthcheck:
      test: ["CMD", "curl", "-f", "<http://localhost:9000/minio/health/live>"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      default:
        aliases:
          # These settings are specific to Docker Desktop
          - minio.localhost
          - typingmind.minio.localhost

  createbuckets:
    image: minio/mc:latest
    depends_on:
      minio:
        condition: service_healthy
    entrypoint: >
      /bin/sh -c "
      until /usr/bin/mc alias set myminio <http://minio:9000> minioadmin minioadmin123; do
        echo 'Waiting for MinIO...';
        sleep 5;
      done;
      /usr/bin/mc mb myminio/typingmind --ignore-existing;
      /usr/bin/mc anonymous set public myminio/typingmind;
      exit 0;
      "

  app:
    image: ghcr.io/typingmind/tm-self-host:preview
    container_name: tm-app
    ports:
      - "${PORT:-12151}:${PORT:-12151}"
    environment:
      PORT: "${PORT:-12151}"
      DATABASE_URL: 'mysql://tmuser:tmpassword123@mysql:3306/typingmind?timezone=+00:00&namedPlaceholders=true'
      APP_CLOUD_EMAIL_DOMAIN: 'tm-self-host.local'
      APP_CLOUD_NAME: 'Test Self-host'
      COOKIE_SECRET: 'test-cookie-secret'
      CRON_SECRET: 'test-cron-secret'
      FORCE_SECURE_DB_CONNECTION: '0'
      DEPLOYMENT_HOST_NAME: '${APP_HOSTNAME}'
      INSTANCE_BASE_HOSTNAME: '${APP_HOSTNAME}'
      KB_SECRET: 'test-kb-secret'
      PG_DATABASE_URL: 'postgresql://pguser:pgpassword123@postgres:5432/typingmind_pg'
      SMTP_HOST: "${SMTP_HOST:-smtp.mailgun.org}"
      SMTP_PORT: "${SMTP_PORT:-465}"
      SMTP_USERNAME: "${SMTP_USERNAME:-username@smtp.test}"
      SMTP_PASSWORD: "${SMTP_PASSWORD}"
      INSTANCE_KEY: "${INSTANCE_KEY:-test-key}"
      OPENAI_API_KEY: "${OPENAI_API_KEY}"
      BLOB_STORAGE_AWS_S3_REGION: "${BLOB_STORAGE_AWS_S3_REGION:-us-east-1}"
      BLOB_STORAGE_AWS_S3_KEY: "${BLOB_STORAGE_AWS_S3_KEY:-minioadmin}"
      BLOB_STORAGE_AWS_S3_SECRET: "${BLOB_STORAGE_AWS_S3_SECRET:-minioadmin123}"
      BLOB_STORAGE_AWS_S3_BUCKET: "${BLOB_STORAGE_AWS_S3_BUCKET:-typingmind}"
      BLOB_STORAGE_AWS_S3_ENDPOINT: "${BLOB_STORAGE_AWS_S3_ENDPOINT:-<http://minio.localhost:9000/typingmind>}"
      BLOB_STORAGE_PRIVATE: "1"
    depends_on:
      mysql:
        condition: service_healthy
      postgres:
        condition: service_healthy
      minio:
        condition: service_healthy
    stdin_open: true  # -i flag
    tty: true         # -t flag

volumes:
  minio-data:
```

This example `docker-compose.yml` file will create 4 services, including the Blob Storage module. You can run this file by running the following command in the same directory as the file:

```text
PORT='12152' \\
APP_HOSTNAME='localhost:12152' \\
SMTP_HOST='your-value' \\
SMTP_PASSWORD='your-value' \\
SMTP_PORT='your-value' \\
SMTP_USERNAME='your-value' \\
INSTANCE_KEY='your-value' \\
OPENAI_API_KEY='your-value' \\
docker compose up
```

## Changelog

Changelog can be viewed from the Admin panel, or you can see it here:

[https://www.typingmind.com/changelog](https://www.typingmind.com/changelog)

## User Guide / Documents

Visit our webpage for user guides and documents on how to utilize all features of TypingMind.

[https://docs.typingmind.com/](https://docs.typingmind.com/)