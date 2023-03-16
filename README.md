# Project Part 1, CS3100 W2023

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

- Upload the database to the local server using MongoDB Compass: 

<img align="left" src="images\MongoDB_upload.png" alt="Database upload" width="958" height="522">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

- Use the file *recipie.json* located in the *data* folder.
- Note that this import gives the database name recipe and the collection name allrecipe

- Install the dependencies 
`npm install dependencies`

- Run the server: 
`npm start`  

- Run a variety of Mocha tests for the 6 features implemented with: 
`npm test`   

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
