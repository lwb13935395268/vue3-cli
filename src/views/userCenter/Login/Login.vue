<template>
  <div class="wrap">
    <div class="header">
      <div class="header-title">
        <img src="../../../assets/icon-download.png" alt="" />
        <span>Local screencast</span>
      </div>
        <div class="search">
          <input placeholder="search" />
          <img src="../../../assets/icon-search.png" alt="" />
        </div>
    </div>
    <div class="main">
        <div class="main-middle">
            <img class="img" src="../../../assets/waaw.png" alt="">
        </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<style>
.wrap {
  height: 100vh;
  background: linear-gradient(#d7cbf9, #efedf2);
  border-radius: 3.5rem;
  display: grid;
  grid-template-rows: 12rem 30rem 24rem;
}
.header {
  margin: 2rem;
}
.header-title {
  display: flex;
}
.header-title span {
  margin: 0 auto;
}
.search {
  margin: 2rem auto;
  background: #ffffff;
  border: 0.2px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;
}
.search input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  color: #333333;
  position: relative;
  box-sizing: border-box;
  padding-right: 30px;
  text-indent: 1rem;
}
.search img{
    margin-right: 1rem;
}
.main-middle{
    background: #eceaff;
    border-radius: 5rem;
}
.main-middle img{
    width: 10rem;
    height: 10rem;
}
</style>