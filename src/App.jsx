import { useState } from "react";
import { Button } from "./components/Button/Buttonn";
import { Input } from "./components/Input/Input";

export const App = () => {
	const [decimal, setDecimal] = useState(0);
	const [binary, setBinary] = useState(0);

	const ChangeSystem = () => {
		setBinary(parseInt(decimal).toString(2));
	};

	return (
		<div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
			<h2 className="text-2xl text-sky-900 font-bold mb-6">
				Переводчик системы счисления
			</h2>

			<form>
				<div className="mb-4">
					<label
						className="block text-sm font-medium text-gray-600"
						for="decimal"
					>
						Десятичная система:
					</label>
					<Input
						className="mt-1 p-2 w-full border rounded-md"
						type="number"
						onChange={e => setDecimal(e.target.value)}
						value={decimal}
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-sm font-medium text-gray-600"
						for="binary"
					>
						Двоичная система:
					</label>
					<Input
						type="number"
						onChange={e => setBinary(e.target.value)}
						value={binary}
					/>
				</div>

				<h3 className="block text-sm font-medium text-gray-600">
					{binary.length == undefined ? 0 : binary.length} - bit
				</h3>

				<div className="flex justify-end">
					<Button onClick={ChangeSystem} text="Change System" type="button" />
				</div>
			</form>
		</div>
	);
};
