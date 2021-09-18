import MicroFrontEnd from "./../MicroFrontEnd";
import Header from './Header';


const { REACT_APP_CATS_HOST: catsHost } = process.env;

function GreetingCat({ history }) {
    return (
        <div>
            <Header />
            <div className="home">
                <MicroFrontEnd history={history} host={catsHost} name="Cats" />
            </div>
        </div>
    );
}

export default GreetingCat;