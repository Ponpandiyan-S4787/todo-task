import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environment';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './data-access/+state/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStore({ todo: todoReducer }),
  ],
};
