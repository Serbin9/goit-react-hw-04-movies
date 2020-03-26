import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const MoreInfo = ({details, location})=>(
    <div>
        <p>Discription</p>
        <ul>
            <li>
                <Link to={{pathname: `/movies/${details.id}/cast`}}>Cast</Link>
            </li>
            <li>
                <Link to={{pathname: `/movies/${details.id}/reviews`}}>Rewies</Link>
            </li>
        </ul>
    </div>
)
export default MoreInfo
