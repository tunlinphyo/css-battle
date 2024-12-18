export interface Battle {
    id: number;
    name: string;
    code: string;
}

export interface List {
    id: number;
    name: string;
    itemIds: number[];
    items?: Battle[];
}

export const BATTLES: Battle[] = [
    {
        id: 1,
        name: 'Sample Square',
        code: `<style>*{margin:0;background:#5d3a3a}*>*{width:200;height:200;background:#b5e0ba`
    },
    {
        id: 2,
        name: 'Carrom',
        code: `<div></div><style>body{background:#62374e;margin:0}div{width:50px;height:50px;box-shadow:50px 50px#fdc57b,300px 50px#fdc57b,300px 200px#fdc57b,50px 200px#fdc57b}</style>`
    },
    {
        id: 3,
        name: 'Push Button',
        code: `<p/><style>*{background:#6592CF}*>*{margin:75 50;width:300;height:150;background:#243D83}p{width:50;height:50;transform:translate(75px, 50px);border-radius:9in;background:#EEB850;box-shadow:0 0 0 50px #243D83,0 0 0 100px #6592CF}`
    },
    {
        id: 4,
        name: 'Ups n Down',
        code: `<p id="f"/><p/><p id="l"/><style>body{margin:0;display:flex;padding:50 50;background:#62306D}p{margin:0;width:100;height:100;background:#F7EC7D;border-radius:2in 2in 0 0}#f,#l{transform:translateY(100px)rotate(180deg)}`
    },
    {
        id: 5,
        name: 'Acid Rain',
        code: `<p/><p id="a"/><style>body{background:#0B2429}p{position:fixed;width:120;height:120;background:#F3AC3C;border-radius:9in 9in 9in 0;top:14;left:200}#a{top:134;left:80;border-radius:9in 0 9in 9in;;box-shadow: 60px -60px 0 #998235}`
    },
    {
        id: 6,
        name: 'Missing Slice',
        code: `<p></p>
<style>
body {
  background: #E3516E;
  display: grid;
  place-content: center;
}
p {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-image: repeating-conic-gradient(
    #FADE8B 0%,
    #FADE8B 25%,
    #E3516E 25%,
    #E3516E 50%,
    #F7F3D7 50%,
    #F7F3D7 75%,
    #51B5A9 75%,
    #51B5A9 100%
  );
}
</style>`
    },
    {
        id: 7,
        name: 'Leafy Trail',
        code: `<p></p>
<style>
body{background:#0B2429}
p{
  position:fixed;
  left:175px;
  top:59px;
  width:150px;
  height:150px;
  background:#F3AC3C;
  border-radius:100px 0 100px 0;
  box-shadow:-50px 0 #998235, -100px 0 #1A4341;
}
</style>`
    },
    {
        id: 8,
        name: 'Forking Crazy',
        code: `<div id="a">
  <p class="b"/>
  <p/>
  <p class="b"/>
  <p/>
  <p class="b"/>
  <p/>
  <p class="b"/>
</div>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center
}
#a{
  background:linear-gradient(180deg,#6592CF,#6592CF 10px,#060F55 10px);
  width:140px;
  height:200px;
  border-radius: 0 0 100px 100px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:flex-start;
}
#a:after{
  content:'';
  display:block;
  width:20px;
  height:60px;
  background:#060F55;
  position:absolute;
  top:190px
}
p{
  width:20px;
  height:110px;
  background:#6592CF;
  border-radius:20px;
  margin:0
}
.b{
  height:20px;
  background:#060F55
}
</style>`
    },
    {
        id: 9,
        name: 'Tesseract',
        code: `<div id="a">
  <div id="b"></div>
</div>
<style>
body{
  background:#222730;
  display:grid;
  place-content:center;
  margin:0
}
#a{
  width:400px;
  height:150px;
  background:#4CAAB3;
  position:relative;
  display:grid;
  place-content:center
}
#b{
  width:150px;
  height:150px;
  background:#4CAAB3;
  rotate:45deg;
  box-shadow:0 0 0 50px #222730;
  display:grid;
  place-content:center
}
#b:before{
  content:'';
  display:block;
  width:50px;
  height:50px;
  border-radius:50%;
  background:#393E46
}
</style>`
    },
    {
        id: 10,
        name: 'Cloaked Spirits',
        code: `<div id="a">
<div></div>
<div id="b"></div>
<div></div>
</div>
<style>
body{
  background:#62306D;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  margin:0
}
#a{
  width:300px;
  height:250px;
  display:flex;
  justify-content:center;
  align-items:end;
}
#a>div{
  flex:1;
  height:150px;
  background:#F7EC7D;
  border-radius:100px 100px 0 0;
}
#a>div:before{
  box-sizing:border-box;
  content:'';
  display:block;
  width:100px;
  height:100px;
  border-radius:50%;
  background:#E38F66;
  border:20px solid #AA445F;
}
#a>#b{height:250px}
#a>#b:before{
  border-color:#E38F66;
  background:#AA445F
}
</style>`
    },
    {
        id: 11,
        name: 'Eye of Sauron',
        code: `<div id="a">
  <div id="b"></div>
</div>
<style>
body{
  background:#191210;
  display:grid;
  place-content:center
}
#a{
  width:300px;
  height:140px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}
#a:before,#b:after{
  content:'';
  display:block;
  position:absolute;
  width:100px;
  height:100px;
  border-radius:50%;
  box-sizing:border-box;
  border:20px solid #ECA03D;
  border-top-color:transparent;
  border-left-color:transparent;
}
#a:before{
  left:0;
  rotate:45deg
}
#b:after{
  right:0;
  rotate:-135deg
}
#b{
  box-sizing:border-box;
  width:140px;
  height:140px;
  border-radius:50%;
  background:#84271C;
  border:20px solid #ECA03D;
  box-shadow:inset 0 0 0 25px #191210
}
</style>`
    },
    {
        id: 12,
        name: 'Wiggly Moustache',
        code: `<div id="a">
  <div id="b"></div>
  <div></div>
  <div id="c"></div>
</div>
<style>
body{
  background:#F5D6B4;
  display:grid;
  place-content:center
}
#a{
  width:260px;
  height:100px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;
}
#a>div{
  box-sizing:border-box;
  width:100px;
  height:100px;
  border-radius:50%;
  border:20px solid #D86F45;
  border-bottom-color:transparent;
  border-right-color:transparent;
  rotate:45deg
}
#a>#b,#a>#c{
  rotate:-135deg;
  position:absolute
}
#c{
  right:0;
}
#a:before,#a:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#D86F45;
}
</style>`
    },
    {
      id: 19,
      name: 'Cube',
      code: `<div id="c"></div>
<style>
body{
  background:#0B2429;
  display:grid;
  place-content:center
}
#c{
  width:100px;
  height:100px;
  background:#F3AC3C;
  translate:0 35px;
  rotate:45deg;
  position:relative
}
#c:before{
  content:'';
  display:block;
  width:100px;
  height:50px;
  background:#1A4341;
  transform:skew(45deg) translate(25px, -50px)
}
#c:after{
  content:'';
  display:block;
  width:50px;
  height:100px;
  background:#998235;
  transform:skewY(45deg) translate(-50px, -25px)
}
</style>`
    },
    {
        id: 13,
        name: 'Totally Triangle',
        code: `<style>html{background:linear-gradient(135deg,#F3AC3C 50%,transparent 50%) no-repeat 0 0 / 141px 141px #0B2429}`
    },
    {
        id: 14,
        name: 'Web Maker Logo',
        code: `<div class="t">
  <div class="o a"></div>
  <div class="r b"></div>
  <div class="r v c"></div>
  <div class="o v d"></div>
</div>
<style>
*{
  background:#F2F2B6
}
.t{
  width:280px;
  height:130px;
  margin:85px 52px;
  position:relative
}
.t *{
  position:absolute;
  width:150px;
  height:130px;
  clip-path: polygon(100% 0, 0 0, 50% 100%);
}
.o{background:#FF6D00}
.r{background:#FD4602}
.a{z-index:3}
.b{
  z-index:2;
  margin-left:20px
}
.c{
  z-index: 1;
  margin-left:110px
}
.d{margin-left:130px}
.v{transform:rotate(180deg)
}</style>`
    },
    {
        id: 15,
        name: 'Overlap',
        code: `<div class="x">
  <div class="c a"></div>
  <div class="c d"></div>
</div>
<div class="x">
  <div class="c d e"></div>
  <div class="c b"></div>
</div>
<style>
body{
  margin:0;
  background:#09042A;
  display:flex
}
.x{
  margin:0;
  width:200px;
  height:300px;
  position:relative;
  overflow:hidden
}
.c{
  width:150px;
  height:150px;
  border-radius:100%;
  position:absolute;
  top:75px
}
.a{background:#7B3F61;left:75px}
.b{background:#E78481;left:-25px}
.d{background:#09042A}
.d{left:175px}
.e{z-index:1;left:-125px}
</style>`
    },
    {
        id: 16,
        name: 'Eye of the Tiger',
        code: `<div id="p"><div></div></div>
<style>
  body{background:#0B2429}
  #p {
    width: 200px;
    height: 200px;
    background: #998235;
    border-radius: 50% 0;
    display:flex;
    justify-content:center;
    align-items:center;
    transform: translate(92px, 42px) rotate(45deg)
  }
  #p div {
    width:50px;
    height:50px;
    background:#0B2429;
    border-radius:100%;
    border:45px solid #F3AC3C;
    box-shadow:0 0 0 20px #0B2429
  }
</style>
`
    },
    {
        id: 17,
        name: 'Fidget Spinner',
        code: `<div id="b">
  <div class="c b"></div>
  <div class="c b r"></div>
  <div class="c w"></div>
  <div class="c w d"></div>
</div>
<style>
body{
  background:#09042A;
  display:grid;
  place-content:center
}
#b {
  width:200px;
  height:186px;
  position:relative;
}
#b:before{
  content:'';
  display:block;
  position:absolute;
  width: 100px;
  height:60px;
  left:50px;
  top:63px;
  background:#E78481;
}
.c{
  width:60px;
  height:60px;
  border-radius:100%;
  background:#098;
  position:absolute;
  border:10px solid #E78481
}
.w{
  border-color:#09042A;
  background:#F5BB9C;
  left:60px;
}
.d{bottom:0}
.b{
  border-color:#E78481;
  background:#09042A;
  top:53px;
}
.r{right:0}
</style>
`
    },
    {
        id: 18,
        name: 'Matrix',
        code: `<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<style>
body{
  margin:0;
  background-color:#5C434C;
  display:flex;
  flex-flow:column wrap;
  height:300px
}
div{
  width:80px;
  height:80px;
  background:#F09462;
  border:10px solid#5C434C;
  background-image:radial-gradient(circle at 80px 80px,transparent 80px,#5C434C 80px)
}
div:nth-child(even){
  background-color:#F5D6B4
}
</style>
`
    },
    {
      id: 20,
      name: 'Ticket',
      code: `<div id="c">
  <p id="a"/>
  <p id="b"/>
  <p id="d"/>
  <p id="e"/>
</div>
<style>
body{
  background:#62306D;
  display:grid;
  place-content:center
}
#c{
  width:200px;
  height:100px;
  background:linear-gradient(90deg,#F7EC7D,#F7EC7D 140px,#E38F66 140px);
  position:relative
}
#c>*,#c:before,#c:after{
  position:absolute;
  border-radius:50%;
  background:#62306D
}
#c:before,#c:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  right:50px
}
#c:before{top:-10px}
#c:after{bottom:-10px}
p{
  margin:0;
  width:40px;
  height:40px
}
#a{
  left:-20px;
  top:-20px
}
#b{
  left:-20px;
  bottom:-20px
}
#d{
  right:-20px;
  top:-20px
}
#e{
  right:-20px;
  bottom:-20px
}
</style>`
    },
    {
        id: 21,
        name: 'SitePoint Logo',
        code: `<div id="a">
  <p id="b"/>
  <p id="c"/>
</div>
<style>
body{
  background:#222;
  display:grid;
  place-content:center
}
#a{
  width: 130px;
  height: 118px;
  rotate:45deg;
  position:relative;
}
p{
  margin:0;
  position:absolute;
  width:80px;
  height:100px;
}
p:before{
  content:'';
  display:block;
  width:30px;
  height:100px;
  background:var(--b);
  border-radius:0 0 0 10px
}
p:after{
  content:'';
  display:block;
  width:80px;
  height:30px;
  background:var(--b);
  position:absolute;
  bottom:0;
  border-radius:0 5px 0 10px
}
#b{--b:#F2994A}
#c{
  --b:#2D9CDB;
  right:0;
  bottom:0;
  rotate:180deg
}
</style>`
    },
    {
        id: 22,
        name: 'Cloud',
        code: `<div id="a"><div/></div>
<style>
body{
  background:#F5D6B4;
  display:grid;
  place-content:center
}
#a{
  width: 200px;
  height: 130px;
  position:relative;
}
#a>div{
  width:150px;
  height:50px;
  position:absolute;
  background:#D86F45;
  bottom:0;
  right:0;
  border-radius:0 50px 50px 0;
}
#a:before,#a:after{
  content:'';
  display:block;
  width:100px;
  height:100px;
  background:#D86F45;
  border-radius:50%;
  position:absolute;
}
#a:before{bottom:0}
#a:after{right:20px}
</style>`
    },
    {
        id: 23,
        name: 'Boxception',
        code: `<div id="a"/>
<style>
body{
  background:#F3AC3C;
  display:grid;
  place-content:center
}
#a{
  width: 200px;
  height: 200px;
  position:relative;
  background:#1A4341;
  rotate:-90deg
}
#a:before{
  content:'';
  display:block;
  width:100px;
  height:100px;
  background:#998235
}
#a:after{
  content:'';
  display:block;
  width:50px;
  height:50px;
  background:#F3AC3C;
  margin-top:-50px
}
</style>`
    },
    {
        id: 24,
        name: 'Switches',
        code: `<div id="a">
<p id="b"/>
<p/>
</div>
<style>
body{
  background:#62306D;
  display:grid;
  place-content:center
}
#a{
  width: 240px;
  height: 100px;
  position:relative;
  display:flex;
  justify-content:space-between;
}
p{
  width:100px;
  height:100px;
  border-radius:50%;
  background:#F7EC7D;
  margin:0;
}
p:before{
  content:'';
  display:block;
  width:100px;
  height:150px;
  background:#E38F66;
  border-radius:50px;
  position:absolute;
  z-index:-1
}
#b:before{
  bottom:0;
  background:#AA445F;
}
</style>`
    },
    {
        id: 25,
        name: 'Blossom',
        code: `<div id="a">
<p id="b"/>
<p id="c"/>
</div>
<style>
body{
  background:#998235;
  display:grid;
  place-content:center
}
#a{
  width: 180px;
  height: 180px;
  position:relative;
}
#a:before,#a:after{
  content:'';
  display:block;
  position:absolute;
  width:80px;
  height: 60px;
  background:#F3AC3C;
  border-radius:0 50px
}
#a:before{bottom:0}
#a:after{
  right:0;
  transform:rotateY(180deg)
}
#b,#c{
  margin:0;
  width:80px;
  height:100px;
  position:absolute;
  background:#1A4341;
  border-radius:0 50px;
  position:absolute;
}
#c{
  right:0;
  bottom:0;
  transform:rotateY(180deg)
}
</style>`
    },
    {
        id: 26,
        name: 'Smily',
        code: `<div id="a">
<p id="b"/>
<p id="c"/>
<p id="d"/>
</div>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center
}
#a{
  width: 320px;
  height: 100px;
  position:relative;
  background:#6592CF;
}
#b,#c,#d{
  box-sizing:border-box;
  position:absolute;
  z-index:-1;
  top:-60px;
  width:120px;
  height:100px;
  margin:0;
  border-radius:100px 100px 0 0;
  border:20px solid #060F55;
}
#c{right:0}
#d{
  left:100px;
  transform:rotateX(180deg);
  top:60px
}
</style>`
    },
    {
        id: 27,
        name: 'Lock Up',
        code: `<div/>
<style>
body{
  background:#E38F66;
  display:grid;
  place-content:center
}
div{
  width:80px;
  height:80px;
  position:relative;
  background:#AA445F;
  border:30px solid #F7EC7D;
  border-top-color:transparent;
  border-bottom-color:transparent;
  border-radius:50%;
  rotate:-45deg;
  box-shadow:0 0 0 30px #AA445F;
}
</style>`
    },
    {
        id: 28,
        name: 'Cups & Balls',
        code: `<div>
<p class="y"/>
<p class="z a"/>
<p class="y a"/>
<p class="z"/>
<p class="z b"/>
<p class="y"/>
<p class="z"/>
<p class="y b"/>
</div>
<style>
body{
  background:#1A4341;
  display:grid;
  place-content:center
}
div{
  width:260px;
  height:120px;
  position:relative;
  display:flex;
  flex-wrap:wrap;
  gap:20px
}
p{
  margin:0;
  width:50px;
  height:50px;
  background:#098;
  border-radius:50%;
}
.y{background:#998235}
.z{background:#F3AC3C}
.a{border-radius:50% 50% 0 0}
.b{border-radius:0 0 50% 50%}
</style>`
    },
    {
        id: 29,
        name: 'Suffocate',
        code: `<p id="a"/>
<p id="b"/>
<p id="c"/>
<p id="d"/>
<style>
*{margin:0}
body{
  background:#1A4341;
  box-shadow: inset 0 0 0 50px #F3AC3C
}
p{
  width: 200px;
  height: 200px;
  background: #F3AC3C;
  border-radius:0 50% 50% 0;
  position:fixed
}
#a{top:-50px;left:0px}
#b{top:-50px;right:0px;rotate:180deg}
#c{bottom:-50px;left:0px}
#d{bottom:-50px;right:0px;rotate:180deg}
</style>`
    },
    {
        id: 30,
        name: 'Horizon',
        code: `<style>
html{
  background:linear-gradient(180deg,#F7EC7D,#F7EC7D 50px,#E38F66 50px,#E38F66 100px,#AA445F 100px,#AA445F 200px,#62306D 200px)
}
</style>`
    },
    {
        id: 31,
        name: 'Equals',
        code: `<p>
<style>
body{
  background:#AA445F;
  display:grid;
  place-content:center;
}
p{
  width:250px;
  height:200px;
  background:linear-gradient(90deg,#F7EC7D,#F7EC7D 50%,#E38F66 50%);
  border-radius:200px;
}
p:before{
  content:'';
  display:block;
  width:50px;
  height:200px;
  background:#AA445F;
  margin:0 auto
}
</style>`
    },
    {
        id: 32,
        name: 'Band-aid',
        code: `<div><p></div>
<style>
body{
  background:#FFF;
  display:grid;
  place-content:center;
}
div{
  width:200px;
  height:200px;
  rotate:45deg;
  position:relative
}
div:before,div:after{
  content:'';
  display:block;
  width:200px;
  height:50px;
  background:#F3AC3C;
  position:absolute;
  top:75px
}
div:after{
  background:#A3A368;
  rotate:90deg
}
p{
  width:50px;
  height:50px;
  background:#FBE18C;
  position:absolute;
  z-index:1;
  top:59px;
  left:75px;
}
</style>`
    },
    {
        id: 33,
        name: 'Bridie',
        code: `<div>
<style>
body{
  background:#1A4341;
  display:grid;
  place-content:center;
}
div{
  width: 150px;
  height: 150px;
  background: #dd6b4d;
  border-radius:50%;
  background:linear-gradient(90deg,#998235,#998235 50%,#1A4341 50%);
  position:relative;
}
div:before {
  content:'';
  display:block;
  width:200px;
  height:200px;
  position:absolute;
  inset:-25px;
  --t: transparent;
  background: repeating-conic-gradient(#F3AC3C 0%,#F3AC3C 25%,var(--t) 25%,var(--t) 100%);
  border-radius:50%
}
div:after {
  content:'';
  display:block;
  width:30px;
  height:30px;
  border-radius:50%;
  background:#0B2429;
  position:absolute;
  top:30px;
  left:30px;
}
</style>`
    },
    {
        id: 34,
        name: 'Chrismas Tree',
        code: `<p id="a"/>
<p id="b"/>
<p id="c"/>
<style>
body{background:#007065}
p{
  position:fixed;
  left:50%;
  translate:-50% 0;
  width:0;
  height:0;
  border-left:125px solid transparent;
  border-right:125px solid transparent;
  border-bottom:100px solid #FFEECF;
}
#a{top:134px;border-bottom-color:#00A79D}
#b{top:84px;border-bottom-color:#F5C181}
#c{top:34px}
</style>`
    },
    {
        id: 35,
        name: 'Ice Cream',
        code: `<div>
<p id="a"/><p id="b"/>
</div>
<style>
*{margin:0}
body{
  background:#293462;
  display:grid;
  place-content:center;
}
div{
  width:100px;
  height:200px;
}
#a{
  width:100px;
  height:150px;
  background:#FFF1C1;
  border-radius:50px 50px 20px 20px
}
#b{
  margin:0 auto;
  width:30px;
  height:50px;
  background:linear-gradient(#A64942,#A64942 10px,#FE5F55 10px);
  border-radius: 0 0 10px 10px;
}
</style>`
    },
    {
        id: 36,
        name: 'Interleaved',
        code: `<p id="a"/><p/><p id="b"/><p/><p id="c"/>
<style>
*{margin:0}
body{
  background:#1A4341;
  display:flex;
  gap:25px;
  padding:0 25px;
}
p{
  flex:1;
  height:200px;
  background:#998235;
  border-radius:0 0 30px 30px;
}
#a,#b,#c{
  background:#F3AC3C;
  border-radius:30px 30px 0 0;
  align-self:flex-end;
}
</style>`
    },
    {
        id: 37,
        name: 'Tunnel',
        code: `<div>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center
}
div{
  width:250px;
  height:250px;
  background:#243D83;
  display:flex;
  justify-content:center;
  align-items:center;
  --s:150px;
}
div:before,div:after{
  content:'';
  display:block;
  width:var(--s);
  height:var(--s);
  background:#6592CF;
  position:absolute;
  rotate:15deg
}
div:after{
  --s:75px;
  background:#243D83;
  position:absolute;
  rotate:30deg
}
</style>`
    },
    {
        id: 38,
        name: 'Not Simply Square',
        code: `<p id="a"/><p>
<style>
*{margin:0}
body{background:linear-gradient(90deg,#FFF1C1,#FFF1C1 200px,#293462 200px)}
p{
  position:fixed;
  left:200px;
  width:100px;
  height:200px;
  background:linear-gradient(#FE5F55,#FE5F55 150px,#A64942 150px)
}
#a{
  transform-origin: bottom left;
  rotate:-90deg;
  top:100px
}
</style>`
    },
    {
        id: 39,
        name: 'Sunset',
        code: `<div><p>
<style>
*{margin:0}
body{
  background:#1A4341;
  display:grid;
  place-content:center
}
div{
  width:200px;
  height:200px;
  background:#998235;
  border-radius:50%;
  position:relative;
}
p{
  position:absolute;
  top:50%;
  left:50%;
  translate:-50% -50%;
  width:250px;
  height:250px;
  border-radius:50%;
  background-image:linear-gradient(0deg, #1A4341 50%, #F3AC3C 50%);
  background-size: 40px 40px;
  background-position: 0 -5px;
  clip-path: polygon(0 55px, 100% 55px, 100% 195px, 0 195px);
}
</style>`
    },
    {
        id: 40,
        name: 'Letter B',
        code: `<div><p>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center
}
div{
  box-sizing:border-box;
  width:200px;
  height:200px;
  border-radius:0 50% 50% 50%;
  position:relative;
  border:50px solid #243D83;
}
p{
  width:50px;
  height:50px;
  background:#6592CF;
  position:absolute;
  top:-66px;
}
</style>`
    },
    {
        id: 41,
        name: 'Fox Head',
        code: `<div>
<p id="a"/>
<p id="b"/>
<p id="c"/>
<p id="d"/>
</div>
<style>
body{
  background:#293462;
  display:grid;
  place-content:center
}
div{
  width:100px;
  height:140px;
  background:linear-gradient(#293462,#293462 40px,#FE5F55 40px);
  position:relative;
  overflow:hidden;
}
div:before,div:after{
  content:'';
  display:block;
  width:30px;
  height:30px;
  background:#293462;
  border-radius:50%;
  position:absolute;
  z-index:1;
  top:60px;
  left:15px;
}
div:after{left:55px}
p{
  margin:0;
  width:80px;
  height:80px;
  background:#FE5F55;
  border-radius:0 50% 50%;
  position:absolute;
}
#a{left:-30px}
#b{
  right:-30px;
  transform:rotateY(180deg)
}
#c{
  left:-30px;
  bottom:-40px;
  background:#293462
}
#d{
  right:-30px;
  bottom:-40px;
  transform:rotateY(180deg);
  background:#293462
}
</style>`
    },
    {
        id: 125,
        name: 'Root Learn',
        code: `<div class="c">
  <div class="t"></div>
  <div class="i"></div>
  <div class="r"></div>
  <div class="f"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #EFF2F1;
  }
  .c {
    width: 180px;
    height: 180px;
    overflow: hidden;
    position: relative;
  }
  .c::before {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background-color: #1C1C1C;
    position: absolute;
    rotate: 30deg;
    translate: -5px -4px;
  }
  .c::after {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background-color: #1C1C1C;
    position: absolute;
    right: -5px;
    bottom: -6px;
    rotate: 30deg;
  }
  .t {
    position: absolute;
    left: 20px;
    width: 130px;
    height: 90px;
    background: #1C1C1C;
    border-inline-width: 40px;
    border-radius: 0 45px 45px 0;
    display: grid;
    place-content: center;
  }
  .t::before {
    content: '';
    display: block;
    width: 50px;
    height: 60px;
    background: #EFF2F1;
    border-radius: 0 45px 45px 0;
  }
  .i {
    position: absolute;
    left: 20px;
    top: 90px;
    width: 40px;
    height: 90px;
    background: #1C1C1C;
  }
  .r {
    position: absolute;
    left: 67px;
    top: 85px;
    width: 46px;
    height: 95px;
    background: #1C1C1C;
    transform-origin: top left;
    transform: skew(30deg);
  }
  .f {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 40px;
    overflow: hidden;
  }
  .f::before {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background-color: #1C1C1C;
    position: absolute;
    left: -5px;
    bottom: -4px;
    rotate: -30deg;
  }
  .f::after {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background-color: #1C1C1C;
    position: absolute;
    right: -5px;
    bottom: -4px;
    rotate: 30deg;
  }
</style>`
    },
    {
        id: 126,
        name: 'Letter  A',
        code: `<div class="c">
  <div class="a a1"></div>
  <div class="a a2"></div>
  <div class="s s1"></div>
  <div class="s s2"></div>
</div>
<style>
  body {
    background: #62306D;
    display: grid;
    place-content: center;
  }
  .c {
    width: 154px;
    height: 140px;
    position: relative;
  }
  .a {
    width: 43px;
    height: 140px;
    position: absolute;
    transform-origin: bottom;
  }
  .a1 {
    right: 0;
    background: #C5B732;
    transform: skew(20deg);
  }
  .a2 {
    background: #FEF9CA;
    transform: skew(-20deg);
  }
  .s {
    width: 52px;
    height: 50px;
    position: absolute;
    transform-origin: bottom;
    bottom: 0;
  }
  .s1 {
    right: 6px;
    background: #AA445F;
    transform: skew(40deg);
  }
  .s2 {
    left: 6px;
    background: #E38F66;
    transform: skew(-40deg);
  }
</style> `
    }
]

export const BATTLE_LIST: List[] = [
    {
        id: 1,
        name: 'Pilot Battle',
        itemIds: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
        id: 2,
        name: 'Visibility',
        itemIds: [13,14,15,16,17,18]
    },
    {
        id: 3,
        name: 'Cursor',
        itemIds: [19,20]
    },
    {
        id: 4,
        name: 'Display',
        itemIds: [21,22,23,24,25,26,27,28]
    },
    {
        id: 5,
        name: 'Inline',
        itemIds: [29,30]
    },
    {
        id: 6,
        name: 'Conic',
        itemIds: [31,32]
    },
    {
        id: 7,
        name: 'Backface',
        itemIds: [33,34,35,36,37,38,39,40,41]
    },
    {
        id: 21,
        name: 'Rotate',
        itemIds: [125,126]
    }
]