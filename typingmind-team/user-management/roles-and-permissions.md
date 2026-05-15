---
title: "Roles & Permissions"
description: "Add team members to your chat instance, assign specific roles and permissions, and enable them to access the Admin Panel."
sidebarTitle: "Roles & Permissions"
---

Running and managing a chat instance on your own can be challenging. Beyond managing users, you also need to train AI agents, monitor interactions, and ensure that AI responses are consistently high quality.

That's where our advanced **Roles and Permissions** system comes in. This feature allows you to add team members to your chat instance, assign specific roles and permissions, and enable them to access the Admin Panel to support you in their designated functions.

This also gives you — the instance owner — more granular control over the permissions you grant to your team members.

## What are Roles and Permissions on TypingMind?

### TypingMind Roles

Instance owners can create **Custom Roles** within each chat instance. You can define a variety of roles, each with a unique set of permissions, and then assign these roles directly to team members. This ensures that each person has access only to the features necessary for their role.

### TypingMind Permissions

**TypingMind permissions** determine what actions each role can perform within the Admin Panel. These permissions are assigned to roles, not individual users.

**For example**, if a role lacks the _View Chat Logs_ permission, users assigned to that role will be unable to access the chat logs page. Similarly, if a role does not have the _View the API Keys page_ permission, users in that role will be restricted from viewing or configuring API keys.

<Note>
  **Previously,** TypingMind included two predefined roles: Admin and Content Moderator. The Admin role will remain as the role with the highest level of permissions and will be available by default. However, the Content Moderator role has been removed in favor of more flexible, custom-defined roles that better suit your team's specific needs.
</Note>

### Why use TypingMind Roles and Permissions?

<CardGroup cols={2}>
  <Card title="Flexibility and control" icon="sliders-horizontal">
    Bundle the required permissions into the right roles and assign them to users across the organization to suit your workflow needs.
  </Card>

  <Card title="Security and compliance" icon="shield-check">
    Minimize security risks by granting only necessary permissions to your users with custom roles.
  </Card>

  <Card title="Improved productivity" icon="gauge">
    Custom roles ensure that users access only the relevant parts of the Admin Panel for their function, avoiding overwhelm.
  </Card>

  <Card title="Scalability" icon="trending-up">
    Custom roles simplify permission management as teams grow and ensure the right people have the right access.
  </Card>
</CardGroup>

---

## Full list of TypingMind permissions

The table below covers all available permissions for access to your Admin Panel.

| Feature | Control |
| --- | --- |
| **Models** | Full access to manage LLM models (OpenAI, Anthropic, Gemini, custom models) |
| **Plugins** | Full access to manage Plugins |
| **AI Agents** | Full access to manage AI agents and related settings: plugins, models, usage limits, and knowledge base |
| **Reporting** | View analytics<br />Full access to manage chat logs<br />Full access to manage email reports |
| **Billing** | View billing details<br />Full access to manage billing |
| **User Management** | View users<br />Full access to manage users (invite, remove, update profile, etc.)<br />Full access to manage user authentication settings (SSO, SAML, OAuth, etc.)<br />Full access to manage instance access control (public/authorized/private mode)<br />Full access to manage usage limits<br />Full access to manage roles & permissions |
| **API Keys** | View the API Keys page<br />Full access to manage API keys |
| **Knowledge Base** | View data from the Knowledge Base<br />Full access to manage knowledge base data |
| **Portal Settings** | Full access to manage Portal Settings (branding, domain, chat features, etc.) |
| **Prompt Library** | Full access to manage Prompt Library |
| **System Prompts** | Full access to manage Global System Instruction, Global Few-shot Prompting, etc. |
| **Integrations** | Full access to manage integrations (Chat Widget, API integration) |

---

## Create roles and permissions

You can create custom roles with specific permissions via the Admin Panel:

<Steps>
  <Step title="Open Roles and Permissions">
    Log into the **Admin Panel**, toggle the **User Management** section, then click **Roles and Permissions**.
  </Step>
  <Step title="Add a new role">
    Click **Add New Role** and give the role a name.
  </Step>
  <Step title="Assign permissions">
    Select the permissions this role should have, then save.
  </Step>
</Steps>

### Example roles

<AccordionGroup>
  <Accordion title="Customer Support" icon="headphones">
    For team members who respond to customer inquiries. They need access to chat logs to understand customer issues and provide solutions.

    **Permissions:**

    - User Management → View users
    - Reporting → Full access to manage chat logs
  </Accordion>

  <Accordion title="Content Curator" icon="book-open">
    Allowed to upload knowledge base content to train AI Agents and use the prompt library to produce marketing content.

    **Permissions:**

    - Knowledge Base → View data · Full access to manage knowledge base data
    - Prompt Library → Full access to manage Prompt Library
    - AI Agents → Full access to manage AI agents and related settings
  </Accordion>

  <Accordion title="Team Lead" icon="user-check">
    Team leads manage users, monitor all customer interactions, and ensure the team follows best practices.

    **Permissions:**

    - Reporting → View analytics · Full access to manage chat logs · Full access to manage email reports
    - User Management → View users · Full access to manage users
    - Billing → View billing details · Full access to manage billing
  </Accordion>
</AccordionGroup>

<Tip>
  To update permissions within an existing role, click the **Edit** button next to that role on the Roles and Permissions page.
</Tip>

---

## Assign roles to members

After creating your custom roles, assign them to members within the chat instance:

<Steps>
  <Step title="Open User List">
    Go to the **User List** in the Admin Panel.
  </Step>
  <Step title="Select a user">
    Click on a user account to open their profile.
  </Step>
  <Step title="Assign a role">
    Navigate to the **Role** section and select one or more roles created via the Roles and Permissions page.
  </Step>
</Steps>

Users who are assigned roles will be able to log into the Admin Panel and access only the features covered by their permissions.

<Note>
  Each user can be assigned **multiple roles**. When a user holds multiple roles with overlapping permissions, they automatically inherit permissions from the role with the highest access level.

  Coming soon: you'll also be able to assign roles to a **User Group** — a collection of users who share the same category (such as department or function).
</Note>

---

## There's more to come

We're continually enhancing our platform, and more permissions will be added to help you better control user access to the Admin Panel. Stay tuned for more updates!