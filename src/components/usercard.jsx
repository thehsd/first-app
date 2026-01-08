const UserCard = ({ userData: user }) => {
  console.log("  ~ userData : ", user.name);
  return (
    <div className="border border-gray-200 rounded-md p-3">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
