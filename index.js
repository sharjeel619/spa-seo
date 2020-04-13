const express = require('express');
const path = require('path');

const app = express();
const baseApiUrl = "http://api.tvmaze.com"; // Taken from 'http://www.tvmaze.com/api' (No token/auth required to use this API)
const port = 8082;
const appPath = 'dist'; // The name of your build folder that contains your SPA

const defaultTitle = 'Default title for your SPA';
const defaultDescription = 'Default description for your SPA';
const defaultImage = 'http://static.tvmaze.com/images/tvm-header-logo.png'; // Can be your SPA's favicon

const socialMediaAgents = ['slackbot', 'facebook', 'facebot', 'twitter', 'linkedin']; // Mention your social media bots here

app.use(express.static(path.join(__dirname, appPath)));

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'] || ''; // Detects if the request came from a browser or a crawler bot from any social media
  if (isSocialMediaCrawler(userAgent)) next();
  else res.sendFile(join(__dirname, `${appPath}/index.html`));
});

app.get('/tvshow', (req, res) => { // The url path '/tvshows' should match the one in your SPA 
  const {id} = req.query;
  fetch(`${baseApiUrl}/shows/${id}`)
    .then((response) => {
      // Fill the meta title, description and image you would want to show when sharing the link '/tvshows'
      const {name, summary, image, status} = response.json();
      if (status === 404) res.send(metaTags(defaultTitle, defaultDescription, defaultImage));
      else res.send(metaTags(name, summary, image.medium));
    })
    .catch((error) => {
      res.send(metaTags(defaultTitle, defaultDescription, defaultImage));
    });
});

app.get('*', (req, res) => { // Any other url of your SPA that doesn't need any SEO
  res.send(metaTags(defaultTitle, defaultDescription, defaultImage));
});

app.listen(port, () => { console.log(`Node running on port ${port}`) });

function isSocialMediaCrawler(bot) {
  const userAgent = bot.toLowerCase();
  return socialMediaAgents.some(item => userAgent.includes(item)); // returns true if any matches occur with your social media bots mentioned above 
}

function metaTags(title, description, image) {
  return `
  <html>
    <head>
      <title>${defaultTitle}</title>
      <meta charset="utf-8">
      <link rel="icon" href="${defaultImage}" />
      <meta class="meta-description" name="description" content="${defaultDescription}">
      <!-- Google+ / Schema.org -->
      <meta itemprop="name" content="${title}">
      <meta itemprop="description" content="${description}">
      <meta itemprop="image" content="${image}">
      <!-- Twitter Meta -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TV Maze" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${image}"/>
      <!-- Facebook Meta -->
      <meta property="og:type" content="article" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
    </head>
    <body>
    </body>
  </html>`;
}


