const db = require('../models')


db.Artist.create =( [
    {
      name: 'Annie',
      image: '',
      email: 'john.doe@example.com',
      phone: '555-555-5555',
      style: 'Modern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
    {
      name: 'Isaac',
      image: '',
      email: 'jane.smith@example.com',
      phone: '555-555-5555',
      style: 'Modern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Lorraline',
      image: '',
      email: 'bob.johnson@example.com',
      phone: '555-555-5555',
      style: 'Modern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Mal',
      image: '',
      email: 'jane.smith@example.com',
      phone: '555-555-5555',
      style: 'Modern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Zane',
      image: '',
      email: 'bob.johnson@example.com',
      phone: '555-555-5555',
      style: 'Modern',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ])
  .then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
