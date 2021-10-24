# JATA-hack-BinIt
Environmentally conscious application for mapping and viewing community pins for where recycling and composing resources are.
Resources used: 
- Firebase
- Cloud service by Google. We used Firebase, which is a document based cloud database where we hosted our mapping data to be shared across all users of our platform. It made managing the backend easier because we didn't have to worry about dependencies or configuring connections to databases. We simply used an api key to access our firebase data. 
- tutorials followed: https://www.youtube.com/watch?v=qA9L3_cK9Z0, 
- Google Maps API: This was also a GCP product. We processed items we called bins with associated timestamps, litter types, and lat long data and passed them to a react map component for displaying to the user.
- tutorials followed: https://www.udemy.com/course/vuejs-google-maps-api-for-beginners/
- Google Auth with firebase (attempted but unused): This resource was available through our firebase account, and it allowed us to associate users with their gmail, email, or other multi media accounts for tracking. Initially we considered using this service to track different users and how they used and potentially abused the platform, however we abandoned this feature due to issues we couldn't resolve even with the help of peers and mentors. 
- tutorials followed: https://www.youtube.com/watch?v=Oy1E85FhUiA, https://firebase.google.com/docs/auth/admin/errors, https://www.geeksforgeeks.org/how-to-authenticate-with-google-using-firebase-in-react/, https://firebase.google.com/docs/auth/web/google-signin#web-version-9_4
- The firestore database contains the following fields
- location : Geopoint(latitude, longitude)
- timestamp : timestamp
- recyclingMaterial : string
- downvote : number
- upvote : number

location can be accesed by a document _lat, _lng
id is inherent to every firebase document and serves as a unique key

- Next Steps: 
