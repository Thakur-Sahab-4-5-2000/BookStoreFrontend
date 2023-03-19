import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
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

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div style={styles.root}>
            <Paper style={styles.paper}>
                <form style={styles.form} onSubmit={handleSubmit}>
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
                        Sign In
                    </Button>
                </form>
            </Paper>
        </div>
    );
};

export default LoginPage;
