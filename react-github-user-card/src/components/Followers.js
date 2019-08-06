import React from 'react';
import { Card, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';


const Followers = (props) => {
    //console.log('props from Followers: ', props.user)
    return (
        <Col sm="4">
            <Card body>
                <CardImg src={props.user.avatar_url} alt="profile photo" className="profile-img"/>
                <CardTitle>{props.user.login}</CardTitle>
                <a href={props.user.html_url}>Go to GitHub page</a>
            </Card>
        </Col>
    )
}

export default Followers;