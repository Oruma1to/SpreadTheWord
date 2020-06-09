# SpreadTheWord

![PowerPoint!](https://govloop.com/wp-content/uploads/2016/08/powerpoint-hacks.gif)

## Table of Contents <!-- omit in toc -->
- [Overview](#overview)
- [MVP](#mvp)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

# OVERVIEW

**Spread The Word** is the beginning of an online space for lesser known content creators across Youtube and Twitch. This app will act as a hub for new and upcoming content creators to share resources and help each others channels gain some traction. This space is to be used to highlight the smaller channels and help spread their mission statement to those who may be interested, as well as advice articles posted by the admins of the site.

<br>

## MVP

The **Spread the Word** MVP will meet the requirements below for both front end and back end operations.

### Server (Back End) <!-- omit in toc -->
- Will utilize a **RESTful JSON API**.
  - This will be built using Ruby On Rails
  - The database will contain the 4 following tables:
    - user table
    - admin table
    - post table
    - comment table
  - All models will be defined using Rails.
  - All authentication will implement JSON web tokens for a better user experience
  - There will be full CRUD functionality on the back end  for all user/admin/post/comment assigments.

### Client (Front End) <!-- omit in toc -->

- This will be an interactive **React** app, built using `npx create-react-app`.
  - The component structure will be broken down into small components, minimum 8.
  - Functional and class React components will be used appropriately.
  - Interchangably using state and props appropriately.
- All data will be consumed from my very own Ruby on Rails API.
- **React Router**, will be used for all client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.
- Utilize Authentication, permitting the Admin(logged in) to:
  - Perform `index` or `show` actions on all active users
  - Perform `create`, `update`, and `delete` actions on users, posts, and comments

<br>

#### Wireframes
Login/Signup Flow
  - https://app.lucidchart.com/invitations/accept/e56b336a-bfd2-49ca-93c9-63316fa657fa

Index Articles
  - https://app.lucidchart.com/invitations/accept/a0f523dc-1f62-4303-a7c8-9afbe67825db
  
Solo Article
  - https://app.lucidchart.com/invitations/accept/713d6210-80be-4bdc-b6ac-469a176ef474

#### Component Tree

https://app.lucidchart.com/invitations/accept/6e863470-ddf9-4a13-8bfd-e0b1b40b145a


#### Component Hierarchy
``` 
src

|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ MainBody.jsx
      |__ Article.jsx
      |__ ArticlePage.jsx
      |__ ArticleCreate.jsx
      |__ Comment.jsx
      |__ AdminEdit.jsx
      |__ UserEdit.jsx
|__ services/
```
<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo (Persistant)._  |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to past articles._ |
|    MainBody    | functional |   Y   |   n   | _This will display on main page along with brief description._ |
|   Article    |   class    |   Y   |   n   | _The Article component will be what displays a complete article._ |
|    ArticlePage    | functional |   Y   |   n   | _This will display one article along with comment section._ |
|    ArticleCreate    | class |   Y   |   n   | _This will display one article along with comment section._ |
| Comment Section | class |   Y   |   n   | _Users can comment ._                 |
|    Admin edit    | functional |   Y   |   n   | _Page where admin can edit any post._ |
|    user profile edit    | functional |   Y   |   n   | _Page where user can edit their personal info._ |


#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header integration  |    L     |     1 hr       |               |    TBD      |
| NAV Bar integration |    L     |     2 hrs      |               |    TBD      |
| Styling for Main    |    L     |     3 hrs      |               |    TBD      |
| Article Layout      |    H     |     4 hrs      |               |    TBD      |
| Article Page Layout |    L     |     3 hrs      |               |    TBD      |
| Article Crud action |    H     |     4 hrs      |               |    TBD      |
| Comment section Crud|    H     |     4 hrs      |               |    TBD      |
| Admin Crud          |    H     |     6 hrs      |               |    TBD      |
| User Profile Crud   |    H     |     6 hrs      |               |    TBD      |
| Total               |          |     36 hrs      |               |    TBD      |

<br>

### Server (Back End)

#### ERD Model

> https://app.lucidchart.com/invitations/accept/707735c2-1ed0-4710-88fa-59598677b847

<br>

***

## Post-MVP

- Search Function for posts
- Ban options for admin
- Sponsors corner
- Author bios
- Sub forum

***

## Code Showcase


## Code Issues & Resolutions
