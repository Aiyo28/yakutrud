import citiesList from '@/src/lib/cities-list';
import { forwardRef, useMemo, useState } from 'react';
import { Input } from './ui/input';

interface LocationInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	onLocationSelected: (location: string) => void;
}

export default forwardRef<HTMLInputElement, LocationInputProps>(
	function LocationInput({ onLocationSelected, ...props }, ref) {
		const [locationSearchInput, setLocationSearchInput] = useState('');
		const [hasFocus, setHasFocus] = useState(false);

		const cities = useMemo(() => {
			if (!locationSearchInput.trim()) return [];

			const searchWords = locationSearchInput.split(' ');

			return citiesList
				.map((city: any) => `${city.name}, ${city.subject}`)
				.filter(
					(city: any) =>
						city
							.toLowerCase()
							.startsWith(searchWords[0].toLowerCase()) &&
						searchWords.every((word) =>
							city.toLowerCase().includes(word.toLowerCase())
						)
				)
				.slice(0, 5);
		}, [locationSearchInput]);

		return (
			<div className="relative">
				<Input
					placeholder="Поиск города..."
					type="search"
					value={locationSearchInput}
					onChange={(e) => setLocationSearchInput(e.target.value)}
					onFocus={() => setHasFocus(true)}
					onBlur={() => setHasFocus(false)}
					{...props}
					ref={ref}
				/>
				{locationSearchInput.trim() && hasFocus && (
					<div className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
						{!cities.length && (
							<p className="p-3">Результатов не найдено.</p>
						)}
						{cities.map((city: any) => (
							<button
								key={city}
								className="block w-full p-2 text-start"
								onMouseDown={(e) => {
									e.preventDefault();
									onLocationSelected(city);
									setLocationSearchInput('');
								}}
							>
								{city}
							</button>
						))}
					</div>
				)}
			</div>
		);
	}
);
