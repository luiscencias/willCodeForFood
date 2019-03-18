import React, {useRef} from 'react';
import './shop.css';
import GallerySection from './GallerySection';
import Section from './Section';


import {useScrollToTopOnMount} from "../../helpers";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            subject: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div className="Shop">
                <p>PBE Official Store</p>
                <div>
                    <form action="#">
                        <label>First Name</label>
                        <input type="text" id="fname" name="fname" placeholder="Your name.." required={true}
                                value = {this.state.fname}
                                onChange={e => this.setState({fname: e.target.value})}

                        />


                        <label>Last Name</label>
                        <input type="text" id="lname" name="lname" placeholder="Your last name.." required={true}
                               value = {this.state.lname}
                               onChange={e => this.setState({lname: e.target.value})}
                        />


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required={true}
                               value = {this.state.email}
                               onChange={e => this.setState({email: e.target.value})}
                        />


                        <label>Clothing Order</label>
                        <textarea id="subject" name="subject" placeholder="Item No.: Size: Qty:" required={true}
                                  value = {this.state.subject}
                                  onChange={e => this.setState({subject: e.target.value})}
                        ></textarea>

                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

                    </form>
                </div>
            </div>
        );
    }
};

export default () => {
    useScrollToTopOnMount();

    return <Shop />;
};