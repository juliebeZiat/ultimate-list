import './annex.scss';
import LinkedIn from 'src/assets/icons/linkedin.svg';
import Oriane from 'src/assets/team/oriane.jpeg';
import Julie from 'src/assets/team/julie.jpg';

const Team = () => (
  <div className="team">
    <h1>L'équipe Ultimate</h1>
    <div className="team-list">
      <div className="team-member">
        <img className="team-member-photo" src={Oriane} alt="" />
        <h2 className="team-member-name">Louise</h2>
        <p className="team-member-job">Développeuse Front-End</p>
        <p className="team-member-role">Git Master</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Oriane} alt="" />
        <h2 className="team-member-name">Vivien</h2>
        <p className="team-member-job">Développeur Front-End</p>
        <p className="team-member-role">Lead Dev Front</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Julie} alt="" />
        <h2 className="team-member-name">Julie</h2>
        <p className="team-member-job">Développeuse Front-End</p>
        <p className="team-member-role">Product Owner</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julie-beziat/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Oriane} alt="" />
        <h2 className="team-member-name">Oriane</h2>
        <p className="team-member-job">Développeuse Back-End</p>
        <p className="team-member-role">Lead Dev Back</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oriane-berti/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Oriane} alt="" />
        <h2 className="team-member-name">Timothé</h2>
        <p className="team-member-job">Développeur Back-End</p>
        <p className="team-member-role">Scrum Master</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/timothe-perigois/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
    </div>
  </div>
);

export default Team;
