import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyA1zZ0LYQ8vGaxHFY4eDlejWt8KT4Xa67Y',
  authDomain: 'quizz-14479.firebaseapp.com',
  projectId: 'quizz-14479',
  storageBucket: 'quizz-14479.appspot.com',
  messagingSenderId: '1090580968246',
  appId: '1:1090580968246:web:116f5b2bb996e358dd3997',
  measurementId: 'G-4K68WLJY7E'
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
