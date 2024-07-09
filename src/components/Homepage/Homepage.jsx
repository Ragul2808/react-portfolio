import "./Homepage.css"
import githubIcon from "../../images/githubIcon.png"
import linkedinIcon from "../../images/linkedinIcon.png"

export default function Homepage(){
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Ragul Perinbarajan</p>
                <p className="homepage_left_h3"> Front-end Developer at <span className="red_color">Appstract-Apps</span></p>
                <p className="homepage_left_description">Passionate front-end developer with a strong foundation in JavaScript, React.js, HTML, and CSS. I have a keen interest in building responsive and user-friendly web applications. I completed several projects, including a real-time chat application and a personal portfolio fling website—seeking opportunities to leverage my skills and grow in a dynamic team environment. Open to collaborations and eager to connect with like-minded professionals.</p>
                <div>
                  <a href="https://github.com/Ragul2808" target="_blank">
                    <img src={githubIcon} alt="github" className="homepage_left_icon"/>
                  </a>
                  <a href="https://www.linkedin.com/in/ragul-p-s2816/" target="_blank">
                    <img src={linkedinIcon} alt="linkedin" className="homepage_left_icon"/>
                  </a>

                     
                </div>
                <a href="mailto:ragulraja2808@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>

                </a>

            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>

        </div>
    );
}