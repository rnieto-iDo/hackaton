import { ISectionLayoutProps } from "../Utils/interfaces"

export const SectionLayout = ({ children, containerClassName, titleClassName, title }: ISectionLayoutProps) => {
    return (
        <div className={containerClassName}>
            {title && <h1 className={titleClassName}>{title}</h1>}
            {children}
        </div>
    )
}