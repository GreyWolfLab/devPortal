import Head from "../components/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Index() {

    return (


      
    <div>
    <Head></Head>
      <h1 className="devhub-text-white devhub-home-title">Dev Hub SA</h1>
      <div className="devhub-w-screen devhub-h-screen devhub-flex devhub-items-center devhub-justify-center devhub-bg-black">
        
        <div className="devhub-text-white devhub-grid-cols-3" >
            <div className="devhub-home-text-center"><FontAwesomeIcon icon={faCode} size="50px"/></div>
            <button className="devhub-home-button">Dev</button>
        </div>

        <div className="devhub-text-white devhub-grid-cols-3">
            <div className="devhub-home-text-center"><FontAwesomeIcon icon={faCoffee} /></div>
            <button className="devhub-home-button">Organization</button>
        </div>
        <div className="devhub-text-white devhub-grid-cols-3">
            <div className="devhub-home-text-center"><FontAwesomeIcon icon={faCode} /></div>
            <button className="devhub-home-button">Stack</button>
        </div>
        
      </div>
      
    

     </div>
    );
  }
