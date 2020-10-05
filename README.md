# SEO solution for your Single page application

## Problem
```
You have a SPA and you want to put dynamic information (most likely from an API call) in HTML meta tags, so that when you share a particular link from your SPA website on some social media, it displays all the relevant information.
```
## Solution
```
- A browser requests your single page application from the server, which is going to be loaded from a single index.html file.
- You program some intermediary server code which intercepts the client request and differentiates whether the request came from a browser or some social media bot.
- If the request came from some social media bot, make an API call to your back-end server, gather the data you need, fill in that data to html meta tags and return those tags in string format back to the client.
- If the request didn't come from some social media bot, then simply return the index.html file from the build folder of your single page application.
```
### Installation
```
yarn install && node index.js
```
This will install your Node dependencies and start a local Node server at port 8082.

I've already build some files from a simple Vue.js app in the `dist` folder. Or you can simply use your own.
Link to the sample Vue.js app can be found [here](https://pip.pypa.io/en/stable/)

### Usage
- Go to `localhost:8082` in your browser and you will see your SPA load.
- To see if the SEO actually works, fire up a ngrok server. You can download it from [here](https://ngrok.com/download)
- And type `ngrok http 8082 -host-header="localhost:8082"` in the ngrok terminal. This command will expose your local server to a public url.
- Copy/Paste that url in your browser and you should see your SPA load.
- Click on one of the tv shows and copy/paste that url (e.g: 'your_ngrok_url/tvshow/2') in your twitter/linkedin post.
- And Voila! you should the details in your post.
 ![Twitter](https://user-images.githubusercontent.com/11159443/95107020-c512fa00-0752-11eb-9f81-f1940f8e10c5.png)
 ![LinkedIn](https://user-images.githubusercontent.com/11159443/95107019-c47a6380-0752-11eb-87b3-0eb96873d700.png)
