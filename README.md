# Links #
* [Website](https://ceeoinnovations.github.io/hackathon-2021/)
* [Data (Google Drive)](https://drive.google.com/drive/folders/1QYH_SIuhGPQyQdSwdye5zqEzu_FLeaNi?usp=sharing)

# How to build a Product Website Using Google Spreadsheets #
Watch [Video Tuturial](https://youtu.be/VapCknrpzP8)

## Google Drive Setup ##
1. Create a folder with your product name in this [CEEO Google Drive](https://drive.google.com/drive/folders/1Zw7Z4XYys5PYWmt3IgDSBJGUQ6AI8Yr0?usp=sharing). **Change sharing permission** of this folder so that `Anyone from CEEO can edit`
2. Make a copy of the three files below in this [folder](https://drive.google.com/drive/folders/1QYH_SIuhGPQyQdSwdye5zqEzu_FLeaNi?usp=sharing) and move them to your folder in Google Drive
* `about`: basic information required to build your website
* `themes`: high-level categories of projects
* `Submission Form`: project submission form
3. Create a folder named Resources
* `Resources`: a folder where you can upload any files to share regarding the product. **Change sharing permission** of this folder so that `Anyone can view`
3. Open the form in Google Drive. Once an alert is prompted, restore the folder containing responses to File Upload question. 
* `Submit your project (File responses)`: a folder where submitted files will be stored. **Change sharing permission** of this folder so that `Anyone can view`
4. In the form, click `Responses` and click More icon on the right. Click `Select response destination`. Choose an option of `Create a new spreadsheet`. Name that spreadsheet as `projects`
* `projects`: all submitted project information
6. Replace the placeholder text with your data in the `about`sheet
* Do not edit any cells in the first row of spreadsheets
* `website`: you can get your website link once setting up GitHub
* `form`: open the form in Google Drive and click `Send` and then `Link` tab to find a form link
* `resources`: copy and paste a sharable link of the `Resources` folder

## GitHub Setup ##
1. Get invited as a member of [CEEO Innovations](https://github.com/ceeoinnovations) repository
2. Click `Use this template` on this repository to create a new repository 
3. Select `ceeoinnovations` as owner. Name the repository with your hackathon name. Make it `public`
* Use **lowercase** for repository name
* Repository name should be unique and it describes your product (e.g., SPIKE Prime Backpack) 
4. Go to `index.js` and replace the existing csv file URLs (line #7 for about, #8 for themes, #9 for projects) with yours. 
* To get links to your Google Sheets, open the spreadsheets; click `File` and then `Publish to the web`. Select `Entire Document` and `csv` then click `Publish`.
5. Go to `index.html` and edit title (line #4). 
6. Go to `components/Navbar.js` and update the hyperlink with your GitHub repository name (line #7) 
* It should be all lowercase and have no space 
8. To publish your website, go to `Settings`, click `Pages`, select `main` as a source, and save. You can find your website link there.
9. Update `readme.md` in your GitHub repository. Replace links to website and data on the top of this page with yours. Get rid of this section.

# Add Content #
## How to Add a Theme ##
1. Open the `themes` spreadsheets and add a row to it with a new theme information
2. Open the `Submission Form` and add an option with your theme name to the first question
* Make sure that the name is the same to what you use in `themes`

## How to Submit a Project ##
* Share a website link with people and ask them to click `Submit Project` to submit their data
* If you want to hide a specific project, open the `projects` sheets and create a new tab named `hidden`. Move the project data to the `hidden` tab
* Go to your website to see updates. It may take a couple of minutes to get updated
