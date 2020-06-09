# SpreadTheWord

![PowerPoint!](https://govloop.com/wp-content/uploads/2016/08/powerpoint-hacks.gif)

## Table of Contents <!-- omit in toc -->
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
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

_**Spread The Word** is the beginning of an online space for lesser known content creators across Youtube and Twitch. This app will act as a hub for new and upcoming content creators to share resources and help each others channels gain some traction. This space is to be used to highlight the smaller channels and help spread their mission statement to those who may be interested, as well as advice articles posted by the admins of the site.


<br>

## MVP

_The **Spread the Word** MVP will meet the requirements below for both front end and back end operations.

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


> [Project 4 README Template](./README-template.md)

> ["How detailed should wireframes be?"](https://justuxdesign.com/blog/wireframe-fidelity)
>
> [Wireframe.cc](https://wireframe.cc/)

> [lucidchart](https://www.lucidchart.com/)
>
> [draw.io](https://www.draw.io/)
>
> [ERDPlus](https://erdplus.com/)


<br>

