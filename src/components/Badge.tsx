interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded border bg-muted px-2 py-0.5 font-medium text-muted-foreground">
      {children}
    </span>
  );
}
