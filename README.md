# SEO solution for your Single page applications

## Problem
```
You have a SPA and you want to put dynamic information (most likely from an API call) in HTML meta tags, so that when you share a particular link from your SPA website on some social media, it displays all the relevant information.
```
## Solution
```
1- A browser requests your single page application from the server, which is going to be loaded from a single index.html file.
2- You program some intermediary server code which intercepts the client request and differentiates whether the request came from a browser or some social media bot.
3- If the request came from some social media bot, make an API call to your back-end server, gather the data you need, fill in that data to html meta tags and return those tags in string format back to the client.
4- If the request didn't come from some social media bot, then simply return the index.html file from the build folder of your single page application.
```
### Project setup
```
Run `yarn install` in the root directory and in the SPA folder which consists a simple enough SPA (You only need build files of your SPA which you can simply put in your root directory)

Run `node index.js`
```

<!-- ### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
