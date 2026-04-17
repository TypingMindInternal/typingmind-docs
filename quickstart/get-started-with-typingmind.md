---
title: "Get Started with TypingMind"
description: "Your unified AI workspace — one interface for every model, tool, and workflow."
---

[TypingMind](https://typingmind.com) is a unified chat interface for working with large language models — connect your own API keys and access ChatGPT, Claude, Gemini, and more in one organized workspace.

---

## What You Can Do

<CardGroup cols={3}>
  <Card title="Chat & Organize" icon="comments">
    Folders, tags, forking, multi-tab, and full-text search across all conversations.
  </Card>
  <Card title="Any AI Model" icon="robot">
    OpenAI, Anthropic, Google, Mistral, Grok, Azure, and more — all in one place.
  </Card>
  <Card title="Prompts & Agents" icon="wand-magic-sparkles">
    Build a reusable prompt library and custom AI assistants with training data.
  </Card>
  <Card title="Knowledge Base" icon="database">
    Upload files or connect Google Drive, Notion, GitHub, and more for RAG-powered answers.
  </Card>
  <Card title="Plugins & MCP" icon="puzzle-piece">
    Web search, image generation, deep research, custom tools, and MCP server integrations.
  </Card>
  <Card title="Privacy First" icon="shield-halved">
    All chats stored locally by default. Optional cloud sync across devices.
  </Card>
</CardGroup>

---

## Setup Guide

### Step 1 — Activate your license & API keys

#### Activate your License Key

You can use TypingMind without a license key, but advanced features require one:

- Multi-model parallel chats
- Plugins (Web Search, Image Generator, etc.)
- Projects and Artifacts
- And more

<Tip>
  [Compare license plans](TypingMind%20License%20Plans%20225b9e3717314cf6b1539cae5f34ac51.md) to find the right tier. Once purchased, your license is automatically activated on your device.
</Tip>

![License key activation screen](get-started-with-typingmind/image%206.png)

To manage or retrieve your license key later, see [Manage License & Devices](../Manage%20License%20&%20Devices%20182d2a8c7a0c4f31883327e2b769eb3b.md).

![License management screen](get-started-with-typingmind/image%207.png)

#### Add your API Keys

TypingMind supports models from all major providers. You'll need to obtain an API key directly from each provider you want to use:

| Provider | Models |
|---|---|
| [OpenAI](../Manage%20&%20Connect%20AI%20Models/OpenAI%20\(GPT-5,%20GPT-4%201\)%2097b6ce8cbb6642a9934e81f7b7365575.md) | GPT-4o, o1, GPT-4 Mini, GPT-3.5, and more |
| [Anthropic](../Manage%20&%20Connect%20AI%20Models/Anthropic%20Claude%20a13efc63000c4dbcb1629507a52e4cf9.md) | Claude 3.5 Sonnet, Claude 3 family, and more |
| [Google](Get%20started%20with%20TypingMind%20fa103fd29211485f8fad739f24e9bd0a.md) | Gemini 1.5 Flash, Gemini 1.5 Pro, and more |
| [Others](https://docs.typingmind.com/manage-and-connect-ai-models) | Mistral, DeepSeek, Grok, and more |

<Note>
  One API key per provider unlocks all models from that provider. You do **not** need a ChatGPT Plus or Claude AI subscription — the API is a separate product.
</Note>

To add your keys: go to **Models** in the left sidebar → click the gear icon next to a provider → enter your key → enable the models you want.

![API key setup screen](get-started-with-typingmind/image%208.png)

![Enabling models](get-started-with-typingmind/image%209.png)

For a detailed walkthrough, see [Manage & Connect AI Models](https://docs.typingmind.com/manage-and-connect-ai-models).

---

### Step 2 — Back up your data *(optional)*

Your chats are saved locally in your browser by default — nothing is sent to TypingMind's servers unless you opt in.

To protect against data loss and sync across devices, sign in with your email to enable **TypingMind Cloud**:

![Cloud sync login screen](get-started-with-typingmind/image%2010.png)

Cloud sync includes:
- Chats, prompts, agents, plugins, API keys, and settings
- Up to **50 MB** free storage (expandable)
- Seamless sync across all your devices

![Cloud sync overview](get-started-with-typingmind/image%2011.png)

You can disable sync at any time by logging out, or connect your own cloud storage via [TypingMind Extensions](https://docs.typingmind.com/typing-mind-extensions). Learn more in [Cloud Sync & Backup](../Cloud%20Sync%20&%20Backup/Cloud%20Sync%20&%20Backup%20Overview%20eb531bc4034e4e77824944ade959891e.md).

---

### Step 3 — Start your first conversation

Once your API keys are set up, select a model and start chatting. You can only use models for which you've added an API key.

<Tip>
  Start with clear, specific instructions. If a response misses the mark, refine your prompt — more detail almost always yields better results.
</Tip>

![First conversation screen](get-started-with-typingmind/image%2012.png)

---

### Step 4 — Set global AI behavior with System Instructions

**System Instructions** define how the AI behaves across your entire session — its tone, personality, and scope. Set them in **Models → Global Settings**.

<Accordion title="What is context length?">
  Context length is the maximum number of tokens (words/characters) an AI model can hold in memory during a conversation. Once the limit is reached, older messages are dropped.

  System Instructions are **persistent** — the model always follows them, even after earlier messages fall out of context. For reference, GPT-4o supports up to 128,000 tokens.
</Accordion>

![System instructions screen](get-started-with-typingmind/image%2013.png)

Learn more: [System Instruction](../System%20Prompt/System%20Instruction%208226727031644d9992d16e2b2225c923.md)

---

### Step 5 — Get higher-quality responses

<AccordionGroup>
  <Accordion title="Build a Prompt Library">
    Save and reuse prompts for recurring workflows. Access your library from the **Prompts** menu in the left sidebar — use prebuilt prompts or create your own.

    ![Prompt library](get-started-with-typingmind/image%2014.png)

    **Tip:** Be specific. *"Explain machine learning basics with examples of supervised and unsupervised learning"* will outperform *"Explain machine learning"* every time.

    Learn more: [Use Prompt Library](../Prompts/Use%20Prompt%20Library%20a4fc26777d12484eb3d185c8f95862ff.md)
  </Accordion>

  <Accordion title="Upload documents & videos">
    Attach files directly to a conversation using the **attach icon** or drag-and-drop. The AI reads the content and can summarize, explain, or answer questions based on it.

    ![File upload in chat](get-started-with-typingmind/image%2015.png)

    **Tip:** Well-structured, relevant documents yield the most accurate results — ideal for analyzing reports or summarizing long texts.

    Learn more: [Chat with Files or Videos](../Upload%20and%20Chat%20with%20Files%203712c130aaad48d6985385575ae33137.md)
  </Accordion>

  <Accordion title="Extend with Plugins">
    Plugins give the AI access to the internet, image generation, code rendering, and more. Find them in the **Plugins** section of the left panel.

    Popular plugins include:
    - **[Web Search](https://docs.typingmind.com/plugins/web-search-and-image-search)** — real-time internet access
    - **[GPT Image Editor](https://docs.typingmind.com/plugins/gpt-image-editor)** — generate and edit images
    - **[Deep Research](https://docs.typingmind.com/plugins/deep-research)** — multi-step research on complex topics
    - **[Interactive Canvas](https://docs.typingmind.com/plugins/interactive-canvas-(artifacts))** — render charts and code

    You can also build [Custom Plugins](https://docs.typingmind.com/plugins/build-a-typingmind-plugin) to connect your own APIs or MCP servers.

    ![Plugins panel](get-started-with-typingmind/image%2016.png)
    ![Custom plugins](get-started-with-typingmind/image%2017.png)
  </Accordion>

  <Accordion title="Connect a Knowledge Base (RAG)">
    The **Knowledge Base** feature lets you upload files or connect external sources (Google Drive, GitHub, Notion, websites) so the AI can retrieve relevant context when answering your questions.

    ![Knowledge base screen](get-started-with-typingmind/image%2018.png)

    To get started: click the **KB** tab → **Add Data Source** → upload files or connect a source.
  </Accordion>

  <Accordion title="Build Custom AI Agents">
    AI Agents are purpose-built assistants with their own model, instructions, plugins, and training data. Create them from the **Agents** section in the left panel.

    Each agent can have:
    - A dedicated base model (e.g. GPT-4o)
    - Plugins for web search, image generation, or custom tools
    - A connected knowledge base or uploaded training files
    - Few-shot examples to guide behavior

    ![AI agents overview](get-started-with-typingmind/image%2019.png)

    Great for recurring, specialized tasks — like a customer support agent trained on your company FAQs.

    ![AI agent example](get-started-with-typingmind/image%2020.png)

    Learn more: [AI Agents Overview](../AI%20Agents/AI%20Agents%20Overview%20f325ffdfa14f4a2ba9ccb2f63f812c82.md)
  </Accordion>
</AccordionGroup>

---

### Step 6 — Organize your workspace

Your full chat history lives in the left panel. Keep it tidy by:

- **Dragging chats into folders**
- **Pinning** important conversations to the top
- **Deleting** stale chats

![Chat organization](get-started-with-typingmind/image%2021.png)

For longer-term work, use **Projects** — containers that group related chats with shared model settings, instructions, and agents.

![Projects view](get-started-with-typingmind/image%2022.png)

Learn more: [Organize Chats](../Chat%20Management/Organize%20chats%20788fcb21625846f9af8f8d7861f0db43.md)

---

### Step 7 — Share your conversations

Click the **Share** button above the message area to export or share any chat in your preferred format:

- 🔗 Secret link
- 📝 Markdown
- 📦 JSON
- 🌐 HTML Webpage
- 📄 PDF

![Share chat options](get-started-with-typingmind/image%2023.png)