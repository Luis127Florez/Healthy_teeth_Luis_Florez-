import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">HOLAAAAA JAJAJ </div>
                        <div className="card-body">ME SALIO JAJAJAJA!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('adsi')) {
    ReactDOM.render(<Example />, document.getElementById('adsi'));
}
