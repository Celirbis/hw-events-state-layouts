import PropTypes from 'prop-types';

function IconSwitch(props) {

    const { icon } = props;
    const { onSwitch } = props;

    return (
        <span className="material-icons IconSwitch" onClick={onSwitch}>
            {icon}
        </span>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;