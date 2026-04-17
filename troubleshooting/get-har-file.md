---
title: "Get HAR file"
---
When working with TypingMind, we may sometimes ask you to collect a network capture for troubleshooting, which can be used to record the HTTP data traffic of the affected application. We will use this information to figure out what's causing the problem.

[export har.mp4](Get%20HAR%20file/export_har.mp4)

## Chrome

Here are the steps on how to do it using Google Chrome Developer Tool:

1. **Go to TypingMind.com**
2. **Open Developer Tools**: right-click anywhere on the webpage and select `Inspect` from the context menu.

![image.png](get-har-file/image.png)

1. **Select the Network Tab**: a pane will appear either at the side or the bottom of your screen. In this pane, locate and select the `Network` tab.
2. **Reproduce the issue**: refresh the webpage or reproduce the issue you're experiencing. The network requests are being logged in the Network tab as you do this.
3. **Export HAR:** at the top right corner of the Network tab, click on Export icon to export the HAR file
4. **Share the HAR file:** send the file to **support@typingmind.com** so our team can look into the issue further.
    
    ![image.png](get-har-file/image%201.png)
    

## Safari

<aside>
💡

Skip step 1,2,3 if you already had Develop tab on the status bar.

</aside>

1. Open Safari 

![Untitled](get-har-file/Untitled.png)

1. Click **Safari** on the status bar and choose **Settings** to open the Safari Setting panel

![Untitled](get-har-file/Untitled%201.png)

1. Switch to **Advanced** tab and tick on the checkbox “**Show features for web developers**”. This allows you to access the Develop tab within Safari 

![Untitled](get-har-file/Untitled%202.png)

1. Access [TypingMind.co](http://TypingMind.co)m 
2. Click on Develop tab on status bar and click “Show Web Inspector”

![image.png](get-har-file/image%202.png)

1. **Refresh the app**
2. **Reproduce the issue**: refresh the webpage or reproduce the issue you're experiencing. The network requests are being logged in the Network tab as you do this.
3. **Export HAR:** at the top right corner of the Network tab, click on Export icon to export the HAR file

![image.png](get-har-file/image%203.png)

**Share the HAR file:** send the file to **support@typingmind.com** so our team can look into the issue further.

## SetApp

Here are steps to get HAR file if you are using the app through MacApp or SetApp:

1. Open TypingMind app

![Untitled](get-har-file/Untitled%203.png)

1. Open Safari (it must be Safari, you can not use other browsers like Chrome)

![Untitled](get-har-file/Untitled.png)

1. Click **Safari** on the status bar and choose **Settings** to open the Safari Setting panel

![Untitled](get-har-file/Untitled%201.png)

1. Switch to **Advanced** tab and tick on the checkbox “**Show features for web developers**”. This allows you to access the Develop tab within Safari (*Skip this step if you already have the Develop tab on the status bar*) 

![Untitled](get-har-file/Untitled%202.png)

1. Click on **Develop** > **Select your Macbook** > click on **[setapp.typingcloud.com](http://setapp.typingcloud.com) i**f you are using SetApp or click on [**typingmind.com](http://typingmind.com)** if you are using TypingMind Mac App 

![Untitled](get-har-file/Untitled%204.png)

1. **The Web Inspector will appear, switch to Network tab**

![Untitled](get-har-file/Untitled%205.png)

1. **Cmd + R** to refresh the TypingMind Macapp

![Untitled](get-har-file/Untitled%206.png)

1. **Reproduce** your issue on the app
2. Back to the Network tab within **Web Inspector (step 7)** > click on “**Export**” in the top right corner to get the HAR file
3. Choose a location to save the HAR file and send it in to **support@typingmind.com**

![Untitled](get-har-file/Untitled%207.png)