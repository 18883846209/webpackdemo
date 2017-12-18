import $ from 'jquery';
import scroll from './utils/scroll';
import './css/index.css';

$('p').on('click', () => {
	let tip = $('.tip');
	// let con = $('.content')
	$('html').addClass('no');
	scroll(tip, $('.content'));
	$('.tip').removeClass('hidden');
});
$('.tip').on('click', () => {
	$('html').addClass('no');
	$('.tip').addClass('hidden');
});

$('.click').click(() => {
	$('.commit').animate({
		top: 150 + 'px'
	}, 600);
});
$('.close').click(() => {
	$('.commit').animate({
		top: '100%'
	}, 600);
});

