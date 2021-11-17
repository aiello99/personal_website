import Button from "../components/Button";
import styles from '../styles/about.module.css';

const about = () => {
    return (
    <div className={styles.about}>
        <h1>A Tree Hugging Programmer</h1>
        <p>
        Ever since I was young, I was certain about two things: my passion for
        computers and my love of the outdoors. When presented the opportunity to attend the
        University of Toronto in Missassauga (UTM), it was a no brainer since it was an opportunity
        to study my passion on an environmentally friendly campus surrounded by forest.
        <br/><br/>
        My experiences at UTM helped shape me into who I am today, and provided me with the ability
        to develop, design, and reason about software. It was here that I learned how to efficiently
        implement algorithms and data structures in my projects, but more importantly, it was also 
        where I learned how to properly collaborate on software. Every project that I have collaborated with others on
        served as its own unique learning experience. Not only did I learn different programming languages and technologies,
        but I also learned how to overcome social and technical challenges that were present within each team. It was these
        projects that sparked my ambition to develop software and solve technical problems.
        <br/><br/>
        I one day hope to use my aptitude for programming and computer science to help the environment, and I am currently looking at ways
        to do so.
        <br/><br/>
        The projects below not only show what I have done so far, but also who I am as a software developer.
        Be sure to check back for new projects in the future!
        </p>
        <Button path="projects">Projects</Button>
    </div>

    );
}

export default about;