import BlogPic from '../pics/Blog.png'
import TaskBoard from '../pics/TaskBoard.png'
import Payroll from '../pics/PayrollTracker.png'
import WeatherTracker from '../pics/Weather.png'
import PetCronicles from '../pics/Pet.png'
import READMEPic from '../pics/README.png'
import LogoCreator from '../pics/LogoCreatorCoverPhoto.png'
import Ecommerce from '../pics/E-Commerce.png'
import MongoDB from '../pics/MongoDB.png'
import Regex from '../pics/Regex.png'

export const projects = [
    {
        id: 1,
        title: "Blog",
        img: BlogPic,
        description: "A website that takes in blogs and carries them over into the next page where they will be displayed.",
        gitUrl: "https://github.com/Mitchell-610/Blog",
        siteUrl: "https://mitchell-610.github.io/Blog/",
        rdme: "A website that takes in blogs and carries them over into the next page where they will be displayed. GIVEN a personal blog When you load the app. You are presented with the landing page containing a form with labels and inputs for username, blog title, and blog content. When you submit the form. You then see blog post data is stored to localStorage. When the form submits. You are redirected to the posts page. When you enter try to submit a form without a username, title, or content. You are presented with a message that prompts me to complete the form. When you view the posts page. You are presented with a header, with a light mode/dark mode toggle, and a Back button. When you click the light mode/dark mode toggle. You see the page contents styles update to reflect the selection. When you click the Back button. You are redirected back to the landing page where I can input more blog entries. When you view the main content. You are presented with a list of blog posts that are pulled from localStorage. When you view localStorage. You are presented with a JSON array of blog post objects, each including the post authors username, title of the post, and posts content. When you take a closer look at a single blog entry in the list. You can see the title, the content, and the author of the post. When you view the footer. You are presented with a link to the developers portfolio."
    },
    {
        id: 2,
        title: "Task Board",
        img: TaskBoard,
        description: "A website where you can store all of your tasks and move them from in progress to finished. ",
        gitUrl: "https://github.com/Mitchell-610/Task-board",
        siteUrl: "https://mitchell-610.github.io/Task-board/",
        rdme: "A website where you can store all of your tasks and move then from in progress and finished. You can open the task board. Then the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed). You then view the task board for the project. Then each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red),When you click on the button to define a new task. Then you can enter the title, description and deadline date for the new task into a modal dialog. When you click the save button for that task. Then the properties for that task are saved in localStorage. When you drag a task to a different progress column. The tasks progress state is updated accordingly and will stay in the new column after refreshing. When you click the delete button for a task. The task is removed from the task board and will not be added back after refreshing. When you refresh the page. Then the saved tasks persist and appends to the screen."
    },
    {
        id: 3,
        title: "PayRoll Tracker",
        img: Payroll,
        description: "A website that tracks a number of employees via salary and, then randomly selects a winner.",
        gitUrl: "https://github.com/Mitchell-610/Payroll-Tracker",
        siteUrl: "https://mitchell-610.github.io/Payroll-Tracker/",
        rdme: "A website that tracks a number of employees, then randomly draws a winner. When you click the Add employee button. Then you are presented with a series of prompts asking for first name, last name, and salary. When you finish adding an employee. Then you are prompted to continue or cancel. When you choose to continue. Then you are prompted to add a new employee. When you choose to cancel. Then your employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data."
    },
    {
        id: 4,
        title: "Weather Tracker",
        img: WeatherTracker,
        description: "A weather website that tracks a number of cities for the most up to date weather status.",
        gitUrl: "https://github.com/Mitchell-610/Weather-Tracker",
        siteUrl: "https://mitchell-610.github.io/Weather-Tracker/",
        rdme: "A weather website that tracks a number of cities for the most up to date weather status. You are then presented with current and future conditions for that city and that city is added to the search history. When you view current weather conditions for that city. You are then presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed. When you view future weather conditions for that city. You are then presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity. When you click on a city in the search history. You are then again presented with current and future conditions for that city."
    },
    {
        id: 5,
        title: "Pet Cronicles",
        img: PetCronicles,
        description: "A fun dog-driven mini game.",
        gitUrl: "https://github.com/Mitchell-610/Pet-Combat-Chronicles",
        siteUrl: "https://mitchell-610.github.io/Pet-Combat-Chronicles/",
        rdme: "When you click on Generate YOUR Dogs Name and Generate CPU Dogs Name. Then a randomly selected combination of names from the database its assigned and displayed. When you click on Randomize and based on a RNG. Then the CPU and I are assigned a random dog to battle and an image for each dog is shown. When you click on battle! Then a winner is chosen based on their breed, specified parameters and a battle boost provided by a back end dice roll. When you finish a battle. Then a pop up will appear with a You win or You lose message along with a fact about the winning dog. When you dismiss the fact about the winning dog. Then you can randomize and battle all over "
    },
    {
        id: 6,
        title: "README Generator",
        img: READMEPic,
        description: "This is a command-line application that accepts user input and actually applies them to your GitHub account real time!",
        gitUrl: "https://github.com/Mitchell-610/README-Generator",
        rdme: "This is a command-line application that accepts user input and actually applies then to your GitHub account real time! When you are prompted for information about my application repository. You a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. When you enter my project title. Then the info is displayed as the title of the README. When you then enter a description, installation instructions, usage information, contribution guidelines, and test instructions. The information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests. When you choose a license for my application from a list of optionsA badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under. When you enter my GitHub username. It is then added to the section of the README entitled Questions, with a link to my GitHub profile. When you enter your email address. It is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions. When you click on the links in the Table of Contents. You are then taken to the corresponding section of the README"
    },
    {
        id: 7,
        title: "Logo Creator",
        img: LogoCreator,
        description: "A node application that allows users to create a logo.",
        gitUrl: "https://github.com/Mitchell-610/Logo-Creator",
        siteUrl: "https://github.com/Mitchell-610/Logo-Creator/",
        rdme: "An amazing node js platform that allows users to create a custom logo that will be displayed for them to see. This is a command-line application that accepts user input. When you are prompted for text. You then can enter up to three characters. When you are prompted for the text colorYou then can enter a color keyword (OR a hexadecimal number)When you are prompted to enter a shape. You then are presented with a list of shapes to choose from: circle, triangle, and squareWhen you are prompted for the shape's color. You then can enter a color keyword (OR a hexadecimal number)When you have entered input for all the prompts. Then an SVG file is created named `logo.svg`The output text Generated logo.svg is printed in the command line. When you open the `logo.svg` file in a browser. You are then shown a 300x200 pixel image that matches the criteria you entered."
    },
    {
        id: 8,
        title: "E-Commerce",
        img: Ecommerce,
        description: "A E-Commerce backend application.",
        gitUrl: "https://github.com/Mitchell-610/E-Commerce",
        rdme: "When you add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file. You are then able to connect to a database using Sequelize. When you enter schema and seed commands. You then development database is created and is seeded with test dataWhen you enter the command to invoke the application. Then the server is started and the Sequelize models are synced to the PostgreSQL databaseWhen you open API GET routes in Insomnia for categories, products, or tagsThen the data for each of these routes is displayed in a formatted JSONWhen you test API POST, PUT, and DELETE routes in InsomniaThen you are able to successfully create, update, and delete data in my database."
    },
    {
        id: 9,
        title: "MongoDB",
        img: MongoDB,
        description: "A back end application that allows users to get, post, and delete.",
        gitUrl: "https://github.com/Mitchell-610/Pet-Combat-Chronicles",
        siteUrl: "https://mitchell-610.github.io/Pet-Combat-Chronicles/",
        rdme: "When given a social network API. When you enter the command to invoke the application. Your server is now started and the Mongoose models are synced to the MongoDB database. When you open API GET routes in Insomnia for users and thoughts. Then the data for each of these routes is displayed in a formatted JSON. When you test API POST, PUT, and DELETE routes in Insomnia. You are then able to successfully create, update, and delete users and thoughts in my database. When you test API POST and DELETE routes in InsomniaYou are then able to successfully create and delete reactions to thoughts and add and remove friends to a users friend list."
    },
    {
        id: 10,
        title: "Regex",
        img: Regex,
        description: "A simple Regex gist that displays how to use and call regex..",
        gitUrl: "Hello, welcome to one of the best Regex tutorials that you'll find.",
        rdme: "In this tutorial, we will explore how to use regular expressions (regex) to match various patterns in text. Specifically, we will demonstrate how to match email addresses using regex, which is essential for applications involving account creation or email verification. Regex provides a powerful way to search, validate, and extract information from strings."
    },
]