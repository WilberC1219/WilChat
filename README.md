# WilChat - Discord Clone

WilChat is a Discord clone application that allows users to create channels and send messages within those channels. The application incorporates Google account authentication, requiring users to log in using their Google account. Once logged in, their Google display name and profile picture are used as avatars within WilChat.
<br>
<br>
Please note that WilChat is my attempt at creating a clone version of Discord and was only created for personal enrichment and to showcase my technical ability. WilChat is not affiliated with, endorsed by, or supported by Discord Inc.

### Table of Contents

- [WilChat description](#wilchat---discord-clone)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)

## Features

- User Authentication: Users can log in using their Google accounts to access the application.
- Channel Creation: Users can create channels to facilitate communication and organization.
- Messaging: Users can send messages within channels to engage in conversations.
- Avatars: User avatars are automatically set to their Google display name and profile picture for a personalized experience.

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Firebase (Authentication, Real-time Database)

## Setup and Installation

1. Setup your firebase database by heading to https://firebase.google.com and do the following:

   1.1 click on `Get started`.

   1.2 click on `Add Project`.

   1.3 Enter a project name and click `Create project` (The google analytics option is not required). Once your project has been created click `continue`.

   1.4 Enable Google Authentication by going to the left menu, go to `Build > Authentication`. At the top of the page go to `Sign-in Method` and then select and enable `Google` as a sign-in provider. Make sure you enter a Project support email, then click `save`.

   1.5 Create a database by going to the left menu, go to `Build > Firestore Database`. At the top of the page click on `Create database`. A prompt will appear asking to select security rules for Cloud Firestore then setting Cloud Firestore location, for the purpose of showcasing WilChat select `Start in test mode` for the security rule and click `Next`. For the location, you may leave it on the default location that is chosen for you, then click `Enable`.

   1.6 Get your Firebase Config Information. Go to the left menu next to `Project Overview` click the gear icon. Now scroll down to the section `Your apps` then click the `</>` icon. You will be prompted to enter a name for the app, after you have entered a name click `Register app`, you will now see your firebase configuration. Do not close the page with the configuration data, keep it on standby for later step 4.

   1.7 **Optional Step:** By default the Firestore database is configured to to expire after 30 days because of security reasons. If you would like to prevent that on the left menu, go to `Build > Firestore Database` and at the top menu click on `rules` then under `edit rules` add any rules you'd like to have. For the simplicity of just removing the default 30 day expiration use the following code. (Keep in mind the rule I provided below is not safe practice and will leave your database vulerable.)

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

2. Clone the github repository.

3. Install the necessary dependencies using `npm install`.

4. Inside of the `src` folder, open the the `firebase.js`. Now go back to the web page from step 1.6, which contains your firebase configuration. Only copy the `firebaseConfig` variable, and paste the variable under the comment in `firebase.js` that says "`For Firebase JS SDK v7.20.0 and later, measurementId is optional`". Your `firebase.js` file should now look like this:

```
  import { initializeApp } from "firebase/app";
  import { getAuth, GoogleAuthProvider } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "AUTH_DOMAIN_HERE",
    projectId: "PROJECT_ID_HERE",
    storageBucket: "STORAGE_BUCKET_HERE",
    messagingSenderId: "MSG_SENDER_ID_HERE",
    appId: "APP_ID_HERE"
  };

  // Initialize Firebase, auth, db, and provider
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  export { auth, provider };
  export default db;
```

6. WilChat is now fully set up and can be started using `npm start`. Upon successful completion of running the start command your CLI should look say the following:

```
  Compiled successfully!

  You can now view discord-clone in the browser.

    Local:            http://localhost:3000
    On Your Network:  http://YOUR_NETWORK_ADDRESS:3000

  Note that the development build is not optimized.
  To create a production build, use npm run build.

  webpack compiled successfully
```

## Usage

1. Open the application in your web browser by going to `localhost:3000`. Other machines on your local network can also open the application (as long as its running on the host machine), by going to `http://YOUR_NETWORK_ADDRESS:3000`. `YOUR_NETWORK_ADDRESS` can be found on the CLI where you ran `npm start`
2. Log in using your Google account.
3. Create channels to start conversations or join existing channels.
4. Send messages within the channels to communicate with other users.
5. Customize your profile and settings as desired.

## Deploy on firebase

Instructions on how to deploy WilChat on firebase coming soon!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or questions, please contact me at wilberclaudio@gmail.com.
