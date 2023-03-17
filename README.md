# Project Part 1 & 2, CS3100 W2023

### Files
- **proposal.md** contains the project proposal (to be submitted for grading). If you encounter any issues viewing this file try using the vscode extension *Markdown Preview Enhanced*

### Student Information
|      NAME     |MUN ID | GITHUB USERNAME |   MUN EMAIL  |
|---------------|-------|-----------------|--------------|
|Brandon Hardatt|bvh658 |BrandonHardatt   |bvh658@mun.ca |
|Drew Griffiths |djamesg|DJGriffi         |djamesg@mun.ca|

### Proposal  
- A cooking website that allows users to manage their weekly grocery shopping and provides them with recipes cooking.
- See **proposal.md** for more details.
- This project has been approved by the instructor.


### Running the project

1. Clone the repository to your local machine.
2. Install the dependencies with `npm install`
3. Create a `.env` file in the server directory and add the following lines:
    - `DB_USERNAME=marker`
    - `DB_PASSWORD=fryqw1O0IaeECj4v`
    - `DATABASE_URI= mongodb+srv://marker:fryqw1O0IaeECj4v@cluster0.nat73ng.mongodb.net/recipesData?retryWrites=true&w=majority`
    - `ACCESS_TOKEN_SECRET= 5e76bee04cf3b88d7e74efb13dfac69a5ef14ef94efc95b592e3321b9895981bb09708f7025b6c488d4b5d359bbac6b5298e2b5a4b516ab7742598c4774257c4`
    - `REFRESH_TOKEN_SECRET= 6db576392077bb06ddfed8233be5d337599fab6199d3bb66bbcb8a5c777dd3f601b407a320ddd176b4bf309492274563f62aa1d26cddca0cded397591fe52019`
<br>
- It should look like this: <br>

<img align="left" src="images\.env.png" alt="Database upload" width="950" height="300">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

4. open a terminal in the server directory and run the server with: 
`npm start`  

5. Open another terminal to run a variety of Mocha tests with the command `npm test` for the following features implemented:
    - Sign-up/register a new user
    - Login a user
    - Create a new recipe
    - Amend an existing recipe
    - Delete a recipe
    - Find a single recipe by name
    - Find recipes by list of ingredients
    - Find recipes by type of dish, i.e. beef, chicken, etc.
<br><br >
- 6. To shut down the server, press `CRTL + C` in the terminal where the server is running.
### Implementation description 

### Implementation description / Architecture

- **data**: Contains the database of recipes to be uploaded to the MongoDB server.
- **feedback**: Contains feedback from Project Part 1.
- **images**: Contains UI sketches.
- **server.mjs**: 
    - Loads environment variables using dotenv.
    - Creates a web server using the express framework.
    - Uses mongoose as an Object Data Modeling (ODM) library to interact with a MongoDB database.
    - Establishes a connection to the MongoDB database and starts the server on port 3500.
- **.env**: Credentials to access the database.
- **server/config**: Configuration modules
- **server/controllers**: Controller modules responsible for handling requests and generating responses.
- **server/log**: Log files for the server.
- **server/middleware**: Middleware modules responsible for processing requests before they reach the controllers.
- **server/model**: Modules defining the data schema for the MongoDB database.
- **server/routes/api**: Modules defining the API routes for the server.
- **server/test**: Test files for the server
- **server/views**: View templates for rendering HTML pages.

### Feature Descriptions

**Each of the 6 features implemented can be tested by navigating to the server folder (in a terminal in vscode) and running `npm start` and `npm test` in another terminal. Working and failure cases are provided in the mocha framework. Each of the test are labelled so finding a features corresponding tests are organized**

|Feature name     |Description |Implementation strategy | Packages and modules |   Other feature(s) dependencies  | Implementation status |
|---------------------------------|------------------------|----------------------|----------------------------------|-----------------------|--|
| Find recipe by ingredient | Allows users to search for recipes that contain a list of ingredients. | The function uses the `find()` method with a `$text` search on the Recipe collection to find recipes that contain all of the specified ingredients. The search results are sorted using the `$meta` operator with `textScore`. The feature limits the results to a maximum of 200 recipes and returns a message if there are no matches. The results are sorted by `textScore`, which is a MongoDB feature that ranks results by relevance.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Server side is fully implemented|
|Find recipe by type|This feature allows the user to search for recipes that match a given type of dish, such as beef, chicken, etc.|The implementation strategy involves searching the Recipe collection for recipes that match the dish. The search is based on a regular expression that matches any part of the ingredients field that contains the given type of dish. The search results are then returned as a JSON response.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Server side is fully implemented|
|Create new recipe |This feature allows users to create a new recipe and save it to the database. The user must provide a name, summary, ingredients, and directions for the recipe. Other optional fields include url, category, author, ratings, reviews, and nutrition information.|If all required fields are present, it creates a new recipe object in the database using the "create" method of the Recipe model. The updated recipe object is then saved to the database using the save() function. |MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Server side is fully implemented|
|Update recipe|This feature allows the user to update a recipe's ingredients or directions.|This feature uses the Mongoose package to find the recipe in the database and update the recipe object with new ingredient and direction values. The updated recipe object is then saved to the database using the save() function.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Server side is fully implemented|
|Delete recipe |This feature allows users to delete a recipe from the database by specifying the name of the recipe.|If the recipe name is present, the function uses the Mongoose findOne() method to find the recipe in the database based on its name. If the recipe is not found, a message indicating that there is no matching recipe is sent back to the user. If the recipe is found, the function uses the deleteOne() method to remove it from the database. Finally, a message confirming that the recipe has been deleted is sent back to the user.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Server side is fully implemented|

### Attribution
The following resources were used to help with the development of this project:
- [Dave Grey's Express Tutorial](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Collaborative effort from Drew Griffiths and Brandon Hardatt
- Worked on features together and communicated on Discord
