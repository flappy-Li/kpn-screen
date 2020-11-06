<template>
  <div class="tip-warp constructor-shadow rows-flex">
    <div class="icon-wrap">
      <span><img src="@/assets/images/icon1.png" /></span>
    </div>
		<data-content>
			<p class="title hander-line" slot="title-text">{{list.title }}</p>
			<span class="text-size" slot="data-title">{{list.numTitle}}</span>
			<span slot="data-num"
				><i class="num-size" >{{ list.num }}</i
				>{{list.unit}}</span
			>
			<span v-if="list.type" slot="data-num2" class="last-text"><i slot="data-unit">{{list.increase}}</i> {{list.amount}}</span>
		</data-content>
  </div>
</template>

<script>
import dataContent from "./index";

export default {
  props: {
    list: {
      type: Object,
      default() {
        return {
			type:true
		};
      },
    },
  },
  components: {
    dataContent,
  },
};
</script>

<style lang="less">

.tip-warp {
	width: 24.5%;
	height: 100%;
	.icon-wrap {
		span {
			display: block;
			height: 50%;
			width: 80%;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.data-content {
		position: relative;
		.title {
			font-size: 2rem;
		}
		span {
			font-size: 1.3rem;
		}
		.num-size {
			font-size: 2.3rem;
			color:#539aed;;
		}
		.last-text {
			position: absolute;
			right: 0;
			top: 50%;
		}
	}
}
</style>