<<<<<<< HEAD
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="border-t">
			<div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
				<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
					<div className="space-y-2">
						<h3 className="text-xl font-semibold">ЯкуТруд</h3>
						<p className="text-sm text-muted-foreground">
							Соединение талантов с возможностями
						</p>
					</div>
					<div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
						<Link href="/about" className="hover:underline">
							О конпании
						</Link>
						<Link href="/contact" className="hover:underline">
							Контакт
						</Link>
						<Link href="/terms" className="hover:underline">
							Условия сайтов
						</Link>
						<Link href="/privacy" className="hover:underline">
							Защита персональных данных
						</Link>
					</div>
				</div>
				<div className="text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} ЯкуТруд, ООО. Все права
					защищены.
				</div>
			</div>
		</footer>
	);
=======
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">ЯкуТруд</h3>
            <p className="text-sm text-muted-foreground">
              Соединение талантов с возможностями
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              О нас
            </Link>
            <Link href="/contact" className="hover:underline">
              Контакт
            </Link>
            <Link href="/terms" className="hover:underline">
              Условия использования
            </Link>
            <Link href="/privacy" className="hover:underline">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ЯкуТруд, ООО. Все права защищены.
        </div>
      </div>
    </footer>
  );
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
}
