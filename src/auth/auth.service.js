import jwt from 'jsonwebtoken';
import { AuthModel } from '../models';
import { ErrorsUtil, CryptoUtil } from '../utils';

import config from '../config/variables.config';

const { AUTH } = config;

const {
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET
} = AUTH;

const { InputValidationError, UnauthorizedError } = ErrorsUtil;

export default class AuthService {
    static generateTokens(payload) {
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET);
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET);

        return { accessToken, refreshToken };
    }

    static validateAccessToken(accessToken) {
        try {
            return jwt.verify(accessToken, JWT_ACCESS_SECRET);
        } catch (error) {
            throw new UnauthorizedError(222);
        }
    }

    static validateRefreshToken(refreshToken) {
        try {
            return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
        } catch (error) {
            throw new UnauthorizedError();
        }
    }

    static async refresh(token) {
        const user = AuthService.validateRefreshToken(token);

        const { accessToken, refreshToken } = AuthService.generateTokens(user);

        const payload = {
            accessToken,
            refreshToken,
            ...user
        };
        return payload;
    }

    static async login(username, password) {
        const user = await AuthModel.findByUsername(username);

        if (!user) throw new InputValidationError('Invalid username or password');
        if (!CryptoUtil.isValidPassword(password, user.password)) {
            throw new InputValidationError('Invalid username or password');
        }

        delete user.password;
        const { accessToken, refreshToken } = AuthService.generateTokens({ ...user });

        const payload = {
            id: user.id,
            fullname: user.fullname,
            position: user.position,
            role: user.role,
            picture: user.picture,
            status: user.status,
            accessToken,
            refreshToken

        };
        return payload;
    }
}
