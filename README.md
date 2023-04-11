# Project Part 1 & 2, CS3100 W2023

To aide the markers we have addressed each of the items in the instructions for part 3 [here](Project_Part_3_Report.md).

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

Assuming you've followed the instructions above in **Running the project**

1. Open a terminal and run the following commands to start the server
    - `cd server`
    - `npm run dev`

2. Open a terminal and run the following commands to run the Mocha tests
    - `cd server`
    - `npm test`

3. The test covers:
    - Sign-up/register a new user
    - Login a user
    - Create a new recipe
    - Amend an existing recipe
    - Delete a recipe
    - Find a single recipe by name
    - Find recipes by list of ingredients
    - Find recipes by type of dish, i.e. beef, chicken, etc.
<br><br >

### Basic Architecture 
- See [here](Architecture.md) for an overview of the basic architecture of the project.  
- Due to the size of this section it has been moved to its own file to avoid cluttering the readme. 

### Feature Descriptions
- See [here](Features.md) for a brief description of each of the features implemented.
- Due to the size of this section it has been moved to its own file to avoid cluttering the readme. 

### Attribution
The following resources were used to help with the development of this project:
- [Dave Grey's Express Tutorial](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Collaborative effort from Drew Griffiths and Brandon Hardatt
- Worked on features together and communicated on Discord