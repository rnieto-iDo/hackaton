export default function TagSkeleton() {
	const widths = [
		40, 67, 30, 32, 56, 40, 34, 48, 52, 56, 56, 40, 34, 48, 52, 56, 67, 30, 32,
		56, 40, 34, 48, 52, 82, 92, 56, 40, 34, 48, 52, 56, 67, 30, 32, 56, 40, 34,
		48, 52, 56, 40, 34, 48, 52, 56, 67, 30, 32, 56, 40, 34, 48, 52, 56, 40, 34,
		48, 52, 56, 67, 30, 32, 56, 40, 34, 48, 52, 56, 40, 34, 48,
	]

	return (
		<div className="flex flex-wrap gap-2">
			{widths.map((width, index) => (
				<div
					key={index}
					className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-transparent bg-gray-100 border border-gray-300 animate-pulse"
					style={{ width: `${width}px` }}
				>
					<span className="h-4 bg-gray-200 rounded-full mr-2"></span>
				</div>
			))}
		</div>
	)
}
