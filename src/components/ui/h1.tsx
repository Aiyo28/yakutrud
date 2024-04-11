<<<<<<< HEAD
import { cn } from '@/src/lib/utils';

export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
	return (
		<h1
			{...props}
			className={cn(
				'text-4xl font-extrabold tracking-tight lg:text-5xl',
				props.className
			)}
		/>
	);
=======
import React from "react";
import { cn } from "@/src/lib/utils";

export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className,
      )}
    />
  );
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
