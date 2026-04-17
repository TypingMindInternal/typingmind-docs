---
title: "API Integration Overview"
---
The **TypingMind Custom API** is a REST API that lets you interact with data in the TypingMind system. It uses JSON-formatted data for requests and responses.

Now, let's explore what our API can do and how it can be used in different business cases.

## **What the TypingMind Custom API can do?**

### **Manage Users**

You can manage users via API in the following ways:

- **Add a user:** add a new user to your chat instance.
- **Get all users:** retrieve a list of all users in your chat instance.
- **Remove a user:** remove a user from your chat instance.
- **Update a user:** update a user's details. Currently, you can only update user tags, but more options may be added in the future

![](https://framerusercontent.com/images/ctpQZdphBJwCaRbks8SQrmwJRA.png)

### **Manage Chats**

- **Create a model response:** create a model response for a given chat conversation.

![](https://framerusercontent.com/images/TTOjIgMzI9MwAZMqCcDBeCMzU.png)

## **Use Cases**

1. **User management for large team or community**
    
    If you have a large team or community using your chat instance, it can be time-consuming to manually add every new user through the admin panel.
    
    - You can automate this task with the API. When a new user joins, it is automatically added to your chat instance. This ensures that everyone in your team has access to the chat instance as soon as they join.
    - And if a user's role changes or if they leave the team or community, you can easily update their tags or remove their seats directly from your own platform using the API
2. **Chatbot integration**
    - You can create a chatbot using the training data you have, and this chatbot can be added to any platform like Discord or Telegram.
    - The chatbot will give responses that are relevant and based on the data you have provided it during its training phase.
    
    This can be used with any language learning models (LLMs) such as ChatGPT, Claude, or any other custom LLMs, thus giving you the flexibility to use the model that best fits your requirements.
    

## **Get Started with TypingMind Team API!**

To get started with using the API:

1. Generate an API key by logging into your instance admin panel > go to **Integrations** > **API Integration** > **Generate API key**

![](https://framerusercontent.com/images/EkUbAs7N5ftWOYMujLCv7UhkE.png)

1. Once you create a new API key, an **api-user-xxxx** will be added to your User list. You can then:
- Set restrictions for the API user just like any other user
- Track API usage by that user
- Remove the API user if you no longer need the API key

Each API key you generate will create a separate API user.

1. When making a request, include the API key in the request headers as `X-API-KEY`.

<aside>
💡

Please note that if you encounter the error like:

```json
{
  "userMessage": "You do not have access to this agent. Please contact your admin for more information."
}
```

It means that the AI Agent has visibility or usage restrictions, and the user **api-user-xxxx** is **not included** in the groups that are allowed to access the agent. As a result, API requests made with that user cannot access the agent.

To fix this issue:

- Go to **User Groups** → Add **api-user-xxxx** to the group that has access to the agent.
- Check the agent’s **Visibility** settings to make sure you assigned the correct group.
</aside>

For more request details, please check out the documentation available on [**api.typingmind.com/docs**](https://api.typingmind.com/docs).

If you encounter any issues or have any questions, don't hesitate to reach out to our support team at [**support@typingmind.com**](mailto:support@typingmind.com)