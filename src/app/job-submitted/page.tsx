import H1 from '@/src/components/ui/h1';

export default function Page() {
	return (
		<main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
			<H1>Вакансия отправлена</H1>
			<p>
				Ваше объявление о вакансии отправлено и ожидает одобрения в
				панели администратора.
			</p>
		</main>
	);
}
