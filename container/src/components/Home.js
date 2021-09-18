
import { useState } from 'react';
import Header from './Header';
import './../styles/Home.css';


function Home({ history }) {
    const [input, setInput] = useState("");

    const handleOnClick = () => {
        history.push(`/cat/${input}`);
    };

    return (
        <div>
            <Header />
            <div className="home">
                <input
                    placeholder="Insert a greeting"
                    value={input}
                    onBlur={(e) => setInput(e.target.value)}
                />
                <button onClick={handleOnClick}>Greet Me</button>
            </div>

            <div className="home">
                <div className="content">
                    <div className="cat">
                        <img alt="cat_image" width="400px" src="https://cataas.com/cat/says/hello" />
                    </div>
                    <div className="dog">
                        <img
                            alt="dog_image"
                            width="400px"
                            src="https://random.dog/91474781-c254-4397-b658-d19b7f0a4f5b.jpeg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;