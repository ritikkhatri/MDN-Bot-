import React ,{Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import MDNBot_help from './img/MDNBot_help.svg';
import MDNBot_privacy from './img/MDNBot_privacy.svg';
import './normalize.css';
import './style.css';
import MDNBot_hi from './img/MDNBot_hi.svg';


class Privacy extends Component{
    render (){
        return(
            <div>
                <Navbar></Navbar>
            <div className="row instructions">
            <div className="container">
				<h2 className="grid-full section-title">Privacy policy</h2>
				<section id="usage" className="grid-half">
					<p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.</p>
					<p>Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
					</p>
					<a href="/" title="MDNBot homepage" className="button"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;MDNBot homepage</a>
				</section> 
				<section id="commands" className="grid-half">
					<div className="bot-image"><img src={MDNBot_privacy} alt="MDNBot commands" /></div>
					<table>
						<tbody>
							<tr><td><strong>1. Collection of Information</strong></td></tr>
							<tr>
								<td>We do not collect any information you pass to the MDNBot slack commands, nor any slack messages in your slack channels. We do not use cookies or any other technologies to track users in any way. The only information we require access to is your slack username and your slack team name. Use of the MDNBot is completely free of charge and no emails are sent from the bot.</td>
							</tr>
							<tr><td><strong>2. Links to Other Web Sites</strong></td></tr>
                            <tr>
								<td>Our app and website may include links to other web pages whose privacy practices may differ from ours. If you submit personal information to any of those sites, your information is governed by their privacy policies. We encourage you to carefully read the privacy policy of any website you visit.</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div></div> <Footer></Footer></div>
        
        );
    
    }
}
export default Privacy;

class Footer extends Component {
    render(){
        return(
            <div className="row footer">
			    <footer id="footer" className="container">
				    <section className="grid-half footer-image">
					<div className="bot-image-footer"><img src={MDNBot_help} alt="MDNBot help" /></div>
				</section> 
				<section className="grid-half contact">
					<h4><a href="https://github.com/VEJATHER/belugas-bot" alt="Github page" id="github" className="icon-link" target="_blank">Need help or found an issue...
					&nbsp;<i className="fa fa-github" aria-hidden="true"></i></a></h4>
				</section> 
			</footer>
		</div>
        
        );
    }
}
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