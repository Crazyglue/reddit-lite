# Reddit Lite

## Running

```bash
npm install
npm run serve
```

## Rationale

*How is your code structured, and why?*

At the project level, I decided to subdivide the different elements of the application into what they do (generally speaking). So for example, any plugins I'm using go into a folder called `plugins/` which when those modules are imported will automatically register them inside the app. The main plugins being the SPA router and the Vuex store (shared-state). I also wanted to keep "dumb" components separated from the page-level components (HOCs), so I added a `components/` and `views/` folders (respectively). The HOCs just worry about handling data and dont worry at all about rendering anything, instead passing data down as props to the "dumb" components. This creates a nice division of logic and can promote the dumb-components to be reused elsewhere if desired. A large portion of the components are HOCs, just for the sake of layout. There isnt a whole lot else to the app, I wanted to keep all the configuration files at the root-level just so its easy to find and so I dont have to add more configuration options to the tools be used (webpack).

*How does updated data change your application’s state?*

Since I'm using Vuex to manage a central-store of data, when the new data is fetched and updated, the posts will update as well. Because of vue/vuex's data binding, these updates will trigger re-renders on any components that consume this data, notably, the HOCs and NOT the dumb-components. Vue will handle the rerender itself and just in-line replace any text that changes, and if an image changes it will re-fetch the image from the external resource.

*In your opinion, what are the pros and cons of how your views are rendered?*

**Pros**

Its easy to add additional routes (and therefore views) to the app since the router defintion is in one place. Its also easy to add additional slots to a given page thanks to the vue-router.

Because I'm keeping a strict line between HOCs and dumb components, its easy to reuse a lot of these components if I were to add additional views.

**Cons**

The main con is that with my current setup being a SPA, data fetching can be an issue, and developers could forget to add those methods. For example, when a route changes, the data used in that route must be specifically fetched on a fresh page-load, and again when the same route is rendered but with a different parameter, ie `/subreddits/dankmemes` -> `/subreddits/memeeconomy`


*If you were going to add a feature like login, how would your app’s architecture change?*

There are a couple options for ways to handle this. No matter what the app will need a POST route to handle the login and a GET route to handle logout, so the first thing I would do is add those.

Depending on the UX requirements, we could go two different routes for the the actual workflow of logging in.

The first options is to add a button in the title bar to show a popover which has a username, password and "login" button. Clicking the button would hit the above `/login` route and handle all the responses. The user would not have to be redirected to another page, or have the page refresh. This form is very easy to add since we can take advantage of named-slots with vue router, and simply add the popover component to the app's layout

The second option is to add a bespoke page to the app which the user can navigate to and again have a login form. This is more of a traditional login flow and would mean having an additional route to what was laid out before, to handle a GET /login.