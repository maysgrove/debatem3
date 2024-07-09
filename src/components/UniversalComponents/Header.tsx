import "./Header.scss";
import { Component } from "react";


class UniversalHeader extends Component{
 
	state={clicked: true};
	handleClick = () => {
		this.setState({clicked: !this.state.clicked})
	}

  render() {
  return (
    <>
	<header>
		{/* HEADER */}
		<div id="headerBarsLogoInput">
			<div id="iconLogoContainer">
				<img style={{borderRadius: 200}} width={70} height={70} src="/src/-=-=RESOURCES=-=-/DEBATEMELOGO.svg"></img>
				<h2 id="logoTxt">Debate.me</h2>
			</div>
			<input placeholder="Search"></input>
		</div>
		{/* HEADER LINK CONTAINER */}
		<div id="headerLinkContainer">
		
		</div>
		{/* DROPDOWN TOGGLE */}
		<ul id="navbar" className={this.state.clicked ? "#navbar"
			: "#navbar active"}
			>
			<div id="sidebarContainer">
				popup
			</div>
		</ul>
	</header>
    </>
  );
};
}
export default UniversalHeader;

{/* 
<div id="dropdownToggle" onClick={this.handleClick}>
	<i className={this.state.clicked ? 'fas fa-bars' : 'fa-solid fa-circle-xmark'}></i>
</div> 
*/}