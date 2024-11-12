import { signIn } from "../../../auth";

export default function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
