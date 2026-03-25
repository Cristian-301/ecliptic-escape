// src/lib/api/posts.ts
export async function getPosts() {
  const response = await fetch('https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPostsRS&np=0');
  if (!response.ok) {
    throw new Error('Could not fetch posts');
  }
  return response.json();
}