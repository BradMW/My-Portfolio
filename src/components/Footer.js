import React from 'react';

const styles = {
    footer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "10px",
        paddingBottom: "10px",
        background: "#35478C",
        textAlign: "center",
        textDecoration: "none"
    },
    li: {
        padding: "2px",
        display: "inline",
        fontSize: "20px",
    }
}

export default function Footer() {

    return(
        <div>
            <ul style={styles.footer}>
                {/* <li style={styles.li}>555-555-5555</li> */}
                <li style={styles.li}><a href="#">bodell94@yahoo.com</a></li>
                <li style={styles.li}><a href="https://github.com/BradMW" rel="noreferrer">GitHub</a></li>
                <li style={styles.li}><a href="https://www.linkedin.com/in/bradley-o-dell-b3857b96/" rel="noreferrer">Linkdin</a></li>
            </ul>
  </div>
) 
}



