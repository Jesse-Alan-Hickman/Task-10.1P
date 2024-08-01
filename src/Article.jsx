import React, { useState } from "react";
import "./index.css"
import starImage from "./images/ratingStar.png";
import universe1 from "./images/universe1.jpg";
import universe2 from "./images/universe2.jpg";
import universe3 from "./images/universe3.jpg";
import universe4 from "./images/universe4.jpg";
import universe5 from "./images/universe5.png";
import universe6 from "./images/universe6.png";

const articles = [
    {
        image: universe1,
        name: 'Universe Article 1',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4',
        author: 'Chris Hadfield'
    },
    {
     image: universe2,
        name: 'Universe Article 2',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.9',
        author: 'Sally Ride'
    },
    {
        image: universe3,
        name: 'Universe Article 3',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '5',
        author: 'John Glenn'
    },
    {
        image: universe4,
        name: 'Universe Article 4',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '4.7',
        author: 'Yuri Gagarin'
    },
    {
        image: universe5,
        name: 'Universe Article 5',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '3.9',
        author: 'Buzz Aldrin'
    },
    {
        image: universe6,
        name: 'Universe Article 6',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dictum lobortis ipsum curabitur dictum mollis etiam ornare aptent semper. Sapien lectus sociosqu; gravida rhoncus suspendisse mus nam. Rhoncus nibh torquent quis nullam habitasse nunc himenaeos enim. Lobortis nulla himenaeos feugiat tempor vestibulum dapibus aptent aliquam. Curabitur consectetur quam eros ultrices viverra euismod. Dolor habitant lacinia convallis sit justo cursus.',
        rating: '5',
        author: 'Neil Armstrong'
    }
];

function Article(){
    const [visibleArticles, setVisibleArticles] = useState(3);

    const handleSeeAll = () => {
        setVisibleArticles(articles.length)
    }

    return(
      <div id="articleSection">
        <div id="articleContainer">
            {articles.slice(0, visibleArticles).map((article, index) => (
                <div className="article" key={index}>
                    <img src={article.image} alt={article.name} className="articleImage"/>
                    <h2>{article.name}</h2>
                    <p className="description">{article.description}</p>
                    <div className="dashedLine"></div>
                    <div className="rating">
                        <img src={starImage} alt="Star:"/>
                        <p>{article.rating}/5 {article.author}</p>
                    </div>
                </div>
            ))}
        </div>
        {visibleArticles < articles.length && (
            <button onClick={handleSeeAll}>See all articles</button>
        )}
      </div>  
    );
}
export default Article