import MainSlider from './modules/sliders/slider-main';
import MiniSlider from './modules/sliders/slider-mini';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', 
        prev: '.showup__prev', 
        next: '.showup__next',
        activeClass: 'card-active',
        animate: 'true'
    });

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev', 
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: 'true'
    });

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev', 
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });

    showUpSlider.init();
    modulesSlider.init();
    feedSlider.init();



    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});
