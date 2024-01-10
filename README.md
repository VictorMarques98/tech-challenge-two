# 💻 Visualization App

The following project is a Vite application developed to show weather data from an api, with the aim of creating a scalable and easy-to-maintain application based on good practices in typescript.

## 🚀 Get Started

Pre-requisites:

- Node 18+
- Yarn 1.22+

To set up the app you need to execute the following commands.

```bash
git clone https://github.com/victormarques98/tech-challenge-two
cd tech-challenge-two
yarn install
```

##### `yarn dev`

Runs the app in the development mode.\
Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `live preview`

This project was deployed in vercel, you can check [here]("insert-link")

## 📂 Project Structure

In order to scale my application in the easiest and most maintainable way, I prefer to keep most of my code inside the "src" folder. Inside this folder, I categorize code based on different just one feature according. Each feature folder contains code that's specific to that feature's domain. This helps me keep functionality scoped to a feature and prevents me from mixing its declarations with shared elements. I find this approach much easier to maintain than using a flat folder structure with many files.

```sh
app
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- config            # all the global configuration, env variables etc.
|
+-- api               # exported API request declarations and api hooks related to a specific feature
|
+-- styles            # all global styles and theme used across the entire application
|
+-- types            # base types used across the application
|
+-- utils            # shared utility functions
```

## 🎨 Styling Approach

In the development and styling of the components, I chose to use Vanilla CSS
