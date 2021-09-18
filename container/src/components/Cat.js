import MicroFrontEnd from "./../MicroFrontEnd";


const { REACT_APP_CATS_HOST: catsHost } = process.env;

function Cats({ history }) {
    return <MicroFrontEnd history={history} host={catsHost} name="Cats" />;
}

export default Cats;