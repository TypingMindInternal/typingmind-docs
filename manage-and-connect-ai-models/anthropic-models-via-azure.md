# Anthropic Models via Azure

Azure Foundry allows you to deploy and run Anthropic (Claude) models using Azure’s infrastructure. After deploying the model in Azure, you can connect it to TypingMind using the Claude Message API format.

Follow the steps below to set up your Claude model on Azure and integrate it into TypingMind.

## **Step 1: Add the model on Azure**

1. Log in to [**https://portal.azure.com**](https://portal.azure.com/) and select **Foundry**.
2. Choose your resource and open the **Foundry Portal**.

![image.png](anthropic-models-via-azure/image.png)

1. Go to **Model Catalog** → select a **Claude** model → click **Use this model**.

![image.png](anthropic-models-via-azure/image%201.png)

1. **Deploy** the model.

![image.png](anthropic-models-via-azure/image%202.png)

1. Open the deployment in **Playground** → click **View code**.

![image.png](anthropic-models-via-azure/image%203.png)

![image.png](anthropic-models-via-azure/image%204.png)

1. Switch to the **Key authentication** tab → switch to **cURL** to view the code sample.

From here, copy the following values:

- **Endpoint**
- **Anthropic API version**
- **Model ID**
- **API key**

![image.png](anthropic-models-via-azure/image%205.png)

## Step 2: Set up on TypingMind

Go to **Models → Add Custom Models**

Enter the following information:

- **Name:** Claude via Azure
- **API type:** switch to **Claude Message API**
- **Endpoint:** paste the endpoint you copied in Step 1
    - Format example:
        
        `https://[RESOURCE-NAME].openai.azure.com/anthropic/v1/messages`
        
- **Model ID:** your copied model ID
- **Add Custom Headers:**
    - `x-api-key: your-copied-api-key`
    - `anthropic-version: your-copied-anthropic-version`

![image.png](anthropic-models-via-azure/image%206.png)