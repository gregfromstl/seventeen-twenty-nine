// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

require('dotenv').config();

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyACKLp7AL9OjJ7wtDB8TJ84aJzM9JNKPBM',
    authDomain: 'frontend-44b6a.firebaseapp.com',
    projectId: 'frontend-44b6a',
    storageBucket: 'frontend-44b6a.appspot.com',
    messagingSenderId: '917944600432',
    appId: '1:917944600432:web:356044ad5827699acf31b5',
    measurementId: 'G-LGBEF552DD',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
