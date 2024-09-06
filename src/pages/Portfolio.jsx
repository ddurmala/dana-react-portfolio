import PortfolioItem from '../components/PortfolioItem'

// Image Imports
import weatherpng from '../images/weather-app-ss.png'
import statspng from '../images/statsketball-ss.png'
import techtalkpng from '../images/tech-talk-ss.png'
import taskboardpng from '../images/task-board-ss.png'
import socialnetwork from '../images/social-network-backend-ss.png'
import teachersassist from '../images/teachers-assist.png'
import artnook from '../images/artnook-landing.png'

const items = [
    {
        title: 'Art Nook',
        description: 'An interactive MERN Stack application that allows users to view small artists artwork. User can register/login to submit their own artwork that is shared with the entire community',
        technologies: 'MongoDB | Express | React | Node | Bootsrap | Cloudinary',
        githubRepo: 'https://github.com/rosey-flo/Art-Nook',
        website: 'https://art-nook.onrender.com/',
        image: artnook

    },
    {
        title: 'Teachers Assistant',
        description: 'A full-stack application that allows teachers to register as a user, log in and store information about their classroom.  Teachers create, edit and delete students & include information.',
        technologies: 'HTML | CSS | JS | Node.js | RESTful API | Handlebars | PostgreSQL | Sequelize ORM',
        githubRepo: 'https://github.com/ddurmala/teachers_assistant',
        website: 'https://teachers-assistant.onrender.com',
        image: teachersassist
    },
    {
        title: 'Statsketball',
        description: 'An interactive front-end project that allows users to search and receive information about any NBA player past or present.  Statsketball uses API to provide information about players as well as display a current-season stats board.',
        technologies: 'HTML | CSS | JS | Bulma | API | ',
        githubRepo: 'https://github.com/Frxctxl/Statsketball',
        website: 'https://frxctxl.github.io/Statsketball/',
        image: statspng

    },
    {
        title: 'Weather App',
        description: 'A weather application I made that lets you search by city to get local weather. This web application is responsive & uses weather API to grab weather information. Includes search history and both current and 5-day weather forecasts.',
        technologies: 'HTML | CSS | JS | DayJs | API',
        githubRepo: 'https://github.com/ddurmala/weather-app',
        image: weatherpng
    },
    {
        title: 'Tech Talk',
        description: 'a CMS-style blog site where individuals can share thoughts and leave comments.  Users can register and login to create posts and leave comments. ',
        technologies: 'Express | Handlebars | PostgreSQL | Sequelize | MVC',
        githubRepo: 'https://github.com/ddurmala/tech-blog',
        website: 'https://tech-blog-bato.onrender.com/',
        image: techtalkpng
    },
    {
        title: 'Task Board',
        description: 'A simple task board application that allows a team to manage project tasks.  Users can add tasks along with due dates and place tasks in choice of columns - To Do, In Progress, or Done.  Task boxes change color when tasks are nearing due date or past due.',
        technologies: 'HTML | CSS | JS | jQuery | DayJs | Local Storage ',
        githubRepo: 'https://github.com/ddurmala/task-board-app',
        image: taskboardpng
    },
    {
        title: 'Social Networking Back-End',
        description: 'This NoSQL Social Network API uses MongooseDB to allow users to GET, Post, Put and DELETE users, thoughts and reactions.  Users can also get single users and all teir associated thoughts and reactions to those thoughts.  All routes were tested using Insomnia',
        technologies: 'MongooseDB | Express | NodeJS | Insomnia | ',
        githubRepo: 'https://github.com/ddurmala/social_network_api',
        image: socialnetwork
    }

]

function Portfolio() {

    const portfolioItems = items.map((portfolioItemObj, index) => {
        return (
            <article key={index} className="portfolio-item text-center">
                <PortfolioItem data={portfolioItemObj} />
            </article>
        )
    })

    return (
        <>
            <section className="portf-items mx-4">
                {portfolioItems}
            </section>


        </>
    )
}

export default Portfolio