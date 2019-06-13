import React ,{Component} from 'react';
import './App.css';
import MDNBot_support from './img/MDNBot_support.svg';
import './normalize.css';
import MDNBot_hi from './img/MDNBot_hi.svg';
import './style.css';

class Thanks extends Component{
    render(){
        return(
            <div>
               <Navbar></Navbar>
        <div className="row support">
            <div className="container grid-full">
                 <h2 className="grid-full section-title">MDNBot Support</h2> 
                <section id="form" className="grid-full">
                    <div className="bot-image bot-image-support"><img src={MDNBot_support} alt="MDNBot commands" /></div>
                    <div className="form">
                        <h2>Thank you!</h2>
                        <p>
                            Your feedback is very important to us!. Thank you for using MDNbot!
                        </p>
                    </div>
                </section> 
                <section id="usage" className="grid-full container-small">
                    <a href="/" title="MDNBot homepage" className="button"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;MDNBot homepage</a>
                </section> 
            </div> 
        </div> 
        </div>
            
        );

}
}
export default Thanks;

class Navbar extends Component {
    render(){
    return (	
    <div className="row header">
      <div id="header" className="container">
                <div className="grid-half header-image">
                    <img src={MDNBot_hi} className="logo" alt="MDNBot"></img>
                </div> 
                <div className="grid-half title">
                    <h1>MDNBot</h1>
                    <span className="pay-off">A Slack app by <strong>VEJATHER</strong></span>
                    <a href="https://slack.com/oauth/authorize?&client_id=149347005137.156085577376&scope=commands"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
                    {/* <a href="../feedback" className="support"><i className="fa fa-life-ring" aria-hidden="true"></i>&nbsp;&nbsp;Support</a> */}
                </div></div>	
            </div>
    );
    }
}