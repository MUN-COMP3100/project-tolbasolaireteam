# Project CS3100 W2023

### Part 3 Marking Aide
*A section to address the instructions in part 3 and help the markers*
- 0. Evaluation Election: We **do not** wish to have the project evaluation weight moved. As we have achieved Full Marks for Part 2 of the Project
- 1. Proposal and Earlier Documents: The initial proposal documents can be found in the root folder as [**proposal.md**](proposal.md)
- 2. Setup Instructions: See sections below **Running the project** and **Testing the server** on how to reconstruct the database, run the server and client and testing the server-side.
- 3. Implementation description: 
    - See sections below **Running the project** and **Testing the server** on how to run and shut down the server as well as run the client application.
    - For an overview of the basic architecture of the project see section below **Architecture Overview**
- 4. Feature Descriptions
    - See sections below **Server-Side Feature Descriptions (From Part 2)** for the server-side feature descriptions
    - See sections below **Client-Side Feature Descriptions** for the client-side feature descriptions


If you encounter any issues viewing this file try using the vscode extension *Markdown Preview Enhanced*

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
2. Create a file called `.env` in the server folder add the following lines (the contents can also be copied from [here](env.txt) ):
    - `DB_USERNAME=marker`
    - `DB_PASSWORD=fryqw1O0IaeECj4v`
    - `DATABASE_URI= mongodb+srv://marker:fryqw1O0IaeECj4v@cluster0.nat73ng.mongodb.net/recipesData?retryWrites=true&w=majority`
    - `ACCESS_TOKEN_SECRET= 5e76bee04cf3b88d7e74efb13dfac69a5ef14ef94efc95b592e3321b9895981bb09708f7025b6c488d4b5d359bbac6b5298e2b5a4b516ab7742598c4774257c4`
    - `REFRESH_TOKEN_SECRET= 6db576392077bb06ddfed8233be5d337599fab6199d3bb66bbcb8a5c777dd3f601b407a320ddd176b4bf309492274563f62aa1d26cddca0cded397591fe52019`
<br>

- It should look like this: <br>

<img align="left" src="images\.env.png" alt="Database upload" width="950" height="300">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


3. Open a terminal and run the following commands to start the server
    - `cd server`
    - `npm install`
    - `npm run dev`

4. Open a terminal and run the following commands to start the client
    - `cd react-client`
    - `npm install` 
    - `npm start`

5. Register for an account! 
- You can create your own account
- Alternatively you can use login credentials in the next step 

6. Login 
- Login with the credentials you used in the previous step or use:
    - Email: `bvh658@mun.ca`
    - Password: `Green23!`

Note 
    - `npm install` installs the node modules and only needs to be ran once in each folder
    - `CTRL+C` can be pressed at anytime to close the server, client or tests.  

### Testing the server

**As mentioned by Dr. Brown in-class, the Mocha tests are no longer necessary as they have already been demonstrated in the video that the application's features are working properly. Furthermore, the server-side features have already been tested in part 2 of the assessment and have received full marks. Therefore, there is no need to include working Mocha tests in the submission.**


Each of the 6 server-side features implemented can be tested by:
1. If you haven't already, create a file called `.env` in the server folder use the contents from this text file [here](env.txt)
2. Open a terminal   
3. Navigate to the server: `cd server`
4. Install the node modules if you haven't yet: `npm install`
5. Start the server: `npm run dev`
6. Open a second terminal 
7. Navigate to the server: `cd server`
8. Run the Mocha tests: `npm test`
9. The test covers:
    - Sign-up/register a new user
    - Login a user
    - Create a new recipe
    - Amend an existing recipe
    - Delete a recipe
    - Find a single recipe by name
    - Find recipes by list of ingredients
    - Find recipes by type of dish, i.e. beef, chicken, etc.
<br><br >

### Architecture Overview

#### demos
- Contains all the video demonstrations for each of the client-side features

#### feedback
- Contains feedback from part 1 & 2

#### images
- Contains UI sketches 
- Shows what the .env file should look like 
- Shows the database

