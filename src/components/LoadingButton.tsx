import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export default function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
<<<<<<< HEAD
    <Button {...props} disabled={props.disabled || loading}>
=======
    <Button
      {...props}
      type="submit"
      disabled={props.disabled || loading}
      className="w-full rounded-md py-2"
    >
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
      <span className="flex items-center justify-center gap-1">
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
}
