```javascript
// app/page.js
import { notFound } from 'next/navigation';

export default async function Page({params}) {
  // Fetch data for the dynamic route segment
  const res = await fetch(`https://api.example.com/posts/${params.postId}`);

  if (!res.ok) {
    notFound(); // Use notFound for 404 scenarios
  }

  const post = await res.json();
  
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  );
}
```