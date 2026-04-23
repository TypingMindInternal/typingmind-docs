---
title: "DeepInfra"
---

DeepInfra allows you to access Open-source AI models such as Meta LLaMA 3, Mistral AI, Gemma, etc. at low cost.

Here’s how to set up DeepInfra on TypingMind

# Step 1: Create DeepInfra account

Go to [https://deepinfra.com/](https://deepinfra.com/) and Log into DeepInfra via your GitHub account

![Untitled](deepinfra/Untitled.webp)

# Step 2: Generate an API key

- Go to DeepInfra API Key page at [https://deepinfra.com/dash/api\_keys](https://deepinfra.com/dash/api_keys)
- Click on “**New API Key**”
- Enter your API Key Name and click “**Generate API Key**”

![Untitled](deepinfra/Untitled%201.webp)

- Copy the generated API key and move to step 3

![Untitled](deepinfra/Untitled%202.webp)

# Step 3: Set up DeepInfra on TypingMind

You will need to set up DeepInfra as a custom model on TypingMind. Here’s how:

- Go to **Manage Models**
- **Add Custom Models**
- Updates the following information to set up DeepInfra models:
  - **Name**: LLaMA 3 70B via DeepInfra (or you can give it any name you want)
  - **Endpoint**: [`https://api.deepinfra.com/v1/openai/chat/completions`](https://api.deepinfra.com/v1/openai/chat/completions)
  - **Model ID**: `meta-llama/Meta-Llama-3-70B-Instruct` or you can find all model IDs [here](https://deepinfra.com/models)
  - **Add Custom Headers**:
  `Authorization`: `Bearer {{YOUR_API_KEY}}` (enter the copied API key)

![Untitled](deepinfra/Untitled%203.webp)

- Click Test, If it is successful, there's a message that says, 'Nice, the endpoint is working!’
- Click Update Model

# Step 4: Start chatting!

Now, you can choose the model and interact with it! Below is an example chat with LLaMA 3 70b:

![Untitled](deepinfra/Untitled%204.webp)