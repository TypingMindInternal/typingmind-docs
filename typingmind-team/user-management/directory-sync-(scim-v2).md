---
title: "Directory Sync (SCIM v2)"
---
Directory Sync allows you to sync the user’s account from your identity providers (Okta, Azure, etc.) to TypingMind without having to manage the user account manually.

TypingMind supports the SCIM v2 protocol, which means you can connect TypingMind with any Identity providers that support SCIM v2.

Features:

- Provision new users
- Suspend users
- Update user profile (first name, last name, profile picture)
- Assign user to corresponding groups.

This article walks you through step by step on how to set up **Directory Sync on Okta**.

For other identity providers, the steps are mostly the same. Please check with your identity providers if you need help set up SCIM v2 for your account.

## Enable Directory Sync on TypingMind

Go to your **Admin Panel → User Management → User Authentication → Directory Sync**

Enable Directory Sync, then click **Add New Directory Connection**.

![image.png](directory-sync-(scim-v2)/image.png)

Set a name and type for your connection. Currently we support the following types:

- Okta
- Azure
- OneLogin
- JumpCloud
- Generic SCIM v2 (this apply to all other identity providers with SCIM v2 support)

Then click “Add connection”

![image.png](directory-sync-(scim-v2)/image%201.png)

Once the connection is created, click “View Details”.

![image.png](directory-sync-(scim-v2)/image%202.png)

Then take note of the **SCIM base URL** and the **Secret**. You will need this at a later step.

![image.png](directory-sync-(scim-v2)/image%203.png)

## Setup Directory Sync on Okta

From your Okta admin panel, navigate to “Applications” page, then search for “SCIM 2.0 Test App”.

<aside>
💡 The **“SCIM 2.0 Test App”** on Okta is a template app that have some default config to make the setup process faster. If you already have set up TypingMind app in your Okta previously (for [SSO](Single%20Sign-On%20(SSO)%2009737445d43d434da8f9b61f07e990a2.md)), you can skip this step.

</aside>

![image.png](directory-sync-(scim-v2)/image%204.png)

Select “**SCIM 2.0 Test App (OAuth Bearer Token)”** from the list, then click “Add integration”.

![image.png](directory-sync-(scim-v2)/image%205.png)

Set the application name to “TypingMind”, then click “Next”

![image.png](directory-sync-(scim-v2)/image%206.png)

In the “Sign-on Options” screen, you can skip this for now and click “Done” at the end of the page.

<aside>
💡 Read our document on how to [enable Single Sign-on (SSO)](Single%20Sign-On%20(SSO)%2009737445d43d434da8f9b61f07e990a2.md)

</aside>

![image.png](directory-sync-(scim-v2)/image%207.png)

Within the application page, select the “Provision” tab, then click the config button.

![image.png](directory-sync-(scim-v2)/image%208.png)

In the next screen, enter the SCIM base URL and the OAuth Bearer Token (secret) you saved from the last step.

Click “Test API Credentials” to check if everything is working correctly.

![image.png](directory-sync-(scim-v2)/image%209.png)

You should see a successful message if the test is successful. Then click **Save**.

In the next screen, update the configuration to enable the following provisioning options:

- Create Users
- Update User Attributes
- Deactivate Users

![image.png](directory-sync-(scim-v2)/image%2010.png)

## Sync Users

Start assigning users/groups to the application. The sync process will kick start automatically by Okta.

Click the **Assigments** tab → Assign.

![image.png](directory-sync-(scim-v2)/image%2011.png)

In this example, we assign two users `tonytest-two` and `tonytest-five` to the application.

![image.png](directory-sync-(scim-v2)/image%2012.png)

Go back to your TypingMind Admin panel, you should see the two new users are created with a `scim` tag next to their name.

![image.png](directory-sync-(scim-v2)/image%2013.png)

## Sync Groups

Groups are synced to TypingMind system using the user groups system. A group will be created in the format `Group:{group_name}` for each group the user belongs to.

For example, if a user belongs to the group “Marketing Department” and “Intern”, the user will be added into two groups:

- `Group:Marketing Department`
- `Group:Intern`

You can use these two tags to manage the access control and authorized resources (AI agents, model, usage limits, etc.).

To sync groups, select the “Push Groups” tab. Then select the groups you want to sync.

![image.png](directory-sync-(scim-v2)/image%2014.png)

Once synced successfully, the **Push Status** will be set to “Active”.

![image.png](directory-sync-(scim-v2)/image%2015.png)

Go back to your TypingMind admin panel, you should see the users are not tagged correctly as per their assigned groups.

![image.png](directory-sync-(scim-v2)/image%2016.png)

## Notes and limitations

- If a user has previously logged in to your instance using SSO, when you enable Directory Sync, the system will try to deduplicate those user based on email. If the emails do not match, the system will create two separate account for each user.
- Users created via SCIMv2 will automatically take up a seat in your instance. Make sure you have enough seats for your TypingMind instance before enabling this feature.
- Users are synced automatically, however, the sync period are set up different on each identity provider. In most cases, you can trigger a manual sync from the identity provider’s admin panel.