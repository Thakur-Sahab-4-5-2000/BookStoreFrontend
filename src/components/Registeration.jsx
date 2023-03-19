import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        padding: '32px',
        maxWidth: '400px',
        width: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '16px',
    },
    button: {
        marginTop: '16px',
    },
};

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
    };

    return (
        <div style={styles.root}>
            <Paper style={styles.paper}>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        label="First Name"
                        type="text"
                        required
                        value={firstName}
                        onChange={handleFirstNameChange}
                        style={styles.input}
                    />
                    <TextField
                        label="Last Name"
                        type="text"
                        required
                        value={lastName}
                        onChange={handleLastNameChange}
                        style={styles.input}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        style={styles.input}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        style={styles.input}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={styles.button}
                    >
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default RegistrationPage;
