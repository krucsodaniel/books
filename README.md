# Book Finder🔎📖
Welcome to the Book Finder app, a simple web application that leverages the Google Books API to allow users to search for books and manage their favorites. 
This app uses Google OAuth2 for secure login, allowing users to save their favorite books in their personal bookshelf.

## Features
- **Search:** Users can search for books using the Google Books API.
- **Bookshelf:** Users can add and remove books from their favorites, but this feature requires logging in.
- **Favorites Management:** Once logged in, users can manage their favorite books, adding or removing them as they please.
- **Secure Login with Google OAuth2:** This app uses Google OAuth2 for secure, single-sign-on (SSO) login. Users need to log in with their Google account to use the bookshelf feature.  

## Table of Contents
- [Project Overview](#project-overview)
- [Author Information](#author-information)
- [Prerequisites](#prerequisites)
- [How to Run the Application](#how-to-run-the-application)
- [Technologies Used](#technologies-used)
- [License](#license)

## Project Overview
This project allows users to explore Google Books through a search interface and manage a personal bookshelf by adding and removing books. Key functionalities are available to authenticated users, ensuring a secure interaction with the Google Books API using Google OAuth2.

## Author Information
**Author:** Daniel Krucso  
**Role:** Software Developer (Angular, Node.js)  
**Expertise:** Angular development, Application security, Web technologies  
**LinkedIn:** [Daniel's LinkedIn](https://hu.linkedin.com/in/d%C3%A1niel-krucs%C3%B3-b79aa5273)  
**GitHub:** [Daniel's GitHub](https://github.com/krucsodaniel) 

## Prerequisites
Before running the application, make sure you have the following installed:

Node.js (version 18 or higher)  
Angular CLI (version 17 or higher)  
npm (comes with Node.js)

## How to Run the Application

1. Clone the repository:
 
```git clone https://github.com/krucsodaniel/books.git```

2. Navigate to the project folder:

```cd books```

3. Install dependencies:

```npm install```

4. Run the application:

```ng serve```

5. Open the application in your browser. Visit http://localhost:4200/.

## Technologies Used
**Angular:** Web application framework used for creating the frontend.  
**NgRx:** State management for managing the application's state.  
**Angular OAuth2 OIDC:** For handling OAuth authentication with Google.  
**Google Books API:** To search for books and manage the user's bookshelf.  
**TypeScript:** Type-safe language for building robust applications.  

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://license.md/licenses/mit-license/) file for details.

## Thank you for using Google Book Finder app!
If you have any feedback or suggestions, feel free to reach out to me via GitHub.
