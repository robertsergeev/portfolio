import todoListScreen from "../../public/screenshots/todolist.png";
import cryptoAppScreen from "../../public/screenshots/cryptoapp.png";
import finHelpScreen from "../../public/screenshots/finhelp.png";
import travelPageScreen from "../../public/screenshots/travelpage.png";

export const projects = [
    {
        title: 'Todo List',
        description: 'A full-stack to-do list application. Users can add, edit, complete, and delete tasks. The project is organized into separate client and server directories (preview available for the frontend only).',
        projectLink: 'https://github.com/robertsergeev/todo-list',
        websiteLink: 'https://lambent-kleicha-55f29d.netlify.app/',
        techStack: ['React', 'Typescript', 'Redux Toolkit', 'CSS', 'Express.js', 'MongoDB'],
        image: todoListScreen,
    },
    {
        title: 'Crypto App',
        description: 'A project that uses the Coinlore API to display cryptocurrency data. It shows the top 100 most popular coins in a searchable and sortable list by price. Users can also view detailed information for each coin on a separate page',
        projectLink: 'https://github.com/robertsergeev/crypto-app',
        websiteLink: 'https://celadon-panda-98e6ee.netlify.app',
        techStack: ['React', 'JavaScript', 'CSS', 'axios', 'react-router-dom'],
        image: cryptoAppScreen,
    },
    {
        title: 'Expenses Tracker',
        description: 'A small project made in 2 days for the Raccoons Hackathon 2024. It lets you add notes about your expenses and then graphically visualize them, sorted by categories.',
        projectLink: 'https://github.com/robertsergeev/raccoons-2024',
        websiteLink: 'https://finhelp.netlify.app/',
        techStack: ['React', 'JavaScript', 'Redux Toolkit', 'CSS'],
        image: finHelpScreen,
    },
    {
        title: 'Travel Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut dignissimos fugit, impedit nihil nulla!',
        projectLink: 'https://github.com/robertsergeev/amsterdam',
        websiteLink: 'https://victor-travel.netlify.app',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
        image: travelPageScreen,
    }
]