import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.LOGIN!,
  password: process.env.PASSWORD!,
  otpSecret: process.env.OTP_SECRET!,
};