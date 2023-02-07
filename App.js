
import './App.css';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import cortanaImage from "./images/cortana.png"
import alexaImage from "./images/alexa.png"
import siriImage from "./images/siri.png"
function App() {
  return (
    <div>
      <section className="hero is-primary" >
      <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

    <div className="container">
  
      <section className="section">
       <div className="columns">
      
        
          <div className="column is-3">
          <ProfileCard 
      title="cortana"
      description="it is used in laptops"
      img={cortanaImage}
      />

          </div>
          <div className="column is-3">
          <ProfileCard
       title="alexa"
       description="it is used for voice interaction "
       img={alexaImage}
      />
            
          </div>
          <div className="column is-3">
          <ProfileCard
       title="siri"
       description="it is used in macbooks"
       img={siriImage}
      />
            
          </div>
</div>
        
     
</section>
     


    </div>
    </div>
    
  );
}

export default App;
