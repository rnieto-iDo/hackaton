import { useState, useEffect } from 'react';
import { IMasonryLayoutProps } from '../Utils/interfaces';

const MasonryLayout: React.FC<IMasonryLayoutProps> = ({ images, columnsConfig }) => {
    const [columns, setColumns] = useState<string[][]>([]);
    const STORAGE_URL = import.meta.env.VITE_API_STORAGE_URL as string;

    useEffect(() => {
        const calculateColumnsCount = (): number => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) return columnsConfig.xs || 1;
            if (screenWidth < 768) return columnsConfig.sm || columnsConfig.xs || 2;
            if (screenWidth < 1024) return columnsConfig.md || columnsConfig.sm || 3;
            return columnsConfig.lg || columnsConfig.md || 3;
        };

        const createColumns = () => {
            const columnsCount = calculateColumnsCount();
            const newColumns: string[][] = Array.from({ length: columnsCount }, () => []);
            images.forEach((image, index) => {
                newColumns[index % columnsCount].push(image);
            });
            setColumns(newColumns);
        };

        createColumns();
        const handleResize = () => createColumns();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images, columnsConfig]);

    return (
        <div className="flex flex-wrap gap-3 h-[30%]">
            {columns.map((col, index) => (
                <div key={index} className="flex-1">
                    {col.map((image, idx) => (
                        <img key={idx} src={`${STORAGE_URL}/${image}`} alt={image || `Image ${idx}`} className="object-contain w-full mb-5 rounded-md" />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MasonryLayout;
