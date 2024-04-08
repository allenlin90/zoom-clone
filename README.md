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