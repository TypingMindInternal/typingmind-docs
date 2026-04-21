---
title: "Groq API (LLaMA 3, Mixtral 8x7b, Gemma 7b)"
---

You can use AI models through Groq API on TypingMind.

Groq currently supports:

- LLaMA 3 8b, LLaMA 3 70b
- Mixtral 8x7b
- Gemma 7b

Check out how to set it up on TypingMind! (Text guideline below)

<iframe src="https://www.youtube.com/embed/vjBl1qcWgQ4" title="YouTube video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

# Step 1: Log into Groq API

First, you will need to sign up for a DeepSeek AI account at [https://console.groq.com/login](https://console.groq.com/login)

![Untitled](groq-api-\(llama-3-mixtral-8x7b-gemma-7b\)/Untitled.png)

# Step 2: Get Groq API key

- Go to [https://console.groq.com/keys](https://console.groq.com/keys)
- Create a new API key
- Copy the generated API key

![Untitled](groq-api-\(llama-3-mixtral-8x7b-gemma-7b\)/Untitled%201.png)

# Step 3: Set up Groq on TypingMind

- Go to **Manage Models**
- **Add Custom Models**
- Updates the following information to set up Groq models:
  - **Name**: LLaMA 3 via Groq (or you can give it any name you want)
  - **Icon URL (suggested):** [https://groq.com/favicon.ico](https://groq.com/favicon.ico)
  - **Endpoint**: `https://api.groq.com/openai/v1/chat/completions`
  - **Model ID**: it can be `llama3-8b-8192`, `llama3-70b-8192`, `llama2-70b-4096`, `mixtral-8x7b-32768`, `gemma-7b-it`
  - **Add Custom Headers**: `Authorization`: `Bearer {{YOUR_API_KEY}}` (enter the copied API key) <img src="groq-api-(llama-3-mixtral-8x7b-gemma-7b)/Untitled%202.png" alt="Untitled" />
- Click **Test**
- Click **Update model**

# Step 4: Chat with Groq models

Now, you can choose the model and interact with it! Below is an example chat with LLaMA 3

![Untitled](groq-api-\(llama-3-mixtral-8x7b-gemma-7b\)/Untitled%203.png)

<aside>
  💡 Please note that plugins and streaming mode don’t work at the same time for Groq models.
</aside>