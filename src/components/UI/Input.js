import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
    // <input {...props.input} />
};

export default Input;