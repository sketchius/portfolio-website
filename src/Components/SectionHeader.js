export const SectionHeader = props => {
	return (
		<div className='section-header'>
			<div className='section-header-number-container'>
				<div className='section-header-number'>{props.number}</div>
			</div>
			<div className='section-header-title-container'>
				<h2 className='section-header-title'>{props.title.toUpperCase()}</h2>
			</div>
		</div>
	);
};
