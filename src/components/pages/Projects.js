import React from 'react';

const projectInfo = [
    {
        name: "FanJam",
        description: "This is the first project I worked on. FanJam is an app that lets you search up your favorite artist and see the lyrics to their songs as well as see any upcoming events featuring them!",
        imgName: "fanjam",
        altTxt: "This is a screen shot of the FanJam home page."
    },
    {
        name: "",
        description: "",
        imgName: "",
        altTxt: ""
    },
    {
        name: "",
        description: "",
        imgName: "",
        altTxt: ""
    },
    {
        name: "",
        description: "",
        imgName: "",
        altTxt: ""
    },
    {
        name: "",
        description: "",
        imgName: "",
        altTxt: ""
    },
    {
        name: "",
        description: "",
        imgName: "",
        altTxt: ""
    }
]

export default function Projects() {

    
    return (
        <div>
    {projectInfo.map((project, i) => (
        <div className="card" style={{"width": "18rem;"}} key={i}>
  <img src={require(`../assets/images/${project.imgName}.jpg`).default} className="card-img-top" alt={project.altTxt}/>
  <div class="card-body">
    <p class="card-text">{project.description}</p>
  </div>
</div>

))}
</div>
    )
};