// Skills Icons
import React from 'react'

import htmlIcon from "./icons/html.svg"
import cssIcon from "./icons/css.svg"
import jsIcon from "./icons/javascript.svg"

// Social Icon
 import githubIcon from "./icons/github.svg"


export default {
  
  //   Header Details 
  name: "Brooke Maneotis",
  headerTagline: [
    //Line 1 For Header
    "Full Stack",
    //Line 2 For Header
    "Student"
    
  ],
  //   Header Paragraph
  headerParagraph:
    "Aspiring web developer currently enrolled in University of Utah's full stack bootcamp.",

  //Contact Email
  // contactEmail: "@yahoo.com",

  // End Header Details 

  // Work Section 
  projects: [
    {
      id: 1, 
      title: "Petcetera", //Project Title
      para:
        "Pet database to track info and health markers. Owners are able to create a profile for each pet and save detailed information about them.",
      //Project Image 
      imageSrc:"/images/petcetera.jpg",
      //Project URL  
      url: "https://github.com/brookeotis1/Petcetera",
    },
    {
      id: 2, 
      title: "Valence", //Project Title 
      para:
        "A resource to find new music, artists, and albums to match your current mood.", 
      //Project Image 
      imageSrc:"/images/musicbymood.jpg",        
      //Project URL  
      url: "https://github.com/brookeotis1/Music-by-Theme--group",
    },
    {
      id: 3, 
      title: "Budget App", 
      para:
        "The user will be able to add expenses and deposits to their budget with or without a connection.",
      //Project Image 
      imageSrc:
        "/images/budgetPreview.jpg",
      //Project URL 
      url: "https://github.com/brookeotis1/adultingBudget",
    },
    {
      id: 4, 
      title: "Workout App", //Project Title 
      para:
        "A workout tracker with a Mongo database with a Mongoose schema and handle routes with Express.",
      //Project Image 
      imageSrc:
        "/images/workinoutpreview.jpg",
      //Project URL 
      url: "https://github.com/brookeotis1/hardlyWorkinOut",
    },
    {
      id: 5, 
      title: "Employee Database", //Project Title
      para:
        "Manage a company's employees using node, inquirer, and MySQL. Command-line application that at a minimum allows the user to add, view departments and employees.", 
      //Project Image 
      imageSrc:
        "/images/employeedb.jpg",
      //Project URL 
      url: "https://github.com/brookeotis1/trackerKeepTracking#description",
    },
    {
      id: 6,
      title: "Password Generator", //Project Title 
      para:
        "Application that generates a random password based on user-selected criteria.", 
      //Project Image 
      imageSrc:
        "/images/passwordgen.jpg",
      //Project URL 
      url: "https://github.com/brookeotis1/YouShallNotPass",
    },

  ],


  // About Secton 
  aboutParaOne:
    "I'm new to web development and enjoying the challenge of learning new skills. I am a problem solver at heart with a lot of ideas I'm excited to bring to life.",
  aboutParaTwo:
    "Outside of working in healthcare and school I enjoy camping, baking, and crafting. Flaming Gorge, Utah and Hawaii are my favorite places to visit",
  
  aboutImage:"/porttwo/images/brookepic.jpg",
    //  <img src={brookepic} alt="woman" />,


  // Skills Section 

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "",
    },
    
    
  ],


  //   Promotion Section 

  promotionHeading: "",
  promotionPara:
    "Git, HTML, CSS, Bootstrap, JavaScript, API's, Node, Express, MySQL, MVC, Mongo, React",
  

  //   Contact Section --------------

  contactSubHeading: "brookeotis@gmail.com",
  social: [
    
     { img: githubIcon, url: "https://github.com/brookeotis1" },
    
  ],

}


