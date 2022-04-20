import './annex.scss';
import LinkedIn from 'src/assets/icons/linkedin.svg';
import Oriane from 'src/assets/team/oriane.jpeg';
import Julie from 'src/assets/team/julie.jpg';
import Louise from 'src/assets/team/louise.jpg';
import Timo from 'src/assets/team/timo.png';
import Enzo from 'src/assets/gif/enzo_401.gif';
import Domi from 'src/assets/gif/404_domi.gif';
import Valerie from 'src/assets/gif/valerie_no_items.gif';

const Team = () => (
  <div className="team">
    <h1 className="team-title-main">L'équipe Ultimate</h1>
    <div className="team-list">
      <div className="team-member">
        <img className="team-member-photo" src={Louise} alt="" />
        <h2 className="team-member-name">Louise</h2>
        <p className="team-member-job">Développeuse Front-End</p>
        <p className="team-member-role">Git Master</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/louiselaroche/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
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
        <img className="team-member-photo" src={Timo} alt="" />
        <h2 className="team-member-name">Timothé</h2>
        <p className="team-member-job">Développeur Back-End</p>
        <p className="team-member-role">Scrum Master</p>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/timothe-perigois/"> <img className="team-member-icon" src={LinkedIn} alt="" /></a>
      </div>
    </div>
    <h1 className="team-title-participation">Avec l'aimable participation de...</h1>
    <div className="team-list">
      <div className="team-member">
        <img className="team-member-photo" src={Enzo} alt="" />
        <h2 className="team-member-name">Enzo</h2>
        <p className="team-member-job">401 Master</p>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Domi} alt="" />
        <h2 className="team-member-name">Dominique</h2>
        <p className="team-member-job">404 Master</p>
      </div>
      <div className="team-member">
        <img className="team-member-photo" src={Valerie} alt="" />
        <h2 className="team-member-name">Valérie</h2>
        <p className="team-member-job">Accompagnatrice de création de liste</p>
      </div>
    </div>
  </div>
);

export default Team;
