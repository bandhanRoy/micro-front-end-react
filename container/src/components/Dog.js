import MicroFrontEnd from "./../MicroFrontEnd";

const { REACT_APP_DOGS_HOST: dogsHost } = process.env;

function Dogs({ history }) {
    return <MicroFrontEnd history={history} host={dogsHost} name="Dogs" />;
}

export default Dogs;