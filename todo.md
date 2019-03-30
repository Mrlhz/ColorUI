# Vue学习之旅

## 参考 
- [ColorUI](https://github.com/weilanwl/ColorUI)
- [colorful-ui](https://github.com/Keyves/colorful-ui)https://keyves.github.io/colorful-ui/#/button
- [了解如何在iPhone X 和所有iOS设备上设计视觉稿](https://www.ui.cn/detail/246980.html)
- []()
- []()

**基于iPhone6的2X倍率进行设计**

```scss
@for $i from 1 through 50 {
  .size { font-size:  #{$i}px #{ $i/50*1rem}; }
}

@for $i from 1 through 50 {
  .size-#{$i} { font-size: $i/50*1rem; }
}
```

px|rem
---|---
1px   | 0.02rem
2px   | 0.04rem
3px   | 0.06rem
4px   | 0.08rem
5px   | 0.1rem
6px   | 0.12rem
7px   | 0.14rem
8px   | 0.16rem
9px   | 0.18rem
10px  | 0.2rem
11px  | 0.22rem
12px  | 0.24rem
13px  | 0.26rem
14px  | 0.28rem
15px  | 0.3rem
16px  | 0.32rem
17px  | 0.34rem
18px  | 0.36rem
19px  | 0.38rem
20px  | 0.4rem
21px  | 0.42rem
22px  | 0.44rem
23px  | 0.46rem
24px  | 0.48rem
25px  | 0.5rem
26px  | 0.52rem
27px  | 0.54rem
28px  | 0.56rem
29px  | 0.58rem
30px  | 0.6rem
31px  | 0.62rem
32px  | 0.64rem
33px  | 0.66rem
34px  | 0.68rem
35px  | 0.7rem
36px  | 0.72rem
37px  | 0.74rem
38px  | 0.76rem
39px  | 0.78rem
40px  | 0.8rem
41px  | 0.82rem
42px  | 0.84rem
43px  | 0.86rem
44px  | 0.88rem
45px  | 0.9rem
46px  | 0.92rem
47px  | 0.94rem
48px  | 0.96rem
49px  | 0.98rem
50px  | 1rem


- CSS权重