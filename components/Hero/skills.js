import {useState, useEffect} from "react"
import SkillProgress from './skill-progress'

const skill_prog = [
    {
        title: 'Design',
        current: 0,
        progress: 90
    },
    {
        title: 'Programming',
        current: 0,
        progress: 80
    },
    {
        title: 'Branding',
        current: 0,
        progress: 95
    },
    {
        title: 'Marketing',
        current: 0,
        progress: 75
    }
]

const Skills = () => {
    const [skillProg, setSkillProg] = useState(skill_prog)
    
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [])

    const updateProgress = () => {
        let bEnd = true;
        let newProg = [...skillProg]
        newProg.map((skill) => {
            if( skill.current < skill.progress ) {
                skill.current += skill.progress / 30

                if( skill.current > skill.progress )
                    skill.current = skill.progress
                bEnd = false
            }
        })
        setSkillProg(newProg)
        if( !bEnd )        
            setTimeout(updateProgress, 30);
    }

    const scrollHandler = () => {
        let bodyScroll = window.scrollY

        bodyScroll += 80;
        if( document.getElementById("about").offsetTop < bodyScroll ) {
            setTimeout(updateProgress, 200)
            window.removeEventListener('scroll', scrollHandler);
        }
    }

    return (
        <div className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-pencil"></span><br/>
                                <h5 className="tit">Education</h5>
                            </div>

                            <div className="item-info mb-50">
                                <h6>University of Engineering</h6>
                                <p>Bachelor of Science</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>College of Awesomeness</h6>
                                <p>Master of Fine Arts</p>
                            </div>

                            <div className="item-info">
                                <h6>School of Amusement</h6>
                                <p>Bachelor of Fine Arts</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-briefcase"></span><br/>
                                <h5 className="tit">Experience</h5>
                            </div>

                            <div className="item-info mb-50">
                                <h6>Lead Developer</h6>
                                <p>State Art company</p>
                            </div>

                            <div className="item-info mb-50">
                                <h6>UI/UX Developer</h6>
                                <p>Design Corporation</p>
                            </div>

                            <div className="item-info">
                                <h6>Front-End Developer</h6>
                                <p>Creative Design Studio</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-sm-4">
                        <div className="skill-items">
                            <div className="skill-title">
                                <span className="icon-tools"></span><br/>
                                <h5 className="tit">My Skills</h5>
                            </div>
                            {skillProg.map((item, idx) => (
                                <SkillProgress title={item.title} progress={item.current} key={idx}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  };
  
  export default Skills;
  