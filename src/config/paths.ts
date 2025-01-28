export const paths = {
   home: {
      path: "/home",
      getHref: () => "/home",
   },
   products: {
      path: "/products",
      getHref: () => "/",
   },
   product: {
      path: "/products/productId",
      getHref: (id: string) => `/products/${id}`,
   },
   about: {
      path: "/about-us",
      getHref: () => "/about-us",
   },
   contactUs: {
      path: "/contact-us",
      getHref: () => "/contact-us",
   },

   // auth: {
   //   register: {
   //     path: '/auth/register',
   //     getHref: (redirectTo?: string | null | undefined) =>
   //       `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
   //   },
   //   login: {
   //     path: '/auth/login',
   //     getHref: (redirectTo?: string | null | undefined) =>
   //       `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
   //   },
   // },

   // app: {
   //   root: {
   //     path: '/app',
   //     getHref: () => '/app',
   //   },
   //   dashboard: {
   //     path: '',
   //     getHref: () => '/app',
   //   },
   //   discussions: {
   //     path: 'discussions',
   //     getHref: () => '/app/discussions',
   //   },
   //   discussion: {
   //     path: 'discussions/:discussionId',
   //     getHref: (id: string) => `/app/discussions/${id}`,
   //   },
   //   users: {
   //     path: 'users',
   //     getHref: () => '/app/users',
   //   },
   //   profile: {
   //     path: 'profile',
   //     getHref: () => '/app/profile',
   //   },
   // },
} as const;
