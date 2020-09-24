<template>
  <div class="wrapper">
    <ul class="content">
      <!--    1.无论是否设置click：false，button都可以点击-->
      <button @click="btnClick">按钮</button>
      <!--    2.必须设置click：true，那么div才能监听点击-->
      <div @click="btnClick">hehehe</div>
      <li>information1</li>
      <li>information2</li>
      <li>information3</li>
      <li>information4</li>
      <li>information5</li>
      <li>information6</li>
      <li>information7</li>
      <li>information8</li>
      <li>information9</li>
      <li>information10</li>
      <li>information11</li>
      <li>information12</li>
      <li>information13</li>
      <li>information14</li>
      <li>information15</li>
      <li>information16</li>
      <li>information17</li>
      <li>information18</li>
      <li>information19</li>
      <li>information20</li>
      <li>information21</li>
      <li>information22</li>
      <li>information23</li>
      <li>information24</li>
      <li>information25</li>
      <li>information26</li>
      <li>information27</li>
      <li>information28</li>
      <li>information29</li>
      <li>information30</li>
      <li>information31</li>
      <li>information32</li>
      <li>information33</li>
      <li>information34</li>
      <li>information35</li>
      <li>information36</li>
      <li>information37</li>
      <li>information38</li>
      <li>information39</li>
      <li>information40</li>
      <li>information41</li>
      <li>information42</li>
      <li>information43</li>
      <li>information44</li>
      <li>information45</li>
      <li>information46</li>
      <li>information47</li>
      <li>information48</li>
      <li>information49</li>
      <li>information50</li>
      <li>information51</li>
      <li>information52</li>
      <li>information53</li>
      <li>information54</li>
      <li>information55</li>
      <li>information56</li>
      <li>information57</li>
      <li>information58</li>
      <li>information59</li>
      <li>information60</li>
      <li>information61</li>
      <li>information62</li>
      <li>information63</li>
      <li>information64</li>
      <li>information65</li>
      <li>information66</li>
      <li>information67</li>
      <li>information68</li>
      <li>information69</li>
      <li>information70</li>
      <li>information71</li>
      <li>information72</li>
      <li>information73</li>
      <li>information74</li>
      <li>information75</li>
      <li>information76</li>
      <li>information77</li>
      <li>information78</li>
      <li>information79</li>
      <li>information80</li>
      <li>information81</li>
      <li>information82</li>
      <li>information83</li>
      <li>information84</li>
      <li>information85</li>
      <li>information86</li>
      <li>information87</li>
      <li>information88</li>
      <li>information89</li>
      <li>information90</li>
      <li>information91</li>
      <li>information92</li>
      <li>information93</li>
      <li>information94</li>
      <li>information95</li>
      <li>information96</li>
      <li>information97</li>
      <li>information98</li>
      <li>information99</li>
      <li>information100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'

BScroll.use(PullUp);

export default {
  name: "Category",
  data(){
    return {
      scroll
    }
  },
  //注意 mounted 不会保证所有的子组件也都一起被挂载。
  // 如果你希望等到整个视图都渲染完毕，
  // 可以在 mounted 内部使用 vm.$nextTick：
  mounted: function () {
    // this.$nextTick(function () {
    //   new BScroll('.wrapper',{})
    // })
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeTimer: 3,
      click: true,
      pullUpLoad: true
    })

    this.scroll.on('scroll',(position) => {
    })

    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
      setTimeout(() => {
        this.scroll.finishPullUp()
      },2000)
    })
  },
  methods:{
    btnClick() {
      console.log('btnClick');
    }
  }
}
</script>

<style scoped>
.wrapper {
  /*父盒子必须设置高度*/
  height: 150px;
  background-color: #c4f691;
  overflow: hidden;
  /*overflow-y: scroll;*/
}
</style>
