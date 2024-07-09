// ScSS Import
import "./HomePage.scss";

// Universal Component Imports
import { UniversalSignIn } from "../../components/UniversalComponents/Signin/uSignIn";

//PAGE SPECIFIC IMPORTS
import UniversalHeader from "../../components/UniversalComponents/Header";
// import { UniversalFooter } from "../../components/UniversalComponents/Footer";
import UniversalSidebar from "../../components/UniversalComponents/Sidebar";
import MobileSidebar from "../../components/UniversalComponents/mobileSidebar";

// Ternary function -  authenticated ? renderApp() : renderLogin();

// https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s 36:28
// <Link to="/AdminPage">admin</Link>
// import { Link } from "react-router-dom";



export const Homepage = () => {
  let isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <>
		<div className="grid-container">
			<div className="headerGrid"><UniversalHeader /></div>
			<div className="mobileSidebar"><MobileSidebar /></div>
			<div className="sidebar"><UniversalSidebar /></div>
			<div className="mainGrid">Main</div>
			<div className="infoPanel">info panel</div>
			<div className="footerGrid">footer</div>
		</div>
      </>
    );
  } else {
    return <UniversalSignIn />;
  }
};

{
  /* <UniversalHeader />
	<main>
		asdasdasdasd
	</main>
<UniversalFooter /> */
}

// button is not in div
