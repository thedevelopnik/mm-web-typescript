import * as React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export class HowItWorks extends React.Component<any, {}> {
    render() {
        return (
            <Card className="all-around-margin">
                <CardHeader title="Welcome to Montessori Match!" titleColor="#40abfc"/>
                <CardText>
                    <h2>We help Montessori schools and teachers find each other and make a perfect match.</h2>
                    <p>
                        As a group of former teachers and administrators, we know how much it matters that teachers and schools are a good fit for one another. We know that low teacher turnover and high teacher happiness lead to thriving schools with engaged learners.
                    </p>
                    <p>
                        We want to see every Montessori teacher in a school that feels like “home” and every Montessori school buzzing with collaboration and community. Let us help you find the perfect match!
                    </p>
                    <h1>How It Works</h1>
                    <div className="flex-container-horizontal">
                        <div className="flex-item-horizontal flex-container-vertical">
                            <Card className="flex-item-vertical">
                                <CardHeader title="School Profiles"  titleColor="#40abfc"/>
                                <CardText>
                                    <p>
                                        Schools build a profile for a specific head guide position in your school. For example, you might be looking for a new Primary guide. In that case, build a profile for the ideal individual you want to see in that position.
                                    </p>
                                    <p>
                                        What kind of personality traits and characteristics do you desire? What type of Montessori teacher training do you want them to have? Do you want them to have a college education?
                                    </p>
                                    <p>
                                        Your profile will also include some basic information about your school. We need to know what kind of community your school is in and what your organizational structure is so that we will only match you with teachers who want to work in a school like yours.
                                    </p>
                                    <p>
                                        <em>When you use Montessori Match, you establish an immediate filter for unconscious bias in your first round of hiring. We make the match based solely on credentials and characteristics, and you get the very best candidates filtered to the top for you!</em>
                                    </p>
                                </CardText>
                            </Card>
                            <Card className="flex-item-vertical">
                                <CardText>
                                    <p><em>We discovered that education is not something which the teacher does, but that it is a natural process, which develops spontaenously in the human being.</em></p>
                                    <p>- Maria Montessori</p>
                                </CardText>
                            </Card>
                        </div>
                        <div className="flex-item-horizontal flex-container-vertical">
                            <Card className="flex-item-vertical">
                                <CardHeader title="Teacher Profiles"  titleColor="#40abfc"/>
                                <CardText>
                                    <p>
                                        Teachers, when you build a profile, you are telling us all about YOU! We want to know about your formal education but we also want to know about the individual characteristics that make you an asset in the classroom.
                                    </p>
                                    <p>
                                        We will also ask you about the type of school you want to work in and the type of community you want to live in. That way, we can help you find a school that will be your career “home!”
                                    </p>
                                    <p>
                                        Remember, the more options you choose for location and school structure, the more potential matches we can make for you! 
                                    </p>
                                </CardText>
                            </Card>
                            <Card className="flex-item-vertical">
                                <CardHeader title="Making a Match"  titleColor="#40abfc"/>
                                <CardText>
                                    <p>
                                        After you have built a profile our unique matchmaking algorithm will get to work finding your just-right matches. You will get a notification when a match is made with the chance to learn more. If you are interested in getting in contact, you let us know and we make the introductions!
                                    </p>
                                    <p>
                                        After you are introduced to your matches, the rest of the process is up to you. We make sure you get matches that are at least 75% positive alignment with your profile. From there, you do the interviews and decide if you are truly right for each other.
                                    </p>
                                </CardText>
                            </Card>
                        </div>
                    </div>
                </CardText>
            </Card>
        );
    }
}
