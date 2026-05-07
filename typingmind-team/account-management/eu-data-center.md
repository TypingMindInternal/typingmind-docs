---
title: 'EU Data Center'
---

When creating a cloud host instance on [Typing Mind Custom](https://custom.typingmind.com), you can opt-in to have all of your data hosted in EU data center.

## How it works

We use [Vercel.com](http://Vercel.com) for the web server and Amazon Web Service (AWS) for database to host your EU cloud instance.

All of your user data are hosted in EU data centers, communications between the web server and database are happen within the EU region, and all data are encrypted while in transit and at rest.

To create a new instance hosted in the EU region, go to [the sign up page](https://www.typingmind.com/new-deployment) and select “Europe” under the “Data Center” section.

## Using with external AI providers

Typing Mind Custom does not come with AI models. You will need to setup connection to AI models by yourself using the popular providers like:

- OpenAI ChatGPT/GPT4
- Anthropic Claude
- Google Gemini
- Open source LLM models

Since we do not host the AI models, communications to the AI model may go outside of the EU region, depends on which provider you are using.

Here is a simplified diagram of the setup and communication between Typing Mind Custom and other services.

## Using with EU hosted AI providers

If you prefer to not having your data going outside of the EU region, consider using an AI provider that is hosted within EU, for example, Azure OpenAI hosted in EU region, or deploy your own private LLM models.

Please note that Typing Mind Custom do not have access or visibility on how the data is being stored/used in the AI model providers. If you are in doubt about how your data is being used, please contact the AI model provider directly.

## Use Self-Host

If you require the maximum level of data privacy/security, consider using our self-host solution, where you can have access to the source code and deploy a self-host instance on your server.

This will give you full control of data security and privacy.

[Learn more about self-host here.](https://custom.typingmind.com/features/self-host)