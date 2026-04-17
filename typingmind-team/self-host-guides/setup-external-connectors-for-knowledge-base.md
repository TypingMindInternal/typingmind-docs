---
title: "Setup external connectors for Knowledge Base"
---
When you enabled the **Knowledge Base Module** for your TypingMind instance in the self-host environment, the only data source available is File Upload.

Here is how to enable external data source connectors like GitHub, Dropbox, Notion, etc.

<aside>
ℹ️

**Note:** This setup step requires technical skills to edit the database. We will make it easier to setup within the Admin Panel in the future.

</aside>

## Updating configuration in the PostgreSQL database

Open your PostgreSQL database that you used for the Knowledge Base module, select the `tbl_orgs` table. There should be one record in that table, select it and update the `props` value of the that record with the following value:

```json
{
  "availableSourceTypes": [
    "user_upload",
    "github",
    "notion",
    "web_scrape",
    "google_drive"
  ],
  "notionCredentials": {
    "clientID": "",
    "clientSecret": ""
  },
  "webScrapeCredentials": {
    "firecrawlAPIKey": ""
  },
  "googleDriveCredentials": {
    "apiKey": "",
    "clientID": "",
    "clientSecret": "",
    "projectNumber": ""
  }
}
```

In the property `availableSourceTypes`, identify the sources you want to enable using the values from the table below. Some data sources may require additional configurations as follow.

| Data Source | JSON Value | Required config properties |
| --- | --- | --- |
| Notion | `notion` | `notionCredentials` |
| GitHub | `github` | No other properties needed |
| Web Scrape | `web_scrape` | `webScrapeCredentials` |
| Google Drive | `google_drive` | `googleDriveCredentials` |

## Setup external data sources

### Notion data source

Follow [this guide](https://developers.notion.com/docs/create-a-notion-integration) to create a Notion integration.

During creating the integration, you will be asked to provide a **Redirect URL**, use the value below:

```
https://{DEPLOYMENT_HOST_NAME}/kb-api/api/v1/webhook/integrations/notion/callback
```

(Make sure to replace `{DEPLOYMENT_HOST_NAME}` with the actual host name of your self-host deployment.

Then add this new field to the value of `props`:

```json
  "notionCredentials": {
    "clientID": "",
    "clientSecret": ""
  }
```

### Web Scrape data source

Web scraping is done using an external service called Firecrawl. Go to [https://www.firecrawl.dev/](https://www.firecrawl.dev/) to signup for an account and get an API key. Add this to the value of `props`:

```json
  "webScrapeCredentials": {
    "firecrawlAPIKey": ""
  }
```

### Google Drive data source

Create a new project and an API credentials in your Google Cloud account.

**1. Create Google Cloud Project**

1. Go to Google Cloud Console
2. Create a new project or select existing one
3. Note the **Project Number** (found in project settings) - this is required by the application

**2. Enable Required APIs**

Enable these APIs in your Google Cloud project:

- **Google Drive API** - for file access and management
- **Google Picker API** - for the file picker interface

**3. Create OAuth2 Credentials**

1. Go to **APIs & Credentials > Credentials**
2. Click **"Create Credentials" > "OAuth 2.0 Client IDs"**
3. Choose **"Web application"** as application type
4. Configure authorized redirect URIs:

```
https://{DEPLOYMENT_HOST_NAME}/kb-api/api/v1/webhook/integrations/google-drive/callback
```

**4. Create API Key**

1. Go to **APIs & Credentials > Credentials**
2. Click **"Create Credentials" > "API Key"**
3. Restrict the API key to:
- **Google Drive API**
- **Google Picker API**
- Your domain/IP addresses

**Required OAuth Scopes**

The application uses this scope:

```
https://www.googleapis.com/auth/drive.file
```

## Need help?

Feel free to contact [support@typingmind.com](mailto:support@typingmind.com) to reach us.