import React ,{Component} from 'react';
import './App.css';
import MDNBot_support from './img/MDNBot_support.svg';
import './normalize.css';
import './style.css';
import MDNBot_hi from './img/MDNBot_hi.svg';
import 'font-awesome/css/font-awesome.min.css';

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state ={
            value :'',
            style :{
                display :'none',
              },
            message :'',
            msg :{
                style :{
                    display :'none',
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange2 =this.handleChange2.bind(this);
    }
    handleChange2(event){
        this.setState({
            message : event.target.value,
        })
    }
    handleChange(event){
        this.setState({
            value : event.target.value,
        })
    };
    handleClick(e){
        e.preventDefault();

        if(this.state.value ===''){
            this.setState({
                style :{
                    display :'block',
                  },
            })
        }
        if(this.state.message ===''){
            this.setState({
                msg:{
                    style :{
                        display :'block',
                      },
                }
               
            })
        }
        else{
           window.open('/thanks',"_self")
        }
    }
	render(){
		return(
        <div>
            <Navbar></Navbar>
			<div className="row support">
            <div className="container grid-full">
                <section id="form" className="grid-full">
                    <div className="bot-image bot-image-support"><img src={MDNBot_support} alt="MDNBot commands" ></img></div>
                    <div className="form">
                        <a href="mailto:vejather@outlook.com?subject=MDNBot Support Request" className="directmail"><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;Email directly</a>
                        <h2>Help / Feedback</h2>
                        <p>
                            Please send us your questions, bug reports, complaints, praise, feature requests - every little bit helps. Let us know what we can do to improve MDNBot.
                        </p>
                        <form > 
                             <input type='text' placeholder='Your Email' id="email" value={this.state.value} onChange={this.handleChange}></input>
                             <p className="error" id="email_error" style={this.state.style} >Email is required</p>
                             <textarea id="message" name="message" value={this.state.message} placeholder="Your message" rows="6" onChange={this.handleChange2}></textarea>
                             <p className="error" id="email_error"  style={this.state.msg.style} >Your message is required</p>
                             <input value="Send" type="submit" id="submit" onClick={this.handleClick}></input>
                        </form>                       
                        
                    </div>
                </section> 
                <section id="usage" className="grid-full container-small">
                    <a href="../" title="MDNBot homepage" className="button"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;MDNBot homepage</a>
                </section> 
            </div> 
        </div>
        </div>
		);
	}
}
export default
    Feedback ;
    
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
