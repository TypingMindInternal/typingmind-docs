---
title: "Voice Input (Speech to Text)"
---

Voice input on TypingMind allows you to convert spoken language into written text, making it accessible and user-friendly for all users.

We offer 2 speech-to-text providers:

- Web API (Free)
- OpenAI Whisper (Pay as you go)
- Groq Whisper (Pay as you go)
- Azure Whisper (Pay as you go)

Let’s see how to set them up.

## **1. Web API (Free)**

You can use the Web API speech for free. To enable this:

- Go to **Settings** in the workspace bar
- Select **Voice Input**
- Choose **“Web API”** speech-to-text provider from the drop-down list
- Start recording your voice, which will be automatically transcribed into text so you can easily feed the AI model

![image.png](voice-input-\(speech-to-text\)/image.png)

## **2. OpenAI Whisper**

To enable OpenAI Whisper, you **must enter your OpenAI API key:**

- Go to **API key within your Profile**
- Enter your [OpenAI API key](https://www.notion.so/a9422fff1e364e31831a9cee99e37965?pvs=21)

![Untitled](voice-input-\(speech-to-text\)/Untitled.png)

Then follow the steps below to enable it:

- Go to **Settings** in the workspace bar
- Select **Voice Input**
- Choose **“OpenAI Whisper”** speech-to-text provider from the drop-down list
- Start recording your voice, which will be automatically transcribed into text so you can easily feed the AI model

<aside>
  💡 You can also upload your recorded meetings/webinars with OpenAI Whisper to get the transcription. Please note that the uploaded file can not be exceeded 25MB
</aside>

![image.png](voice-input-\(speech-to-text\)/image%201.png)

## **3. Groq Whisper**

To enable Groq Whisper, you must provide your **Groq API key**.

![Xnapper-2024-12-23-16.46.22.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-16.46.22.png)

Or, if you are part of a **TypingMind Team**, an administrator can set up the Groq API key in the **API Keys page** of the admin portal.

![Xnapper-2024-12-23-16.44.46.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-16.44.46.png)

## **4. Azure Whisper**

To enable Azure Whisper, you must provide your **Azure Whisper API key** and **API endpoint**.

![Xnapper-2024-12-23-16.49.52.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-16.49.52.png)

Or, if you are part of a **TypingMind Team**, an administrator can set up the Azure API key and endpoint in the **API Keys page** of the admin portal.

![Xnapper-2024-12-23-16.52.18.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-16.52.18.png)

### How to get Azure Whisper API Key and Endpoint?

1. If you do not already have an Azure OpenAI account, create one [**here**](https://oai.azure.com/).
2. In the Azure Portal, navigate to the **Deployments** section.
3. Create a new deployment using a **Whisper model**.

![Xnapper-2024-12-23-17.00.37.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-17.00.37.png)

1. Click on the deployment to view the details, and copy the **API Endpoint (Target URI)** and **API Key**.

![Xnapper-2024-12-23-17.05.45.png](voice-input-\(speech-to-text\)/Xnapper-2024-12-23-17.05.45.png)