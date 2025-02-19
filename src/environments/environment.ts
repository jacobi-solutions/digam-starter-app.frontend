// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // backendApiUrl: 'https://backend-1066484684329.us-central1.run.app',
  backendApiUrl: 'http://localhost:5165',

  firebase: {
    apiKey: "AIzaSyA-LkUWJ6B82E6JFvhehx89XamBLBasQTA",
    authDomain: "digam-starter-app.firebaseapp.com",
    projectId: "digam-starter-app",
    storageBucket: "digam-starter-app.firebasestorage.app",
    messagingSenderId: "1066484684329",
    appId: "1:1066484684329:web:292b7ed650642f79faae38",
    measurementId: "G-EC8G3MR877"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
