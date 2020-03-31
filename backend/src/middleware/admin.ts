import { Context, Next } from 'koa';
import { UserStatus } from '../model/user-status.model';

export async function admin(ctx: Context, next: Next): Promise<void> {

  if (!(ctx.request.body.status === UserStatus.ADMIN)) {
    ctx.status = 403;
    ctx.body = 'Access forbidden.';
  }
}
