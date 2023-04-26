# Art Gallery Marketplace

## Our goal
Our vision is to create a full stack application called Art-Mart. Art-Mart was made to bring together both artists and art-lovers to one platform so we can all appreciate one passion. We have provided a platform for artist's to gain exposure and sell their pieces, and for the rest of us to find new tastes or maybe even a new decorative piece for our home! We encourage all artist's to show off their work on our website.

## Database tables
### Artist Database

| Field | Type |
| --------- | -------------------- |
| name | String |
| phone | Text |
| email | Text  |
| image | String |
| style | String |
| bio | String |

### Artist Schemas

#### Artist Schema Artworks

| Field | Type |
| --------- | -------------------- |
| ref | Artwork |
| local_field | _id |
| foreignField | artist |

#### Commission Schema Artworks

| Field | Type |
| --------- | -------------------- |
| ref | Commission |
| local_field | _id |
| foreignField | artist |

### Artwork Database

| Field | Type |
| --------- | -------------------- |
| title | String |
| pic | String |
| artist | Schema.types.ObjectId |
| description | String |
| price | Number |
| year | Date |
| style | String |
| size | String |
| sold | Boolean |
| copies | Number |

### Commission Database

| Field | Type |
| --------- | -------------------- |
| name | String |
| artist | Schema.types.ObjectId |
| title | String |
| price | Number |
| due_date | Date |

## Views

Views components being used to render the front end application: 

AboutUs, ArtGallery, ArtistContainer, ArtistView, Carousel,
CommissionForm, Footer, JoinUs, ImageView, Navbar

## Routes
### Artist

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The artist home page |
| GET | `/:id` | Find specific artist(s) |
| POST | `/:id` | Create a new artist |
| PUT | `/:id` | Update artist(s) infomation |
| DELETE | `/:id` | Delete artist(s) |

### Artwork

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The artwork home page |
| GET | `/:id` | Find specific artwork(s) |
| POST | `/:id` | Create a new artwork |
| PUT | `/:id` | Update artwork(s) infomation |
| DELETE | `/:id` | Delete artwork(s) |

### Commission

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The commission home page |
| GET | `/:id` | Find specific commission(s) |
| POST | `/:id` | Create a new commission |
| PUT | `/:id` | Update commission(s) infomation |
| DELETE | `/:id` | Delete commission(s) |


## Our Process

As stated earlier this is a fullstack application. The languages and packages used for the Server (back-end) are Javascript, Express js, Mongoose, Cors, and dotenv. The languages and packages used in the front-end are React, react-router-dom, create-react-app, react-bootstrap, Javascript, CSS, and HTML. The database is MongoDb and Mongo Atlas. Last but not least, Vercel is for deployment. There are two deployments in Vercel. One is for the back-end API and the other is for the front-end. Once both are deployed the front end will interact with the API.