# TypingMind Plugin JSON Schema

## Overview

TypingMind plugin can be completely described using a JSON object. Below is the description of each feature of the plugin and their corresponding JSON schema.

Plugin name, title, icon, overview, GitHub source URL, and authentication type, and permissions are defined as the following example:

```json
{
    "id": "f1af15c3-23ba-4548-a123-ea72d9a70dfd",
    "uuid": "f1af15c3-23ba-4548-a123-ea72d9a70dfd",
    "title": "Web Search (Serp)",
    "iconURL": "https://raw.githubusercontent.com/TypingMind/plugin-web-search-serp/refs/heads/main/icon.webp",
    "createdAt": "2025-09-12T05:36:39.890Z",
    "githubURL": "https://github.com/TypingMind/plugin-web-search-serp",
    "overviewMarkdown": "## Web Search (SerpApi)\n\nThis plugin allows the AI assistant to search for information from the internet in real-time using Google Search.\n\n**🔑 Serp API Key needed**. Click the Settings tab and enter your Serp API Key. To get your API Key, [create a Serp account](https://serpapi.com/)\n\nExample usage:\n\n> What's the gold price today?\n\n> How's the weather in SF at the moment?\n",
    "authenticationType": "AUTH_TYPE_NONE",
    "permissions": [
        "read_user_message"
    ],
}
```

User settings example:

```json
{
  "userSettings": [
    [
      {
        "name": "searchServiceName",
        "label": "Search Service Name",
        "description": "Find this in the \"Azure AI Services\" section in the Azure portal.",
        "required": true
      },
      {
        "name": "indexName",
        "label": "Index Name",
        "description": "Find this in \"Search managements\" → \"Indexes\" page in the Azure portal.",
        "required": true
      },
      {
        "name": "queryKey",
        "type": "password",
        "label": "Query Key",
        "description": "Find this in \"Settings\" → \"Keys\" page in the Azure portal.",
        "required": true
      },
      {
        "name": "apiVersion",
        "label": "API Version",
        "required": true,
        "description": "Find the latest API version here: https://learn.microsoft.com/en-us/rest/api/searchservice/search-service-api-versions",
        "defaultValue": "2023-11-01"
      }
    ]
  ]
}
```

Plugin context example:

```json
{
    "dynamicContextEndpoints": [
        {
            "id": "936cf499-0126-405f-b753-9cb9b553633a",
            "url": "",
            "name": "How to use this plugin",
            "method": "GET",
            "source": "static",
            "staticContent": "Activate this plugin when the user mention their pet.",
            "cacheDurationHours": 1,
            "cacheRefreshPolicy": "REFRESH_NEVER"
        },
        {
            "id": "9320d905-2ed0-4612-abcd-94c811a22f7f",
            "url": "https://www.typingmind.com/api/version",
            "name": "Latest version",
            "method": "GET",
            "cacheDurationHours": 1,
            "cacheRefreshPolicy": "REFRESH_NEVER"
        },
        {
            "id": "c81b6cf5-9045-4b41-9111-0def64b657bd",
            "name": "Retrieve index",
            "url": "https://test.com/index-endpoint",
            "source": "http",
            "method": "POST",
            "cacheRefreshPolicy": "REFRESH_NEVER",
            "cacheDurationHours": 1,
            "hasBody": true,
            "enableCache": false,
            "hasHeaders": true,
            "requestBody": "{\n  \"Authorization\": \"Bearer {OAUTH_PLUGIN_ACCESS_TOKEN}\"\n}",
            "requestHeaders": "{\n  \"chatID\": \"{chatID}\"\n}"
        }
    ],
}
```

OAuth config example:

```json
{
    "oauthConfig": {
        "prompt": "",
        "scopes": "chat:write",
        "tokenURL": "https://slack.com/api/oauth.v2.access",
        "accessType": "offline",
        "contentType": "urlencoded",
        "authorizationURL": "https://slack.com/oauth/v2/authorize"
    }
}
```

