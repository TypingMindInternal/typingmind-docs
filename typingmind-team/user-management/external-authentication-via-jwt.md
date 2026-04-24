---
title: 'External Authentication via JWT'
---

You can authenticate your users using the following methods:

- Email login (default)
- [Single Sign-On](https://www.notion.so/78ebd53bf166421086153f746c8957b2?pvs=21)
- External Authentication (JWT)

This article will help you understand and setup your JWT authentication.

## Overview

**External Authentication via JWT** allow you to authenticate your user using a JWT token.

Your user will have a unique link like this:

`https://chat.yourcompany.com?externalAuthCode=XXXXXX`

When visiting the link, the user will be logged in automatically.

This will help you integrate Typing Mind Custom better with other system you may have in your company.

## Use cases:

- Authenticate users when using Typing Mind Custom as a web widget, so you know who is chatting.
- Skip the signup/login flow for your users.
- Use the user identity from another existing system you already have in your company (Note: if you are looking for SSO, check out [Single Sign-On page](https://www.notion.so/78ebd53bf166421086153f746c8957b2?pvs=21)).
- Create a quick login link from other systems in your company.

## Step 1: Enable External Authentication and get a JWT secret

Go to Admin Panel → User Authentication → JWT and enable it. (If you don’t find this in your admin panel, please contact us to enable this feature for you).

Once enabled, you will be provided with a JWT secret.

This JWT secret is used to sign the JWT token (`externalAuthCode`).

## Step 2: Create `externalAuthCode`

The `externalAuthCode` is the JWT token signed with your secret. The payload must follow the following structure in order to authenticate your users.

### Authenticate an existing user

The payload must contain a `id` field (user ID) or `email` field of the existing user. If both `id` and `email` is provided, the system will prioritize using `id`.

The user ID can be retrieved from [our API](https://api.typingmind.com/docs).

**Example 1: authenticate an existing user by email**

```jsx
// example payload:
const payload = {
	email: 'user-1@yourcompany.com'
}
```

**Example 2: authenticate an existing user by ID**

```jsx
// example payload:
const payload = {
	id: 1234
}
```

### Create a new user

The payload must contain a `user` object with an `id` property (string). For example:

```jsx
// example payload:
const payload = {
	user: {
    id: "unique string to identify your user", // required
    email: "abc@example.com", // optional
    other: "anything", // any other metadata you want to add here
    ...
	}
}
```

You can do this on any programming language. Here is an example in NodeJS.

```jsx
import jwt from 'jsonwebtoken';

const user = await getUser(); // get user from your system

const jwtSecret = process.env.JWT_AUTH_SECRET;

const payload = {
  user: {
    id: user.id,
    email: user.email,
  },
};

const externalAuthCode = jwt.sign(payload, jwtSecret, {
  expiresIn: '7 days',
});
```

The token will be verified on **every page load**, you can adjust the expiry date as you want.

## Step 3: Use `externalAuthCode` in URL or via Widget

You can now add the `externalAuthCode` to the instance URL as follow:

```
https://chat.yourcompany.com/?externalAuthCode=XXXXXX
```

This will login the user automatically.

If you are using the Chat Widget, add the code in the `data-external-auth-code` attribute like follow:

```html
<script
  defer
  data-external-auth-code="XXXXXX"
  src="https://chat.yourcompany.com/widget.js"
></script>
```

## Some facts:

- The `user.id` (user ID) field must be unique across all users of your chat instance. This will be used to identify the user.
- If the user ID does not exists in the first time the `externalAuthCode` is used, the system will create a new user with that ID. This will take up the seats count of your instance, so make sure you have enough seats count, otherwise the user will see an error page.
- You can see the list of users created via `externalAuthCode` in the Admin Panel just like any other users.