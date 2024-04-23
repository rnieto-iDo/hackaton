import { Header } from "../Components/Header"
interface LayoutProps {
	children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="bg-offwhite relative  ">
			<Header />
			<main className="max-w-screen-xl mx-auto">{children}</main>
		</div>
	)
}
