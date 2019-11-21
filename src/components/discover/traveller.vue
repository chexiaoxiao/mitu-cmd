<template>
    <div class="travellerCon">
        <a href="#" v-for="(data,u) in data" :key="u">
            <img :src="data.charHead" alt="">
            <h2>{{data.userName}}</h2>
            <p>{{data.userIntroduce}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "traveller",
        props:["data"]
    }
</script>

<style scoped>
    .travellerCon{
        width:100%;
        margin: 0 auto;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }
    .travellerCon>a>img{
        width: 60px;
        height: 60px;
        border-radius: 100px;
    }
    .travellerCon>a{
        display: block;
        float: left;
        width: 42%;
        height: 1.5rem;
        overflow: hidden;
        text-align: center;
        padding: 10px 15px 10px;
    }
    .travellerCon>a>p{
        color: #999;
        font-size: 12px;
        line-height: 1.4;
        height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>