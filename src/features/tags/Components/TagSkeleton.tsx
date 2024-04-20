export default function TagSkeleton() {
	const tagWidths = [
		24, 32, 28, 36, 30, 22, 34, 26, 38, 20, 32, 28, 24, 30, 26, 36, 22, 34, 28,
		32, 24, 32, 28, 36, 30, 22, 34,
	]

	return (
		<div className="flex flex-wrap gap-2">
			{tagWidths.map((width, index) => (
				<div
					key={index}
					className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-transparent bg-gray-200 border border-offwhite animate-pulse"
				>
					<span
						className={`h-4 bg-gray-300 rounded-full w-${width} mr-2`}
					></span>
					<span className="h-4 bg-gray-300 rounded-full w-4"></span>
				</div>
			))}
		</div>
	)
}
