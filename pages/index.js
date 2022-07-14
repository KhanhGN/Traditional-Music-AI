import { useEffect, useRef, useState } from 'react';
import MusicSheet from '../components/MusicSheet.component';

export default function Home() {
	const [notes, setNotes] = useState(['']);
	const [media, setMedia] = useState('');
	const [selected, setSelected] = useState(0);

	const changeNotesHandler = (e) => {
		const copy = [...notes];
		copy[selected] = e.target.value;
		setNotes(copy);
	};
	const changeMediaHandler = (e) => {
		const media = e.target.value;
		if (!media.match(/\d\/\d/)) console.log('Does not match requirement');
		setMedia(media);
	};

	const selectHandler = (index) => {
		setSelected(index);
	};

	const addTrackHandler = () => {
		setNotes([...notes, '']);
	};

	const removeTrackHandler = (index) => {
		setNotes([...notes].filter((_, i) => i !== index));
	};

	return (
		<div>
			{notes.map((note, index) => (
				<div
					key={index}
					onClick={() => selectHandler(index)}
					style={{ border: '4px solid white', borderColor: selected === index ? 'red' : 'white' }}
				>
					<MusicSheet
						title=''
						length='1'
						media={media}
						key='C trebel'
						notes={note || 'abc'}
					></MusicSheet>
					<button onClick={() => removeTrackHandler(index)}>Remove Track</button>
				</div>
			))}
			<button onClick={addTrackHandler}>Add track</button>
			<div>
				<div>
					<label htmlFor='notes'>Enter Media (a/b)</label>
				</div>
				<input id='notes' value={media} onChange={changeMediaHandler} />
			</div>
			<div>
				<div>
					<label htmlFor='notes'>Enter notes separated by space</label>
				</div>
				<input id='notes' value={notes[selected]} onChange={changeNotesHandler} />
			</div>
		</div>
	);
}
