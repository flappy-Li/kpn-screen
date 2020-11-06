<template>
    <div class="header">
        <slot name="title_text"></slot>
        <slot name="intro_text"></slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
	width: 96%;
	height: 8%;
	background: url(../assets/images/head-top-bg.png) no-repeat;
	background-size: 100% 100%;
	padding-top: 0.5%;
	margin: 0 2% 0 2%;
	position: relative;
    z-index: 2;
    box-sizing: border-box;

    .text-gradient();

    // 字体 颜色渐变 + 投影
    .text-gradient() {
        // 兼容写法
        .text-default-style {
            text-align: center;
            letter-spacing: 0.2rem;
            position: relative;
            color: #b5d5ec;
            /* Fallback Color */
            text-transform: uppercase;
            font-family: helvetica;
            font-family: 'txwhgzb';
            text-shadow: 4px 4px 0px #000, 8px 8px 0px rgba(255, 255, 255, 0.3);
            /* Fallback Shadow */
        }



        // 这个文字效果只在webkit内核的浏览器上才能正常工作。
        // Firefox 浏览器不支持在文字上使用background-clip属性。所以在其他浏览器上查看这个demo时，将回退到一个默认的颜色。
        // 我们使用@media screen and (-webkit-min-device-pixel-ratio:0来防止渐变在不支持的浏览器上显示。

        @media screen and (-webkit-min-device-pixel-ratio:0) {
            .text-default-style {
                // background:-webkit-gradient( linear, left top, left bottom, from(#d9e2e9), to(#b4d2ea));
                background: linear-gradient(to bottom, #e4eff6 0%, #b1d3ea 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: none !important;
            }

            .text-default-style:after {
                content: attr(data-text);
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                background: none;   
                text-shadow: 0px 2px 5px rgba(0,0,0, .8), 0px 3px 5px rgba(255, 255, 255, 0.3);  //relief shade effect 
                z-index: -1;
            }
        }
    }
}
</style>