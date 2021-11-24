import React from 'react';

const styles = {
    card: {
        padding: "50px",
        border: "40 solid black",
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
        name: "Project 3",
        description: "This is the Mern project",
        imgName: "fanjam",
        altTxt: "pic of website"
    },
    {
        name: "Leverage",
        description: "This is the second project I worked on. This is a fitness tracker that helps users keep track of the workouts they have done. ",
        imgName: "leverage",
        altTxt: "this is the overview page that displays the workouts and days of the week."
    },
    {
        name: "FanJam",
        description: "This is the first project I worked on. FanJam is an app that lets you search up your favorite artist and see the lyrics to their songs as well as see any upcoming events featuring them!",
        imgName: "fanjam",
        altTxt: "This is a screen shot of the FanJam home page."
    },
    {
        name: "PWA Budget Tracker",
        description: "This is one of the homeworks I worked on in my full stack class. This budget tracker has offline functionality so you can keep track of purchases even with no internet.",
        imgName: "pwa-budget",
        altTxt: "This is the landing page for the budget tracker."
    },
    {
        name: "Team Profile Generator",
        description: "This app allows you to create cards for your employees. When you create a new employee you can choose their role and add their email as well as their GitHub link.",
        imgName: "team-profile",
        altTxt: "This is an overview page displaying what the employee cards will look like together."
    },
    {
        name: "placeholder",
        description: "placeholder",
        imgName: "fanjam",
        altTxt: "placeholder"
    }
]

export default function Projects() {

    
    return (
        <div style={styles.card}>
        {projectInfo.map((project, i) => (
            <div style={{"margin": "1rem", "width": "34rem", "height": "40rem"}} className="card" key={i}>
                <div style={{"height": "30rem"}} className= "imgs" >
                <img src={require(`../../../assets/images/${project.imgName}.png`).default} className="card-img-top" alt={project.altTxt}/>
                </div>
                <div style={styles.description} class="card-body">
                    <p class="card-text" style={{"font-size": "20px"}}>{project.description}</p>
                </div>
            </div>
            ))}
        </div>
    )
};