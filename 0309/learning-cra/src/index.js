import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable'

import './styles/index.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';

// import App from './containers/App/App';

// JSX 학습
// 인터폴레이션(보간)

const songs = [
  {
    id: 'song-dkjv01',
    title: 'Jazz Cabbage',
    artist: 'Ian Ewing, Strehlow',
    song: 'https://mp3.chillhop.com/serve.php/?mp3=9363',
    cover:
      'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',
    active: true,
    colors: '#fcbc9f #bab1c0'.split(' '),
    albumClass: 'asdsong-figure',
  },
];

const renderAlbumFigure = (song) => {
  const { active, albumClass, cover, song: mp3, colors } = song;
  return active ? (
    <figure className={albumClass}>
      <img src={cover} alt=""/>
      <figcaption>
        <div>
        <a href={mp3} download={true}>download mp3</a>
        </div>
        <span>{`여러분이 선택한 앨범의 컬러 개수를 출력해보세요 => ${colors.length}`}</span>
      </figcaption>
    </figure>
  ) : null
}

// const { title, artist, cover, song, color } = songs[0];
const vNode = (() => {
  let firstSong = songs[0];

  // firstSong.active = !firstSong.active
  firstSong = {
    ...firstSong,
    active: !firstSong.active,
  };

  const styleObject = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'flexDirection': 'column',
  };

  return (
  <div className="song-container" lang="en" style={styleObject}>
    <h1 className="song-info">{`${firstSong.title} -> ${firstSong.artist}`}</h1>
    {renderAlbumFigure(firstSong)}
  </div>
  )
})();

render(
  <StrictMode>
    {/* <App /> */}
    {vNode}
  </StrictMode>,
  document.getElementById('root')
);