import './style.css';

// COMPONENTS
import Player from '../Player';

//IMAGES
import caracter from '../../images/m1.png';

function App() {
	return (
		<div className='zone-container'>
			<Player caracter={caracter} />
		</div>
	);
}

export default App;
