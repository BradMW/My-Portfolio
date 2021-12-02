import React from "react";

const styles = {
    lang: {
        padding: "5px",
        fontSize: "20px",
        
    },
    header: {
        color: "white",
        fontSize: "30px",
        // textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        backgroundColor: "#ADD5F7",
        
    }
}

export default function Resume() {

    return(
        <div style={{"position": "relative", "paddingBottom": "50px", "paddingTop": "100px"}}>
  <div class="card" style={{"width": "18rem;"}}>
  <div class="card-header" style={styles.header}>
    Languages I know
  </div>
  <ul class="list-group list-group-flush" style={styles.lang}>
    <li  class="list-group-item">HTML</li>
    <li class="list-group-item">CSS</li>
    <li class="list-group-item">JavaScript</li>
    <li class="list-group-item">SQL</li>
    <li class="list-group-item">MongoDB</li>
    <li class="list-group-item">NodeJS</li>
    <li class="list-group-item">React</li>
  </ul>
</div>
  </div>
) 
}
