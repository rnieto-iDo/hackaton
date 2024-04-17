const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
            display: "block",
            height: 12,
            width: 12,
            fill: "currentcolor",
        }}
        viewBox="0 0 32 32"
    >
        <path
            fillRule="evenodd"
            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
        />
    </svg>
)

export interface IFavoriteIconProps {
    isFavorite: boolean
}

const FavoriteIcon = (
    { isFavorite = false }: IFavoriteIconProps
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
            display: "block",
            fill: `${isFavorite ? "#FF385C" : "#6A6A6A"}`,
            height: 24,
            width: 24,
            stroke: "#FFF",
            strokeWidth: 2,
            overflow: "visible",
        }}
        viewBox="0 0 32 32"
    >
        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
    </svg>
)

export { StarIcon, FavoriteIcon }