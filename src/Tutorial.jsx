import React, { useState } from "react";
import "./index.css"
import starImage from "./images/ratingStar.png";
import elephant from "./images/elephant.jpg";
import lion from "./images/lion.jpg";
import flamingo from "./images/flamingo.jpg";
import eagle from "./images/eagle.jpg";
import snake from "./images/snake.jpg";
import deer from "./images/deer.jpg";

const tutorials = [
    {
        image: elephant,
        name: 'Caring for an Elephant',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.5',
        author: 'Steve Irwin'
    },
    {
     image: lion,
        name: 'Caring for a Lion',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '3',
        author: 'Jeff Corwin'
    },
    {
        image: flamingo,
        name: 'Caring for a Flamingo',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.9',
        author: 'Jane Goodall'
    },
    {
        image: eagle,
        name: 'Caring for an Eagle',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.3',
        author: 'David Attenborough'
    },
    {
        image: snake,
        name: 'Caring for a Snake',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4',
        author: 'Jack Hanna'
    },
    {
        image: deer,
        name: 'Caring for a Deer',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.2',
        author: 'Dian Fossey'
    }
];

function Tutorial(){
    const [visibleTutorials, setVisibleTutorials] = useState(3);

    const handleSeeAll = () => {
        setVisibleTutorials(tutorials.length)
    }

    return(
      <div id="articleSection">
        <div id="articleContainer">
            {tutorials.slice(0, visibleTutorials).map((tutorial, index) => (
                <div className="article" key={index}>
                    <img src={tutorial.image} alt={tutorial.name} className="articleImage"/>
                    <h2>{tutorial.name}</h2>
                    <p className="description">{tutorial.description}</p>
                    <div className="dashedLine"></div>
                    <div className="rating">
                        <img src={starImage} alt="Star:"/>
                        <p>{tutorial.rating}/5 {tutorial.author}</p>
                    </div>
                </div>
            ))}
        </div>
        {visibleTutorials < tutorials.length && (
            <button onClick={handleSeeAll}>See all tutorials</button>
        )}
      </div>  
    );
}
export default Tutorial