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

- First, clone the repository to your local machine.
- Second, install the dependencies with `npm install`
- Third, create a .env file in the server directory and add the following lines:
    - `DB_USERNAME=marker`
    - `DB_PASSWORD=fryqw1O0IaeECj4v`
    - `DATABASE_URI= mongodb+srv://marker:fryqw1O0IaeECj4v@cluster0.nat73ng.mongodb.net/recipesData?retryWrites=true&w=majority`
    - `ACCESS_TOKEN_SECRET= 5e76bee04cf3b88d7e74efb13dfac69a5ef14ef94efc95b592e3321b9895981bb09708f7025b6c488d4b5d359bbac6b5298e2b5a4b516ab7742598c4774257c4`
    - `REFRESH_TOKEN_SECRET= 6db576392077bb06ddfed8233be5d337599fab6199d3bb66bbcb8a5c777dd3f601b407a320ddd176b4bf309492274563f62aa1d26cddca0cded397591fe52019`
<br>
- It should look like this: <br>

<img align="left" src="images\.env.png" alt="Database upload" width="950" height="300">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

- Fourth, open a terminal in the server directory and run the server with: 
`npm start`  

- Next, open another terminal to run a variety of Mocha tests with the command `npm test` for the following features implemented:
    - Sign-up/register a new user
    - Login a user
    - Create a new recipe
    - Amend an existing recipe
    - Delete a recipe
    - Find a single recipe by name
    - Find recipes by list of ingredients
    - Find recipes by type of dish, i.e. beef, chicken, etc.
<br><br >
- To shut down the server, press `ctrl + c` in the terminal where the server is running.
### Implementation description 

### Root
- **server.mjs**
    - Uses `dotenv` is used to load environment variables from a .env file. It contains credentials to access the database. 
    - `express` is the web framework used to create the server.



...


Outline the basic architecture (code modules and module responsibilities) in your submission to help the marker understand your code.

### Project Part 2 Feature Descriptions

#### 1.
- Feature name: Find recipe by total cooking time
    - Description: Find recipes in the database that contain all of the given ingredients, and return the top 10 results in order of priority.
    - Implementation strategy: The results are sorted by textScore, which is a MongoDB feature that ranks results by relevance.
    - Imported packages and modules: MongoDB, JSON, and Mongoose
    - Other features that depend on this feature: None
    - Implementation status: Server side is fully implemented
    - Test description: Once inside the server folder run `npm start` in one terminal and `npm test` in another terminal. The test are numbered. This features tests are 5 - 8 
        - Working test: If given highly specific ingredients return a recipe
            - Location: Pass 6
            - Test code status: Working properly
            - Expected output: Specific recipe
        - Failure test: If given invalid ingredients don't return any recipes 
            - Location: Fail 5 
            - Test code status: Working properly
            - Expected output: 'No recipes match the ingredients battery,plutonium.'

### Feature Descriptions Prompt

- [ ] For each feature implemented briefly describe the following:
    - name of the feature
    - A one or two sentence description of the feature. You may refer to (and possibly update) a section of the proposal for this component.
    - A brief description of the implementation strategy for the feature, including tools and imported packages and modules used
    - A statement of which other features or project modules (storage, etc) this feature uses or depends on.
    - A brief indication of the state of the implementation for the feature. Is it complete, how much is working?
    - A description of how to test the feature. Test code should be provided to test both working and failure modes of the feature from the client-side. Also indicate whether the test code is working properly and what the marker should see upon running the test code. You are encouraged to use a test framework (Mocha) for this part.

### Attribution
The following resources were used to help with the development of this project:
- [Dave Grey's Express Tutorial](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=1)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Collaborative effort from Drew Griffiths and Brandon Hardatt
- Worked on features together and communicated on Discord
