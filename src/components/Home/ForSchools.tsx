import * as React from 'react';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
const IRepSchool = require('../../assets/img/irepschool.png');
import { inject, observer } from 'mobx-react';

class ForSchools extends React.Component<any, {}> {

    openRegister = () => {
        this.props.store.openRegister();
    }

    render() {
        return (
            <div className="flex-item">
                <Card>
                    <CardMedia>
                        <img className="panel-img" src={IRepSchool} />
                    </CardMedia>
                    <CardText>
                        <p>
                            Your school is a special place and your community deserves to have the best teachers out there. Teachers that have the skills and characteristics your unique school needs. We know that when teachers work in schools in which they thrive, the children flourish.
                        </p>
                        <p>
                            Are you ready to reduce staff turnover and start recruiting teachers who will build a career in your school and bring the right mix of skills and personality to your community?
                        </p>
                    </CardText>
                    <CardActions>
                        <RaisedButton label="Build Profile" onTouchTap={this.openRegister}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export const $ = inject('store')(observer(ForSchools));
