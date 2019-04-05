import React from 'react';
import '../assets/css/app.scss';
import { whatsYourName } from '../helpers'; // Demo helper functions
import ButtonFc from './button_fc'; // Button Functional Component

const App = () => (
    <div className="container">
        <h1 className="center">React Examples</h1>

        <div className="example-container center">
            <h1>Example 1 - Button Functional Component</h1>
            <ButtonFc text="Alert!" click={() => alert('The button was clicked')}/>
            <ButtonFc backgroundColor="red" text="Are You Sure?" click={() => confirm('Are you sure you want to do this?')}/>
            <ButtonFc backgroundColor="yellow" color="black" text="What's Your Name?" click={whatsYourName}/>
        </div>
    </div>
);

export default App;
