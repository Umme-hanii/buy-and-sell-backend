import Boom from '@hapi/boom'
import { fakeListings } from './fake-data.js'

export const getListingRoute = {
  method: 'GET',
  path: '/api/listing/{id}',
  handler: (req, h) => {
    const id = req.params.id
    const listing = fakeListings.find(listing => listing.id === id)
    if(!listing) throw Boom.notFound(`Listing with id ${id} is not found`)
    return listing
  }
}