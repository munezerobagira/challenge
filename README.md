# Hotels&Co

## Strategy

- Understand the project specification and requirement of revamping the website
- propose and ask the project manager what don't understand.
- working together with the UI/UX designer to implement the functionality of the required website
  using the following methodology
  ### Methodology used
  - SOLID methodology
  - Agile methodology
  ### Implementation
  Used
  - Typescript
  - React-query
  - Next 13
  - React testing libray for unit test and integration
  - Tailwind CSS
  - Context API for State managment
  - Playwright for end-to-end testing along with lighthouse
  ### Perfomance
  - for the opmitimization of an image, I have used the next/image which has placeholder and it improve significantly the loading of image by providing small blurred image when the real image is being fetched. This also help in implementing
  - Removing the unncessary dependencies, Using the many dependencies can increase the bundle size
  - Caching has been one way to go improve the perfomance of the website for second time load. PWA can also be used.
  - I have performed the testing using the lighthouse
  -

After making research on the end-to-end testing, I decided to use the playwright as it provides many options fo testing different browser environmment.

## Code source

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
