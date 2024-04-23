import { IPageLayoutProps } from "../Utils/interfaces"

export const PageLayout = ({ pageName, children }: IPageLayoutProps) => {
    return (
        <section className="p-10 md:px-32 md:py-20">
            <h1 className="pb-10 text-2xl font-semibold capitalize md:pb-10 font-onest">{pageName}</h1>
            {children}
        </section>
    )
}
