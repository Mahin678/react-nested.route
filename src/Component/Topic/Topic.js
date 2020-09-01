import React from 'react';
import { useParams } from 'react-router-dom';

const Topic = () => {
    let { topicId } = useParams();
    return (
        <div>
            <p>{topicId} I just love you</p>
        </div>
    );
};

export default Topic;