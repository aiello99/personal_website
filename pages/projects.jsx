import Card from '../components/Card';
import styles from '../styles/projects.module.css';
import connect4 from "../public/connect4.png";
import coursecrunch from "../public/coursecrunch.png";
import typthon from "../public/typthon.png";
import urlshortener from "../public/urlshortener.png";

const Projects = () => {
  const projects = [
    {
      title: 'Course Crunch',
      imgSrc: coursecrunch,
      content:
        'An all in one web tool to help students at UTM find information on courses, professors, and timetables.',
      link: "https://github.com/CourseCrunch/CourseCrunch"
    },
    {
      title: 'Typthon Compiler',
      imgSrc: typthon,
      content:
        'Inspired by Typescript, Typthon is a statically typed version of Python made in PLY, complete with its own robust typechecker.',
      link: "https://github.com/aiello99/Typthon"
    },
    {
      title: 'Distributed URL-Shortener',
      imgSrc: urlshortener,
      content:
        'A scalable and distributed URL shortener similar to bit.ly. Made with Docker, Redis, and Cassandra.',
      link: "https://github.com/aiello99/URLShortener"
    },
    {
      title: 'Connect 4',
      imgSrc: connect4,
      content:
        'A version of Connect 4 made in Python using Pygame. I helped design and implement the underlying MVC architecture.',
      link: 'https://github.com/osamaramihafez/c4',
    },
  ];

  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <Card key={index} title={project.title} imgSrc={project.imgSrc} content={project.content} link={project.link}/>
      ))}
    </div>
  );
};

export default Projects;