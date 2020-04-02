import Head from "../components/head";

export default function Index() {
  const logoIcon = {
    fontSize: '6em'
  };

    return (


      
    <div>
    <Head></Head>
      <div className="devhub-w-screen devhub-h-screen devhub-flex devhub-items-end  devhub-bg-black">
        
        
        <div className="devhub-flex-wrap">
          <div className="devhub-flex devhub-h-64 "></div>
        
        <div className="devhub-flex devhub-h-64 devhub-items-start devhub-justify-center">
        <a href="https://github.com/login/oauth/authorize?client_id=bf37cd3a98ec77d66a8d"> 
        <i className="fa fa-github devhub-text-white " style={logoIcon}></i>
        </a>

       
        </div>
      

        <div className="devhub-flex devhub-w-screen devhub-justify-left  w-screen devhub-items-end devhub-h-64">
            <img className="devhub-w-16 devhub-p-2 " src="/images/devHub01.png" />
        </div>

        </div>
  

      </div>
      
    

      </div>
    );
  }
  
