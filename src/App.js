import React from 'react'
import {Link, Route, Routes, useParams} from 'react-router-dom'
import './App.css'
import ReactDOM from 'react-dom/client'

function App() {
	return (
		<>
			<div className={'links text'}>
				<Link className={'cybr-btn'} to={'/'}>Главная</Link>
				<Link className={'cybr-btn'} to={'/lovefilm'}>Любимый фильм</Link>
				<Link className={'cybr-btn'} to={'/personal'}>Персональная страница</Link>
				<Link className={'cybr-btn'} to={'/nowtime'}>Текущее время</Link>
				<Link className={'cybr-btn'} to={'/homepet'}>Домашний любимец</Link>
			</div>
			<Routes>
				<Route path={'/'} element={<Default />} />
				<Route path={'/:page'} element={<Page />} />
			</Routes>
		</>
	)
}

function Default() {
	return (
		<></>
	)
}

function Page() {
	let {page} = useParams();
	console.log(page)
	if (page === 'lovefilm') return <LoveFilm
		name={'Титаник'}
		author={{f: 'Кэмерон', io: 'Дже́ймс Фрэ́нсис'}}
		poster={'https://upload.wikimedia.org/wikipedia/ru/1/19/Titanic_%28Official_Film_Poster%29.png'}
		year={'1997'}
		studio={''}
		scenarist={{f: 'Кэмерон', io: 'Дже́ймс Фрэ́нсис'}}
		produce={[
			{f: 'Кэмерон', io: 'Дже́ймс Фрэ́нсис'},
			{f: 'Ландау', io: 'Джон'}
		]}
		inGlRole={[
			{f: 'Ди Ка́прио', io: 'Леона́рдо Вильге́льм'},
			{f: 'Уи́нслет', io: 'Кейт Эли́забет'},
			{f: 'Зейн-младший', io: 'Уи́льям Джордж (Би́лли)'},
			{f: 'Бейтс', io: 'Кэти (Кэ́тлин) Дойл'},
			{f: 'Фи́шер', io: 'Фрэ́нсис Лу́из'},
			{f: 'Хилл', io: 'Бернард'},
			{f: 'Хайд', io: 'Джо́натан'},
			{f: 'Нуччи', io: 'Дэнни'},
			{f: 'Уорнер', io: 'Дэвид Хэттерсли'},
			{f: 'Пэ́кстон', io: 'Билл (Уи́льям)'}
		]}
		lang={'английский'}
		land={'США'}
		teatrV={'195 мин'}
		allV={'220 мин'}
		compositor={{f: 'Хорнер', io: 'Джеймс Рой'}}
		operator={{f: 'Карпентер', io: 'Расселл Пол'}}
	/>
	else if (page === 'personal') return <Personal
		phone={'+7 (919) 257-53-66'}
		land={'г. Липецк, Липецкая обл., Россия'}
	/>
	else if (page === 'nowtime') return <NowTime />
	else if (page === 'homepet') return <HomePet
		name={'Пушок'}
	/>
	return <Default />
}

function LoveFilm(props) {
	let name = props.name,
		author = props.author,
		img = props.poster,
		year = props.year,
		scenarist = props.scenarist,
		producer = props.produce,
		inGlRole = props.inGlRole,
		lang = props.lang,
		land = props.land,
		teatrV = props.teatrV,
		allV = props.allV,
		compositor = props.compositor,
		operator = props.operator
	return (
		<div className={'page-content'}>
			<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'} style={{width: '400px'}}>
				<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>{name}</h2>
				<figure className={'pi-item pi-image'} data-source={'img'}>
					<a href={img} className={'image image-thumbnail'}>
						<img src={img} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} data-image-key={name} data-image-name={name} />
					</a>
				</figure>
				<section className={'pi-item pi-group pi-border-color'}>
					<h2>Описание</h2>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>ФИО автора</h3>
						<div className={'pi-data-value pi-font'}>
							<i>{author.f}</i>, {author.io}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Жанр</h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={'https://ru.wikipedia.ru/wiki/Эпический_фильм'} title={'Эпический_фильм'}>эпический</Link>&nbsp;<Link to={'https://ru.wikipedia.ru/wiki/Романтический_фильм#Романтическая_драма'} title={'Романтический_фильм'}>романтический драматический</Link>&nbsp;<Link to={'https://ru.wikipedia.ru/wiki/Фильм-катастрофа'} title={'Фильм-катастрофа'}>фильм-катастрофа</Link>
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Автор сценария</h3>
						<div className={'pi-data-value pi-font'}>
							<i>{scenarist.f}</i>, {scenarist.io}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Продюсер</h3>
						<div className={'pi-data-value pi-font'}>
							{
								producer.map(el => {
									return <React.Fragment><i>{el.f}</i>, {el.io}<br /></React.Fragment>
								})
							}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>В главных ролях</h3>
						<div className={'pi-data-value pi-font'}>
							{inGlRole.map(el => {
								return <React.Fragment><i>{el.f}</i>, {el.io}<br /></React.Fragment>
							})}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Оператор</h3>
						<div className={'pi-data-value pi-font'}>
							<i>{operator.f}</i>, {operator.io}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Композитор</h3>
						<div className={'pi-data-value pi-font'}>
							<i>{compositor.f}</i>, {compositor.io}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Художник-постановщик</h3>
						<div className={'pi-data-value pi-font'}>Питер Ламонт</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Длительность</h3>
						<div className={'pi-data-value pi-font'}>
							<b>Театральная версия:</b> {teatrV}
							<br />
							<b>Расширенная версия:</b> {allV}
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Страна</h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={'https://ru.wikipedia.ru/wiki/' + land}>{land}</Link>
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Язык</h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={'https://ru.wikipedia.ru/wiki/' + lang}>{lang}</Link>
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Год</h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={year + "_год"} title={year + " год"}>{year}</Link>
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}><Link to={'https://ru.wikipedia.org/wiki/Internet_Movie_Database'} title={'Internet Movie Database'}>IMDb</Link></h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={'https://www.imdb.com/title/tt0120338/'} title={'ID 0120338'}>ID 0120338</Link>
						</div>
					</div>
				</section>
			</aside>
		</div>
	)
}

