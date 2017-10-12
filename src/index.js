import $ from 'jquery';
import scroll from './utils/scroll';
import './css/index.css';

$('.main').on('click', () => {
	let tip = $('.tip');
	// let con = $('.content');
	$('html').addClass('no');
	scroll(tip, $('.content'));
	$('.tip').removeClass('hidden');
});
$('.tip').on('click', () => {
	$('html').addClass('no');
	$('.tip').addClass('hidden');
});

