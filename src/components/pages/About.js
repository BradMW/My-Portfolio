import React from "react";

const styles = {
    img: {
        padding: "50px",
        justifyContent: "center",
        backgroundColor: "#ADD5F7",
        display: "grid",
        gridRow: "2/3",
        gridColumn: "2/3",
       
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
    <p className="card-text">My name is Bradley and I am a junior web developer. A few months ago I started my journey into the coding field and have learned so much. I now understand whats behind the screen and how it works. I met a lot of friends and am very excited to see what the future holds!</p>
  </div>
            </div>
        </div>    
) 
};
