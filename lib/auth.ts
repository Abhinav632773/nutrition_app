import { auth } from '@clerk/nextjs/server';

export async function getCurrentUser() {
  const { userId } = await auth();
  return userId;
}

export async function getCurrentUserOrThrow() {
  const userId = await getCurrentUser();
  if (!userId) {
    throw new Error('Unauthorized');
  }
  return userId;
}
