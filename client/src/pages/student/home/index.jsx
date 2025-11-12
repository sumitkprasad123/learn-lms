import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import { useContext } from "react";

function StudentHomePage() {
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    sessionStorage.clear();
    resetCredentials();
  }

  return (
    <div>
      <p>Home Page</p>
      <br />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default StudentHomePage;
