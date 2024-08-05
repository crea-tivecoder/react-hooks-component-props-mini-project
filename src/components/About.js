import React from 'react';

const About =({about, image = "http://via.placeholder.com/215"}) => {
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )

}

export default About;