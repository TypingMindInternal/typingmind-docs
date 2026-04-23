---
title: "xAI (Grok AI)"
---

You can now set up xAI models as custom models on TypingMind!

![image.webp](xai-\(grok-ai\)/image.webp)

Here’s how!

## Step 1: Create an xAI account

Go to [https://console.x.ai/](https://console.x.ai/create-team) to sign up for an xAI account if you don’t have one yet.

![image.webp](xai-\(grok-ai\)/image%201.webp)

## Step 2: Create an xAI team

Next, you will need to create an xAI team to get into the console:

- Create a new team by entering a Team name and description.
- Click **Create Team**.
  - You can skip inviting members if not necessary.
  - Skip the API key creation for now - we’ll handle that later.
  - Click **Go to Home** to return to the console dashboard.

![image.webp](xai-\(grok-ai\)/image%202.webp)

![image.webp](xai-\(grok-ai\)/image%203.webp)

## Step 3: Purchase API credits

To use the API, you'll need to purchase credits:

- Go to **Billing**.
- Click on **Credits**.
- Select **Purchase Credits**.

_Note: Make sure to set up your billing profile and payment method before topping up credits._

![image.webp](xai-\(grok-ai\)/image%204.webp)

## Step 4: Create API key

- Go to **API Keys** in the console.
- Click **Create API Key**.

![image.webp](xai-\(grok-ai\)/image%205.webp)

- Click to copy to API key to a safe place to set up on TypingMind.

## Step 5: Set up xAI on TypingMind

To configure xAI in TypingMind, go to Models —\> Add Custom Models:

![image.webp](xai-\(grok-ai\)/image%206.webp)

Use the following details:

- **Name**: xAI (or a name of your choice)
- **API Type**: select **OpenAI Responses API (New)**
- **Endpoint**: [`https://api.x.ai/v1/responses`](https://api.x.ai/v1/responses)
- **Model ID**: `grok-4.20-0309-reasoning`, `grok-4.20-multi-agent-0309` (or select from your model list)

![image.webp](xai-\(grok-ai\)/image%207.webp)

- **Customer Headers**:
  - Authorization: `Bearer Your_xAI_API_Key`

Click **Test** to verify the setup. If successful, you’ll receive a confirmation that the model is ready for use.

![image.webp](xai-\(grok-ai\)/image%208.webp)

## Step 6: Start chatting!

You’re all set to use xAI within TypingMind. Enjoy!