import Head from "../components/head";

export default function Index() {

    return (


      
    <div>
    <Head></Head>
      <div className="devhub-w-screen devhub-h-screen devhub-flex devhub-items-center devhub-justify-center devhub-bg-black">

        <div className="devhub-text-white devhub-grid-cols-3" >
            <div className="devhub-home-text-center">dev</div>
            
            <button className="devhub-home-button">Coming soon</button>
        </div>

        <div className="devhub-text-white devhub-grid-cols-3">
          <div className="devhub-home-text-center">Org</div>
          <button className="devhub-home-button">Coming soon</button>
        </div>
        <div className="devhub-text-white devhub-grid-cols-3">
            <div className="devhub-home-text-center">Stack</div>
            <button className="devhub-home-button">Coming soon</button>
        </div>
        
      </div>
      
    

      </div>
    );
  }
