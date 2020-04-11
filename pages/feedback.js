import Head from "../components/head";

export default function Index() {

    return (


      
    <div>
    <Head></Head>
      <div className="devhub-w-screen devhub-h-screen devhub-flex devhub-items-center devhub-justify-center devhub-bg-black">


      <form action="https://send.pageclip.co/8AXh6Nbwo8e9i76WcoOPGH6yFOcHwvZj/studentMeetupFeedback" className="pageclip-form devhub-flex-wrap devhub-max-w-lg " method="post">
                <div className="devhub-p-4 devhub-text-white devhub-border-b devhub-m-2 devhub-uppercase">
                    <p>Student Meetup Feedback</p>
                </div>
                
                
                <input type="text" name="name" placeholder="name" className="devhub-border devhub-p-2 devhub-m-2 devhub-w-full" />

                <input type="email" name="email" placeholder="email" className="devhub-border devhub-p-2 devhub-m-2 devhub-w-full" />

                <textarea name="bad" className="devhub-border devhub-p-2 devhub-m-2 devhub-w-full" placeholder="What would you like us to change ?"></textarea>
                <textarea name="same" className="devhub-border devhub-p-2 devhub-m-2 devhub-w-full" placeholder="How was your first exprience with us  ?"></textarea>
                <textarea name="good" className="devhub-border devhub-p-2 devhub-m-2 devhub-w-full" placeholder="what was the best thing of the meetup ?"></textarea>

                <button type="submit" className="pageclip-form__submit  devhub-border devhub-p-2 devhub-m-2 devhub-w-full devhub-text-white ">
                    <span>Send</span>
                </button>

        </form>

      </div>
      
    
      <script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
      </div>
    );
  }
  
