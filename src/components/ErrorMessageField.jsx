import PropTypes from 'prop-types';

function ErrorMessageField( {message} ) {

    if (!message) return null;

    return (
        <div style={ { color: 'red' } }>
            {message}
        </div>
    )
}

ErrorMessageField.propTypes = {
    message: PropTypes.string,
}

export default ErrorMessageField