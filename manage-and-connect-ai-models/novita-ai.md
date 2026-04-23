---
title: "Novita AI"
---

It’s easy to setup Typing Mind for using the available models on Novita AI ([https://novita.ai/](https://novita.ai/)). Here is a quick guide.

## Get a Novita AI account

You can sign up from [https://novita.ai/user/login](https://novita.ai/user/login) to create a new Novita AI account or log in if you already had an account.

![image.webp](novita-ai/image.webp)

## Add a custom model in Typing Mind:

Go to [typingmind.com](http://typingmind.com) and create a new Custom Model as follow:

- Go to Models → Click Add Custom Model
- Enter any model name.
- Enter the exact endpoint from the [API document](https://novita.ai/docs/guides/llm-api): [`https://api.novita.ai/v3/openai/chat/completions`](https://api.novita.ai/v3/openai/chat/completions)
- Enter the Model ID and context length: for example, `deepseek/deepseek-r1-0528`, `meta-llama/llama-4-scout-17b-16e-instruct` . You can view all available models here: [https://novita.ai/models-console](https://novita.ai/models-console)
- Add a custom header row, then enter `Authorization` and the API key in the value textbox in the format: `Bearer your_api_key` ([Get API key here](https://novita.ai/settings/key-management))
- Click “**Test**” to verify the information is correct
- Click **Add Model**.

![image.webp](novita-ai/image%201.webp)

## Use Novita AI Models in Typing Mind

You can now select the newly created custom model and chat with it.

![image.webp](novita-ai/image%202.webp)