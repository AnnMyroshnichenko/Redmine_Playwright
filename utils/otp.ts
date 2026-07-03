import speakeasy from 'speakeasy';
import { env } from '../config/env';

export function generateOTP(): string {
  return speakeasy.totp({
    secret: env.otpSecret,
    encoding: 'base32',
  });
}