Plugin functions is defined as an array of multiple function.

Here is an example for a function with HTTP Action implementation type.

```json
{
  "pluginFunctions": [
    {
      "id": "430f1bac-9335-450a-ba87-3a1de1a1515c",
      "code": "",
      "name": "send_message_to_slack_channel_via_http_action",
      "httpAction": {
        "id": "4f777638-cdbd-4807-9044-6c4a261ecd7c",
        "url": "https://slack.com/api/chat.postMessage",
        "name": "",
        "method": "POST",
        "hasBody": true,
        "hasHeaders": true,
        "requestBody": "{\n  \"channel\": \"{channel}\",\n  \"text\": \"{message}\"\n}",
        "requestHeaders": "{\n  \"Authorization\": \"Bearer {OAUTH_PLUGIN_ACCESS_TOKEN}\"\n}",
        "requestBodyFormat": "form-data"
      },
      "openaiSpec": {
        "name": "send_message_to_slack_channel_via_http_action",
        "parameters": {
          "type": "object",
          "required": [
            "channel",
            "message"
          ],
          "properties": {
            "channel": {
              "type": "string",
              "description": "This parameter specifies the target Slack channel name."
            },
            "message": {
              "type": "string",
              "description": "This parameter specifies the message a user wants to send to the Slack channel."
            }
          }
        },
        "description": "This function sends an authorized user's message to a specific Slack channel via an HTTP action."
      },
      "outputType": "respond_to_ai",
      "implementationType": "http"
    }
  ]
}
```

Here is an example for a function with JavaScript implementation type.

