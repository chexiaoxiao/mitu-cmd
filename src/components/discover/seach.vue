<template>
    <div class="seach">
        <div class="searchBox">
            <div><a href="#/main/discover"><img src="../../../public/images/cmdimg/goback.png" alt=""></a></div>
            <div><a href="#"><input type="text" placeholder="搜索精彩内容" href="#/seach"></a></div>
           <div><a href="#/main/discover">搜索</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "seach"
    }
</script>

<style scoped>
.seach{
    font-size: 0.12rem;

}
.searchBox{
    display: flex;
    justify-content: space-between;
    /*height: 0.5rem;*/
    width:90%;
    margin: 0.1rem auto;
    padding: 5px;
    border-bottom: 1px solid rgb(245,245,245);

}
.searchBox>div>a{
    height: 0.5rem;
    font-size: 17px;
    line-height: 0.35rem;
}
.searchBox>div>a>input{
    display: block;
    background-color: #fff;
    border-radius: 100px;
    padding-left: 40px;
    height: 30px;
    font-size: 0.14rem;
    color: #999;
    border: 1px solid #dfdfdf;
    text-align: left;
    outline: none;
}
.searchBox>div>a>img{
    width:0.3rem;
}
</style>