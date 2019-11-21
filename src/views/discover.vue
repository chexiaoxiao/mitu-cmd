<template>
	<div class="discover">
		<header>
			<div :class="change===true?'cmd-change':'cmd-noChange'" @click="changeOne">精彩</div>
			<div :class="change===true?'cmd-noChange':'cmd-change'" @click="changeTwo">旅行家</div>
		</header>
		<div v-if="change">
		<div class="searchBox">
			<a href="#/seach"><input type="text" placeholder="搜索精彩内容" href="#/seach"></a>
		</div>
		<div>
			<img src="../../public/images/cmdimg/banner.png" alt="">
		</div>
		<user-show :data="user"></user-show>
		</div>
		<div v-else class="traveller">
			<img src="../../public/images/cmdimg/travellerBanner.png" alt="">
			<traveller :data="user"></traveller>
		</div>
	</div>

</template>

<script>
	import userShow from "../components/discover/userShow";
	import traveller from "../components/discover/traveller";
	export default{
		name:"Discover",
		components:{
			userShow,
			traveller
		},
		data(){
			return {
				change:true,
				user:[
					{
						"userId":"01",
						"charHead":"images/cmdimg/user001.jpg",
						"userName":"光影艺术",
						"userIntroduce":"喜欢游走在山川河流之间，用镜头记录下旅途的一切，并将路上的体会以游记形式向更多热爱旅游的朋友广为传播。",
						"article":[
							{"articleId":"01","articleTitle":"在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"...................",
								"articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
							},
							{"articleId":"01","articleTitle":"在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"...................",
								"articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
							},
							{"articleId":"01","articleTitle":"在深山古刹中，体验秋的绚丽，寺庙的香火缭","articleShow":"...................",
								"articleView":3535,"articleLike":0,"articleImg":["images/cmdimg/user001banner.jpg"],"articleListImg":["images/cmdimg/user001banner.jpg"]
							},
						]
					},
					{
						"userId":"02",
						"charHead":"images/cmdimg/user002.jpg",
						"userName":"奔跑的小东东",
						"userIntroduce":"环球旅行家，米途旅行家，自媒体人，微博知名旅游博主，试睡师！",
						"article":[
							{"articleId":"01","articleTitle":"新疆是个好地方|一路向西，去遇见我的时光之旅","articleShow":"...................",
								"articleView":1659,"articleLike":0,"articleImg":["images/cmdimg/user002banner.jpg"],"articleListImg":["images/cmdimg/user002banner.jpg"]
							}
						]
					},
					{
						"userId":"03",
						"charHead":"images/cmdimg/user003.jpg",
						"userName":"超级小包子",
						"userIntroduce":"畅销旅行作家，CPA摄影师，极限运动玩家，美食达人，旅行体验师，私人旅行订制专家。",
						"article":[
							{"articleId":"01","articleTitle":"双11不止我们有，国外也有，折扣更狠优惠更多","articleShow":"...................",
								"articleView":54017,"articleLike":2,"articleImg":["images/cmdimg/user003banner.jpg"],"articleListImg":["images/cmdimg/user003banner.jpg"]
							}
						]
					},
					{
						"userId":"04",
						"charHead":"images/cmdimg/user004.jpg",
						"userName":"米兰旅行",
						"userIntroduce":"遨游旅行家，知名旅游博主，旅行专栏作家，新浪签约自媒体，资深旅行美食Kol。",
						"article":[
							{"articleId":"01","articleTitle":"漫山黄栌红似火，京西坡峰岭的醉美秋天！","articleShow":"...................",
								"articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user004banner.jpg"],"articleListImg":["images/cmdimg/user004banner.jpg"]
							}
						]
					},
					{
						"userId":"05",
						"charHead":"images/cmdimg/user005.jpg",
						"userName":"jiexi",
						"userIntroduce":"用镜头记录美的瞬间",
						"article":[
							{"articleId":"01","articleTitle":"东门市井#打卡成都新晋网红景点","articleShow":"...................",
								"articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user005banner.jpg"],"articleListImg":["images/cmdimg/user005banner.jpg"]
							}
						]
					},
					{
						"userId":"06",
						"charHead":"images/cmdimg/user006.jpg",
						"userName":"蔻蔻",
						"userIntroduce":"唯旅行与美食不可辜负",
						"article":[
							{"articleId":"01","articleTitle":"孝亲游|预算100亿的尼山圣境  光说“壕”可就太没文化了","articleShow":"...................",
								"articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user006banner.jpg"],"articleListImg":["images/cmdimg/user006banner.jpg"]
							}
						]
					},
					{
						"userId":"07",
						"charHead":"images/cmdimg/user007.jpg",
						"userName":"色影姐",
						"userIntroduce":"色影迷途，美食相伴",
						"article":[
							{"articleId":"01","articleTitle":"寻味顺德，人文艺术及美食探索深度游攻略","articleShow":"...................",
								"articleView":"10W+","articleLike":0,"articleImg":["images/cmdimg/user007banner.jpg"],"articleListImg":["images/cmdimg/user007banner.jpg"]
							}
						]
					},
				]
			}
		},
		methods:{
			changeOne(){
				this.change=true;
			},
			changeTwo(){
				this.change=false;
			}
		}
	}
</script>

<style scoped>
.discover{
	font-size: 0.12rem;
	text-align: left;
	margin-bottom: 0.5rem;
}
.discover>header{
	display: flex;
	justify-content: center;
	width:100%;
	height:0.5rem;
	background-color: #fff;
	border-bottom: 1px solid #dfdfdf;
	text-align: center;
	position: fixed;
	top: 0;
	z-index: 10;
}
.cmd-noChange{
	width:0.8rem;
	margin: 0 0.1rem;
	font-size: 0.17rem;
	font-weight: 600;
	line-height: 0.44rem;
}
.cmd-change{
    width:0.8rem;
	margin: 0 0.1rem;
	border-color: rgb(240, 100, 60);
	color: rgb(240, 100, 60);
	font-size: 0.17rem;
	font-weight: 600;
	border-bottom: 2px solid rgb(240, 100, 60);
	line-height: 0.44rem;
}
.searchBox>a{
	margin-top: 0.5rem;
	padding: 10px 20px;
	flex: auto;
	display: -webkit-box;
	display: flex;
	background-color: rgb(245,245,245);
}
	.searchBox>a>input{
		display: block;
		flex: 1;
		background-color: #fff;
		border-radius: 100px;
		position: relative;
		padding-left: 40px;
		height: 30px;
		line-height: 30px;
		font-size: 17px;
		color: #999;
		border: 1px solid #dfdfdf;
		text-align: left;
		outline: none;
	}
	img{
		width:100%;
	}
	.traveller{
     margin-top: 0.5rem;
	}
.traveller>img{
	width: 100%;
	height: 2.2rem;
}
</style>


