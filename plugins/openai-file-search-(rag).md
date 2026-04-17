---
title: "OpenAI File Search (RAG)"
---
<aside>
💡

Share your plugin/extension ideas at our [Awesome TypingMind Github Repo](https://github.com/TypingMind/awesome-typingmind)

</aside>

The **OpenAI File Search** plugin enables you to search and retrieve relevant information from your uploaded files efficiently. Follow these steps to set it up on TypingMind.

## How it works

- Users create vector stores via OpenAI and upload files to them.
- OpenAI automatically parses and chunks your documents, then creates and stores the embeddings.
- OpenAI splits the text into chunks of roughly 800 tokens per chunk.
- Users connect that vector store to the OpenAI File Search plugin on TypingMind.
- When users ask questions related to the uploaded data, the AI model will trigger the plugin, which uses both vector and keyword search to retrieve relevant content. The plugin retrieves up to 20 relevant chunks from the content of the chat so far and provides them to the AI model.
- The AI assistant will rely on the provided text chunks to provide the best answer to the user.

## Set up OpenAI File Search on TypingMind

### Step 1: Create vector store on OpenAI

- Go to [https://platform.openai.com/storage](https://platform.openai.com/storage)
- Switch to Vector stores tab and click “Create” to create a new vector store

![image.png](openai-file-search-(rag)/image.png)

- Click on Add Files and upload your documents

![image.png](openai-file-search-(rag)/image%201.png)

- After creating the vector store, copy the **Vector Store ID**—you will need it in the next step.

![image.png](openai-file-search-(rag)/image%202.png)

### Step 2: Set up OpenAI File Search plugin on TypingMind

- Go to Plugin store and install the OpenAI File Search plugin
- Enter your [**OpenAI API Key](https://platform.openai.com/settings/organization/api-keys)** (go to Settings on OpenAI platform —> API keys) and **Vector Store ID** (from Step 1)

<aside>
💡

Please note that the OpenAI API Key and Vector store need to be created on the same OpenAI API account.

</aside>

![image.png](openai-file-search-(rag)/image%203.png)

### Step 3: Test the plugin

Start a chat and ask any questions related to your uploaded data to see how it works!

![image.png](openai-file-search-(rag)/image%204.png)