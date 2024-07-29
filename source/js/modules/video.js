const buttonPlay = document.querySelector('.about__video-button');
const videoIframe = document.querySelector('.about__video-iframe');

const initVdeo = () => {
  if (buttonPlay && videoIframe) {
    buttonPlay.addEventListener('click', () => {
      buttonPlay.classList.add('about__video-wrapper--hidden');
      videoIframe.classList.remove('about__video-iframe--hidden');
    });
  }
};

export { initVdeo };
