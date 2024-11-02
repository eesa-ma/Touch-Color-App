
![Screenshot 2024-11-02 151653](https://github.com/user-attachments/assets/caa604e6-7699-4fda-aeb4-e4a763a636ac)

# Touch-Color-App

# Team Name: CodeCoven

# Team Members
1. Team Lead: Adith Dileep A D
2. Member 2: Eesa M A
3. Member 3: Anushka Anu


# Project Description
  In this interactive web app, you can create colorful circles by touching or clicking on the screen.Each circle will change to a random color and dissolve after 1 second. You can also drag your mouse or finger to create multiple circles simultaneously.

# Web App Link
 https://silly-frangipane-c897ea.netlify.app/

# The Problem (that doesn't exist)
In a world filled with boring colors, people are struggling to express their true selves. Every day, they face the unfortunate reality of using dull and uninspiring color choices on their screens.

Introducing the Touch Color App!

This app is here to solve some ridiculous problems:

Boring Screens: Users are tired of seeing the same boring colors every time they touch their screens. Our app lets them add vibrant colors that match their personality!

Mood Matters: Sometimes, users just feel blue, but they don’t have a way to show it. With our app, they can touch a color that matches their mood, making their devices feel alive.

Indecision on Colors: Users often can’t decide which color they like best. The Touch Color App allows them to explore endless color options without any stress.

Selfie Stagnation: Users are tired of their selfies looking the same. Our app adds fun colors to their photos, making every snapshot unique!

Friendship Tensions: Arguments about color preferences can ruin friendships. With our app, users can just pick a color and avoid the drama!

# The Solution 

Hypothetical Solution: "Color Therapy with Touch Color App"
Overview
In our busy lives, many people struggle with stress and anxiety. The Touch Color App can provide a fun and engaging way to enhance mood and promote relaxation through color therapy.

How It Works
Color Interaction for Mood Regulation:

Users create colorful circles by tapping the screen, each changing to a random color and disappearing after a second. This allows users to play with colors that can uplift their mood.
Guided Color Meditation:

The app can include guided sessions where users are prompted to create circles representing different emotions, helping them acknowledge and release feelings.
Mood Tracking:

Users can log their feelings and the colors they interacted with, helping them recognize which colors improve their mood over time.
Community Sharing:

A feature for sharing colorful creations and experiences can foster community support and connections among users.
Customizable Colors:

Users can personalize the colors available for creating circles, making the experience more enjoyable and meaningful.
Conclusion
The Touch Color App can transform into a playful tool for color therapy, helping users manage stress and improve their mood while promoting self-expression and community engagement.

# Technical Details

The Touch Color App is a React-based interactive web application designed to provide users with an engaging experience through color interaction. Here are the key technical details:

1. Technologies Used
Framework: The application is built using React for its component-based architecture, allowing for reusable components and efficient state management.
Styling: CSS is used for styling the components, with separate CSS files for different components like App.css, IntroPage.css, DetailsPage.css, and ColorCircle.css to maintain organized styles.
State Management: The application utilizes React's built-in useState hook to manage the state of circles and the current page, facilitating dynamic updates to the UI.
2. Core Functionalities
Circle Creation:

The app allows users to create circles by clicking or touching the screen. Each circle is assigned a random color using a getRandomColor function, which generates a hex color code.
Circles are displayed using the ColorCircle component, which dynamically positions each circle based on the user’s input (x, y coordinates) and styles it according to the assigned color.
Mouse and Touch Events:

The app handles both mouse and touch events through event listeners.
handlePointerDown and handlePointerMove functions capture user interactions to create circles as the user clicks or drags across the screen.
Circle Dissolving Effect:

Circles are programmed to disappear after one second. This is achieved using a combination of setTimeout to filter out circles from the state, effectively removing them from the rendered output.
3. Navigation Flow
Intro Page:
The app starts with the IntroPage component, welcoming users and providing a button to begin the game.
Details Page:
After starting, users are taken to the DetailsPage, where they learn about the app's functionalities and can continue to the main interactive section.
Main Interaction:
The main page features the interactive color creation area, where users can engage with the core functionality of the app.
4. Component Structure
App Component:
This is the main component that manages the application’s state and serves as the parent for the other components (IntroPage, DetailsPage, ColorCircle).
ColorCircle Component:
Responsible for rendering individual circles with the appropriate styles based on their position and color.
IntroPage and DetailsPage Components:
These components handle the user interface for navigation and provide information about the app.
5. Deployment
The app can be deployed on platforms like GitHub Pages or Netlify, allowing users to access it directly from their browsers without needing to install anything.
Conclusion
The Touch Color App leverages modern web technologies to create an engaging and interactive experience focused on color play. Its architecture is designed to be flexible and scalable, allowing for future enhancements and features. The combination of React's component-based structure and intuitive event handling ensures a smooth user experience while promoting creativity and emotional expression through colors.
Installation:

Set Up Development Environment:
Install Node.js and NPM on your computer.
Install Visual Studio Code or your preferred code editor.
Create a New React App:
bash
npx create-react-app touch-color-app
cd touch-color-app
Install Required Libraries:
bash
npm install axios color
Develop the Application:

Create Components: Design components for color selection, mood display, and selfie features.
Implement Color Logic: Use Color.js to handle color transformations and selections.
Set Up State Management: If using Redux, configure the store and reducers to manage app state.
Test the Application: Run the app locally and ensure all features work as intended.
Deploy the Application:

Choose a Hosting Platform: Use Netlify for easy deployment.
Build the App for Production:
bash
npm run build
Upload Build Folder: Follow the instructions on Netlify to deploy your app.

# Installation

To set up the Touch Color App on your local machine, follow these simple steps. This guide assumes you have Node.js and npm (Node Package Manager) installed on your system. If you don't have them yet, you can download and install them from the Node.js website.

Step 1: Clone the Repository
Open your terminal or Command Prompt.

Navigate to the directory where you want to clone the project.

Use the following command to clone the repository:

bash
Copy code
git clone https://github.com/your-username/touch-color-app.git
Replace your-username with your actual GitHub username.

Step 2: Navigate into the Project Directory
After cloning the repository, navigate into the project folder:

bash
Copy code
cd touch-color-app
Step 3: Install Dependencies
Once you're in the project directory, you need to install the required dependencies. Run the following command:

bash
Copy code
npm install
This command will read the package.json file and install all the necessary packages listed under dependencies.

Step 4: Start the Development Server
To run the app, use the following command:

bash
Copy code
npm start
This will start the development server, and you should see output indicating that the app is running. By default, it runs on http://localhost:3000/.

Step 5: Access the Application
Open your web browser and navigate to http://localhost:3000/. You should see the Touch Color App interface, where you can start interacting with the color functionality.

Additional Notes
Build for Production: If you want to create a production-ready build of the app, you can run:

bash
Copy code
npm run build
This command will generate a build folder containing the optimized version of your app, which can be deployed to a web server.

Testing: If you have implemented any tests in the application, you can run them using:

bash
Copy code
npm test
Conclusion
Following these steps, you can easily set up and run the Touch Color App on your local machine. This setup allows you to explore the app's features and contribute to its development. If you encounter any issues, make sure to check the console for error messages and refer to the documentation of any libraries used in the project.


# Screenshots
![Screenshot 2024-11-02 151653](https://github.com/user-attachments/assets/c2dcb25e-9ae7-4a7e-9ae3-2214f43c8045)
This screenshot showcases the home screen of the Touch Color App.

![Screenshot 2024-11-02 151719](https://github.com/user-attachments/assets/6a9413eb-e46d-4fa3-8649-9d4b35fd072c)
This screenshot showcases the Functionalities screen of the Touch Color App, highlighting the vibrant color palette and the main features available to users.

![Screenshot 2024-11-02 151812](https://github.com/user-attachments/assets/3c6f439a-4c2e-4dbb-a16f-1cd07c8ee84c)

This screenshot showcases the screen where users can play with color circles.



# Diagram

                 +-------------------+
                 |    User Device    |
                 +-------------------+
                          |
                          | (User interacts)
                          v
                +--------------------+
                |       App.js       |
                |   (Main Component) |
                +--------------------+
                          |
               +----------+-----------+
               |                      |
         (Intro Page)          (Details Page)
               |                      |
               v                      v
        +--------------------+  +---------------------+
        |     IntroPage      |  |    DetailsPage      |
        |  (React Component) |  |  (Game Functions)   |
        +--------------------+  +---------------------+
               |                      |
               | (onStart)           | (onContinue)
               v                      v
        +---------------------+
        |    Gameplay Area    |
        |  (ColorCircle.js)   |
        +---------------------+
               |
               | (User interaction creates circles)
               v
        +---------------------+
        |   Color Circle      |
        |  (Rendered Circles) |
        +---------------------+


# Work Flow

The Touch-Color-App is an interactive web application that allows users to create colorful circles on the screen through touch or mouse interactions. The workflow consists of three main components:

IntroPage:

The application starts on the IntroPage, where users are greeted with a playful title and a "Start Playing" button. Upon clicking the button, the app transitions to the DetailsPage.
DetailsPage:

The DetailsPage explains the functionalities of the app, detailing how users can create colorful circles by interacting with the screen. The user can then click "Continue" to navigate to the main gameplay area.
Gameplay Area:

In the Gameplay Area, users can click or drag to generate colorful circles at their pointer's location. Each circle is styled to be 25 pixels in diameter and disappears after one second. The app utilizes state management to track the circles' positions, colors, and lifecycle, ensuring a smooth user experience.
The app's structure allows for seamless transitions between different pages and dynamic creation of visual elements, providing an engaging experience focused on creativity and interaction.

# Video

https://github.com/user-attachments/assets/c87ca2f9-a0ec-4ac5-acaf-e4962851a5c9

The first page shows the name of the Web App on clicking on start button it leads to a page explaining about the game functionalities on clicking continue button, you can play with color circles.


# Team Contributions

1. Adith Dileep A D: Idea, Algorithm, Pseudo Code, Coding, Debugging, Documentation.
2. Eesa M A : Debugging, Testing, idea, Documentation.
3. Anushka Anu: Debugging, Testing, idea, Documentation.
