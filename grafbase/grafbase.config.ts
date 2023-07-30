import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.
// Integrate Auth
// https://grafbase.com/docs/auth
//
// const authProvider = auth.OpenIDConnect({
//   issuer: process.env.ISSUER_URL ?? ''
// })
//
// Define Data Models
// https://grafbase.com/docs/database

const User = g.model('User',{
  name: g.string().length({min:2, max:20}),
  email: g.string().unique(),
  avatar: g.url(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedInUrl: g.string().optional(),
  projects: g.relation(()=>Project).list().optional(),

});

const Project = g.model('Project',{
  title: g.string().length({min:3}),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.string().optional(),
  category: g.string().search(),
  createdBy: g.relation(()=> User)
  

})
export default config({
  schema: g

})
