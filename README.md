## API description
* There are two models implemented: `Users` and `Messages`
  * Each `Message` has an author corresponding to a `User`
  * The `seed.js` script generates fake users and messages that are stored in memory.

* The following functionalities are supported:
  * Unauthenticated:
    * Login using email and password
    * Signup (creating a new user)
  * Requires authentication:
    * Fetching all users and their messages
    * Fetching a single user by id and the user's messages
    * Fetching all messages with their authors
    * Fetching a single message by id with it's author
    * Posting a new message (with the logged in user as the author)
    * Logout

* Authentication
  * Token-based authentication is implemented using `passport`
    * A JWT is issued after signup and login and protected actions require a valid JWT in the Authorization bearer header
  * I chose to implement authentication at the resolver level rather than at the express router level so that the login/signup functionality can be captured entirely in graphql mutations, whereas the alternative would have required separate routes outside of graphql. A drawback of this approach is needing to manually specify authentication requirements on each resolver, but I think this can be simplified with further refactoring.

## Running locally
* Requirements: yarn
* Run `yarn` in the project root to install dependencies
* Run `yarn start` (or `yarn dev` to have `nodemon` watcher) to start the server
* Navigate to `http://localhost:4000/api` in a browser to view the GraphiQL explorer
* Login with a test account using the `login` mutation and use the token as the authorization bearer token for authenticated requests:
  ```
  mutation {
      login (input: {
          email: "test@example.com"
          password: "password"
      }) {
          token
      }
  }
  ```
 
* Alternatively, create a new user using the `signUp` mutation and use the token as the authorization bearer token for authenticated requests:
  ```
  mutation {
      signUp(input {
          email: "test2@example.com"
          password: "password"
      }) {
          token
      }
  }  
  ```

