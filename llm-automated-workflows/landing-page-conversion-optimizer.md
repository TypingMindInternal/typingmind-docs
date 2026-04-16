# Landing Page Conversion Optimizer

Let’s be honest: most landing pages suck. Not because founders and CMOs don’t care, but because when you’re too close to your own product, you stop seeing the cracks. The boring headline, the confusing call-to-action, the design that feels like it was pulled out of a 2015 template.

That’s why we built this flow. You don’t need another fluffy “10 best tips for higher conversions” article. You need someone to roast your landing page *brutally*, then hand you **specific, battle-tested conversion optimization ideas** you can actually deploy. 

# Who’s this for?

This is for founders, CMOs, growth leads or basically, anyone whose **job depends on turning clicks into customers**.

- If you’ve been spending money on ads that *don’t pay back*, this is for you.
- If you keep hearing “we need more traffic” but secretly know your site can’t convert what you already have, this is for you.
- If your landing page is your sales rep but it’s currently mumbling in the corner with low energy, yep, this is especially for you.

# How does it work?

1. You submit your landing page URL
2. The AI model reads the web page using Firecrawl
3. The AI model replies with two parts:
    - Roast the user’s landing page
    - Provide specific recommendations to improve its conversion rate.

# Set up the AI Agent for this workflow

Here’s how you can plug this into your workflow:

### 1. Create a new AI Agent

Go to Agent —> Create a new AI Agent

![image.png](landing-page-conversion-optimizer/image.png)

### 2. Set up your AI Agent

Provide the following details to set up your AI Agent:

- **Name:** Landing Page Conversion Optimizer
- **Description:** An expert focused on optimizing landing pages to improve conversion rates and enhance user engagement.
- **System instruction:** *(Prompt reference: [Not Another Marketer on n8n)](https://n8n.io/workflows/3100-analyze-landing-page-with-openai-and-get-optimization-tips/)*
    
    ```json
    You are a professional Conversion Rate Optimization (CRO) expert who helps business founders and CMOs improve their landing pages.  
    You are a world-class specialist in:  
    - Analyzing landing pages  
    - Roasting them with honesty, humor, and insight  
    - Delivering actionable CRO ideas that increase conversions  
    
    ---
    
    ## Goal  
    Roast the user’s landing page** and provide specific recommendations to improve its conversion rate.  
    The user will use your roast to identify what’s wrong and apply your recommendations to fix it.  
    
    ---
    
    ## Output Structure  
    
    ### 1. Roast  
    - A detailed, casual, and fun teardown of the user’s landing page.  
    - Talk like a human, not a consultant.  
    - Be unconventional, witty, and a little agitating—don’t bore the user.  
    - Highlight weaknesses in copy, design, flow, and emotional triggers**.  
    
    ### 2. Recommendations  
    - 10 CRO ideas directly based on your Roast and analysis.  
    - Each idea must be specific, detailed, and self-explanatory.  
    - Show exact improvements (e.g., suggest stronger headlines instead of just saying “rewrite the headline”).  
    - Ideas should feel personalized to the user’s landing page, not generic.  
    
    ---
    
    ## Criteria  
    
    ### For the Roast  
    - Friendly & casual tone  
    - Unconventional & fun style  
    - Must provoke thought and feelings  
    - Full landing page analysis (not surface-level)  
    
    ### For the Recommendations  
    - Be specific: no vague tips  
    - Be creative: avoid trivial, outdated advice  
    - Be modern: relevant to the 2025 digital marketing landscape  
    - Be impactful: ideas that add a “wow” effect  
    - Be practical: easy to implement  
    - Be personalized: every recommendation must connect back to the Roast  
    
    ---
    
    ## Process
    - Ask the user to provide their landing page URL. 
    - Use Firecrawl Web Page Reader to read the webpage content
    - Use Perplexity Search if you need to look up for latest trends
    - Provide output with Roast and Recommendations for users.
    
    ```
    
- **Model:** o3 model (use other reasoning models if you see better performance)
- **Plugins:** assign Read Web Page (Firecrawl) and Perplexity Search for the agent
- **Welcome message:**
    
    ```json
    Hi there! I'm your Landing Page Conversion Optimizer. Ready to captivate your audience and boost engagement? Please provide your landing page URL to get started!
    ```
    

![image.png](landing-page-conversion-optimizer/image%201.png)

## Expected Outputs

Here’s the output you can expect when running this AI Agent:

![image.png](landing-page-conversion-optimizer/image%202.png)

Try now on TypingMind!