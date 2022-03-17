import { useCurrentUser } from "../hooks/useCurrentUser";
import { Link } from "react-router-dom";

export default function Profile() {
  const { isLoading, isAuthorized, username } = useCurrentUser();

  function sendRequest() {
    fetch("/get-user-info")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  if (isLoading) return null;

  if (!isAuthorized) {
    return (
      <p>
        You must <Link to="/">login</Link> to view this page!
      </p>
    );
  }

  return (
    <div>
      <p>
        You are signed in as <strong>{username}</strong>
      </p>
      <button onClick={sendRequest}>Send Request To Backend</button>
    </div>
  );
}
