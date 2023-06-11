import { fakeListings } from './fake-data.js'

export const getListingRoute = {
  method: 'GET',
  path: '/api/listing/{id}',
  handler: (req, h) => {
    const id = req.params.id
    return fakeListings.find(listing => listing.id === id)
  }
}