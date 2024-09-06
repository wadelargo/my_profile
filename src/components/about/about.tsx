import parse from 'html-react-parser';

// Types
import { IProfile, TProfile } from 'types/common';

// Constants
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from 'constants/common';

// Jsons
import Profiles from 'jsons/profiles.json';

// Assets
import ProfileImg from 'assets/img/person-male.png';

// Styles
import './about.scss';

const About = () => {
  const keysA: any[] = Profiles.data_1.map((obj) => Object.keys(obj)).flat();
  const keysB: any[] = Profiles.data_2.map((obj) => Object.keys(obj)).flat();

  const RenderProfile = (profile: IProfile[], keys: TProfile[]) => {
    return (
      <ul>
        {profile.map((item, index) => {
          const key = keys[index];
          const value = item[key];
          return (
            <li key={index}>
              <i className="bi bi-chevron-right"></i>{' '}
              <strong className="text-capitalize">{key}:</strong>{' '}
              <span>{parse(`${value}`)}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>{ABOUT_TEXT_1}</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={ProfileImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>I am a passionate college student majoring in information technology (IT) with a strong interest in full-stack development, particularly with ReactJS and NodeJS. I am eager to apply my skills in real-world projects and learn from experienced professionals.</h3>
            <p className="fst-italic">{ABOUT_TEXT_2}</p>
            <div className="row">
              <div className="col-lg-6">
                {RenderProfile(Profiles.data_1, keysA)}
              </div>
              <div className="col-lg-6">
                {RenderProfile(Profiles.data_2, keysB)}
              </div>
              <p>{ABOUT_TEXT_3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