#### server
- **config**: Contains configuration files for the application, including settings for the server, database. Also contains some validation of fields.
- **controllers**: Includes functions that handle HTTP requests from the client and send responses back. These functions may also interact with the model module to retrieve or manipulate data. Handles login, registration and database queries.
- **data**: A json copy of the recipes. Used initially to create the database.
- **logs**: Contains log files for the application, which can be used for debugging or monitoring purposes.
- **middleware**: Includes functions that can be used to modify incoming HTTP requests or outgoing responses. Includes authentication and logging functionality.
- **model**: Includes functions that interact with the data module to retrieve or manipulate data. Used by the controller module. It includes a User and Recipe model. 
- **node_modules**: Contains third-party dependencies that the application uses.
- **public**: Contains static files that the application serves to client only contain a single css file.
- **routes**: Contains files that define the routes for the application. Each route maps an HTTP request method and URL path to a controller function.
- **test**: Mocha test for the 6 server-side features.
- **views**: Contains files that define the templates for rendering HTML pages to clients. We have a custom 404 page here.
- **.env**: A file containing environment variables that are used by the application.
- **package-lock.json**: A file used by NPM to ensure that the application's dependencies are installed consistently across different machines.
- **package.json**: Contains metadata about the application, including its name, version, and dependencies.
- **gitignore**: A file specifying files or directories that should not be tracked by version control. 

#### react-client
- **node_modules**: Contains third-party dependencies that the application uses.
- **public**: Contains static files that the application serves to client, contains index.html and a logo
- **src**
    - **api**: Use to create axios instances. 
    - **components**: Contains reusable components used by the application. Such as headers, footers, the homepage layout etc.
    - **context**: This provider component makes the auth state and setAuth function available to its children via the AuthContext.
    - **features**: Contains all the react client-side features implemented for part 3. 
    - **hooks**: Contains custom React hooks used by the application.
    - **App.mjs**:The main React component that renders the application.
    - **index.css**: CSS styling for the application.
    - **index.mjs**: The entry point for the application, which renders the App component.

- **gitignore**: A file specifying files or directories that should not be tracked by version control.
- **package-lock.json**: A file used by NPM to ensure that the application's dependencies are installed consistently across different machines.
- **package.json**: Contains metadata about the application, including its name, version, and dependencies.
- **README**: Common commands to use with the application.



#### env.txt
- The content the markers should use when setting up the environment variables that are used by the application.

#### proposal.md
- The proposal submitted in Part 1

### Server-Side Feature Descriptions (From Part 2)

|Feature name     |Description |Implementation strategy | Packages and modules |   Other feature(s) dependencies  | Implementation status |Corresponding Test(s)|
|---------------------------------|------------------------|----------------------|----------------------------------|-----------------------|--|--|
| Find recipe by ingredient | Allows users to search for recipes that contain a list of ingredients. | The function uses the `find()` method with a `$text` search on the Recipe collection to find recipes that contain all of the specified ingredients. The search results are sorted using the `$meta` operator with `textScore`. The feature limits the results to a maximum of 200 recipes and returns a message if there are no matches. The results are sorted by `textScore`, which is a MongoDB feature that ranks results by relevance.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Fully Implemented|See demos/find_recipe_by_ingredients.mp4|
|Find recipe by type|This feature allows the user to search for recipes that match a given type of dish, such as beef, chicken, etc.|The implementation strategy involves searching the Recipe collection for recipes that match the dish. The search is based on a regular expression that matches any part of the ingredients field that contains the given type of dish. The search results are then returned as a JSON response.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Fully Implemented|See demos/meal_plan_generator.mp4|
|Create new recipe |This feature allows users to create a new recipe and save it to the database. The user must provide a name, summary, ingredients, and directions for the recipe. Other optional fields include url, category, author, ratings, reviews, and nutrition information.|If all required fields are present, it creates a new recipe object in the database using the "create" method of the Recipe model. The updated recipe object is then saved to the database using the save() function. |MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Fully Implemented|See demos/create_recipe.mp4|
|Update recipe|This feature allows the user to update a recipe's ingredients or directions.|This feature uses the Mongoose package to find the recipe in the database and update the recipe object with new ingredient and direction values. The updated recipe object is then saved to the database using the save() function.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Fully Implemented|See demos/update.mp4|
|Delete recipe |This feature allows users to delete a recipe from the database by specifying the name of the recipe.|If the recipe name is present, the function uses the Mongoose findOne() method to find the recipe in the database based on its name. If the recipe is not found, a message indicating that there is no matching recipe is sent back to the user. If the recipe is found, the function uses the deleteOne() method to remove it from the database. Finally, a message confirming that the recipe has been deleted is sent back to the user.|MongoDB, JSON|This feature depends on the Recipe model and Mongo database.|Fully Implemented|N/A|

