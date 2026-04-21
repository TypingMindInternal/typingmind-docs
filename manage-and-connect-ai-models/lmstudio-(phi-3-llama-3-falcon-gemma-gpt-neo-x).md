# LMStudio (Phi-3, LLaMA 3, Falcon, Gemma, GPT-Neo-X)

You can set up LMStudio models as Custom models on [TypingMind.com](http://TypingMind.com) .

LMStudio currently supports:

- Microsoft's Phi-3
- Meta's Llama 3
- Falcon
- GPT-Neo-X
- Gemma
- and more

Here’s how!

<iframe src="https://www.youtube.com/embed/eu0epo4Qyyc" title="YouTube video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

<Note>
  💡 Note: This instruction is for the Typing Mind Web version ([https://www.typingmind.com](https://www.typingmind.com)). For the macOS version and Setapp version, due to **Apple’s security policy**, requests to `http`  protocol are blocked. If you want to connect to the macOS app, you can still follow the instructions here, but with one additional step: you need to **setup HTTPS for LMStudio**. This can be done using various techniques (e.g., using a [local HTTPS proxy](https://www.npmjs.com/package/local-ssl-proxy)).
</Note>

# Step 1: Download LMStudio

Go to [https://lmstudio.ai/](https://lmstudio.ai/) to download LMStudio for your device.

<Frame>
  ![Download Lm Studio](/images/download-lm-studio.png)
</Frame>

# Step 2: Download the AI model

Search and download the specific AI model you want to use, such as Phi-3-mini-4k.

<Frame>
  ![Lm Studio Download Model](/images/lm-studio-download-model.png)
</Frame>

# Step 3: Set up Local Server

- Go to **Local Server**
- From the top drop-down list, choose the model you downloaded in Step 2.
- Go to the **Configuration** section, enable all options.
- Click **Start Server**

<Frame>
  ![Untitled 2 1](/images/Untitled-2-1.png)
</Frame>

You should see a confirmation message once the server starts.

<Frame>
  ![Untitled 3](/images/Untitled-3.png)
</Frame>

# Step 4: Set up LMStudio models on TypingMind

- Go to **Manage Models**
- **Add Custom Models**
- Updates the following information to set up LMStudio models (example below is for Phi-3 mini)
  - **Name**: Microsoft Phi-3 (or you can give it any name you want)
  - **Icon URL (suggested):** [https://cdn.iconscout.com/icon/free/png-256/free-microsoft-26-722716.png](https://cdn.iconscout.com/icon/free/png-256/free-microsoft-26-722716.png)
  - **Endpoint**: `http://localhost:1234/v1/chat/completions`
  - **Model ID**: `microsoft/Phi-3-mini-4k-instruct-gguf/Phi-3-mini-4k-instruct-q4.gguf` (you can get your model ID after setting up local server here [http://localhost:1234/v1/models](http://localhost:1234/v1/models))

<Frame>
  ![Untitled 4](/images/Untitled-4.png)
</Frame>

# Step 5: Start chatting

Interact with Phi-3 or your chosen AI model on TypingMind!

<Frame>
  ![Untitled 5](/images/Untitled-5.png)
</Frame>