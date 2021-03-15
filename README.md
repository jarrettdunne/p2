# **Recipes**

## **Description**
This application will provide a simplistic approach to recording, viewing and editing food recipes by utilizing a REACT component framework and [](airtable.com) as API database in addition to a mobile first approach. Specifically, this app will use class based components in a manner similar to object oriented programming. 

## **Wireframes**
The following wireframes illustrate the conceptual minimum viable product for the fullpage, tablet and mobile screens. Since the tablet version of the site will only have minor changes to the aspect ratio and font size, these differences are negligible and a single wwireframe will be used for both. 

It is important to note that these wireframes do not include illustrations of any Post MVP attributes. 

### ***Desktop & Tablet***
![Imgur](https://i.imgur.com/KsuRkd6.png)

### ***Mobile***
![Imgur](https://i.imgur.com/IWOYNrk.png)

## **Component Hierarchy**

![Imgur](https://i.imgur.com/ghJnMJx.png)
    
## **API**
Using airtable, each recipe will be stored as an object with keys for the name of the recipe, ingredients, directions, prep time, cook time, meal type, and additional notes.  

Apart from the ingredient and directions keys, which will be stored as long text, all other keys will be stored as single line text. The long text format will allow for easier parsing of multi line content. Also, the times will use a text format instead of numerical since it is more convenient to parse time values as string.

*Login Required*
[API Documentation](https://airtable.com/appfDjZDMpXsAWj1F/api/docs#curl/introduction)

```
{
    "records": [
        {
            "id": "recsRGXHtq5LEK7S7",
            "fields": {
                "name": "Citrus Tart",
                "ingredients": "1 cup pitted dates, tightly packed\n⅔ cup sustainable palm shortening\n1½ cup arrowroot powder\n¼ cup maple sugar\n1½ cup fresh-squeezed Meyer lemon juice...",
                "directions": "First, make the crust. Preheat the oven to 350 degrees. Place the dates in the bowl of a food processor and pulse until small granules form. Don't ove...",
                "prep": "15 min",
                "cook": "3 hours",
                "type": "dessert",
                "notes": "This recipe does fantastic prepared ahead of time, and keeps wonderfully in the refrigerator."
            },
            "createdTime": "2021-03-12T04:31:29.000Z"
        }
    ],
    "offset": "recsRGXHtq5LEK7S7"
}
```

## **Minimum Viable Product**

### MVP
- Use class based component framework
- Get and Post recipes from and to airtable.com 
- Display clickable recipes on the homepage
- Display full contents of clicked recipe
- Use a form component to add a recipe
- Use a form component to edit a recipe
- Use linking and routing
- Use a dropdown to reduce displayed results
- Use media queries to scale for different screen sizes

### **Post-MVP**
- Edit and Delete recipes from airtable.com
- Autocomplete known ingredients when typing into forms
- Autocomplete from separate data table, also from airtable.com
- Enhance user experience with advanced CSS techniques

## **Project Schedule**
### Lay out your timeline for your project, from proposal to deployment.
| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Mar 15   | Proposal Approval                          | Incomplete |
| Mar 15   | Airtable Setup / App & Component Templates | Incomplete |
| Mar 16   | Finish Components                          | Incomplete |
| Mar 16   | Get and Post Data / Component CSS          | Incomplete |
| Mar 17   | Media Queries CSS                          | Incomplete |
| Mar 18   | MVP                                        | Incomplete |
| Mar 19   | Post-MVP                                   | Incomplete |
| Mar 20   | Post-MVP                                   | Incomplete |
| Mar 21   | Post-MVP                                   | Incomplete |
| Mar 22   | Presentations                              | Incomplete |

## **Timeframes** 

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      3hrs      |     3hrs      |    3hrs     |
| React app setup           |    H     |    .25hrs      |     0hrs      |    0hrs     |
| Airtable Setup            |    H     |      1hrs      |     0hrs      |    0hrs     |
| Enter sample data in API  |    H     |      1hrs      |     0hrs      |    0hrs     |
| Form component setup      |    H     |      2hrs      |     0hrs      |    0hrs     |
| Display component setup   |    H     |      3hrs      |     0hrs      |    0hrs     |
| Display clickable recipes |    H     |      2hrs      |     0hrs      |    0hrs     |
| Dropdown functionality    |    H     |      2hrs      |     0hrs      |    0hrs     |
| Navbar component setup    |    H     |     .5hrs      |     0hrs      |    0hrs     |
| Form add component        |    H     |      2hrs      |     0hrs      |    0hrs     |
| Form edit component       |    H     |      2hrs      |     0hrs      |    0hrs     |
| Link / route components   |    H     |      1hrs      |     0hrs      |    0hrs     |
| Form input parsing        |    H     |      3hrs      |     0hrs      |    0hrs     |
| GET data from API         |    H     |      2hrs      |     0hrs      |    0hrs     |
| POST data to API          |    H     |      2hrs      |     0hrs      |    0hrs     |
| Form Add CSS              |    H     |      2hrs      |     0hrs      |    0hrs     |
| Form Edit CSS             |    H     |      3hrs      |     0hrs      |    0hrs     |
| Home page CSS             |    H     |      3hrs      |     0hrs      |    0hrs     |
| Display CSS               |    H     |      3hrs      |     0hrs      |    0hrs     |
| Total                     |    H     |  37.75hrs      |     0hrs      |    0hrs     |

## **SWOT Analysis** 
Below is a broken down personal analysis going into my second project week.

### ***Strengths:***
I have chosen to use class based components and even though the program just recently covered that material, my previous knowledge of object oriented programming in python has helped me feel more comfortable with this approach.

### ***Weaknesses:***
My skills in CSS are still my weakest attribute at the moment, though this is most likely due to my lack of interest in front end design.

### ***Opportunities:***
This project will be a good opportunity for me to explore some ideas I have in handling inputed data and dealing regualr expressions.

### ***Threats:***
As is usual with my projects, I could underestimate the time required to complete more complicated components so it is important that I simplify my minimum requirements and allow myself ample time to dive into additional features.
