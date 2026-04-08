import { ERROR_CODES } from './error-codes';

export const errorMessages: Record<string, string> = {
  // Generic
  [ERROR_CODES.generic.INTERNAL_SERVER_ERROR]: 'Something went wrong. Please try again.',
  [ERROR_CODES.generic.VALIDATION_ERROR]: 'Invalid data. Please check your input.',
  [ERROR_CODES.generic.TOO_MANY_REQUESTS]: 'Too many attempts. Please try again later.',

  // Auth
  [ERROR_CODES.auth.INVALID_CREDENTIALS]: 'Incorrect email or password.',
  [ERROR_CODES.auth.ACCOUNT_LOCKED]: 'Account is temporarily locked. Try again later.',
  [ERROR_CODES.auth.ACCOUNT_SUSPENDED]: 'This account has been suspended.',
  [ERROR_CODES.auth.EMAIL_NOT_VERIFIED]: 'Please verify your email before signing in.',
  [ERROR_CODES.auth.PASSWORD_RESET_REQUIRED]: 'You must reset your password to continue.',
  [ERROR_CODES.auth.WEAK_PASSWORD]: 'Password is too weak.',
  [ERROR_CODES.auth.UNAUTHORIZED]: 'You are not authorized to perform this action.',

  // User
  [ERROR_CODES.user.USER_NOT_FOUND]: 'User not found.',
  [ERROR_CODES.user.EMAIL_ALREADY_EXISTS]: 'An account with this email already exists.',

  // Token
  [ERROR_CODES.token.TOKEN_EXPIRED]: 'This link has expired.',
  [ERROR_CODES.token.TOKEN_ALREADY_USED]: 'This link has already been used.',
  [ERROR_CODES.token.TOKEN_NOT_FOUND]: 'Invalid link.',

  // Session
  [ERROR_CODES.session.SESSION_EXPIRED]: 'Your session has expired. Please sign in again.',
  [ERROR_CODES.session.SESSION_INVALID]: 'Invalid session. Please sign in again.',
  [ERROR_CODES.session.SESSION_NOT_FOUND]: 'Session not found. Please sign in again.',

  // Workspace
  [ERROR_CODES.workspace.WORKSPACE_NOT_FOUND]: 'Workspace not found.',
  [ERROR_CODES.workspace.NOT_WORKSPACE_MEMBER]: 'You are not a member of this workspace.',
  [ERROR_CODES.workspace.INSUFFICIENT_PERMISSIONS]: 'You do not have permission to do this.',
  [ERROR_CODES.workspace.SOLE_OWNER]: 'You are the only owner of this workspace.',
  [ERROR_CODES.workspace.WORKSPACE_MEMBER_ALREADY_EXISTS]: 'This user is already a member.',
  [ERROR_CODES.workspace.SOLE_OWNER_BLOCKS_DELETION]: 'Transfer ownership before deleting.',

  // Invite
  [ERROR_CODES.invite.INVITE_NOT_FOUND]: 'Invite not found.',
  [ERROR_CODES.invite.INVITE_ALREADY_EXISTS]: 'An invite for this user already exists.',
  [ERROR_CODES.invite.INVITE_EXPIRED]: 'This invite has expired.',

  // Vehicle
  [ERROR_CODES.vehicle.VEHICLE_NOT_FOUND]: 'Vehicle not found.',

  // Media
  [ERROR_CODES.media.INVALID_FILE_TYPE]: 'Invalid file type.',
  [ERROR_CODES.media.FILE_TOO_LARGE]: 'File is too large.',
  [ERROR_CODES.media.MEDIA_NOT_FOUND]: 'File not found.',
  [ERROR_CODES.media.MEDIA_OWNERSHIP]: 'You do not have access to this file.',

  // Timeline
  [ERROR_CODES.timeline.TIMELINE_EVENT_NOT_FOUND]: 'Event not found.',

  // Tire
  [ERROR_CODES.tire.TIRE_NOT_FOUND]: 'Tire not found.',
  [ERROR_CODES.tire.TIRE_CHANGE_NOT_FOUND]: 'Tire change record not found.',
};

export const FALLBACK_MESSAGE = 'An unexpected error occurred. Please try again.';
