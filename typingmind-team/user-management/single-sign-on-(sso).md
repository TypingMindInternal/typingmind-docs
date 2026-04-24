---
title: 'Single Sign-On (SSO)'
---

<iframe src="https://www.youtube.com/embed/zL05zONJJec" title="YouTube video player" frameborder="0" className="w-full aspect-video rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

## Enable SSO for your chat instance

Go to **Admin panel → User Authentication → Single Sign-On** and toggle on the “Enable Single Sign-On”.

![Untitled](single-sign-on-\(sso\)/Untitled.webp)

You can now add new SAML connection to your chat instance. Click **“Add New Connection”**. You will be provided with the necessary information to add Typing Mind to your organization as a Service Provider.

- Entity ID
- Reply URL

![Untitled](single-sign-on-\(sso\)/Untitled%201.webp)

Next, you can use these information to obtain the Metadata XML from the identity provider in your organization.

Click “Add Connection” to validate and finish the process.

You can add multiple SSO connections to your chat instance.

## Get Metadata XML from IdP (Identity Provider)

Please follow the link below for the instruction to setup SAML for your selected SSO provider:

- [Generic SAML 2.0 Provider](https://boxyhq.com/docs/jackson/sso-providers/generic-saml)
- [Microsoft Entra ID (formerly Azure AD)](https://boxyhq.com/docs/jackson/sso-providers/azure)
- [Microsoft AD FS](https://boxyhq.com/docs/jackson/sso-providers/microsoft-adfs)
- [Okta](https://boxyhq.com/docs/jackson/sso-providers/okta)
- [Auth0](https://boxyhq.com/docs/jackson/sso-providers/auth0)
- [Google](https://boxyhq.com/docs/jackson/sso-providers/google)
- [OneLogin](https://boxyhq.com/docs/jackson/sso-providers/onelogin)
- [PingOne](https://boxyhq.com/docs/jackson/sso-providers/pingone)
- [JumpCloud](https://boxyhq.com/docs/jackson/sso-providers/jumpcloud)
- [Rippling](https://boxyhq.com/docs/jackson/sso-providers/rippling)
- [OpenID Connect Provider](https://boxyhq.com/docs/jackson/sso-providers/generic-oidc)

## Login with SSO

Once you have set up SSO, your users will see a new button “Use Single Sign-On (SSO)” in the login popup.

![Untitled](single-sign-on-\(sso\)/Untitled%202.webp)

![Untitled](single-sign-on-\(sso\)/Untitled%203.webp)