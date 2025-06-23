/** @jsxImportSource @emotion/react */
import * as style from './VideoSection.style';
import YouTube from 'react-youtube';

function VideoSection() {
  return (
    <section css={style.container}>
      <div css={style.quoteBox}>
        <div css={style.brand}>BUYBLE</div>
        <div css={style.quoteText}>
          <p>
            <span css={style.quoteMark}>“</span>두 다리가 의사라는 말이 있죠. 두 다리만 튼튼해도 건강하게 오래 살 수 있다는 건데요. 의자 등받이를 잡고 두 다리를 넓게 벌려 발끝을 바깥으로 향하도록 하고 무릎을 바깥으로 구부리며 앉았다 일어서는 스쿼트 동작은 허벅지 안쪽을 탄력 있게 해줍니다. 의자에 앉았다 일어서기, 그리고 의자 끝에 앉았다 일어서는 동작만으로도 하체를 강화시킬 수 있습니다. 모든 동작은 15회씩 세 번 반복하는 것이 효과적입니다. 세월을 거스를 수는 없지만, 노년에도 건강하고 탄력 있는 몸을 원하신다면 허벅지 근력을 키워보시는 건 어떨까요?
          </p>
          <div css={style.author}>
            <strong>KBS 생로병사의 비밀</strong>
            <div>국내 최초 건강&의학 프로그램 [생로병사의 비밀] 공식 채널 </div>
          </div>
        </div>
      </div>
      <div css={style.videoBox}>
        <YouTube
          videoId="QbM4PZt5S8s"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: { autoplay: 0, controls: 1 },
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    </section>
  );
}

export default VideoSection;
