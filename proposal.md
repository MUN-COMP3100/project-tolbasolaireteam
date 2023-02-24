# Project Proposal 

## TEAM
|      NAME     |MUN ID | GITHUB USERNAME |   MUN EMAIL  |
|---------------|-------|-----------------|--------------|
|Brandon Hardatt|bvh658 |BrandonHardatt   |bvh658@mun.ca |
|Drew Griffiths |djamesg|DJGriffi         |djamesg@mun.ca|

## PROJECT DESCRIPTION
**Dataset**  
The website will be a meal planning/cooking website using this [dataset](https://github.com/shaansubbaiah/allrecipes-scraper.git) scraped from allrecipes.com containing approximately 35,500 recipes. 

**Usage**  
Using the dataset, the website will generate personalized weekly meal plans based on user-specified preferences, saving users time and reducing food waste. Additionally, the website will generate a weekly grocery list based on the current inventory in the household and the required ingredients for the week, helping users save money and reduce trips to the grocery store.

**User-Friendly**  
The website will be designed with a clean, intuitive, and user-friendly interface, making it easy for users of all ages to navigate and find the information they need. 

**Scalability and Data Privacy**  
To ensure scalability, the website will leverage cloud-based solutions to handle the large dataset and user traffic. Additionally, data privacy and security will be prioritized, and user data will be collected and stored with the utmost care and respect for privacy laws and regulations.

**Conclusion**    
In conclusion, the website that we propose will provide a convenient and efficient solution to the tedious task of meal planning, making life easier for users who would otherwise have to spend time coming up with meal plans and grocery lists. We look forward to working with you to bring this idea to life.

## PROJECT FEATURE TABLE

|Name|Description|End|Deliver|Who|
|-|-|-|-|-|
|Sign-up|User signs up to site|Server|Yes|Drew
|Login|User login and profiles|Server|Yes|Brandon
|Random meal preferences|User sets meal preference for the random meal generator|Client|Yes|Drew
|Manual planner|User can search recipes and make their own meal plan|Server/Client|Yes|Brandon
|Recipe-finder-type of dish|Provide a list of recipes based on type of dish, ie beef, chicken, etc|Server|Yes|Drew
|Recipe-finder-type of ingredients on hand|Provide a list of recipes based on inputted ingredients|Server|Yes|Brandon
|Recipe card|Display the recipe instructions of chosen recipe|Client|Yes|Drew
|Grocery list|Generate grocery list based meal plan|Server|Yes|Brandon
|Display grocery list|Display the generated grocery list in a categorical sorted order(maybe)|Client|Yes|Drew
|Add to grocery list|User can add items from grocery list|Client|Yes|Brandon
|Remove form grocery list|User can remove items from grocery list|Client|Yes|Drew 
|Number of dishes|User sets the number of certain dishes they want for the week, ie number of beef and chicken dishes|Client|Yes|Brandon
|Drag|Drag and drop recipes to change order of random meal plan|Client|Yes|Drew
|Calendar|A weekly calendar to display meals|Client|Yes|Brandon
|Meal-preferences|User sets meal preference for the week|Client|Yes|Drew
|Share meal plan|User can share meal plan via email|Server|Yes|Brandon
|Share grocery list|User can share grocery list via email|Server|Yes|Drew
|Review|Leave a review for a recipe|Client|Maybe|Brandon
|Omit recipe|Allows user to omit recipes from being added to meal plan|Client|Maybe|Drew
|Add recipe to database|Add full recipe to current database|Server|Maybe|Brandon
|Add user notes to recipe|Add user notes to a recipe that are only viewable by user|Server|Maybe|Drew
|Display monthly calendar|Display a monthly calendar|Client|Maybe|Brandon
|Add recipe to monthly calendar|Manually add a recipe to the monthly calendar|Client|Maybe|Drew
|Remove recipe from monthly calendar|Manually remove a specific recipe from monthly calendar|Client|Maybe|Brandon
|Switch days monthly calendar|Swap recipes between days on monthly calendar|Client|Maybe|Drew
|Google calendar sync|Sync monthly calendar with user's google calendar|Server|Maybe|Brandon
|Recipe suggestion|Algorithm that suggests recipes based on user's usage|Server|Maybe|Drew
|Favorite recipes list|Add recipes to user's favorites list|Server|Maybe|Brandon
|Find recipe by time|Find recipes based on total cooking time|Server|Yes|Drew
|Find recipe by sugar content|Find recipe by sugar/serving content|Server|Yes|Brandon
|Find recipe by salt content|Find recipe by sodium/serving content|Server|Yes|Drew
|Find recipe by calories|Find recipe by calories/serving content|Server|Yes|Brandon

## DESCRIPTION OF GUARANTEED DELIVERABLES  

**Landing Page**  
The landing page will be the first page that the user sees when they visit the website. It will contain a brief description of the website and a button to sign up or login. Below is an example of a landing page.

<img align="left" src="ui_sketches\fig1.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

**Sign-up:**  
User signs up to site with a valid email address and password. If the user is a unique user, i.e. there is no user already stored in the database with the same email address, the user info will be stored in a database. 

<img align="left" src="ui_sketches\fig2.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  
<img align="left" src="ui_sketches\fig3.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  
 
**Login:**  
User logs in with their email and password. If there is an email in the database that matches the one entered the stored user password will be retrieved and compared to the password entered. The user will stayed logged in via refresh tokens until they log out.  

Once logged in they will have several options to choose from:

<img align="left" src="ui_sketches\fig7.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

**Random meal preferences:**    
User will set meal preferences for the random meal generator. The user will be able to select the number of meals they want for the week, the number of each type of meal they want, and the type of meals they want.  

**Manual meal planner:**  
User can search recipes and make their own meal plan. The user will be able to search for recipes by name, type of dish, and ingredients. The user will be able to add recipes to their meal plan and remove recipes from their meal plan.  

**Recipe finder by type of dish:**  
Provide a list of recipes based on type of dish, ie beef, chicken, etc. The user will be able to select the type of dish they want and the number of recipes they want.

<img align="left" src="ui_sketches\fig5.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

**Recipe finder by type of ingredients on hand:**
Provide a list of recipes based on inputted ingredients. The user will be able to input the ingredients they have on hand and the number of recipes they want.

**Recipe card:**  
Display the recipe instructions of chosen recipe. The user will be able to view the recipe instructions of the recipe they selected. They will also be able to add the recipe to their meal plan, return to the search, go to the home page, or logout. Below is an exmaple of a recipe card.

<img align="left" src="ui_sketches\fig4.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

**Generate grocery list:**  
The app will be able to generate a grocery list based on the ingredients listed in the recipes in the user's meal plan. 

**Display grocery list:**  
The user will be able to view the generated grocery list in a categorical sorted order.

**Add to grocery list:**  
The user will be able to manually add items from grocery list.

**Remove form grocery list:**  
User can remove items from grocery list

**Number of dishes:**  
User sets the number of certain dishes they want for the week, ie number of beef and chicken dishes

**Drag:**  
Drag and drop recipes to change order of random/manual meal plan

**Calendar:**  

<img align="left" src="ui_sketches\fig6.png" alt="A cute cat" width="800" height="600">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>  

A weekly calendar to display meals populated by random meal generator or manual meal planner. It will also display the grocery list that can later be viewed in the grocery list page.

**Meal-preferences:**  
User sets meal preference for the week. This can be either by type of dish, ingredients, sodium/sugar content, calories, or a combination of these.

**Share meal plan:**  
User can share meal plan with someone else via email

**Share grocery list:**  
User can share grocery list with someone else via email

**Find recipe:**  
Advanced searches should let users find recipes by:
- total cooking time
- sugar content
- sugar/serving content
- salt content
- sodium/serving content
- calories
- calories/serving content
- and more!
Showing the results for recipes that meet their search parameters.  
The user can also set a maximum number of results to display.