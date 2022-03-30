## 1. Application Goal

Event-helper - Web tool that helps in creating and organizing events. The application provides creation of guest lists with different characteristics and other information about the event (number of guests, expenses, special notes).

## 2. System Description

System consist of these functional components:

1.  Registration, authentication and authorisation
2.  Information input
3.  Altering already existing data
4.  Providing useful tips for organizing events
5.  Sorting and searching data

Application will have different pages with above mentioned components .

## 2.1 Registration and Authentication

Registration will be done with Tokens or Firestore Authentication.

The authorisation parameters will be:

- Login - required field
- Password - required field

Registration parameters:

- Login - required field
- Password - required field
- First name and Last name - required field

## 2.2 Information input (Guests)

User fill special required fields in order to construct entity with different features.

The entity will be based on user filled informations:

- Guest full name - required field
- The place they will sit at - required field
- Special notes - optional field

Entities will be stored and sorted by their sits indexes.

## 2.2 Altering already existing data

The user will be able to change the selected characteristics of the entity as needed. The user will also be able to delete the entity from the repository completely.

Entity data will be searched by sorting by name.

## 2.3 Providing useful tips for organizing events

Users will be able to see useful tips on organizing events in a single page.
The tips will be made in the form of small articles, which are added by the administrator (see 2.4).

## 2.4 Separation of user roles

The application has two different types of roles: Administrator and User.

User functionality :

- Entity data entry
- Change custom configurations (name, password)
- Changing entity characteristics
- The user cannot create more than three different entity arrays

Admin functionality :

- Deleting a user from the database 
- Adding new articles to the tips tab
- Change user's configurations (name, password)

## 3. Technologies Stack

For system realisation web application would be structured with these technologies:

Backend:

- Node.js
- Firestore Database
- Express.js
- Firebase Authentication


Frontend:

- React.js
- UI ToolKits
- Axios
- React-router-dom

React libraries will be used to augment the functionality. In the future, the prospect of switching to TypeScript is being considered.

## 4. Design requirements

The design of the app should be minimalist, where the main content will take precedence.

The colours should be pleasing to the eye and for long browsing. A change of themes for ease of use is being considered for future versions of the app
