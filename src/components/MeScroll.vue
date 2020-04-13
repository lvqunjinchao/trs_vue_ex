<template lang="html">
    <div ref="mescroll" class="mescroll">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import MeScroll from 'mescroll.js';
    import 'mescroll.js/mescroll.min.css';
    export default {
        data() {
            return {
                mescroll:null,
            }
        },
        mounted() {
            this.initMescroll();
        },
        methods: {
            //初始化mescroll
            initMescroll() {
                this.mescroll = new MeScroll(this.$refs.mescroll, { //在mounted初始化mescroll,确保此处配置的ref有值
                    down:{
                        callback: this.handleRefresh,
                        auto:false
                    },
                    up: {
                        callback: this.handleLoading,
                    }
                });
            },
            //下拉刷新
            handleRefresh() {
                this.$emit('handleRefresh',this.mescroll);
            },
            //上拉加载更多
            handleLoading() {
                this.$emit('handleLoading',this.mescroll);
            }
        },
    }
</script>

<style lang="css">
</style>
