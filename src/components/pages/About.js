import React from "react";

const styles = {
    img: {
        padding: "50px",
        justifyContent: "center",
        backgroundColor: "#ADD5F7",
        display: "grid",
        gridRow: "2/3",
        gridColumn: "2/3"
       
    },
    description: {
        background: '#16193B',
        fontSize: '1rem',
        color: 'white',
        padding: '5px'
    }
}

export default function About() {

    return(
        <div style={styles.img}>
            <div className="card" style={{"width": "40rem", "boxShadow": "0px 0px 24px 3px #FFFFFF"}}>
  {/* <img src="../../../me.jpg" className="card-img-top" alt=""/> */}
  <img src={require(`../../images/me.jpg`).default}/>
  <div className="card-body">
    <p className="card-text">My name is Bradley and I am a junior web developer. I have wanted to learn how to code for a while now and thanks to life opening up for me I was able to take a coding bootcamp and finally do something I love. I worked business sales for a long while and I came to love technology through that. I have also worked with UAT teams to make sure that new website features and options were feature ready for users to enjoy. This pandemic has been very tough but it has showed me what is important and it has helped to follow my dream. I spend my free time drawing or flying my drone and editing videos, and now that I have learned to code, I can turn my ideas into reality and showcase my skills. I am planning on learning C# to create a vr experience as I am a vr enthusiest. I want to thank you for checking out my portfolio and I am happy to connect if you have any questions!</p>
  </div>
            </div>
        </div>    
) 
};
