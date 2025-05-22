import React, { memo } from "react";

interface ProfileProps {
  firstname: string;
  lastname: string;
}

const Profile = memo(({ firstname, lastname }: ProfileProps) => {
  console.log("Rendered Profile Component");

  return <div>{firstname + " " + lastname}</div>;
});

export default Profile;
