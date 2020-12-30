import React from 'react';

export default function characterItem({ character: { name, eye_color, hair_color, skin_color, birth_yaer } 
}) {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Name: { name }</h4>
                </div>
                <div className="col-md-3">
                    <button className>Chatacter details</button>
                </div>
            </div>
        </div>
    ); 
}