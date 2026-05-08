---
title: "Moonshot AI"
---

**Kimi K2** — Moonshot AI’s newly released open-source **Mixture-of-Experts (MoE)** model — is causing a stir in the AI community.

Here’s a quick look at what makes Kimi K2 stand out:

- A trillion-parameter architecture optimized for **agentic tasks**, tool use, and reasoning
- Top-tier benchmark scores in coding and reasoning (e.g., 53.7% on LiveCodeBench vs. GPT‑4.1’s ~54.6%)
- **Free, open-source access**, allowing full control and deployment flexibility—unlike many proprietary models

Let’s walk through how to set up and test Kimi K2 on TypingMind so you can compare it in your own coding workflows.

## Step 1: Create a Moonshot API account

Go to [https://platform.moonshot.ai/console](https://platform.moonshot.ai/console) and create a new Moonshot API account.

![image.png](moonshot-ai-\(kimi-k2\)/image.png)

## Step 2: Set up Moonshot API account

To use the model via API, you’ll need to add balance to your account.

Visit [https://platform.moonshot.ai/console/pay](https://platform.moonshot.ai/console/pay) to top up — you can start with as little as \$1 to test it out.

![image.png](moonshot-ai-\(kimi-k2\)/image%201.png)

## Step 3: Get your Moonshot API key

Go to [https://platform.moonshot.ai/console/api-keys](https://platform.moonshot.ai/console/api-keys) and create a new API key.

Be sure to copy and save it securely — you’ll need it to set up Kimi K2 on TypingMind.

## Step 4: Set up Kimi as custom model on TypingMind

On TypingMind, go to Models —\> Add Custom Models and enter the following details:

- Give the model any name you prefer
- Enter the endpoint: **`https://api.moonshot.ai/v1/chat/completions`**
- Enter the Model ID and context length: `kimi-k2-thinking`,  `kimi-k2-0711-preview`or `kimi-k2-0905-preview`**.** View all available models here: [https://platform.moonshot.ai/docs/introduction#other-important-notes](https://platform.moonshot.ai/docs/introduction#other-important-notes)
- Add a custom header row, then enter `Authorization` and the API key in the value textbox in the format: `Bearer your_api_key`
- Click “**Test**” to verify the information is correct
- Click **Add Model**.

![image.png](moonshot-ai-\(kimi-k2\)/image%202.png)