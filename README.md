# Tech stack
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [Clerk](https://clerk.com/)

# Clerk
- [Quick start](https://clerk.com/docs/quickstarts/nextjs)
- This requires `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` credentials from Clerk
- `Clerk` allows protecting routes on `/middleware.ts` without configuring specifically on each route in app router.

    ```ts
    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

    const protectedRoutes = createRouteMatcher([
      '/',
      '/upcoming',
      '/previous',
      '/recordings',
      '/personal-room',
      '/meeting(.*)',
    ]);

    export default clerkMiddleware((auth, req) => {
      if (protectedRoutes(req)) {
        auth().protect();
      }
    });
    ```

- By giving `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in` and `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`, we can use customized local sign-in/up page rather than redirecting users to clerk authentication page on the given route such as `/sign-in` and `sign-up`. 

# Get Stream
- [https://getstream.io/](https://getstream.io/)
- [React doc](https://getstream.io/video/docs/react/)
- [Quick start](https://getstream.io/video/docs/react/basics/quickstart/)
- [Create server side client and generate user token](https://getstream.io/video/docs/api/)
- [Joining and creating calls](https://getstream.io/video/docs/react/guides/joining-and-creating-calls/)

## Components
- `/actions/stream.actions.ts` - server side actions to create a stream client and generate user token.
- `/providers/StreamClientProvider.tsx` - A client context provider giving video client which requires `tokenProvider` from server action. 

## Steps
1. A `StreamClientProvider` needs a `tokenProvider` which requires a server-side stream client to generate a user related `token`.
2. `StreamClientProvider` which is a context provider takes `tokenProvider` and creates a client-side stream client.
3. `StreamClientProvider` wraps all React components in `/app/(root)/layout.tsx`, which is the 2nd layer after `Clerk` for authentication.
4. All users must be authenticated to access video streaming/meeting service.
5. In the context, the other React components can then use `useStreamVideoClient` hook to retrieve the stream client. 

## Call controls
1. To show call control options by using `CallControls` from video React SDK, we need to import css. [Video UI components](https://getstream.io/video/docs/react/ui-components/video-theme/)
2. The UI will be rendered when we import `import '@stream-io/video-react-sdk/dist/css/styles.css';` in `/app/layout.tsx`.

## Crypto
1. [Crypto MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto).
2. We can use `crypto.randomUUID()` to generate a random v4 uuid.
