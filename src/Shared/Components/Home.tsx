import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

type Tag = {
	id: number
	name: string
}

export default function Home() {
	const [tags, setTags] = useState<Array<Tag>>([])

	useEffect(() => {
		const url = import.meta.env.VITE_API_BASE_URL
		axios
			.get(`${url}/tags`)
			.then((response) => {
				setTags(response.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<div>
			home
			<Link to="/login">Login</Link>
			<p>displaying tags from BE</p>
			<ul>
				{tags.map((tag, index) => (
					<li key={index}>{tag.name}</li>
				))}
			</ul>
		</div>
	)
}
