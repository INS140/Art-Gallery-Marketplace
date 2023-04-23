# Art Gallery Marketplace

## Our goal

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