# Visa Race

Welcome to the Visa Race - a fun project in which participants compete to be the first to receive approval from the consul and receive a VISA!
This project is a simple web application built with HTML, CSS/SCSS, and vanilla JavaScript.

The project was built using object-oriented programming paradigm, 
also my favorite MVC (Model, View, Controller) pattern,
promises,
canvas and request animation frame.

The goal is to simulate a race in which the consulate checks the details of the participants step by step.
Depending on their data, consulate decides whether to issue a visa to the participant or not.

## Features
    
  ### Form Input
    Users can manually enter their details, 
    such as full name, balance, age, documents, and English level,
    or generate random values for these fields.
  
  ### Generate All
    Participants can also be added to the race randomly.

  ### Max Participants Quantity
    5 Participants can participate in competitions on the same time.
  
  ### Init Race
    Initialize the race by displaying circles with participants names using canvas.

  ### Race
    Start the race to simulate the visa application process 
    with animated circles filling up based on different criteria.

  ### Validation
     All data verified by the consul are thoroughly checked 
     (the criteria for successful validation are described below)

  ### Winner Display 
     At the end of the race, the winner's name is displayed.

## Generation Logic and validation

      The logic for generating random data for each participant 
      is based on the chances of generating successful and unsuccessful results 
      to advance to the next stage of the race
  
  ### Full name
    The participant's full name will be randomly generated based on the internal name database.
  
  ### Balance
    Successful balance for passing the visa race of $2000 and above. 
    a successful balance will be generated in 60% of cases.

  ### Age
    Successful age of participant could be from 18 to 60.
    a successful age will be generated in 70% of cases.

  ### Documents
     To successfully obtain a visa, the participant must have all 3 documents. passport, insurance and photo.
     Chance of generating all three documents is 80%

  ### English Level
     Also, to successfully check with the consul you need to have a level of English starting from B1
     Chance of generating successful English Level is 30%

  ## How to Use this App

     Fill or Generate Details:
     Enter participant details manually or use the "Generate" buttons to generate random values.
 
     Add Participants: 
     Click on "Add participant" or use "Generate all" to add participants before starting and initializing the race.
 
     Initiate Race: 
     Click on "Init" to initialize the race and display participant names in circles via canvas graphic.
 
     Start the Race: 
     Click on "Race" to start the race animation and see the progress of each participant. Cheer for the favorite participant!

  ## Project Structure

  ### HTML (index.html) 
     Contains the structure of the web page, including form inputs, buttons and also race display.

  ### JavaScript (main.js)
     Handles user interactions, initializes the race, and controls the overall flow of the application.

  ### CSS (styles.css)
     Provides styling for the web page.

  ### Circle Class (Circle.js)
     Defines the Circle class used for rendering animated circles on the canvas.

  ### Generator Class (Generator.js)
     Generates random values for participant details.

  ### Users Model, View, and Controller (UsersModel.js, UsersView.js, UsersController.js)
     Implement the MVC pattern to manage user data and interactions.

  ### Race Model and View (RaceModel.js, RaceView.js)
     Implement the MVC pattern to manage the race simulation.

  ## Getting Started

  This project is posted on github pages. You can use it directly from there
  or

### Clone the repository

    git clone https://github.com/AntonKotorovych/visa-race-pet.git

Open the index.html file in a web browser.
Interact with the form, add participants, and enjoy the race simulation!

Feel free to explore and modify the code to enhance or customize the project according to your preferences. Happy racing!

