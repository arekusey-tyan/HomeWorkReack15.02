import React, {useState} from 'react'
import {Link, Route, Routes, useParams} from 'react-router-dom'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div className={'links text'}>
					<Link className={'cybr-btn'} to={'/about'}>О городе</Link>
					<Link className={'cybr-btn'} to={'/attractions'}>Достопримечателности</Link>
					<Link className={'cybr-btn'} to={'/attractions2'}>Другие достопримечательности</Link>
					<Link className={'cybr-btn'} to={'/images'}>Фотографии</Link>
					<Link className={'cybr-btn'} to={'/'}>Главная</Link>
				</div>
				<Routes>
					<Route path={'/:page'} element={<Page />} />
					<Route path={'/wiki/:page'} element={<WikiPage />} />
					<Route path={'/'} element={<Page />} />
				</Routes>
			</>
		)
	}
}

function Page(props) {
	let {page} = useParams();

	if (page == 'images')
		return <Images />
	if (page == 'about')
		return <About />
	if (page == 'attractions')
		return <Attractions />
	if (page == 'attractions2')
		return <Attractions2 />
	return <FormImage />
}

function Images() {
	return (
		<>
			<img className={'img'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB.JPG/1280px-%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB.JPG'} alt={''} />
			<img className={'img'} src={'https://upload.wikimedia.org/wikipedia/commons/1/1f/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%D0%B8%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB.jpg'} alt={''} />
			<img className={'img'} src={'https://upload.wikimedia.org/wikipedia/commons/a/ad/Lgtu_center_corpus_foto.jpg'} alt={''} />
		</>
	)
}

function About() {
	return (
		<div className={'text'}>
			<h2>Липецк</h2>
			<p><b>Ли́пецк</b>&nbsp;— город (с <Link to={'/wiki/1779_год'} title={'1779 год'}>1779 года</Link>) в <Link to={'/wiki/Россия'} title={'Россия'}>России</Link>, административный центр <Link to={'/wiki/Липецкая область'} title={'Липецкая область'}>Липецкой области</Link>. Является ядром <Link to={'/wiki/Липецкая агломерация'} title={'Липецкая агломерация'}>крупнейшей российской агломерации</Link> со специализацией в сфере чёрной металлургии полного цикла, промышленный, агротехнологический и авиационный центр.</p>
			<p><Link to={'/wiki/Город областного значения'} title={'Город областного значения'}>Город областного значения</Link>, образует <Link to={'/wiki/Городской округ (Россия)'} title={'Городской округ (Россия)'}>городской округ</Link>.</p>
			<p>Липецк&nbsp;— второй по численности населения (496&nbsp;403) город в <Link to={'/wiki/Центрально-Чернозёмный экономический район'} title={'Центрально-Чернозёмный экономический район'}>Черноземье</Link>, пятый в <Link to={'/wiki/Центральный федеральный округ'} title="Центральный федеральный округ">Центральном федеральном округе</Link> и тридцать шестой в России. Важный автотранспортный узел агломерационного и регионального значения, расположенный между федеральными трассами «<a href={'/wiki/Дон (автодорога)'} title={'Дон (автодорога)'}>Дон</a>» и «<a href={'/wiki/Каспий (автодорога)'} title={'Каспий (автодорога)'}>Каспий</a>», обладает развитой сетью индустриальных железных дорог, крупнейший перегрузочный тупик. <Link to={'/wiki/Липецк (особая экономическая зона)'} title={'Липецк (особая экономическая зона)'}>Центр</Link> <Link to={'/wiki/Особая экономическая зона'} title={'Особая экономическая зона'}>особой экономической зоны</Link> промышленно-производственного типа. Один из самых молодых <Link to={'/wiki/Административные центры субъектов Российской Федерации'} title={'Административные центры субъектов Российской Федерации'}>региональных центров</Link> России.</p>
			<Link to={'/wiki/Липецк'} title={'Липецк'}> Подробнее</Link>
		</div>
	)
}

function WikiPage() {
	let {page} = useParams();

	return (
		<div className={'wikiPage'}><iframe className={''} src={`https://ru.wikipedia.org/wiki/${page}`} width={1870} height={880} /></div>
	)
}

function Attractions() {
	return (
		<div className={'text'}>
			<h2>Липецкий Успенский монастырь</h2>
			<img src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e7/de/6a/caption.jpg?w=500&h=-1&s=1'} className={'img'} />
			<p><b>Успе́нский Ли́пецкий монасты́рь</b>&nbsp;— мужской <Link to={'/wiki/Монастырь'} title={'Монастырь'}>монастырь</Link> <Link to={'/wiki/Липецкая епархия'} title={'Липецкая епархия'}>Липецкой епархии</Link> <Link to={'/wiki/Русская православная церковь'} title={'Русская православная церковь'}>Русской православной церкви</Link>, расположен в историческом центре <Link to={'/wiki/Липецк'} title={'Липецк'}>Липецка</Link> и относится к архитектурным памятникам города.</p>
			<Link to={'/wiki/Липецкий Успенский монастырь'} title={'Липецкий Успенский монастырь'}> Подробнее</Link>
		</div>
	)
}

function Attractions2() {
	return <>
		<div className={'text'}>
			<div className={'text'} style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
				<div className={'el'}>
					<p>Часовня Первоверховных Апостолов Петра и Павла</p>
					<img className={'img'} src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6d/ee/59/caption.jpg?w=500&h=400&s=1'} alt={''} />
				</div>
				<div className={'el'}>
					<p>Памятник Петру I</p>
					<img className={'img'} src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fc/30/fe/caption.jpg?w=500&h=-1&s=1'} alt={''} />
				</div>
				<div className={'el'}>
					<p>Христо-Рождественский кафедральный собор</p>
					<img className={'img'} src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ad/52/74/christ-cathedral-christmas.jpg?w=500&h=-1&s=1'} alt={''} />
				</div>
				<div className={'el'}>
					<p>Памятник в честь 300-летия Липецка</p>
					<img className={'img'} src={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/8b/62/2f/image-0-02-05-2a78265873e37e6b.jpg?w=500&h=-1&s=1'} alt={''} />
				</div>
			</div>
			<Link to={'/wiki/Липецкий Успенский монастырь'} title={'Липецкий Успенский монастырь'}> Подробнее</Link>
		</div>
	</>
}

function FormImage() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
		console.log(URL.createObjectURL(e.target.files[0]))
	}

	function submit(e) {
		e.preventDefault()
		alert('Выше изодбражение загружено')
	}

	return (
		<div className={'text'}>
			<form method={'get'} onSubmit={submit}>
				<input name="imgname" type="text" className="item_name" placeholder="Название" />
				<input name="tag" type="text" className="tag" placeholder="Тэги" />
				<textarea className="desc" name="desc" placeholder="Описание" />
				<input type={'file'} name={'myImage'} onChange={handleChange} className={'im'} />
				<img src={file} />
				<button type="submit" className="cybr-btn"><span /><span /><span /><span />Занесение в БД</button>
			</form>
		</div>
	)
}

export default App;
