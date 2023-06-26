# NASA meteors search

Use NASA dataset for meteor landing https://data.nasa.gov/resource/y77d-th95.json

Build a simple app that helps our user to complete the following flow

1. The user can start the investigation by YEAR (build your own autocomplete - without 3rd library)

2. The user will see the total amount of meteors landed at that time frame (visualize it in any way you'd like, or just simple text - your call)

3. The user can now filter by larger than MASS in a free text -

if the user cannot find a meteor with the given size, then the filter resets the year to a year where there is a meteor that fits the query

4. The user should see a message saying - the mass was not found, jumping to first-year where there is a mass that fits the criteria)

Example (assuming you are not sorting the dataset):

The user selects 1984 in the year box ->

The page shows 7 meteors ->

the user filters by 1000 mass ->

the page shows 4 meteors ->

the user filters by 100000 ->

the view jumps to the year 1952 and shows 1 meteor

# Project details

This project uses Vite with React and Typescript template

# Operating

- Running: npm run dev
