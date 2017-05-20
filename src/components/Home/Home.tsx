import * as React from 'react';
const Logo = require('../../assets/img/mm.png');
import { HowItWorks } from './HowItWorks';
import { $ as ForTeachers } from './ForTeachers';
import { $ as ForSchools } from './ForSchools';
import RaisedButton from 'material-ui/RaisedButton';
import './Home.css';


export class Home extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <img className="hero" src={Logo} alt="Montessori Match Logo" />
                <h1>Where schools and teachers connect</h1>
                <HowItWorks />
                <div className="flex-container-horizontal">
                    <ForTeachers />
                    <ForSchools />
                </div>
                <div className="flex-container-horizontal">
                <a
                    href="http://montessorimatch.us14.list-manage.com/subscribe?u=9be45c7772ad2a078cc4b091d&amp;id=91ce5d5d68"
                    target="_blank"
                    className="flex-item-horizontal"
                >
                    <RaisedButton
                        label="Sign up for our mailing list to get updates!"
                        secondary={true}
                        className="mailing-list"
                    />
                </a>
                </div>
            </div>
        );
    }
}
