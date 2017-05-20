import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { inject, observer } from 'mobx-react';

class FAQ extends React.Component<any, {}> {
    
    handleClose = () => {
        this.props.store.closeFaq();
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Close"
                    primary={true}
                    onTouchTap={this.handleClose}
                />
            )
        ];

        return (
            <Dialog
                title="FAQ"
                open={this.props.store.faqIsOpen}
                modal={true}
                autoScrollBodyContent={true}
                actions={actions}
            >
                <br />
                <h3>Who is Montessori Match for?</h3>
                <p>
                    Montessori Match is for anyone who is involved in hiring lead teachers at a Montessori school and wants a teacher who is a perfect fit. This app is also great for trained Montessori teachers ready to find the perfect school they can call “home” and make all their own.
                </p>
                <h3>Can I use the app if I am outside of the US?</h3>
                <p>
                    Right now the Montessori Match app is exclusively for the United States. However, as we develop the app and work out the kinks we will expand the app for increased global access. If you live outside the US and would like to use Montessori Match, please CONTACT US to let us know!
                </p>
                <h3>Can I hire assistant teachers or administrators on the app?</h3>
                <p>
                    Currently, Montessori Match only functions for the hiring of certified lead teachers. As we develop the app we will slowly expand to offer profile opportunities for other key school employees. CLICK HERE to sign up for our newsletter and get updates on new features!
                </p>
                <h3>I have an idea for how to make this app better. How do I give feedback?</h3>
                <p>
                    Please send us an email and let us know what you think! We want this app to be as useful as possible to as many people as possible. We appreciate when our customers reach out to tell us how we can be better. Hello@MontessoriMatch.com
                </p>
                <h3>Why is Montessori Match free? What’s the catch?</h3>
                <p>
                    There’s no catch, we promise! Right now we are just so grateful that people are building profiles and helping us learn how to create the best hiring service possible. At some point, we will begin charging for matches. For right now, we just want to serve the community and learn as much as we can!
                </p>
                <h3>Who is behind Montessori Match?</h3>
                <p>
                    You can learn more about the Montessori Match team, values, and philosophy by visiting our “About” page: www.MontessoriMatch.com/about
                </p>
            </Dialog>
        );
    }
}

export const $ = inject('store')(observer(FAQ));
