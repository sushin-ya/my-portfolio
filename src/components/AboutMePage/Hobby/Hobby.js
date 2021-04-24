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
              一人で家にいることが得意です。お酒を飲みながらワイワイするのも好きです。
            </p>
          </div>
        </div>
        <div className='Hobby__items'>
          <div className='Hobby__item'>
            <img src={movie} alt='' />
            <h1 className='Hobby__item__title'>movie</h1>
            <p className='Hobby__item__description'>
              アクション、ホラー、ドラマ、SFなどジャンル問わず何でも見ます。
              <br />
              <br />
              好きな監督は、マーティン・スコセッシ、ポール・トマス・アンダーソン、ホドロフスキーなど。
              <br />
              <br />
              いままで650本くらい見たと思いますが、まだまだ見たい映画は尽きません。
            </p>
          </div>
          <div className='Hobby__item'>
            <img src={book} alt='' />
            <h1 className='Hobby__item__title'>book</h1>
            <p className='Hobby__item__description'>
              海外文学好きです。
              <br />
              <br />
              ブコウスキー、カート・ヴォネガット、ジョン・アーヴィングなど
              アメリカ文学好き。いままで500冊くらい読みました。
              <br />
              <br />
              漫画もたくさん読みます。
              <br />
              少年少女漫画からサブカル漫画まで何でも好きです。
              <br />
              <br />
              好きな作家は手塚治虫、岡崎京子、鳥山明など。
            </p>
          </div>
          <div className='Hobby__item'>
            <img src={sake} alt='' />
            <h1 className='Hobby__item__title'>sake &amp; sakana</h1>
            <p className='Hobby__item__description'>
              お酒とおいしい食べ物が大好き。お酒はビール、ハイボール、ウィスキー、ワイン、焼酎、日本酒、テキーラ、何でも飲みます。
              <br />
              <br />
              肴には焼き鳥、刺し身、焼き肉、粉もの、何でもござれ。ただ、マヨネーズは終生の天敵です。
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
              サウナトランスは一度ハマったら忘れられません。岩盤浴も良き。
              <br />
              <br />
              きれいなスーパー銭湯も、渋めの銭湯もどっちも趣があっていいですね。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
