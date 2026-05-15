---
title: "Self-host"
sidebarTitle: "Self-host"
---

Self-host TypingMind Teams allows you to host TypingMind Team on your infrastructure.

## Features & Limitations

The self-host version includes all features as seen in the [cloud-host version](https://www.typingmind.com/new-deployment).

To see all the available features in the cloud-host version, you can register a free account at [https://custom.typingmind.com](https://custom.typingmind.com/) and explore the admin panel.

## Requirements

- NodeJS 18.x for running the software.
- MySQL 8.x for storing data.
- An SMTP credential for sending emails.

## Installation Instructions

### Step 1: Access our GitHub repo

Once you complete purchase, you will be granted access to our GitHub Repo.

### **Step 2: Preparing Your Environment**

Start by setting up your digital environment to ensure a smooth installation. This involves:

- **Server setup**: set up a server that can run NodeJS
- **Database setup:** use any database hosting provider that supports MySQL 8.x (we recommend planetscale.com).
- **Email configuration:** obtain SMTP credentials from a provider supporting TLS encryption on port 465 for secure email notifications.
- **Essential configuration:** Gather key information including your deployment domain, database connection details, SMTP info for email, and other necessary settings like app name and security configurations.

### **Step 3: Launching Your App**

Deploy your app with your selected hosting provider, ensuring it meets the minimal technical specifications for hardware and software.

We’ll guide you through choosing the proper setup once you’re ready to start.

### **Step 4: Verification**

Verify that the app is running properly by sending a request to the HTTP server.

When you first open the app, you will be redirected to `/setup` URL to set up your instance.

### Step 5: Access Admin Panel and Customize your Chat UI

Fully control and customize the chat instance to suit your team goals:

- Set up your branding (General settings)
- Build Prompt library, AI Characters
- Pre-set plugins with necessary details (API keys, Search ID, etc.)
- Upload your training data to train the chatbot (Training Data)
- Restrict member access to specific chat models or resources (Usage & Limits)

See full customization options [here](https://custom.typingmind.com/features)

### Step 6: **Receiving Updates**

Software updates will be released via the GitHub repo.

**Auto-update**: you can set up an automation to pull and redeploy anytime there's a new change in the GitHub repository.

## Installation

![](https://framerusercontent.com/images/sCMvdiqcFn0q2uk1H5Mx7kOcJYg.webp)

## Data Privacy

All data are stored in your MySQL database and never sent anywhere else.

**There is strictly no user data sent out to any other external services.** This can be verified using various black-box testing methods like monitoring network requests from the app.

There are only 3 types of external network requests that will be made from the self-host app:

- Requests to OpenAI/Anthropic: this is the core functionality of the app, allowing you to chat with AI. \*\*If you use an internal **private LLM**, no requests to OpenAI/Anthropic will be made.
- Requests to check for software updates: this is to notify you when there is a new update to upgrade. This request will be sent to Typing Mind's server and only contain minimal information needed to check for updates.
- Requests to check for license: this is to verify the valid license of your self-host instance and ensure that you're using the correct amount of users as per your contract/subscribed plan. This request will be sent to Typing Mind's server and only contains minimal information needed to check for updates, with no user data included.

For more details, please check our [Privacy Policy](https://custom.typingmind.com/privacy).

## Need more clarification?

Reach us at [support@typingmind.com](mailto:support@typingmind.com) for a more information.