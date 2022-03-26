import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='container'>
            <h1 className='title-bar'>Question Part</h1>
            <div className='question-part'>
                <h1>1.How react works?</h1>
                <p><strong>Answer:</strong>
                    React is a JavaScript library. React works in declarative code look for tree by tree. We use declarative code to create components, which is how we display information. Component use via props to interact other components to create complex ui. React use for build a single page applications.
                </p>
                <h1>2.Props vs State</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Props are read only.</td>
                            <td>State changes can be asynchronous.</td>
                        </tr>
                        <tr>
                            <td>Props are immutable.</td>
                            <td>State is mutable.</td>
                        </tr>
                        <tr>
                            <td>Props allow you to pass data from one component to other components as an argument.</td>
                            <td>State holds information about the components.</td>
                        </tr>
                        <tr>
                            <td>Props can be accessed by the child component.</td>
                            <td>State cannot be accessed by child components.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Question;