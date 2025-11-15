export default async function useBlogs() {
  try {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();

    if (!response.ok) {
      throw Error(response.status);
    }

    return data;
  } catch (err) {
    console.error(err);
  }
}
