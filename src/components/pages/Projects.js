import React from 'react';

const styles = {
    card: {
        padding: "50px",
        justifyContent: "center",
        display: "inline-flex",
        flexWrap: "wrap",
        backgroundColor: "#ADD5F7"
        
    },
    description: {
        background: '#16193B',
        fontSize: '3rem',
        color: 'white'
    }
}

const projectInfo = [
    {
        name: "In The Loop",
        description: "The third group project I worked on. This is a workbook designed for mobile devices. In the loop help users learn how to use for loops.",
        imgName: "in-the-loop",
        altTxt: "This is a screen shot of the login page.",
        link: "https://intheloop-app.herokuapp.com/"
    },
    {
        name: "Leverage",
        description: "This is the second project I worked on. This is a fitness tracker that helps users keep track of the workouts they have done. ",
        imgName: "leverage",
        altTxt: "this is the overview page that displays the workouts and days of the week.",
        link: "https://leveragewo.herokuapp.com/"
    },
    {
        name: "FanJam",
        description: "This is the first project I worked on. FanJam is an app that lets you search up your favorite artist and see the lyrics to their songs as well as see any upcoming events featuring them!",
        imgName: "fanjam",
        altTxt: "This is a screen shot of the FanJam home page.",
        link: "https://bradmw.github.io/FanJam/"
    },
    {
        name: "PWA Budget Tracker",
        description: "This is one of the homeworks I worked on in my full stack class. This budget tracker has offline functionality so you can keep track of purchases even with no internet.",
        imgName: "pwa-budget",
        altTxt: "This is the landing page for the budget tracker.",
        link: "https://pwa-budget-tracker-bo.herokuapp.com/"
    },
    {
        name: "Team Profile Generator",
        description: "This app allows you to create cards for your employees. When you create a new employee you can choose their role and add their email as well as their GitHub link.",
        imgName: "team-profile",
        altTxt: "This is an overview page displaying what the employee cards will look like together.",
        link: "https://bradmw.github.io/HW-Team-Profile-Gen-BO/"
    },
    {
        name: "ORM E-commerce backend",
        description: "This app uses SQL and allows users to list items as well as delete them off the store page.",
        imgName: "orm-back",
        altTxt: "This is a screenshot of the backend running",
        link: "https://drive.google.com/file/d/1jSH02Vy_bd_ZFho6GUi71A3-0BOQiAsq/view"
    }
]

export default function Projects() {

    
    return (
        <div style={styles.card}>
        {projectInfo.map((project, i) => (
            <div style={{"margin": "1rem", "width": "34rem", "height": "40rem", "boxShadow": "0px 0px 24px 2px #16193B"}} className="card" key={i}>
                <div style={{"height": "30rem"}} className= "imgs" >
               <a href={project.link} target="_blank" rel="noreferrer">
                <img src={require(`../../images/${project.imgName}.png`).default} className="card-img-top" alt={project.altTxt}/>
               </a>
                </div>
                <div style={styles.description} class="card-body">
                    <p class="card-text" style={{"font-size": "20px"}}>{project.description}</p>
                </div>
            </div>
            ))}
        </div>
    )
};