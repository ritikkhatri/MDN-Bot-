import React ,{Component} from 'react';
import './App.css';
import './normalize.css';
import './style.css';
import MDNBot_hi from './img/MDNBot_hi.svg';
import screenshot from './img/screenshot.png';
import MDNBot_command from './img/MDNBot_command.svg';
import MDNBot_help from './img/MDNBot_help.svg';


class Intro extends Component {
    render(){
        return(<div>
            <Navbar></Navbar>
            <div className="row intro">
			<div className="container">
				<section id="intro" className="grid-half">
					<p>I'm <strong>MDNBot</strong> and my job is to make your life as a developer easier! Need a quick reference on CSS, HTML or JavaScript web standards? MDNbot has you covered.</p>
					<p>Just tell me what you're looking for and I'll search the <a href="https://developer.mozilla.org/en-US/" target="_blank" title="Mozilla Developer Network">Mozilla Developer Network</a> (MDN) for you and find the answer.</p>
					<p>I'm currently available for Slack, you can easily add me to your Slack team by clicking the button below!</p>
					<a href="https://slack.com/oauth/authorize?&client_id=149347005137.156085577376&scope=commands"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
				</section>
				<section id="screenshot"  className="grid-half">
					<img src={screenshot} className="screenshot" alt="MDNBot screenshot" />
				</section>
			</div>
		</div>
            <HowToUse></HowToUse>
            <Footer></Footer>
        </div>
        )
    }
}
export default Intro;

class HowToUse extends Component{
    render(){
        return(
            <div>
                <div className="row instructions">
			<div className="container">
				<h2 className="grid-full section-title">How to use me...</h2>
				<section id="usage" className="grid-half">
					<p>Slash Commands enable you to interact with MDNBot from within Slack. Start your search by typing <code>/mdnbot-search</code> followed by your <strong>searchTerm</strong>.</p>
					<p>Let's say you want information on <strong>reduce</strong>, just type <code>/mdnbot-search reduce</code> This will return a list of (max.) 10 items related to <strong>reduce</strong> which is only visible to you. </p>
					<p>If you want to filter your search results by topic (eg. js, html, css), type the topic as the last term in your command, for example <code>/mdnbot-search reduce js</code> </p>
					<p>If you want to show a search result to another developer, type <code>/mdnbot-show</code> followed by the <strong>searchTerm</strong> (and <em>searchTopic</em> if needed). By default the first result of your search will be displayed. If you want to display a specific result, add the result number to the end of your show command. Example: <code>/mdnbot-show reduce 4 </code></p>
					<p><strong>Happy searching!</strong></p>
				</section> 
				<section id="commands" className="grid-half">
					<div className="bot-image"><img src={MDNBot_command} alt="MDNBot commands" /></div>
					<table>
						<tbody>
							<tr><td><strong>Available commands</strong></td></tr>
							<tr>
								<td className="command"><code className="inverse">/mdnbot</code><span className="description">This command returns a brief description of the app and a basic how-to-use instruction.</span></td>
							</tr>
							<tr>
								<td className="command"><code className="inverse">/mdnbot-search [searchTerm] [searchTopic]*</code><br></br><span className="description">This command performs a private search and returns a maximum of 10 results, which are only visible to you.</span> </td>
							</tr>
							<tr>
								<td className="command"><code className="inverse">/mdnbot-show [searchTerm] [searchTopic] [itemNumber] *</code><br></br><span className="description">This command performs a public search and returns 1 result, which is visible for everyone. If, for example, you want to <strong>show</strong> the 4th item of your search, just add the number 4 to the end of your show command.</span></td>
							</tr>
							<tr>
								<td className="command"><code className="inverse">/mdnbot-random</code><span className="description">This command performs a public search with a random term and returns a single result, which is visible to everyone.</span></td>
							</tr>
							<tr>
								<td className="command"><span className="description"><strong>* searchTopic and itemNumber</strong> are optional parameters.</span></td>
							</tr>
						</tbody>
					</table>
				</section> 
			</div> 
		</div> </div>
            
        )
    }
}

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="row footer">
			<footer id="footer" className="container">
				<section className="grid-half footer-image">
					<a href="../privacy" className="privacy"><i className="fa fa-user-secret" aria-hidden="true"></i>&nbsp;&nbsp;Privacy policy</a>
					<div className="bot-image-footer"><img src={MDNBot_help} alt="MDNBot help" /></div>
				</section> 
				<section className="grid-half contact">
					<h4>Need help or found an issue...
					&nbsp;&nbsp;<a href="https://github.com/VEJATHER/MDNBot/issues" alt="Github issues page" id="github" className="icon-link" target="_blank" title="Visit Github page"><i className="fa fa-github" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;<a href="mailto:vejather@outlook.com?subject=MDNBot Support Request" title="Email directly"><i className="fa fa-envelope" aria-hidden="true"></i></a></h4>
				</section> 
			</footer>
		</div>
            </div>
        )
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
                    <a href="../feedback" className="support"><i className="fa fa-life-ring" aria-hidden="true"></i>&nbsp;&nbsp;Support</a>
                </div></div>	
            </div>
    );
    }
}