import express from 'express';

import auth from './auth.api';
import users from './users.api';

const app = express();

// API
app.use('/auth', auth);
app.use('/users', users);

export default app;