```json
{
  "pluginFunctions": [
    {
      "id": "44adfca5-44ad-4a4c-b224-5e476136665d",
      "name": "render_chart",
      "implementationType": "javascript",
      "openaiSpec": {
        "name": "render_chart",
        "parameters": {
          "type": "object",
          "required": [
            "title",
            "chartType",
            "data",
            "options"
          ],
          "properties": {
            "data": {
              "type": "object",
              "required": [
                "labels",
                "datasets"
              ],
              "properties": {
                "labels": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "description": "Labels for the chart"
                },
                "datasets": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "label",
                      "data"
                    ],
                    "properties": {
                      "data": {
                        "type": "array",
                        "items": {
                          "type": "number"
                        },
                        "description": "Data points for the dataset"
                      }
                    }
                  },
                  "description": "Datasets to be rendered in the chart"
                }
              },
              "description": "Data to be rendered in the chart"
            },
            "title": {
              "type": "string",
              "description": "The title of the chart"
            },
            "chartType": {
              "enum": [
                "line",
                "bar",
                "doughnut",
                "pie",
                "radar",
                "polarArea",
                "bubble",
                "scatter"
              ],
              "type": "string",
              "description": "Type of the chart to render"
            }
          }
        },
        "description": "Generate a Chart.js chart"
      },
      "code": "function render_chart(params) {\n    const { chartType, options, title, data } = params;\n    const dataString = JSON.stringify(data)\n        .replace(/\\\\/g, '\\\\\\\\')\n        .replace(/\"/g, '\\\\\"')\n        .replace(/\\n/g, '\\\\n')\n        .replace(/\\r/g, '\\\\r')\n        .replace(/\\t/g, '\\\\t');\n\n    const optionsString = JSON.stringify(options)\n        .replace(/\\\\/g, '\\\\\\\\')\n        .replace(/\"/g, '\\\\\"')\n        .replace(/\\n/g, '\\\\n')\n        .replace(/\\r/g, '\\\\r')\n        .replace(/\\t/g, '\\\\t');\n\n    const htmlString = `\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>${title}</title>\n        <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>\n    </head>\n    <body>\n        <canvas id=\"generated-chart\" style=\"width: 100%; height: 90vh;\"></canvas>\n        <script>\n            var ctx = document.getElementById('generated-chart').getContext('2d');\n            var chart = new Chart(ctx, {\n                type: '${chartType}',\n                data: JSON.parse(\"${dataString}\"),\n                options: JSON.parse(\"${optionsString}\")\n            });\n        </script>\n    </body>\n    </html>\n    `;\n    return htmlString;\n}\n",
      "outputType": "render_html"
    }
  ]
}
```

Here is an example for a function with MCP implementation type.

```json
{
  "pluginFunctions": [
    {
      "id": "789803e1-8967-441d-b8df-17cbfd68f1d4",
      "code": "",
      "name": "Run browser",
        "id": "puppeteer_v2",
        "serverConfig": {
          "mcpServers": {
            "puppeteer_v2": {
              "args": [
                "-y",
                "@modelcontextprotocol/server-puppeteer",
                "{OAUTH_PLUGIN_ACCESS_TOKEN}",
                "{variableName1}",
                "{varibaleName2}"
              ],
              "command": "npx"
            }
          }
        }
      },
      "outputType": "respond_to_ai",
      "implementationType": "mcp"
    }
  ]
}
```

## Complete example

Below is a complete example JSON source for the “Web Search (Serp)” plugin:

```json
{
    "id": "f1af15c3-23ba-4548-a123-ea72d9a70dfd",
    "uuid": "f1af15c3-23ba-4548-a123-ea72d9a70dfd",
    "title": "Web Search (Serp)",
    "iconURL": "https://raw.githubusercontent.com/TypingMind/plugin-web-search-serp/refs/heads/main/icon.webp",
    "createdAt": "2025-09-12T05:36:39.890Z",
    "githubURL": "https://github.com/TypingMind/plugin-web-search-serp",
    "sourceUUID": null,
    "oauthConfig": null,
    "userSettings": [
        {
            "name": "serpAPIKey",
            "type": "password",
            "label": "Serp API Key",
            "required": true,
            "description": "Enter your Serp API Key here, if you don't have one, sign up from serpapi.com"
        }
    ],
    "overviewMarkdown": "## Web Search (SerpApi)\n\nThis plugin allows the AI assistant to search for information from the internet in real-time using Google Search.\n\n**🔑 Serp API Key needed**. Click the Settings tab and enter your Serp API Key. To get your API Key, [create a Serp account](https://serpapi.com/)\n\nExample usage:\n\n> What's the gold price today?\n\n> How's the weather in SF at the moment?\n",
    "authenticationType": "AUTH_TYPE_NONE",
    "dynamicContextEndpoints": [],
    "pluginFunctions": [
        {
            "id": "12d8b5b7-9e87-452a-adde-0fb7aa853105",
            "name": "search_web",
            "implementationType": "http",
            "openaiSpec": {
                "name": "search_web",
                "parameters": {
                    "type": "object",
                    "required": [
                        "query"
                    ],
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "The search term to look up on the web. Be specific and include relevant keywords for better results. For technical queries, include version numbers or dates if relevant."
                        },
                        "explanation": {
                            "type": "string",
                            "description": "One sentence explanation as to why this tool is being used, and how it contributes to the goal."
                        }
                    }
                },
                "description": "Search the web using SERP API (Google search engine) for real-time information about any topic. Use this tool when you need up-to-date information that might not be available in your training data, or when you need to verify current facts. The search results will include relevant snippets and URLs from web pages. This is particularly useful for questions about current events, technology updates, or any topic that requires recent information."
            },
            "code": "",
            "httpAction": {
                "id": "39442ea9-287b-4b06-951d-10291490295a",
                "url": "https://cloud.typingmind.com/api/plugins/serp/search?api_key={serpAPIKey}&engine=google&q={query}&json_restrictor=organic_results[].{title,snippet,source,link}",
                "name": "",
                "method": "GET"
            },
            "outputType": "respond_to_ai"
        }
    ],
}
```