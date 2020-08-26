import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <h1>User Page</h1>
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </div>
  );
};

export default Users;
