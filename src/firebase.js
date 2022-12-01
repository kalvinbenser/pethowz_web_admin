import { initializeApp } from 'firebase/app';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDKjtzh4_4VPT4bqZ3pdur3xrPXlbh_GRk',
  authDomain: 'uploader-2665a.firebaseapp.com',
  projectId: 'uploader-2665a',
  storageBucket: 'uploader-2665a.appspot.com',
  messagingSenderId: '1043049955991',
  appId: '1:1043049955991:web:0b40a99210e681f9a3dfd2',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
