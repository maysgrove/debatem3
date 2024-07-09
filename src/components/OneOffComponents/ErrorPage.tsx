import './ErrorPage.scss'
import { FaRegFaceDizzy } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return(
		<>
		<div id="ErrorPageContainer">
			<FaRegFaceDizzy size={200} />
			<h2>ERROR</h2>
			<h1 id="major">UH OH... This page <span>CANNOT</span> be loaded</h1>
			<button><Link to="/">Go To Homepage</Link></button>
		</div>
		</>
	)
}