function Personal(props) {
	return (
		<div className={'page-content'}>
			<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'} style={{width: '400px'}}>
				<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>Черников Алексей</h2>
				<figure className={'pi-item pi-image'} data-source={'img'}>
					<a href={'https://sun1-57.userapi.com/impg/tARBliaUwEDkp8i-8_LYAk9Wkr0erqzIKFOA5Q/NM9Yad44wT0.jpg?size=827x1599&quality=96&sign=052b08cfa5b07831af1af63c62dd5b2c&type=album'} className={'image image-thumbnail'}>
						<img src={'https://sun1-57.userapi.com/impg/tARBliaUwEDkp8i-8_LYAk9Wkr0erqzIKFOA5Q/NM9Yad44wT0.jpg?size=827x1599&quality=96&sign=052b08cfa5b07831af1af63c62dd5b2c&type=album'} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} data-image-key={'Черников Алексей'} data-image-name={'Черников Алексей'} />
					</a>
				</figure>
				<section className={'pi-item pi-group pi-border-color'}>
					<h2>Описание</h2>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>ФИО</h3>
						<div className={'pi-data-value pi-font'}>
							<i>Черников</i>, Алексей Михайлович
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Дата рождения</h3>
						<div className={'pi-data-value pi-font'}>
							<Link to={'https://ru.wikipedia.ru/wiki/01_июня'} title={'1 Июня'}>1 июня</Link>&nbsp;<Link to={'https://ru.wikipedia.org/wiki/2001_год'}>2001 г.</Link> (21 год)
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Место рождения</h3>
						<div className={'pi-data-value pi-font'}>{props.land}</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Гражданство</h3>
						<div className={'pi-data-value pi-font'}>Россия</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Телефон</h3>
						<div className={'pi-data-value pi-font'}>{props.phone}</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Эл. почта</h3>
						<div className={'pi-data-value pi-font'}>a.cher.ai19@gmail.com<br />a.cher.19ai@gmail.com<br />alenyov@bk.ru</div>
					</div>
				</section>
			</aside>
		</div>
	)
}

function NowTime() {
	function tick() {
		let root = document.querySelector('#time')
		let el = <div>
			<div className={'text'}>Сегоднящнее число: </div>
			<div className={'text'}>{(new Date()).toLocaleDateString('ru-RU', {day: '2-digit', month: 'long', year: 'numeric'})}</div>
			<div className={'text'}>
				<div className={'now'}>Текущее время: </div>
				<div className={'date'} style={{display: 'flex'}}>
					<div className={'h'}>{(new Date()).getHours()} ч.&nbsp;</div>
					<div className={'h'}>{(new Date()).getMinutes()} м.&nbsp;</div>
					<div className={'h'}>{(new Date()).getSeconds()} с.&nbsp;</div>
					<div className={'ms'}>{(new Date()).getMilliseconds()} ms.</div>
				</div>
			</div>
		</div>
		ReactDOM.createRoot(root).render(el);
		setInterval(tick, 1)
	}
	setTimeout(tick, 1000)
	return <div id={'time'} />
}

function HomePet(props) {
	return (
		<div className={'page-content'}>
			<aside role={'region'} className={'portable-infobox pi-background pi-border-color pi-theme-anime pi-layout-default'} style={{width: '400px'}}>
				<h2 className={'pi-item pi-item-spacing pi-title pi-secondary-background'} data-source={'name'}>{props.name}</h2>
				<figure className={'pi-item pi-image'} data-source={'img'}>
					<a href={'https://sun9-35.userapi.com/impg/2MHIcYxbuF5JuTayfYFd_1dhNFXz_ClkZJ_zGA/TJMqcpWkYPM.jpg?size=1200x1600&quality=96&sign=6d54e5f79341862e7fd1a39728e073a7&type=album'} className={'image image-thumbnail'}>
						<img src={'https://sun9-35.userapi.com/impg/2MHIcYxbuF5JuTayfYFd_1dhNFXz_ClkZJ_zGA/TJMqcpWkYPM.jpg?size=1200x1600&quality=96&sign=6d54e5f79341862e7fd1a39728e073a7&type=album'} className={'pi-image-thumbnail'} alt={''} width={'270'} height={204} data-image-key={props.name} data-image-name={props.name} />
					</a>
				</figure>
				<section className={'pi-item pi-group pi-border-color'}>
					<h2>Описание</h2>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Кличка</h3>
						<div className={'pi-data-value pi-font'}>
							<i>{props.name}</i>
						</div>
					</div>
					<div className={'pi-item pi-data pi-item-spacing pi-border-color'}>
						<h3 className={'pi-data-label pi-secondary-font'}>Порода</h3>
						<div className={'pi-data-value pi-font'}>Сиамско-тайский</div>
					</div>
				</section>
			</aside>
		</div>
	)
}

export default App;
