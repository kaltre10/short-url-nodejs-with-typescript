# API short url

Backend for short urls

Carácteristicas:
- ECMAScript 6
- Async/Await
- [Express.JS](https://expressjs.com)
- JSON request support
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)/[HTTPS](https://en.wikipedia.org/wiki/HTTPS) support
- [NPM](https://docs.npmjs.com/about-npm/)
- Static Content
- [Mongoose](https://mongoosejs.com/)

# Web App
| Route | Method | Requires auth |
|--|--|--|
| / | GET | false |
| /login | POST | true |
| /register | POST | false |
| /short:user | GET | true |
| /short/click/:id | GET | true |
| /short | POST | true |
| /short | PUT | true |
| /short | DELETE | true |

# Backend
## Routes 
#### USERS
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/user/login | POST | **body**: email, password | none | |
| /api/user/register | POST | **body**: email, password | none | |



#### Shorts
| Route | Method | Required Data | Optional Data | Description |
|--|--|--|--|--|
| /api/short/:user | GET | **params**: user | none | get all short urls of user |
| /api/short/click/:id | GET | **params**: id | none | increase the clicks of the short url |
| /api/short | POST | **body**: url, urlShort, user | none | create new short url |
| /api/short | PUT | **body**: id, url, urlShort | none | update short url |
| /api/short/:id | DELETE | **params**: id | none | remove short url |

# Run local

- set the environment variables
  ```text
  PORT=YOUR_PORT
  DATA_BASE=YOUR_STRING_CONNECT
  ```
- Run the proyect:
  ```console
  $ npm start
  ```


  Node version: v16.16.0
