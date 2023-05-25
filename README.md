####FULL REACT REDUX APPLICATION - MUSIC RECORD APPLICATION
###Problem Objective
To create a music record application, with the following features, filtering, sorting, and protected routes.

##Part-1 (Setup)
Create the basic Redux store with all the components of actionTypes, actions, reducer.js and store.js, and connect it with the React application component
Setup json-server to run on port 8080. db.json file provided here. You are free to change the data inside, but NOT THE data-format
Setup the Routes for different pages, required in the application.
  <Route path="/" element={<MusicRecords />} />
  <Route path="/music/:id" element={<SingleMusicRecord />} />
  <Route path="/music/:id/edit" element={<EditMusicRecord />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />


##Part-2 (Initial Render)
Render the data present in the db.json file, inside the MusicRecords component, when the application mounts.
Use Redux to store the data received from db.json


##Part-3 (Filter component)
Create a filter component, that filters the data based on the genre type.
It should show the filter category on the URL search params, when the user changes the filter category.
Make sure that the URL search params and the filter data in the UI (checkboxes) persist when the URL is opened in another tab


##Part-4 (Sort component)
Create a sort component, that sorts the data based on album_release_year.
It should show the sorted category on the URL search params, when the user changes the sort criteria.
Make sure that the URL search params and the sort data in the UI (checkboxes) persist when the URL is opened in another tab

#Note:
Filter and sorting should work together.
Filter and sort data in the URL should persist across page refreshes and different browser tabs.
Make sure the data is also re-rendering based on the selected params



##Part-5 (Authentication)
Create the login functionality to authenticate the user (use reqres.in api)
Make sure to separate the music records data and the auth data in different reducers (use combineReducers)


##Part-6 (Protected Routes)
Make the EditMusicRecord page, a protected route.
Create a higher order component, that checks if the user is authenticated.
If the user is not authenticated, redirect him to the Login page, else take him to the protected route.


##Part-7 (Optional)
Can create the Edit functionality of the music albums, inside the EditMusicRecord page.
User can change the music name, and artist name. (BONUS: change cover page images)

----------------------------------------------------------------------
General Info
Use Redux Thunks to make API calls
API calls should have all the (Request, Success and Failure types)