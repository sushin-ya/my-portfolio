import React from 'react';
import './Hobby.css';

import movie from '../../../images/AboutMePage/icons/movie.svg';
import book from '../../../images/AboutMePage/icons/book.svg';
import sake from '../../../images/AboutMePage/icons/sake.svg';
import bath from '../../../images/AboutMePage/icons/bath.svg';

export default function Hobby() {
  return (
    <div className='Hobby container'>
      <div className='Hobby__Inner container__Inner'>
        <div className='Hobby__texts container__texts'>
          <div className='Hobby__text__title container__text__title'>
            <h1>Hobby</h1>
          </div>
          <div className='Hobby__text__description'>
            <p>
              一人で家にいることが得意です。居酒屋やバーでお酒を飲みながらお話するのも好きです。
            </p>
          </div>
        </div>
        <div className='Hobby__items'>
          <div className='Hobby__item'>
            <img src={movie} alt='' />
            <h1 className='Hobby__item__title'>movie</h1>
            <p className='Hobby__item__description'>
              アクション、ホラー、ドラマ、SF
              <br />
              などジャンル問わず何でも見ます。
              <br />
              <br />
              好きな監督は、マーティン・スコセッシ、ポール・トマス・アンダーソン、ホドロフスキーなど。
              <br />
              まだまだ見たい映画は尽きません。
            </p>
          </div>
          <div className='Hobby__item'>
            <img src={book} alt='' />
            <h1 className='Hobby__item__title'>book</h1>
            <p className='Hobby__item__description'>
              海外文学好きです。
              <br />
              ブコウスキー、カート・ヴォネガット、ジョン・アーヴィングなど
              <br />
              アメリカ文学をよく読みます。
              <br />
              <br />
              漫画もよく読みます。
              <br />
              好きな作家は手塚治虫、岡崎京子、鳥山明など。
            </p>
          </div>
          <div className='Hobby__item'>
            <img src={sake} alt='' />
            <h1 className='Hobby__item__title'>sake &amp; sakana</h1>
            <p className='Hobby__item__description'>
              お酒とおいしい食べ物が大好き。
              <br />
              お酒はビール、ハイボール、ウィスキー、ワイン、焼酎、日本酒、テキーラ、何でも飲みます。
              <br />
              <br />
              ひとりか、少人数で隠れ家的なバーでしっぽり飲みたいタイプ。
            </p>
          </div>
          <div className='Hobby__item'>
            <img src={bath} alt='' />
            <h1 className='Hobby__item__title'>furo &amp; sauna</h1>
            <p className='Hobby__item__description'>
              でっかいお風呂とサウナと水風呂が好き。
              <br />
              <br />
              サウナトランスは一度ハマったら忘れられません。
              <br />
              <br />
              岩盤浴やロウリュウも好きです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
