interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
<<<<<<< HEAD
    <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
=======
    <span className="rounded border bg-muted px-2 py-0.5 font-medium text-muted-foreground">
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
      {children}
    </span>
  );
}
