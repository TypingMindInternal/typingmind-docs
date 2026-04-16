# Write Effective Instruction for AI Agent

Writing a clear and structured instruction is the foundation for building a useful and reliable AI Agent. Even when you're creating a customer service assistant, a career coach, or an MBTI expert, the instruction acts as the brain and behavioral blueprint for your Agent.

Let’s check out!

![image.png](write-effective-instruction-for-ai-agent/image.png)

## Why instruction matters

An instruction defines how your AI Agent behaves, responds, and interacts with users. It sets expectations, boundaries, and tone. A vague or incomplete instruction often leads to unpredictable or irrelevant answers, while a well-crafted one enables consistent, goal-oriented interactions.

An effective instruction should:

- Define the Agent’s role and purpose
- Specify the desired outcome of the conversation
- Guide the Agent through steps or logic to reach that outcome
- Control tone, formatting, and boundaries

## Key components of a high-quality Agent instruction

Below is a framework you can follow when writing an instruction for your AI Agent.

### 1. Define the Agent’s role

Clearly state the identity and responsibility of the Agent. This sets the overall context and purpose of the conversation and helps the AI adopt a consistent persona throughout the interaction.

**Example:**

> *You are an MBTI (Myers-Briggs Type Indicator) expert helping users understand their personality type and recommending suitable career paths based on their type.*
> 

### 2. Specify the expected output

What should the Agent deliver by the end of the interaction? Define this explicitly to avoid vague or aimless conversations.

**Example:**

> *By the end of the session, the user should receive:*
> 
> - *Their most likely MBTI type*
> - *A short explanation of their personality type*
> - *Two to three career recommendations with justifications*

### 3. Describe the step-by-step logic

Provide guidance on the process the Agent should follow to reach the desired outcome. This often includes:

- What kind of information the Agent should ask the user
- How to interpret or process the user’s responses
- How to structure the result

> ***Example Process:***
> 
> 1. *Ask a series of questions to assess personality traits (e.g., energy orientation, decision-making style, preference for structure).*
> 2. *Based on user responses, determine the most suitable MBTI type.*
> 3. *Explain the type in simple language.*
> 4. *Recommend career options that align with that personality type.*

### 4. Define tone and communication sty

Controlling tone ensures consistency across interactions. Depending on your use case, tone can be casual, formal, motivational, technical, or empathetic.

**Example:**

> *Use a clear, friendly, and supportive tone. Avoid jargon or overly technical terms. Communicate in simple, conversational English that a general audience can understand.*
> 

### 5. Provide a sample response format

A well-formatted response sample improves consistency and gives the AI something to mimic. This is particularly helpful for multi-part outputs.

**Example Format:**

```

Your MBTI Type: INFP - The Mediator

Key Traits: Empathetic, imaginative, idealistic. You are deeply introspective and value meaningful connections.

Career Suggestions:
- Writer – Expressive and independent roles are ideal for your personality.
- Counselor – You are naturally empathetic and thrive in helping roles.
- UX Designer – Your creativity and concern for others make this a great fit.
```

Including a sample like this makes it more likely the AI will follow the structure, especially in longer or more complex interactions.

### 6. Set boundaries and rules

You should explicitly tell the Agent what to do and what not to do, particularly if it needs to stay focused or avoid misleading behavior.

> ***Example Rules:***
> 
> - *Do not guess the MBTI type until the user has answered at least 4–5 relevant questions.*
> - *Stay within the MBTI and career guidance context.*
> - *Do not generate medical, psychological, or legal advice.*
> - *Avoid asking for personal data like full name, phone number, or address.*

### 7. Optional: include fallback or clarification strategies

You can include specific instructions on how the Agent should respond when users give unclear answers or provide insufficient information.

**Example:**

> *If the user's response is vague or incomplete, ask a follow-up question to clarify. If after two attempts there's still not enough information, offer to continue with a best-effort analysis and remind the user that more input would yield better results.*
> 

### **8. Expanding Agent Capabilities**

Beyond basic instruction design, you can significantly enhance your AI Agent's capabilities through:

- **Training files:** providing specialized documents allows your Agent to develop expertise in particular fields, enabling more accurate and nuanced responses on complex topics.
- **Assign Plugins:** implementing plugins and tools empowers your Agent to transcend text-based interactions by:
    - Generating images and visual content (Dall-E, Interactive Canvas)
    - Searching the internet for real-time information (Web Search, Perplexity Search)
    - Integrating with external services and APIs

<aside>
💡

Learn more about AI Agent capabilities at [https://docs.typingmind.com/ai-agents/ai-agents-overview](https://docs.typingmind.com/ai-agents/ai-agents-overview)

</aside>

## Note

Before deploying, always test your instruction in real scenarios. Monitor responses, gather feedback, and iteratively refine your instruction to improve accuracy and usefulness over time.