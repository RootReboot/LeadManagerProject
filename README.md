# LeadManagerProject

Based on https://www.youtube.com/watch?v=Uyei2iDA4Hs&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60&index=1 from TraversyMedia.

Project that applies the basic of the django was an api and uses react with webpack and babel to act was a frontend of the system.
React app created without using create-react-app.

Users can register their leads. Each user has a private lead list that only they can see when they login. A person can register to app freely but it can't have the same username that an user already has. The app doesn't check how strong the password is.

The auth token is saved in the local storage. It should be in the cookies for adicional securirty. Something to add next time.

## Users to test:

### User 1:

    Username:test
    Password:123456

## What I Learned with the project:

## React:

Learned private routing and how to use redux for authentication of users.

Fragments: Component to return multiple elements. Lets group a list of children wihtou adding extra nodes to the DOM.

Alert and handle error messages. Doubt: Django returns automatic bad request messages based on the the models, for the api requests(GET, POST, PUT, DELETE) but what if we want custom bad request messages(mainly for language differences).

## Django with Djanto Rest-Framework:

Learned the basics of it.
In comparison with .net core, I can make the same functions with 10% to 15% of the code.

To apply Django with the rest framework theres a need in understanding the documentation, mainly understanding the serializers, viewsets and generics. Code in the api.py files can also be in the views.py files, depends on the dev team.
