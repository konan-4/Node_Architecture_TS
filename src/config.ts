// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db = {
	name: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PWD,
};

export const corsUrl = process.env.CORS_URL;

export const tokenInfo = {
	accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_DAYS),
	refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_DAYS),
	issuer: process.env.TOKEN_ISSUER,
	audience: process.env.TOKEN_AUDIENCE,
};

export const logDirectory = process.env.LOG_DIR;