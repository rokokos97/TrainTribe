declare namespace NodeJS {
  interface ProcessEnv {
    VITE_APP_AUTH0_DOMAIN: string;
    VITE_APP_AUTH0_CLIENT_ID: string;
    VITE_APP_AUTH0_AUDIENCE: string;
  }
}
