<template>
  <div class="wrap">
    <div class="header">
      <img src="../../assets/icon_menu.png" alt="" />
    </div>
    <div class="main">
      <div class="main-left">
        <span class="col f-19">Mirroring Cast screen</span><br />
        <span class="col f-15">Real-time screen sharing</span>
      </div>
      <div class="main-right">
        <img src="../../assets/icon-clock.png" alt="" />
      </div>
      <img src="../../assets/tv.png" alt="" />
    </div>
    <div class="footer">
      <div class="footer-line">
        <img src="../../assets/icon-line.png" alt="" />
      </div>
      <div class="footer-main">
        <div class="footer-left">
          <span class="col f-19">Please choose</span><br />
          <span class="col f-15">Choose a screencast scene</span>
        </div>
        <div class="footer-right">
          <img src="../../assets/icon_news.png" alt="" />
        </div>
      </div>

      <div>
        <div class="footer-buttom">
            <div class="footer-buttom_img">
                <img src="../../assets/icon-screen.png" alt="">
            </div>
            <div class="footer-buttom_span">
                <span class="f-19">Screen mirroring</span><br>
                <span class="f-15">Mobile screen sharing to TV</span>
            </div>
        </div>
      </div>
      <div>
       <div class="footer-buttom">
            <div class="footer-buttom_img">
                <img src="../../assets/icon-online.png" alt="">
            </div>
            <div class="footer-buttom_span">
                <span class="f-19">Online videl</span><br>
                <span class="f-15">Cast online videos to TV</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrap {
  height: 100vh;
  background: #7165f9;
  border-radius: 3.5rem;
  display: grid;
  grid-template-rows: 5rem 28.7rem 33rem;
}
.header {
  margin: 2rem 2rem;
}
.main {
  margin: 0rem 3.5rem;
}
.main-left {
  float: left;
  margin: 1rem 0 1rem 0;
}
.main-right {
  float: right;
}
.main-right img {
  margin: 2rem 1rem;
}
.footer {
  background-image: linear-gradient(#7e79f1, #7165f9);
  border-radius: 3.5rem;
  border-top: #988eee 0.3rem solid;
  color: #cccbf1;
  display: grid;
  grid-template-rows: 1.54rem 7rem 11.5rem 11.5rem;
  padding: 0 3rem;
}
.footer-line {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-left {
  float: left;
}
.footer-right {
  float: right;
}
.footer-right img{
    margin: 1.5rem 0rem;
}
.footer-buttom {
  background: #fff;
  display: flex;
  border-radius: 2rem;
  margin: 1rem 0rem;
}
.footer-buttom_img{
    margin: 2rem 2rem;
}
.footer-buttom_span{
    margin: 1rem 0;
}
.col {
  color: #fff;
}
.f-19 {
  font-size: 1.9rem;
}
.f-15 {
  font-size: 1.5rem;
}
</style>