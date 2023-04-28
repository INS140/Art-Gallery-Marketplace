# Art Gallery Marketplace

## Our goal
Our vision is to create a full stack application called Art-Mart. Art-Mart was made to bring together both artists and art-lovers to one platform so we can all appreciate one passion. We have provided a platform for artist's to gain exposure and sell their pieces, and for the rest of us to find new tastes or maybe even a new decorative piece for our home! We encourage all artist's to show off their work on our website.

## How to use Art-Mart Website
Art-Mart's website is very easy to use. There is a home page that welcomes you to Art-Mart and tells you about our goal! At the top of the page is a nav bar where you can switch from the Artist to ArtWork navbar links. If you click on the artist navbar link you can view all of the artists working for Art-Mart. If you click on a specific artist you can view their profile page. There is a button where the artist can add more artwork. There is also a section for requesting a commission from the artist along with a list of the current commissions the artist has. Underneath the current commissions for the artist there is an update or delete commission button. At the very bottom of the commissions form is a button to update or delete the profile. When you click on the update or delete button the page is rendered to a form to either update or delete. If you click on the artwork navbar link you can view all of the artworks created by artists at Art-Mart. If you click a specific artwork you can view all the information about the artwork chosen. At the bottom of the description is a button to add the artwork to the cart. There are two other buttons that are for updating and deleting the artwork. If you click on this button you are rendered to a new page to either update or delete the artwork. If you scroll to the bottom there is a footer. In the footer is the creators and a few hyperlinks. The hyperlink called Join Us is where you would apply to become an artist at Art-Mart. It renders you to a new page where you can fill out a form to become an artist. 

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

AboutUs, ArtGallery, ArtistContainer, ArtistView, ArtistItem, ArtworkView, CartItem, CartView, CommissionGallery, CommissionItem,CommissionView, Carousel, CommissionForm, Footer, JoinUs, ImageView, Navbar, DeleteArtistView, EditArtist, EditArtwork, EditCommission, HomeView, NewArtwork, and NewCommission. 

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

As stated earlier this is a fullstack application. The languages and packages used for the Server (back-end) are Javascript, Express js, Mongoose, Cors, and dotenv. The languages and packages used in the front-end are React, react-router-dom, create-react-app, react-bootstrap, Javascript, CSS, and HTML. The database is MongoDb and Mongo Atlas. Last but not least, Vercel is for deployment. There are two deployments in Vercel. One is for the back-end API and the other is for the front-end. Once both are deployed the front end will interact with the API. This project is considered a MERN Stack and full CRUD functionality.

## Unfinished Functionality

The search bar and the cart do not have functionality. The only thing you can do in the cart is add items to it. There is no checkout. The searchbar has the ability to let you text inside the box but it wont render anything typed. The hyperlinks in the footer besides the Join Us bring you to the top of the page. It doesn't take you to where the hyperlink says. The functionality wasn't done because we ran out of time. 