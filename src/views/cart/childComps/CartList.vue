<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in cartList"
                    :key="index"
                    :product="item"/>
    <ul>
        <li>neirong1</li>
        <li>neirong2</li>
        <li>neirong3</li>
        <li>neirong4</li>
        <li>neirong5</li>
        <li>neirong6</li>
        <li>neirong7</li>
        <li>neirong8</li>
        <li>neirong9</li>
        <li>neirong10</li>
        <li>neirong11</li>
        <li>neirong12</li>
        <li>neirong13</li>
        <li>neirong14</li>
        <li>neirong15</li>
        <li>neirong16</li>
        <li>neirong17</li>
        <li>neirong18</li>
        <li>neirong19</li>
        <li>neirong20</li>
        <li>neirong21</li>
        <li>neirong22</li>
        <li>neirong23</li>
        <li>neirong24</li>
        <li>neirong25</li>
        <li>neirong26</li>
        <li>neirong27</li>
        <li>neirong28</li>
        <li>neirong29</li>
        <li>neirong30</li>
        <li>neirong31</li>
        <li>neirong32</li>
        <li>neirong33</li>
        <li>neirong34</li>
        <li>neirong35</li>
        <li>neirong36</li>
        <li>neirong37</li>
        <li>neirong38</li>
        <li>neirong39</li>
        <li>neirong40</li>
        <li>neirong41</li>
        <li>neirong42</li>
        <li>neirong43</li>
        <li>neirong44</li>
        <li>neirong45</li>
        <li>neirong46</li>
        <li>neirong47</li>
        <li>neirong48</li>
        <li>neirong49</li>
        <li>neirong50</li>
        <li>neirong51</li>
        <li>neirong52</li>
        <li>neirong53</li>
        <li>neirong54</li>
        <li>neirong55</li>
        <li>neirong56</li>
        <li>neirong57</li>
        <li>neirong58</li>
        <li>neirong59</li>
        <li>neirong60</li>
        <li>neirong61</li>
        <li>neirong62</li>
        <li>neirong63</li>
        <li>neirong64</li>
        <li>neirong65</li>
        <li>neirong66</li>
        <li>neirong67</li>
        <li>neirong68</li>
        <li>neirong69</li>
        <li>neirong70</li>
        <li>neirong71</li>
        <li>neirong72</li>
        <li>neirong73</li>
        <li>neirong74</li>
        <li>neirong75</li>
        <li>neirong76</li>
        <li>neirong77</li>
        <li>neirong78</li>
        <li>neirong79</li>
        <li>neirong80</li>
        <li>neirong81</li>
        <li>neirong82</li>
        <li>neirong83</li>
        <li>neirong84</li>
        <li>neirong85</li>
        <li>neirong86</li>
        <li>neirong87</li>
        <li>neirong88</li>
        <li>neirong89</li>
        <li>neirong90</li>
        <li>neirong91</li>
        <li>neirong92</li>
        <li>neirong93</li>
        <li>neirong94</li>
        <li>neirong95</li>
        <li>neirong96</li>
        <li>neirong97</li>
        <li>neirong98</li>
        <li>neirong99</li>
        <li>neirong100</li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CartList",
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    CartListItem,
    Scroll
  }
}
</script>

<style scoped>

</style>
