import { useRef, useEffect } from 'react';

const MusicSheet = ({ title, media, length, key, notes }) => {
	const ref = useRef();
	const sheet = typeof window !== undefined ? require('abcjs') : null;

	useEffect(() => {
		sheet.renderAbc(ref.current, `X:1/4\nT:${title}\nM:${media}\n:L:${length}\nK:${key}\n${notes}`);
	}, [sheet, key, title, length, notes, media]);

	return <div ref={ref}></div>;
};

export default MusicSheet;
