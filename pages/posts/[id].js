import { API } from "aws-amplify";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import "../../configureAmplify";
import React from "react";
import ReactPlayer from "react-player";
import { listPosts, getPost } from "../../graphql/queries";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">
        {post.title}
      </h1>
      <ReactPlayer className="mt-8" url={post.videoUrl} />
      <p className="text-sm font-light my-4">by {post.username}</p>
      <div className="mt-8">
        <ReactMarkdown className="prose" children={post.content} />
      </div>
      <iframe
        className="mt-8"
        width="640px"
        height="500px"
        src={post.formUrl}
      ></iframe>
    </div>
  );
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  });
  const paths = postData.data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await API.graphql({
    query: getPost,
    variables: { id },
  });
  return {
    props: {
      post: postData.data.getPost,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // adds Incremental Static Generation, sets time in seconds
  };
}
