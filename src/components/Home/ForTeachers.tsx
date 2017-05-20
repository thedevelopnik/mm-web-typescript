import * as React from 'react';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
const IAmTeacher = require('../../assets/img/iamteacher.png');
import { inject, observer } from 'mobx-react';

class ForTeachers extends React.Component<any, {}> {

    openRegister = () => {
        this.props.store.openRegister();
    }

    render() {
        return (
            <div className="flex-item">
                <Card>
                    <CardMedia>
                        <img className="panel-img" src={IAmTeacher} />
                    </CardMedia>
                    <CardText>
                        <p>
                            Teaching is so rewarding. It can also be hard, especially if you’re teaching in a school with a culture, location, or administration that doesn’t work for you. We know that when teachers work in schools in which they thrive, the children flourish.
                        </p>
                        <p>
                            Are you ready to find a position in a school that values your contributions, connects you with inspiring colleagues, and is located in a community that is just right for you?
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

export const $ = inject('store')(observer(ForTeachers));