Note: In addition to the features implemented in Part 2 we also implemented Sign-up, Login, Recipe-finder-type of dish and Create New Recipe Server-Side Features as well 

### Client-Side Feature Descriptions 

|Feature Name|Description|Implementation strategy|Packages and modules|Other feature(s) dependencies|Implementation status|Brief Visual Description|Related Code Sections| Video Location|
|-----------------------------------|-----------|-----------------------|--------------------|-----------------------------|---------------------|------------------------|-----------|---|
| Sign-up | User signs up to the site with their name, email, and password. |If the inputted information is sufficient then a new user is created.|bcrypt, validate_fields, react|User|Fully Implemented| Four fields are presented First Name, Last Name, Email and Password. And each field must meet criteria i.e. password must be at least 8 alphanumeric characters.|react-client\src\features\Register\Register.mjs|demos/register.mp4|
|Login|User uses their username and password to sign into their account|Check if the user's input can be found in the database.|bcrypt, validate_fields,jwt, react|User|Fully Implemented|Two fields are presented Username and Password as well as a submit button. Too proceed the credentials must exist in the database.|react-client\src\features\auth\Login.mjs|demos/login.mp4|
| Recipe-finder-type of dish|Provide a list of random recipes based on type of dish, ie beef, chicken, etc specified by the user|Our goal is to presenting the user with a weekly recipes and providing a grocery list.  |Axios, React|MealOptions.mjs|Fully Implemented|Loosely following fig 6 from our UI sketch. The user enters the quantity of each dish they want into numbered fields and a weekly meal plan and grocery list is generated.|react-client\src\features\recipes\MealOptions.mjs react-client\src\features\recipes\MealPlanner.mjs|demos/meal_plan_generator.mp4|
| Create New Recipe| User can add a new recipe to the database.|Give the user a form and a button to add new recipes to the database|React|Recipe Model|Fully Implemented|The user is given a form with different recipe fields i.e. name, summary, url etc.|react-client\src\features\recipes\CreateRecipe.mjs|demos/create_recipe.mp4|
| Update Recipe|User can search for and update existing recipes|First the user searches for the recipe by name then can modify the recipe by filling out a the fields in a form. |Axios, React|None|Fully Implemented|User is presented with the name field to search for a recipe. Once found, the recipe fields must be filled. Lastly the amend recipe button must be pressed. |react-client\src\features\recipes\AmendRecipe.mjs  react-client\src\features\recipes\SearchRecipe.mjs |demos/update_recipe.mp4|
| Find Recipe by Ingredient |User can search for a recipe by ingredients. They must be comma separated. |Once the name of the recipe field is filled the user can press the button to search for a recipe. If found it will display all the matching recipes. Otherwise an error message will be returned.|Axios, React|None|Fully Implemented|A field to enter the ingredients and a button to search.|     react-client\src\features\recipes\RecipeCard.mjs                               react-client\src\features\recipes\RecipeCard.css  react-client\src\features\recipes\SearchRecipeIngredients.mjs   |demos/find_recipe_by_ingredients.mp4|

Note in addition to the features listed here Grocery list and Find Recipe By Name have also been implemented.

### Attribution
The following resources were used to help with the development of this project:
- [Dave Grey's Express Tutorial](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1)
- [Dave Grey's React Tutorial](https://www.youtube.com/watch?v=TeeAp5zkYnI&list=PL0Zuz27SZ-6PrE9srvEn8nbhOOyxnWXfp)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Collaborative effort from Drew Griffiths and Brandon Hardatt
- Worked on features together and communicated on Discord