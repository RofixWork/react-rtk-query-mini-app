import React from "react";
import { useGetPostByIdQuery } from "../app/services/posts";
import { Link, useParams } from "react-router";
import Spinner from "../components/Spinner";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostByIdQuery(id);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <div>
        <p>Title: {data?.title}</p>
        <p>Description: {data?.body}</p>
        <p>User ID: {data?.userId}</p>

        <Link to="/" className="btn btn-primary ">
          Back
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
