import React from 'react';

const styles = {
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "20px",
    backgroundColor: "#35478C"
  },
  tabsTxt: {
    color: "#ADD5F7"
  }
}

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.tabs} className="nav nav-tabs">
      <li  className="nav-item text-danger">
        <a style={styles.tabsTxt}
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.tabsTxt}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Nav;
