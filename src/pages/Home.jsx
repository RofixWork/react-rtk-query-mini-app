import React from "react";
import { useGetAllPostsQuery } from "../app/services/posts";
import { FaRegEye } from "react-icons/fa";
import Spinner from "../components/Spinner";
import { Link } from "react-router";

const Home = () => {
  const { data, isLoading, isError, refetch } = useGetAllPostsQuery();
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      <h2>All Posts ({data?.length})</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            data?.map((post) => {
              return (
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td className="d-flex align-items-center gap-1">
                    <Link
                      to={`/post/${post?.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      <FaRegEye />
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No posts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
