import './NavBar.css';

const NavBar = ({ tab, setTab }) => {
	const items = [
		'Caesa Cipher',
		'Vigenere Cipher',
		'Playfair Cipher',
	]
	return (
		<nav className='nab_bar'>
			<ul className='nav_ul'>
				{items.map((item, index) => (
					<li key={index} className={`nav_item_li ${tab === index && 'nav_selected_item'}`} onClick={() => setTab(index)}>{item}</li>
				))}
			</ul>
		</nav>
	)
};

export default NavBar;
