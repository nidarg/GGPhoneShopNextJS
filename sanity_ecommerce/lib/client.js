
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

//connect sanity to nextjs
export const client = sanityClient({
  projectId:'8b10amz8',
  dataset:'production',
  apiVersion:'2022-08-10',
  useCdn:true,
  token:process.env.SANITY_TOKEN
})

//for sanity images
const builder = imageUrlBuilder(client)
export const  urlFor = (source)=> builder.image(source)
