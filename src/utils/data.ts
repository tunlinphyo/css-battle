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
        code: `<style>
html{
  background:linear-gradient(#b5e0ba,#b5e0ba)0 0/200px 200px#5d3a3a no-repeat;
}
</style>`
    },
    {
        id: 2,
        name: 'Carrom',
        code: `<style>
*{
  background:#62374e;
  margin:0
}
body{
  width:50px;
  height:50px;
  box-shadow:
    50px 50px#fdc57b,
    300px 50px#fdc57b,
    300px 200px#fdc57b,
    50px 200px#fdc57b
}
<style>`
    },
    {
        id: 3,
        name: 'Push Button',
        code: `<style>
html{
  background:#6592CF;
  box-sizing:border-box;
}
body{
  margin:75px 50px;
  width:300px;
  height:150px;
  background:#243D83;
}
body:before{
  content:'';
  display:block;
  width:150px;
  height:150px;
  translate:75px;
  border-radius:50%;
  background:#EEB850;
  box-shadow:inset 0 0 0 50px #243D83,0 0 0 50px #6592CF;
}
<style>`
    },
    {
        id: 4,
        name: 'Ups n Down',
        code: `<div></div>
<div></div>
<div></div>
<style>
html{
  background:#62306D;
  display:grid;
  place-content:center;
}
body{
  width:300px;
  height:200px;
  display:flex;
}
div{
  flex:1;
  border-radius:200px;
  background:linear-gradient(#62306D,50%,#F7EC7D 50%);
}
div:nth-child(2){
  rotate:180deg;
}
</style>`
    },
    {
        id: 5,
        name: 'Acid Rain',
        code: `<div></div>
<div id="a"></div>
<style>
body{
  background:#0B2429;
}
div{
  position:fixed;
  width:120px;
  height:120px;
  background:#F3AC3C;
  border-radius:120px;
  top:30px;
  left:200px;
}
#a{
  top:150px;
  left:80px;
  border-top-right-radius:0;
  box-shadow: 60px -60px 0 #998235;
}`
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
        code: `<style>
html{background:#0B2429}
body{
  position:fixed;
  left:167px;
  top:67px;
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
        code: `<div id="a"></div>
<style>
html{
  background:#222730;
  display:grid;
  place-content:center;
  margin:0
}
body{
  width:400px;
  height:150px;
  background:#4CAAB3;
  position:relative;
  display:grid;
  place-content:center
}
#a{
  width:150px;
  height:150px;
  background:#4CAAB3;
  rotate:45deg;
  box-shadow:0 0 0 50px #222730;
  display:grid;
  place-content:center
}
#a:before{
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
        id: 13,
        name: 'Totally Triangle',
        code: `<style>
html{
  background:linear-gradient(135deg,#F3AC3C 50%,transparent 50%) no-repeat 0 0/141px 141px #0B2429;
}
</style>`
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
      id: 19,
      name: 'Cube',
      code: `<style>
html{
  background:#0B2429;
  display:grid;
  place-content:center
}
body{
  width:100px;
  height:100px;
  background:#F3AC3C;
  translate:0 36px;
  rotate:45deg;
  position:relative
}
body:before{
  content:'';
  display:block;
  width:100px;
  height:50px;
  background:#1A4341;
  transform:skew(45deg) translate(25px, -50px)
}
body:after{
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
        code: `<style>
html{
  background:#F3AC3C;
  display:grid;
  place-content:center
}
body{
  width:200px;
  height:200px;
  position:relative;
  background:#1A4341;
  rotate:-90deg
}
body:before{
  content:'';
  display:block;
  width:100px;
  height:100px;
  background:#998235
}
body:after{
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
        code: `<div id="a"></div>
<div></div>
<style>
html{
  background:#62306D;
  display:grid;
  place-content:center
}
body{
  width: 240px;
  height: 100px;
  position:relative;
  display:flex;
  justify-content:space-between;
}
div{
  width:100px;
  height:100px;
  border-radius:50%;
  background:#F7EC7D;
  margin:0;
}
div:before{
  content:'';
  display:block;
  width:100px;
  height:150px;
  background:#E38F66;
  border-radius:50px;
  position:absolute;
  z-index:-1
}
#a:before{
  bottom:0;
  background:#AA445F;
}
</style>`
    },
    {
        id: 25,
        name: 'Blossom',
        code: `<div id="b"></div>
<div id="c"></div>
<style>
html{
  background:#998235;
  display:grid;
  place-content:center
}
body{
  width: 180px;
  height: 180px;
  position:relative;
}
body:before,body:after{
  content:'';
  display:block;
  position:absolute;
  width:80px;
  height: 60px;
  background:#F3AC3C;
  border-radius:0 50px
}
body:before{bottom:0}
body:after{
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
        code: `<div id="b"></div>
<div id="c"></div>
<div id="d"></div>
<style>
html{
  background:#6592CF;
  display:grid;
  place-content:center
}
body{
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
        code: `<style>
html{
  background:#E38F66;
  display:grid;
  place-content:center
}
body{
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
        code: `<p class="y"/>
<p class="z a"/>
<p class="y a"/>
<p class="z"/>
<p class="z b"/>
<p class="y"/>
<p class="z"/>
<p class="y b"/>
<style>
html{
  background:#1A4341;
  display:grid;
  place-content:center
}
body{
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
        code: `<style>
html{
  background:#AA445F;
  display:grid;
  place-content:center;
}
body{
  width:250px;
  height:200px;
  background:linear-gradient(90deg,#F7EC7D,#F7EC7D 50%,#E38F66 50%);
  border-radius:200px;
}
body:before{
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
        code: `<p>
<style>
html{
  background:#FFF;
  display:grid;
  place-content:center;
}
body{
  width:200px;
  height:200px;
  rotate:45deg;
  position:relative
}
body:before,body:after{
  content:'';
  display:block;
  width:200px;
  height:50px;
  background:#F3AC3C;
  position:absolute;
  top:75px
}
body:after{
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
        code: `<div id="a"></div>
<div id="b"></div>
<style>
*{margin:0}
html{
  background:#293462;
  display:grid;
  place-content:center;
}
body{
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
        code: `<style>
html{
  background:#6592CF;
  display:grid;
  place-content:center
}
body{
  width:250px;
  height:250px;
  background:#243D83;
  display:flex;
  justify-content:center;
  align-items:center;
  --s:150px;
}
body:before,body:after{
  content:'';
  display:block;
  width:var(--s);
  height:var(--s);
  background:#6592CF;
  position:absolute;
  rotate:15deg
}
body:after{
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
        code: `<div></div>
<style>
*{margin:0}
html{
  background:#1A4341;
  display:grid;
  place-content:center
}
body{
  width:200px;
  height:200px;
  background:#998235;
  border-radius:50%;
  position:relative;
}
div{
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
        code: `<style>
html{
  background:#6592CF;
  display:grid;
  place-content:center
}
body{
  box-sizing:border-box;
  width:200px;
  height:200px;
  border-radius:0 50% 50% 50%;
  position:relative;
  border:50px solid #243D83;
}
body:before{
  content:'';
  width:50px;
  height:50px;
  background:#6592CF;
  position:absolute;
  top:-50px;
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
      id: 42,
      name: 'Baby',
      code: `<div id="c">
  <p class="a"/>
  <p class="a a2"/>
  <p id="b"/>
</div>
<style>
body{
  background:#293462;
  display:grid;
  place-content:center
}
#c{
  width:200px;
  height:200px;
  background:#dd6b4d;
  border-radius:200px 200px 100px 100px;
  position:relative;
  overflow:hidden
}
#c:before,#c:after{
  content:'';
  display:block;
  width:100px;
  height:100px;
  border-radius:50px;
  background:#FFF1C1;
  position:absolute;
  top:-50px;
  left:0
}
#c:after{
  left:100px;
}
.a{
  width:60px;
  height:60px;
  background:#FFF1C1;
  border-radius:50%;
  position:absolute;
  left:20px;
  top:74px
}
.a2{left:120px}
#b{
  width:40px;
  height:10px;
  background:#FFF1C1;
  border-radius:10px;
  position:absolute;
  left:80px;
  top:154px
}
</style>`
    },
    {
      id: 43,
      name: 'Wrench',
      code: `<style>
html{
  background:#6592CF;
  display:grid;
  place-content:center
}
body{
  width:110px;
  height:242px;
  position:relative;
  overflow:hidden;
  translate: 0 1px;
  margin:0;
}
body:before,body:after{
  box-sizing:border-box;
  content:'';
  display:block;
  width:150px;
  height:242px;
  border-radius:70px;
  border:30px solid #243D83;
  position:absolute;
  left:-80px;
  clip-path: polygon(80px 0,100% 0,100% 100%,80px 100%);
}
body:after{
  left:40px;
  rotate:180deg
}
</style>`
    },
    {
      id: 44,
      name: 'Stripes',
      code: `<style>
html{
  background:#1A4341;
  display:grid;
  place-content:center
}
body{
  width:160px;
  height:180px;
  position:relative;
  background-image:repeating-linear-gradient(#F3AC3C,#F3AC3C 20px,#1A4341 20px,#1A4341 40px);
  background-size: 40px
}
body:before,body:after{
  content:'';
  display:block;
  position:absolute;
  width:300px;
  height:300px;
  background:#1A4341;
  border-radius:50%;
  top:-60px;
  left:-270px
}
body:after{left:130px}
</style>`
    },
    {
      id: 45,
      name: 'Magical Tree',
      code: `<p class="h d s"/>
<p class="h l m"/>
<p class="h d e"/>
<p class="v l se"/>
<p class="v d sm"/>
<p class="v l c"/>
<p class="v d em"/>
<p class="v l ee"/>
<style>
*{margin:0}
body{background:#1A4341}
.d{
  background:#998235;
  z-index:1
}
.l{
  background:#F3AC3C;
  z-index:2
}
.h{
  position:absolute;
  width:270px;
  height:30px;
  left:50%;
  translate:-50% 0;
}
.s{
  width:150px;
  top:120px
}
.m{top:180px}
.e{top:240px}
.v {
  position:absolute;
  width:30px;
  height:100%;
}
.se{
  left:65px;
  height:210px
}
.ee{
  right:65px;
  height:210px
}
.sm{
  left:125px;
  height:150px
}
.em{
  right:125px;
  height:150px
}
.c{left:185px}
</style>`
    },
    {
      id: 46,
      name: 'Mountains',
      code: `<p>
<style>
body{
  background:#293462;
  display:grid;
  place-content:center
}
p{
  background:#FFF1C1;
  width:200px;
  height:200px;
  border-radius:100%;
  position:relative;
  overflow:hidden;
}
p:before,p:after{
  content:'';
  display:block;
  position:absolute;
  width:100%;
  height:100%;
  background:#FE5F55;
  transform-origin:top left;
  rotate:45deg
}
p:before{
  top:59px;
  left:142px;
}
p:after{
  top:129px;
  left:30px;
}
</style>`
    },
    {
      id: 47,
      name: 'Corona Virus',
      code: `<div id="a">
<p class="b d"/>
<p class="b e"/>
<p class="b f"/>
<p class="c g"/>
<p class="c h"/>
<p class="c i"/>
</div>
<style>
body{
  background:#1A4341;
  display:grid;
  place-content:center
}
#a{
  width:100px;
  height:100px;
  background:#F3AC3C;
  border-radius:50%;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center
}
p{
  position:absolute;
  margin:0;
}
.c{
  --s:30px;
  width:var(--s);
  height:var(--s);
  background:#998235;
  border-radius:50%;
  z-index:1
}
.g{translate:-15px -15px}
.h{
  --s:20px;
  translate:0 25px
}
.i{
  --s:10px;
  translate:25px -25px;
}
.b{
  width:10px;
  height:180px;
  background:#F3AC3C;
  border-radius:10px
}
.d{translate:0 -10px}
.e{transform: rotate(60deg) translateY(-10px)}
.f{transform: rotate(-60deg) translateY(10px)}
</style>`
    },
    {
      id: 48,
      name: 'Wash Your Hands',
      code: `<p>
<style>
body{
  background:#293462;
  display:grid;
  place-content:center;
}
p{
  width:200px;
  height:100px;
  background:#FE5F55;
  translate:0 -10px;
  border-radius:20px;
  display:grid;
  place-content:center;
  box-shadow:0 20px 0 0 #A64942;
}
p:before{
  content:'';
  display:block;
  width:140px;
  height:40px;
  background:#A64942;
  border-radius:40px
}
</style>`
    },
    {
      id: 49,
      name: 'Stay at Home',
      code: `<div id="a">
<p id="b"/>
<p id="c"/>
</div>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center;
}
#a{
  width:200px;
  height:200px;
}
p{margin:0}
#b{
  width:100%;
  height:100px;
  background:#243D83;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
#c{
  width:150px;
  height:100px;
  margin:0 auto;
  background:#243D83;
  position:relative;
  border-radius:0 0 10px 10px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
}
#c:before,#c:after{
  content:'';
  display:block;
  background:#EEB850;
}
#c:before{
  width:100px;
  height:10px;
  border-radius:10px;
  margin-top:-5px
}
#c:after{
  width:50px;
  height:50px;
  border-radius:10px 10px 0 0;
}
</style>`
    },
    {
      id: 50,
      name: 'Use Hand Sanitizer',
      code: `<div id="a">
  <div id="b">
    <div id="c"></div>
  </div>
  <div id="d"></div>
</div>
<style>
body{
  background:#1A4341;
  display:grid;
  place-content:center;
}
#a{
  width:200px;
  height:200px;
  position:relative;
}
#a:before,#a:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#998235;
  position:absolute;
  right:0;
}
#a:before{top:50px}
#a:after{top:80px}
#b{
  width:100px;
  height:160px;
  position:absolute;
  top:40px;
  left:50px;
}
#b:before,#b:after{
  content:'';
  display:block;
  margin:0 auto;
}
#b:before{
  width:50px;
  height:20px;
  background:#F3AC3C;
  border-radius:10px 10px 0 0;
}
#b:after{
  position:absolute;
  top:-40px;
  left:40px;
  width:20px;
  height:40px;
  background:#F3AC3C;
}
#c{
  width:100px;
  height:140px;
  border-radius:20px;
  background:linear-gradient(#F3AC3C,#F3AC3C 55px,#998235 55px);
  position:relative
}
#c:before,#c:after{
  content:'';
  display:block;
  width:50px;
  height:50px;
  border-radius:50%;
  position:absolute;
  background:#998235;
  top:30px
}
#c:after{
  right:0;
  background:#F3AC3C
}
#d{
  width:150px;
  height:20px;
  background:#F3AC3C;
  position:absolute;
  right:0;
  border-radius:20px
}
#d:after{
  content:'';
  display:block;
  width:20px;
  height:40px;
  background:#F3AC3C;
  border-radius:20px;
  position:absolute;
  right:0;
}
</style>`
    },
    {
      id: 51,
      name: 'Wear a Mask',
      code: `<div id="a">
  <div class="r"></div>
  <div id="b">
    <div id="d"></div>
  </div>
  <div class="r c"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#293462;
  display:grid;
  place-content:center;
}
#a{
  width:270px;
  height:100px;
  display:grid;
  grid-template-columns:60px 1fr 60px;
  align-items:flex-start;
}
#b{
  height:100px;
  background:#FFF1C1;
  border-radius:0 0 50px 50px;
  position:relative
}
#b:before{
  content:'';
  display:block;
  width:40px;
  height:40px;
  background:#FE5F55;
  border-radius:50%;
  position:absolute;
  bottom:20px;
  right:20px;
}
.r{
  width:70px;
  height:60px;
  border:10px solid #FFF1C1;
  border-radius:60px 0 0 60px;
  border-right:none;
}
.c{transform:rotateY(180deg) translate(10px, 0)}
#d{
  position:absolute;
  top:20px;
  left:20px;
  width:40px;
  height:30px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:stretch
}
#d:before,#d:after{
  content:'';
  display:block;
  height:10px;
  border-radius:10px;
  background:#FE5F55;
}
</style>`
    },
    {
      id: 52,
      name: 'Break the Chain',
      code: `<div class="a">
  <div class="b s">
    <div class="c"><div class="l"></div></div>
    <div class="c"><div class="l x"></div></div>
    <div class="c"><div class="l"></div></div>
  </div>
  <div class="b e">
    <div class="c"></div>
    <div class="c"></div>
    <div class="c"></div>
    <div class="c"></div>
  </div>
</div>
<style>
body{
  background:#6592CF;
  display:grid;
  place-content:center
}
.a{
  width:320px;
  height:80px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end
}
.b{
  display:flex;
  gap:25px;
  height:60px
}
.c{
  width:20px;
  height:60px;
  position:relative
}
.c:before,.c:after{
  content:'';
  display:block;
  position:absolute;
  z-index:1;
  background:#243D83
}
.c:before{
  width:20px;
  height:20px;
  border-radius:50%
}
.c:after{
  width:10px;
  height:50px;
  top:10px;
  left:5px
}
.l{
  --s:40px;
  position:absolute;
  width:var(--s);
  height:var(--s);
  border-radius:50%;
  background:#EEB850;
  translate: -10px -10px
}
.x{
  --s:60px;
  translate: -20px -30px
}
</style>`
    },
    {
      id: 53,
      name: 'Pastel Logo',
      code: `<div class="a">
  <div class="c"></div>
  <div class="b"></div>
</div>
<style>
body{
  background:#19191A;
  display:grid;
  place-content:center;
}
.a{
  width:150px;
  height:200px;
  position:relative;
}
.b{
  position:absolute;
  width:150px;
  height:150px;
  border-radius:50%;
  background-image: repeating-conic-gradient(
    #4F77FF 0%,
    #4F77FF 50%,
    #9AD5FF 50%,
    #9AD5FF 75%,
    #4F77FF 75%
  );
}
.c{
  width:50%;
  height:65%;
  background:#F9E492;
  position:absolute;
  bottom:0
}
</style>`
    },
    {
      id: 54,
      name: 'Black Lives Matter',
      code: `<div class="a">
  <div class="b">
    <div class="h"></div>
    <div class="h l"></div>
    <div class="h"></div>
    <div class="h s"></div>
  </div>
  <div class="c"></div>
  <div class="t"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#F9E492;
  display:grid;
  place-content:center;
}
.a{
  width:100px;
  height:145px;
  position:relative;
}
.b{
  width:100px;
  height:60px;
  padding-bottom:5px;
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;
  gap:5px;
}
.t{
  width:20px;
  height:65px;
  background:#191919;
  border-radius:20px;
  position:absolute;
  left:0;
  top:0;
  transform-origin:top left;
  translate:40px 39px;
  rotate:60deg;
  outline:5px solid #F9E492;
}
.h{
  width:20px;
  height:45px;
  background:#191919;
  border-radius:20px;
}
.l{height:55px}
.s{height:35px}
.c{
  width:100px;
  height:85px
}
.c:before,.c:after{
  content:'';
  display:block;
  background:#191919;
  border-radius:0 0 10px 10px
}
.c:before{
  width:100px;
  height:40px
}
.c:after{
  width:50px;
  height:45px;
  margin:0 auto
}
</style>`
    },
    {
      id: 55,
      name: 'Windmill',
      code: `<div class="a">
  <div class="b"></div>
  <div class="c"></div>
  <div class="d"></div>
  <div class="e"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center;
}
.a{
  width:200px;
  height:200px;
  position:relative;
  --c:#4F77FF;
}
.a > div {
  width:100px;
  height:100px;
  border-radius:50%;
  background-image: repeating-conic-gradient(
    var(--c) 0%,
    var(--c) 50%,
    transparent 50%,
    transparent 100%
  );
  position:absolute
}
.b{
  left:50px;
}
.c{
  left:50px;
  bottom:0;
  rotate:180deg
}
.d{
  --c:#F9E492;
  top:50px;
  rotate:-90deg
}
.e{
  --c:#F9E492;
  top:50px;
  right:0;
  rotate:90deg
}
</style>`
    },
    {
      id: 56,
      name: 'Skull',
      code: `<div id="a">
  <div id="b"></div>
  <div id="c">
    <div class="d e"></div>
    <div class="d f"></div>
    <div class="d g"></div>
  </div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center
}
#a{
  width:120px;
  height:130px
}
#b{
  width:120px;
  height:100px;
  background:#4F77FF;
  border-radius:100px 100px 18px 18px;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  gap:10px;
  padding-bottom:7px
}
#b:before,#b:after{
  content:'';
  display:block;
  width:40px;
  height:40px;
  background:#191919;
  border-radius:50%
}
#c{
  width:80px;
  height:30px;
  background:#4F77FF;
  margin:0 auto;
  border-radius:0 0 20px 20px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  gap:5px
}
#c:before{
  content:'';
  display:block;
  width:20px;
  height:20px;
  background:#191919;
  border-radius:50%;
  position:absolute;
  top:-9px
}
.d{
  width:10px;
  height:10px;
  background:#191919;
  border-radius:10px 10px 0 0
}
</style>`
    },
    {
      id: 57,
      name: 'Pillars',
      code: `<div id="a">
  <div class="b c"></div>
  <div class="b d"></div>
  <div class="b e"></div>
  <div class="b f"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center
}
#a{
  width:110px;
  height:110px;
  background:#4F77FF;
  position:relative
}
.b{
  position:absolute;
  width:60px;
  height:60px;
  background:#191919;
  border-radius:50%
}
.b:before,.b:after{
  content:'';
  display:block;
  width:45px;
  height:45px;
  border-radius:50%;
  background:#F9E492;
  position:absolute
}
.b:after{
  width:30px;
  height:30px;
  background:#4F77FF
}
.c{
  top:-20px;
  left:-20px
}
.d{
  top:-20px;
  right:-20px;
  rotate:90deg
}
.e{
  bottom:-20px;
  left:-20px;
  rotate:-90deg
}
.f{
  bottom:-20px;
  right:-20px;
  rotate:180deg
}
</style>`
    },
    {
      id: 58,
      name: 'Rose',
      code: `<div id="a">
  <div id="b"></div>
  <div id="c"></div>
  <div id="d"></div>
  <div id="e"></div>
  <div id="f"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center
}
#a{
  width:140px;
  height:210px;
  position:relative
}
#a>*{position:absolute}
#b{
  width:40px;
  height:110px;
  bottom:0;
  left:50px
}
#b:before{
  content:'';
  display:block;
  position:absolute;
  width:40px;
  height:40px;
  border-radius:50%;
  background:#F9E492;
}
#b:after{
  content:'';
  display:block;
  position:absolute;
  width:20px;
  height:110px;
  border-radius:20px;
  background:#F9E492;
  left:10px;
  top:0;
}
#c{
  width:100px;
  height:100px;
  background:#4F77FF;
  border-radius:50%;
  left:20px;
  top:20px;
}
#d{
  width:140px;
  height:30px;
  background:#4F77FF;
  top:40px;
  border-radius:5px 5px 30px 30px;
  box-shadow:0 0 0 10px #191919
}
#e{
  width:100px;
  height:30px;
  background:#4F77FF;
  top:20px;
  left:20px;
  border-radius:5px 5px 30px 30px;
  box-shadow:0 0 0 10px #191919;
}
#f{
  width:30px;
  height:30px;
  background:#4F77FF;
  left:55px;
  border-radius:50%;
  box-shadow:0 0 0 10px #191919;
}
</style>`
    },
    {
      id: 59,
      name: 'Earth',
      code: `<div id="a">
  <div id="b"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center
}
#a{
  width:150px;
  height:150px;
  position:relative;
  border-radius:50%;
  background-image:repeating-linear-gradient(#4F77FF,#4F77FF 30px,#191919 30px,#191919 40px);
}
#a:before,#a:after{
  content:'';
  display:block;
  position:absolute;
  width:190px;
  height:190px;
  border-radius:50%;
  border:10px solid #191919;
  top:-30px;
}
#a:before{left:30px}
#a:after{right:30px}
#b{
  position:absolute;
  left:50%;
  translate:-50% 0;
  width:10px;
  height:150px;
  background:#191919
}
</style>`
    },
    {
      id: 60,
      name: 'Evil Triangles',
      code: `<style>
*{box-sizing:border-box}
html{
  background:#191919;
  display:grid;
  place-content:center
}
body{
  width:200px;
  height:150px;
  position:relative;
  background-image:  linear-gradient(135deg, #4F77FF 25%, transparent 25%), linear-gradient(225deg, #4F77FF 25%, transparent 25%), linear-gradient(45deg, #4F77FF 25%, transparent 25%), linear-gradient(315deg, #4F77FF 25%, #191919 25%);
  background-position:  50px 0, 50px 0, 0 0, 0 0;
  background-size: 100px 100px
}
</style>`
    },
    {
      id: 61,
      name: 'ImprovMX',
      code: `<div class="a"></div>
<div class="b"></div>
<div class="c">
  <div class="d"></div>
</div>
<div class="e"></div>
<div class="f"></div>
<style>
*{box-sizing:border-box}
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:200px;
  height:168px;
  position:relative;
  display:flex;
  justify-content:center;
}
div{
  position:absolute;
  border-color:#5DBCF9!important;
}
.a{
  width:110px;
  border-top:10px solid;
  bottom:0;
}
.b{
  width:200px;
  border-top:10px solid;
  bottom:20px;
}
.c{
  width:180px;
  height:68px;
  bottom:40px;
  display:flex;
  overflow:hidden
}
.d{
  left:50%;
  translate:-50% 0;
  border-left:10px solid;
  height:65px;
  top:5px;
}
.c:before,.c:after{
  content:'';
  display:block;
  flex:1;
  border:10px solid #5DBCF9;
  border-bottom:none;
}
.c:before{
  border-right:none;
  transform-origin: top right;
  rotate:-30deg;
}
.c:after{
  border-left:none;
  transform-origin: top left;
  rotate:30deg;
}
.e{
  width:100px;
  height:60px;
  top:30px;
  border:10px solid;
  border-bottom:none
}
.f{
  width:50px;
  height:30px;
  border:10px solid;
  border-bottom:none
}
</style>`
    },
    {
      id: 62,
      name: 'Sunset',
      code: `<div id="a">
<div id="b"></div>
<div id="c"></div>
<div id="d"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center;
}
#a{
  width:150px;
  height:200px;
  position:relative;
  background:#F2AD43;
  border-radius:200px 200px 50px 50px;
  overflow:hidden;
}
div{
  position:absolute;
  width:200px;
  height:200px;
  border-radius:50%;
}
#b{
  width:60px;
  height:60px;
  background:#FFF58F;
  left:45px;
  top:90px;
}
#c{
  background:#E08027;
  bottom:-100px;
  left:-100px
}
#d{
  background:#824B20;
  bottom:-100px;
  right:-100px
}
</style>`
    },
    {
      id: 63,
      name: 'Command Key',
      code: `<div></div>
<div id="a"></div>
<div id="b"></div>
<div id="c"></div>
<div id="d"></div>
<style>
*{box-sizing:border-box}
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:190px;
  height:190px;
  position:relative;
  translate: 1px -1px;
}
div{
  width:70px;
  height:70px;
  position:absolute;
  border:10px solid #5DBCF9;
  border-radius:35px 35px 0 35px;
}
#a{
  right:0;
  rotate:90deg
}
#b{
  bottom:0;
  rotate:-90deg
}
#c{
  bottom:0;
  right:0;
  rotate:180deg
}
#d{
  border-radius:0;
  left:60px;
  top:60px
}
</style>`
    },
    {
      id: 64,
      name: 'Door Knob',
      code: `<div></div>
<style>
*{box-sizing:border-box}
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:160px;
  height:160px;
  position:relative;
  background:#E08027;
  border-radius:50%;
  box-shadow:inset 0 0 0 30px #824B20;
  display:flex;
  justify-content:center;
  align-items:center
}
body:before,body:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  background:#FFF58F;
  border-radius:50%;
  position:absolute
}
body:before{left:20px}
body:after{right:20px}
div{
  width:120px;
  height:120px;
  border-radius:50%;
  border:20px solid #FFF58F;
  border-left-color:transparent;
  border-top-color:transparent;
  rotate:45deg
}
</style>`
    },
    {
      id: 65,
      name: 'Max Volume',
      code: `<div id="a"></div>
<div id="b"></div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:250px;
  height:200px;
  position:relative;
}
#a{
  width:125px;
  height:200px;
  position:absolute;
}
#a:before,#a:after{
  content:'';
  display:block;
  position:absolute;
  top:50%;
  translate:0 -50%;
}
#a:before {
  right:0;
  border-top:100px solid transparent;
  border-bottom:100px solid transparent;
  border-right:100px solid #5DBCF9;
}
#a:after{
  width:60px;
  height:50px;
  background:#5DBCF9;
  border-radius:10px
}
#b{
  width:200px;
  height:200px;
  position:absolute;
  right:0;
  border-radius:50%;
  box-shadow:inset 0 0 0 10px #5DBCF9,inset 0 0 0 25px #191919,inset 0 0 0 35px #5DBCF9,inset 0 0 0 50px #191919,inset 0 0 0 60px #5DBCF9;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
}
</style>`
    },
    {
      id: 66,
      name: 'Batmicky',
      code: `<div id="b">
  <div id="c"></div>
</div>
<div class="d"></div>
<div class="d e"></div>
<div class="f"></div>
<div class="f g"></div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center
}
body{
  width:250px;
  height:100px;
  background:#F2AD43;
  position:relative;
}
#b{
  position:absolute;
  left:85px;
  width:80px;
  height:30px;
  background:#191919;
  border-radius:0 0 10px 10px
}
#c{
  position:absolute;
  left:30px;
  bottom:0;
  width:20px;
  height:20px;
  background:#F2AD43;
}
#c:before,#c:after{
  content:'';
  display:block;
  width:10px;
  height:10px;
  border-radius:50%;
  background:#F2AD43;
  position:absolute;
  left:-5px;
  top:-5px;
}
#c:after{
  left:initial;
  right:-5px
}
.d{
  width:100px;
  height:100px;
  position:absolute;
  border-radius:50%;
  background:#191919;
  left:-50px
}
.e{
  left:initial;
  right:-50px
}
.f{
  width:200px;
  height:200px;
  position:absolute;
  border-radius:50%;
  background:#191919;
  top:60px;
  left:-35px
}
.g{
  left:initial;
  right:-35px
}
</style>`
    },
    {
      id: 67,
      name: 'Video Reel',
      code: `<style>
html{
  background:#5DBCF9;
}
body{
  margin:0;
  position:fixed;
  top:70px;
  left:55px;
  width:140px;
  height:110px;
  background:#191919;
  box-shadow:
    -150px -100px 0 #191919,
    -150px 50px 0 #191919,
    -150px 200px 0 #191919,
    0 -150px 0 #191919,
    0 150px 0 #191919,
    150px -100px 0 #191919,
    150px 50px 0 #191919,
    150px 200px 0 #191919,
    300px -150px 0 #191919,
    300px 0 0 #191919,
    300px 150px 0 #191919
  ;
}
</style>`
    },
    {
      id: 68,
      name: 'Bell',
      code: `<style>
*{margin:0}
html{
  background:#191919;
  display:grid;
  place-content:center
}
body{
  width:120px;
  height:120px;
  background:#E08027;
  position:relative;
  border-radius:50% 50% 10px 10px
}
body:before,body:after{
  content:'';
  display:block;
  width:50px;
  height:50px;
  background:#F2AD43;
  position:absolute;
  z-index:-1;
  top:-24px;
  left:35px;
  border-radius:50%
}
body:after{
  background:#824B20;
  top:initial;
  bottom:-25px;
}
</style>`
    },
    {
      id: 69,
      name: 'PushOwl',
      code: `<div id="a"></div>
<div class="b"></div>
<div class="b c"></div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:222px;
  height:145px;
  position:relative
}
#a{
  width:100px;
  height:100px;
  background:#E08027;
  position:absolute;
  bottom:20px;
  left:50%;
  translate:-50% 0;
  rotate:45deg;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%)
}
.b{
  width:114px;
  height:114px;
  position:absolute;
  background:#E08027;
  border-radius:0 50% 50% 50%;
  display:grid;
  place-content:center;
}
.b:before {
  content:'';
  display:block;
  width:90px;
  height:90px;
  background:#191919;
  border-radius:50%
}
.b:after{
  content:'';
  box-sizing:border-box;
  display:block;
  width:30px;
  height:30px;
  border-radius:50%;
  position:absolute;
  left:50%;
  top:55%;
  translate:-50% -50%;
  border:9px solid #E08027;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%)
}
.c{
  right:0;
  transform:rotateY(180deg);
  box-shadow:0 0 0 10px #191919;
}
</style>`
    },
    {
      id: 70,
      name: 'Froggy',
      code: `<div id="a">
  <div id="b"></div>
</div>
<div id="c">
  <div id="d"></div>
  <div id="e"></div>
</div>
<style>
body{
  background:#293462;
  display:grid;
  place-content:center;
}
#a{
  width:150px;
  height:100px;
  position:relative;
  background:#A64942;
  translate:0 10px;
  border-radius:100px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
}
#a:before,#a:after {
  content:'';
  display:block;
  position:relative;
  z-index:1;
  width:10px;
  height:10px;
  border-radius:50%;
  background:#293462;
  translate:0 5px;
}
#b{
  width:400px;
  height:400px;
  border-radius:50%;
  background:#FE5F55;
  position:absolute;
  z-index:0;
  left:50%;
  translate:-50% 0;
  bottom:30px;
}
#c{
  position:absolute;
  width:120px;
  height:50px;
  left:50%;
  translate:-50% 0;
  top:85px;
  display:flex;
  justify-content:space-between;
}
#d,#e{
  box-sizing:border-box;
  width:50px;
  height:50px;
  border-radius:50%;
  background:#293462;
  border:10px solid #FE5F55;
  box-shadow:inset 0 0 0 10px #FFF1C1
}
</style>`
    },
    {
      id: 71,
      name: 'Elephant',
      code: `<div id="c">
  <div id="d"></div>
  <div id="e"></div>
</div>
<div id="a">
  <div id="b"></div>
</div>
<div id="f"></div>
<style>
body{
  background:#998235;
  display:flex;
  justify-content:center;
  align-items:center;
}
#a{
  width:180px;
  height:180px;
  position:relative;
  background:#1A4341;
  border-radius:50%;
  display:grid;
  place-content:center;
}
#b{
  width: 100px;
  height:40px;
  display:flex;
  justify-content:space-between;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}
#b:before,#b:after{
  box-sizing:border-box;
  content:'';
  display:block;
  width:40px;
  height:40px;
  border-radius:50%;
  border:10px solid #998235;
  background:#0B2429;
}
#c{
  position:absolute;
  width:300px;
  height:180px;
  display:flex;
  justify-content:space-between;
}
#d,#e{
  width:80px;
  height:180px;
  background:#0B2429;
  border-radius:50%;
  box-shadow:inset 16px 0 0 #1A4341;
}
#e{transform:rotateY(180deg)}
#f{
  position:absolute;
  left:50%;
  translate:-50% 0;
  bottom:0;
  width:120px;
  height:120px
}
#f:before{
  box-sizing:border-box;
  content:'';
  display:block;
  width:120px;
  height:120px;
  border-radius:50%;
  border:20px solid #fff;
  position:absolute;
  top:10px;
  clip-path:polygon(0 0,100% 0,100% 50%,0 50%);
}
#f:after{
  content:'';
  display:block;
  width:40px;
  height:120px;
  background:#0B2429;
  border-radius:40px 40px 0 0;
  position:absolute;
  left:40px;
}
</style>`
    },
    {
      id: 72,
      name: 'Sheep',
      code: `<div id="a">
  <div id="b"></div>
  <div class="b"></div>
  <div class="b c"></div>
  <div class="b d"></div>
  <div class="b e"></div>
</div>
<style>
body{
  background:#243D83;
  display:flex;
  justify-content:center;
  align-items:center;
}
#a{
  width:170px;
  height:170px;
  position:relative;
  border-radius:50%;
  display:grid;
  place-content:center;
  display:flex;
  justify-content:center;
  align-items:center;
}
#a:before{
  content:'';
  display:block;
  width:100px;
  height:100px;
  background:#6592CF;
}
#b{
  width:60px;
  height:80px;
  background:#243D83;
  top:30px;
  position:absolute;
  border-radius:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
}
#b:before,#b:after{
  content:'';
  display:block;
  width:10px;
  height:10px;
  border-radius:50%;
  background:#6592CF;
}
.b{
  width:170px;
  height:60px;
  position:absolute;
  display:flex;
  justify-content:space-between;
}
.b:before,.b:after{
  content:'';
  display:block;
  width:50px;
  height:60px;
  background:#6592CF;
  border-radius:50%;
}
.c{rotate:90deg}
.d{width:164px;rotate:45deg}
.e{width:164px;rotate:-45deg}
</style>`
    },
    {
      id: 73,
      name: 'Happy Tigar',
      code: `<div id="f"></div>
<div id="a">
  <div id="b"></div>
  <div id="c"></div>
  <div id="d">
    <div id="e"></div>
  </div>
</div>
<style>
body{
  background:#F3AC3C;
  display:grid;
  place-content:center
}
#f{
  width:170px;
  height:60px;
  position:absolute;
  left:115px;
  top:65px;
  display:flex;
  justify-content:space-between;
}
#f:before,#f:after{
  content:'';
  display:block;
  width:40px;
  height:40px;
  border:10px solid #998235;
  background:#1A4341;
  border-radius:50%
}
#a{
  width:150px;
  height:150px;
  background:#998235;
  border-radius:100px 100px 80px 80px;
  position: relative;
  overflow:hidden;
}
#a>div{
  position:absolute;
  left:50%;
  translate:-50% 0;
}
#b{
  width:0;
  height:0;
  border-left:25px solid transparent;
  border-right:25px solid transparent;
  border-top:25px solid #1A4341;
}
#c{
  width:100px;
  height:20px;
  top:60px;
  display:flex;
  justify-content:space-between;
}
#c:before,#c:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  background:#1A4341;
  border-radius:50%
}
#d{
  width:100px;
  height:40px;
  bottom:15px;
  background:#fff;
  border-radius:10px 10px 30px 30px
}
#d:before,#d:after{
  content:'';
  display:block;
  width:20px;
  height:20px;
  border:10px solid #1A4341;
  border-radius:50%;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  position:absolute;
  bottom:10px
}
#d:before{left:15px}
#d:after{right:15px}
#e{
  position:absolute;
  width:10px;
  height:30px;
  background:#1A4341;
  left:45px;
  bottom:20px;
}
</style>`
    },
    {
      id: 74,
      name: 'Danger Hoodle',
      code: `<div class="a b"></div>
<div class="a c"></div>
<div class="a d"></div>
<div class="a e"></div>
<div class="a f"></div>
<div class="g"></div>
<div class="h"></div>
<style>
body{
  background:#191919;
  margin:0;
}
.h {
  box-sizing:border-box;
  position:absolute;
  z-index:1;
  top:135px;
  right:85px;
  width:50px;
  height:30px;
  border-radius:20px 30px 30px 20px;
  background:#E08027;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-end;
  padding:2px 10px;
}
.h:before,.h:after{
  content:'';
  display:block;
  width:10px;
  height:10px;
  border-radius:50%;
  background:#191919;
}
.g{
  position:absolute;
  z-index: 0;
  width:40px;
  height:30px;
  border:5px solid #E08027;
  border-radius:20px 0 0 0;
  position:absolute;
  top:155px;
  left:230px;
  box-shadow:0 0 0 10px #191919, 0 0 0 15px #E08027;
}
.g:before,.g:after{
  content:'';
  display:block;
  width:80px;
  height:20px;
  position:absolute;
  bottom:-20px;
  right:-20px;
  background:#191919;
}
.g:before{
  background:linear-gradient(90deg,#E08027,5px,#191919 5px,15px,#E08027 15px,20px,#191919 20px, #191919)
}
.g:after{
  width:20px;
  height:70px;
}
.a{
  width:30px;
  height:90px;
  border:5px solid #E08027;
  border-radius:40px 40px 0 0;
  position:absolute;
  box-shadow:0 0 0 10px #191919, 0 0 0 15px #E08027;
}
.b{
  transform:rotateX(180deg);
  top:70px;
  height:65px;
}
.c{
  height:45px;
  top:55px;
}
.d{
  bottom:55px;
  transform:rotateX(180deg);
  height:120px;
}
.e{
  top:55px;
  height:120px;
}
.f{
  bottom:55px;
  transform:rotateX(180deg);
  height:65px;
}
.a{left:-20px}
.c{left:30px}
.d{left:80px;z-index:0}
.e{left:130px}
.f{left:180px}
.a:before{
  content:'';
  display:block;
  width:70px;
  height:20px;
  background:#f00;
  position:absolute;
  left:-20px;
  bottom:-20px;
  background:linear-gradient(90deg,#E08027,5px,#191919 5px,15px,#E08027 15px,20px,#191919 20px, #191919)
}
</style>`
    },
    {
      id: 75,
      name: 'Hippo',
      code: `<div id="a">
  <div id="b"></div>
  <div id="c"></div>
  <div id="d"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#191919;
  display:grid;
  place-content:center;
}
#a{
  width:150px;
  height:170px;
  translate:0 10px;
  position:relative;
}
#a>div{
  position:absolute;
  left:50%;
  translate:-50% 0;
  display:flex;
  justify-content:space-between;
}
#a>div:before,#a>div:after{
  content:'';
  display:block;
  box-sizing:border-box
}
#b{
  top:-5px;
  width:100px;
  height:30px;
}
#b:before,#b:after{
  width:20px;
  height:30px;
  border-radius:50%;
  background:#000;
  rotate:-45deg;
  border:5px solid #FE5F55;
}
#b:after{rotate:45deg}
#c{
  top:0;
  width:130px;
  height:110px;
  border-radius:60px 60px 0 0;
  background:#FE5F55;
  align-items:center;
  padding-inline:25px;
}
#c:before,#c:after{
  width:10px;
  height:10px;
  background:#000;
  border-radius:50%
}
#d{
  bottom:0;
  width:150px;
  height:100px;
  background:#A64942;
  border-radius:140px 140px 110px 110px;
  padding:20px 25px;
}
#d:before,#d:after{
  width:20px;
  height:30px;
  background:#000;
  border-radius:50%;
  rotate:45deg
}
#d:after{rotate:-45deg}
</style>`
    },
    {
      id: 76,
      name: 'Beeee',
      code: `<div id="a">
  <div id="b"></div>
  <div id="c"></div>
</div>
<style>
*{box-sizing:border-box}
body{
  background:#998235;
  display:grid;
  place-content:center
}
#a{
  width:150px;
  height:150px
}
#b{
  width:150px;
  height:75px;
  display:flex
}
#b:before,#b:after{
  content:'';
  width:75px;
  height:75px;
  background:#fff;
  border-radius:75px 75px 0 75px
}
#b:after{transform:rotateY(180deg)}
#c{
  width:150px;
  height:75px;
  background:#EFF33C;
  border-radius:75px;
  background:linear-gradient(90deg,#191919,25px,#EFF33C 25px,#EFF33C)0/35px;
  position:relative;
  overflow:hidden
}
#c:before,#c:after{
  content:'';
  display:block;
  position:absolute
}
#c:before{
  right:0;
  width:50px;
  height:75px;
  background:#EFF33C
}
#c:after{
  width:15px;
  height:15px;
  background:#191919;
  border-radius:50%;
  top:20px;
  right:20px
}
</style>`
    },
    {
      id: 77,
      name: 'Notes',
      code: `<div class="a">
  <div class="b"></div>
  <div class="c"></div>
</div>
<div class="a e">
  <div class="b"></div>
  <div class="c"></div>
</div>
<div class="a f">
  <div class="b"></div>
  <div class="c"></div>
</div>
<div class="a g">
  <div class="b"></div>
  <div class="c"></div>
</div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:290px;
  height:120px;
  position:relative;
  --c:#FE5F55;
  --t:0;
  --r:0;
}
.e {
  --r:40px;
  left:70px;
}
.f{
  --c:#A64942;
  left:140px;
}
.g{
  right:0;
  --t:20px;
}
.a{
  position:absolute;
  top:0;
  width:80px;
  height:120px;
}
.a:before,.a:after{
  content:'';
  display:block;
  position:absolute;
  top:0;
  right:var(--r);
  width:40px;
  height:10px;
  background:var(--c);
}
.a:after{
  top:var(--t);
}
.b{
  position:absolute;
  bottom:0;
  background:var(--c);
  width:50px;
  height:40px;
  border-radius:50%
}
.c{
  position:absolute;
  top:0;
  left:40px;
  width:10px;
  height:100px;
  background:var(--c);
}
</style>`
    },
    {
      id: 78,
      name: 'Ukulele',
      code: `<div id="a"></div>
<div id="b"></div>
<div id="c"></div>
<div id="d"></div>
<style>
*{box-sizing:border-box}
html{
  background:#F3AC3C;
  display:grid;
  place-content:center;
}
body{
  width:310px;
  height:120px;
  position:relative;
  display:grid;
  grid-template-columns:120px 1fr 10px;
  align-items:center;
}
#a{
  height:120px;
  background:#998235;
  border-radius:50%;
  display:grid;
  place-content:center;
}
#a:before{
  content:'';
  display:block;
  width:10px;
  height:40px;
  border-radius:10px;
  background:#1A4341;
  translate:-15px 0;
}
#b{
  position:absolute;
  width:100px;
  height:100px;
  background:#998235;
  border-radius:50%;
  left:70px;
  display:grid;
  place-content:center;
}
#b:before{
  content:'';
  display:block;
  width:40px;
  height:40px;
  border-radius:50%;
  background:#1A4341;
  border:5px solid #F3AC3C;
}
#c{
  height:20px;
  background:#1A4341;
}
#d{
  position:absolute;
  right:0;
  width:40px;
  height:30px;
  background:#998235;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  padding-block:2px;
}
#d:before,#d:after{
  content:'';
  display:block;
  width:20px;
  height:4px;
  border-radius:4px;
  background:#1A4341;
}
</style>`
    },
    {
      id: 79,
      name: 'Tambourine',
      code: `<div id="a"></div>
<div id="b"></div>
<div id="c"></div>
<div class="d e"></div>
<div class="d f"></div>
<div class="d g"></div>
<div class="d h"></div>
<div class="d i"></div>
<style>
*{box-sizing:border-box}
html{
  background:#6592CF;
  display:grid;
  place-content:center;
}
body{
  width:190px;
  height:190px;
  position:relative;
}
#a,#c{
  width:170px;
  height:170px;
  position:absolute;
  bottom:0;
  left:50%;
  translate:-50% 0;
  border-radius:50%;
  border:10px solid #243D83;
}
#c{
  border-color:transparent;
  box-shadow:0 0 0 40px #6592CF;
}
#b{
  width:120px;
  height:120px;
  background:#6592CF;
  position:absolute;
  top:145px;
  left:50%;
  translate:-50% 0;
  border-radius:50%;
  border:10px solid transparent;
  border-left-color:#243D83;
  border-top-color:#243D83;
  rotate:45deg;
}
.d{
  position:absolute;
  width:50px;
  height:50px;
  border-radius:50%;
  background:#243D83;
  border:10px solid #243D83;
  box-shadow:inset 0 0 0 10px #6592CF;
}
.e{left:70px}
.f,.g{top:40px}
.h,.i{bottom:30px}
.g,.i{right:0}
</style>`
    },
    {
      id: 80,
      name: 'Piano',
      code: `<div id="a">
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
  <div class="c"></div>
</div>
<div id="b">
  <div class="d"></div>
  <div class="d"></div>
  <div class="d e"></div>
  <div class="d"></div>
  <div class="d"></div>
  <div class="d"></div>
</div>
<style>
*{box-sizing:border-box}
html{
  background:#998235;
  display:grid;
  place-content:center;
}
body{
  width:180px;
  height:100px;
  display:grid;
  grid-template-areas: "k";
}
#a{
  grid-area:k;
  background:#191919;
  border-radius:10px;
  display:flex;
  align-items:flex-end;
  padding:5px;
  gap:5px;
}
.c{
  flex:1;
  background:#FFF;
  height:70px;
  border-radius:5px;
}
#b{
  grid-area:k;
  display:flex;
  justify-content:space-between;
  gap:10px;
  padding-inline:20px;
}
.d{
  flex:1;
  background:#191919;
  height:60px
}
.e{opacity:0}
</style>`
    },
    {
      id: 81,
      name: 'Odoo',
      code: `<div class="a b"></div>
<div class="a c"></div>
<div class="a"></div>
<div class="a"></div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  width:325px;
  height:80px;
  translate:0 12px;
  display:flex;
  justify-content:space-between;
}
.a{
  width:40px;
  height:40px;
  border-radius:50%;
  border:20px solid #8F8F8F;
  position:relative;
}
.b{border-color:#714B67}
.c:before{
  content:'';
  display:block;
  position:absolute;
  top:-40px;
  right:-20px;
  width:20px;
  height:65px;
  background:#8F8F8F;
  border-radius:20px;
}
</style>`
    },
    {
      id: 82,
      name: 'Diamond Cut',
      code: `<style>
html{
  background:#F3AC3C;
  display:grid;
  place-content:center;
}
body{
  width:100px;
  height:100px;
  background:#f00;
  rotate:45deg;
  translate:-2px 0;
  background:#1A4341;
  border:30px solid #998235;
  box-shadow:inset 0 0 0 35px #F3AC3C;
}
body:before,body:after{
  content:'';
  display:block;
  width:30px;
  height:30px;
  background:#F3AC3C;
  position:absolute;
}
body:before {
  width:32px;
  left:-31px;
  top:35px;
}
body:after{
  height:32px;
  top:-31px;
  left:35px;
}
</style>`
    },
    {
      id: 83,
      name: 'Supernova',
      code: `<div id="a">
<style>
html{
  background:#243D83;
  display:grid;
  place-content:center;
}
body{
  width:120px;
  height:120px;
  rotate:45deg;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}
body:before,body:after{
  content:'';
  display:block;
  position:absolute;
  width:220px;
  height:100px;
  border-radius:100px;
  background:#6592CF;
}
body:after{
  rotate:90deg;
}
#a{
  position:absolute;
  z-index:1;
  inset:0;
  background:#243D83;
  display:grid;
  place-content:center;
}
#a:before{
  content:'';
  display:block;
  width:60px;
  height:60px;
  border-radius:50%;
  background:#EEB850;
}
</style>`
    },
    {
      id: 84,
      name: 'Junction',
      code: `<div class="a c"></div>
<div class="a d"></div>
<div class="b e"></div>
<div class="b f"></div>
<style>
body{
  background:#191919;
  display:grid;
  place-content:center;
}
.a{
  position:absolute;
  top:50%;
  translate:0 -50%;
  width:280px;
  height:40px;
  border-radius:40px;
  background:#A64942;
}
.c{left:-100px}
.d{right:-100px}
.b{
  position:absolute;
  left:50%;
  translate:-50% 0;
  width:40px;
  height:230px;
  border-radius:40px;
  background:#FE5F55;
}
.e{top:-100px}
.f{bottom:-100px}
</style>`
    },
    {
      id: 85,
      name: 'Pythagoras',
      code: `<style>
html{
  background:#D25B70;
  display:grid;
  place-content:center;
}
body{
  background:#F7F3DA;
  width:100px;
  height:100px;
  translate:0 50px;
  position:relative;
}
body:before,body:after{
  content:'';
  display:block;
  position:absolute;
}
body:before{
  background:#6CB3A9;
  width:60px;
  height:60px;
  transform-origin:top left;
  rotate:-143deg;
}
body:after{
  background:#F6DF96;
  width:80px;
  height:80px;
  right:0;
  transform-origin:top right;
  rotate:127deg;
}
</style>`
    },
    {
      id: 86,
      name: 'Stairway',
      code: `<div class="a"></div>
<div class="a b"></div>
<div class="a c"></div>
<div class="a d"></div>
<style>
html{
  background:#191919;
  display:grid;
  place-content:center;
}
body{
  background:#4F77FF;
  width:100px;
  height:150px;
  border-radius:100px 100px 0 0;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-end;
  gap:4px;
}
.a{
  background:#191919;
  width:20px;
  height:20px;
}
.b{width:40px}
.c{width:60px}
.d{width:80px}
</style>`
    },
    {
      id: 87,
      name: 'Building Blocks',
      code: `<div class="a"></div>
<div class="a b"></div>
<div class="c"></div>
<style>
html{
  background:#F3AC3C;
  display:grid;
  place-content:center;
}
body{
  width:270px;
  height:170px;
  position:relative;
}
.a{
  width:150px;
  height:100px;
  display:flex;
  align-items:flex-start;
  position:absolute;
}
.b{
  right:0;
  bottom:0;
  rotate:180deg
}
.a:before,.a:after{
  content:'';
  display:block;
  background:#1A4341;
  aspect-ratio:1;
  border-radius:10px;
}
.a:before{
  width:100px;
  border-top-right-radius:0;
}
.a:after{
  width:50px;
  border-radius:0 10px 10px 0;
}
.c{
  background:#1A4341;
  width:70px;
  height:70px;
  position:absolute;
  left:50%;
  top:50%;
  translate:-50% -50%;
}
.c:before{
   content:'';
  display:block;
  background:#F3AC3C;
  height:100%;
  border-radius:10px 0;
}
</style>`
    },
    {
      id: 88,
      name: 'Tight Corner',
      code: `<div class="a b"></div>
<div class="a"></div>
<style>
html{
  background:#F7F3DA;
  display:grid;
  place-content:center;
}
body{
  width:400px;
  height:80px;
  position:relative;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr;
}
.a{
  background:#D25B70;
  border-radius:10px 0 0 10px;
}
.a:before{
  content:'';
  display:block;
  width:100%;
  height:50%;
  background:#F7F3DA;
  border-bottom-left-radius:20px;
}
.b{rotate:180deg}
</style>`
    },
    {
      id: 89,
      name: '',
      code: ``
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
    },
    {
      id: 127,
      name: 'Letter I',
      code: `<div class="c">
  <div class="v t"></div>
  <div class="i"></div>
  <div class="v b"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #E3516E;
  }
  .c {
    width: 180px;
    height: 160px;
    display: grid;
    grid-template-columns: 30px 10px 20px 60px 20px 10px 30px;
    grid-template-rows: 30px 100px 30px;
    grid-template-areas:
      ". . t t t . c"
      ". . . i . . ."
      "a . b b b . ."
    ;
  }
  .c > div {
    background-color: #FADE8B;
  }
  .c::before,
  .c::after {
    content: '';
    display: block;
    border-radius: 50%;
    background-color: #FADE8B;
  }
  .c::before {
    grid-area: a;
  }
  .c::after {
    grid-area: c;
  }
  .v {
    border-radius: 15px;
  }
  .t {
    grid-area: t;
  }
  .b {
    grid-area: b;
  }
  .i {
    grid-area: i;
    position: relative;
  }
  .i::before,
  .i::after {
    content: '';
    display: block;
    width: 15px;
    height: 100px;
    background: #E3516E;
    position: absolute;
    top: 0;
  }
  .i::before {
    left: 0;
    border-radius: 0 10px 10px 0;
  }
  .i::after {
    right: 0;
    border-radius: 10px 0 0 10px;

  }
</style>`
    },
    {
      id: 128,
      name: 'Letter N',
      code: `<div class="c">
  <div class="n"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #998235;
  }
  .c {
    width: 130px;
    height: 160px;
    position: relative;
  }
  .c::before,
  .c::after {
    content: '';
    display: block;
    width: 40px;
    height: 240px;
    background: #0B2429;
    position: absolute;
  }
  .c::before {
    top: 0;
    left: 0;
    z-index: 2;
  }
  .c::after {
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .n {
    position: absolute;
    z-index: 1;
    width: 42px;
    height: 160px;
    left: 44px;
    top: 0;
    background: #FCBE5C;
    transform: skew(20deg);
  }
</style>`
    },
    {
      id: 129,
      name: 'Letter B',
      code: `<div class="c">
  <div class="s0t"></div>
  <div class="s0b"></div>
  <div class="st"></div>
  <div class="sb"></div>
  <div class="bt"></div>
  <div class="bb"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #6592CF;
  }
  .c {
    width: 180px;
    height: 140px;
    position: relative;
  }
  .c > div {
    content: '';
    display: block;
    width: 100px;
    height: 80px;
    border-radius: 0 40px 40px 0;
    position: absolute;
  }
  .bt, .st, s0t {
    top: 0;
  }
  .bb, .sb, .s0b {
    top: 60px;
  }
  .bt, .bb {
    background: #060F55;
    left: 0px;
  }
  .st, .sb {
    background: #2E3B9F;
    left: 40px;
  }
  .s0t, .s0b {
    background: #515DBD;
    left: 80px;
  }
</style>`
    },
    {
      id: 130,
      name: 'Letter O',
      code: `<style>
*{box-sizing:border-box}
html{
  display:grid;
  place-content:center;
  background:#926927
}
body{
  width:100px;
  height:160px;
  translate:10px 0;
  border:20px solid #FFFFFF;
  border-radius:30px;
  box-shadow:-20px 0 0 0 #6D480A, inset -20px 0 0 0 #6D480A
}
</style>`
    },
    {
      id: 131,
      name: 'Letter W',
      code: `<div class="c">
  <div class="u u1"></div>
  <div class="u u2"></div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    display: grid;
    place-content: center;
    background: #E38F66;
  }
  .c {
    width: 210px;
    height: 160px;
    position: relative;
  }
  .u {
    width: 120px;
    height: 145px;
    border: 30px solid var(--c);
    border-radius: 0 0 120px 120px;
    border-top: none;
    position: absolute;
    bottom: 0;
  }
  .u1 {
    right: 0;
    --c: #FFFBDA;
  }
  .u2 {
    left: 0;
    --c: #62306D;
  }
  .u::before,
  .u::after {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--c);
    position: absolute;
    top: -15px;
  }
  .u::before {
    left: -30px;
  }
  .u::after {
    right: -30px;
  }
</style>`
    },
    {
      id: 132,
      name: 'Letter S',
      code: `<div class="c">
  <div class="l t"></div>
  <div class="m"></div>
  <div class="l b"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #4F77FF;
  }
  .c {
    width: 240px;
    height: 160px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 20px 50px;
    gap: 20px;
  }
  .c::before,
  .c::after {
    content: '';
    display: block;
    background: #FFFFFF;
    position: absolute;
    width: 20px;
    height: 90px;
    border-radius: 10px;
  }
  .c::after {
    right: 0;
    bottom: 0;
  }
  .c > div {
    background: #FFFFFF;
    border-radius: 10px;
  }
  .t {
    box-shadow: 20px -20px 0 0 #1038BF;
  }
  .b {
    box-shadow: -20px 20px 0 0 #1038BF;
  }
</style>`
    },
    {
      id: 133,
      name: 'Spiral',
      code: `<div class="z">
  <div class="a"></div>
  <div class="b"></div>
  <div class="c"></div>
  <div class="d"></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    height:284px; /* for safari */
    background-color: #F5D6B4;
  }
  .z {
    width: 200px;
    height: 200px;
    translate: -20px 0;
    position: relative;
  }
  .z div {
    position: absolute;
    border-radius: 50%;
    border: 20px solid #D86F45;
  }
  .z div:nth-child(odd) {
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  }
  .z div:nth-child(even) {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }
  .z::before,
  .z::after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #D86F45;
    position: absolute;
    top: 90px;
  }
  .z::after {
    left: 80px;
  }
  .a {
    width: 160px;
    height: 160px;

  }
  .b {
    width: 120px;
    height: 120px;
    left: 40px;
    top: 20px;

  }
  .c {
    width: 80px;
    height: 80px;
    left: 40px;
    top: 40px;
  }
  .d {
    width: 40px;
    height: 40px;
    right: 40px;
    top: 60px;
  }
</style>`
    },
    {
      id: 134,
      name: 'Wig',
      code: `<style>
body{
  background:#62306D;
  display:flex;
  justify-content:center;
  align-items:center
}
body:before,body:after{
  content:'';
  display:block;
  width:80px;
  height:160px;
  background:#F7EC7D;
  border-radius:80px 0 40px
}
body:after{transform:rotateY(180deg)}
</style>`
    },
    {
      id: 135,
      name: 'Spikes',
      code: `<div class="c">
  <div></div>
  <div class="n"></div>
  <div></div>
  <div class="n"></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    height:284px; /* for safari */
    background-color: #E3516E;
  }
  .c {
    width: 82px;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .c div {
      background-color: #D9D9D9;
      border-radius: 0 40px 40px 0;
      position: relative;
  }
  .c div::after {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    background-color: #D9D9D9;
    position: absolute;
    top: 0;
    left: -40px;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  .c div:nth-child(2) {
    transform: rotateY(180deg)
  }
  .c div:nth-child(3) {
    transform: rotateX(180deg)
  }
  .c div:nth-child(4) {
    transform: rotateX(180deg) rotateY(180deg);
  }
</style>`
    },
    {
      id: 136,
      name: 'Alien Eye',
      code: `<div class="c">
  <div></div>
  <div></div>
  <div></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    height:284px; /* for safari */
    background-color: #998235;
  }
  .c {
    --size: 140px;
    width: 180px;
    height: 180px;
    background-color: #FCBE5C;
    border-radius: 50%;
    position: relative;
    display: grid;
    place-items: center;
  }
  .c div {
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background-color: #0B2429;
  }
  .c div:first-child {
    translate: 10px 0;
  }
  .c div:nth-child(2) {
    --size: 100px;
    background-color: #FCBE5C;
  }
  .c div:nth-child(3) {
    --size: 60px;
    translate: 10px 0;
    background-color: #998235;
  }
</style>`
    },
    {
      id: 137,
      name: 'Elbow',
      code: `<style>
  html {
    display: grid;
    place-items: center;
    height:300px; /* for safari */
    background-color: #6592CF;
  }
  body {
    width: 250px;
    height: 150px;
    border: 50px solid #060F55;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 100px
  }
</style>`
    },
    {
      id: 138,
      name: 'Lotus',
      code: `<div id="a">
  <div class="b"></div>
  <div class="b c"></div>
  <div class="d"></div>
  <div class="d e"></div>
</div>
<style>
body{
  margin:0;
  display:grid;
  place-items:center;
  height:300px;
  background-color:#926927;
}
#a{
  width:200px;
  height:200px;
  border-radius:50%;
  translate:0 -30px;
  position:relative;
  overflow:hidden;
}
.d{
  position:absolute;
  top:30px;
  width:100px;
  height:200px;
  overflow:hidden;
}
.e{
  right:0;
  transform:rotateY(180deg);
}
.d:before{
  content:'';
  display:block;
  width:200px;
  height:200px;
  border-radius:50%;
  background:#fff;
  position:absolute;
  left:71px;
}
.b{
  position:absolute;
  right:100px;
  top:100px;
  width:200px;
  height:200px;
  border-radius:50%;
  background:#6D480A;
}
.c{
  right:initial;
  left:100px;
}
</style>`
    },
    {
      id: 139,
      name: 'Lamp',
      code: `<div id="a">
<style>
body{
  background:#E38F66;
  height:284px; /* for safari */
  display:grid;
  place-items:center
}
#a{
  width:126px;
  height:120px;
  background:#FFFBDA;
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)
}
body:before{
  content:'';
  display:block;
  width:10px;
  height:90px;
  background:#62306D;
  position:fixed;
  left:195px;
  bottom:0;
}
</style>`
    },
    {
      id: 140,
      name: 'Eclipes',
      code: `<style>
html{background:#4F77FF}
html:before,html:after{
  content:'';
  display:block;
  position:absolute;
  width:80px;
  height:80px;
  background:#FFFFFF;
  border-radius:50%;
  left:160px;
  top:50px
}
html:after{
  background:#4F77FF;
  top:90px
}
body{
  margin:0;
  width:0;
  height:0;
  position:absolute;
  z-index:1;
  left:50%;
  bottom:0;
  translate:-50% 0;
  border-left: 162px solid transparent;
  border-right: 162px solid transparent;
  border-bottom: 162px solid #1038BF;
}
</style>`
    },
    {
      id: 141,
      name: 'Third Eye',
      code: `<div class="c">
  <div class="e t"></div>
  <div class="e b"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #E3516E;
  }
  body::before,
  body::after {
    content: '';
    display: block;
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: #D9D9D9;
  }
  body::before {
    left: 0;
    top: 0;
    translate: -50% -50%;
  }
  body::after {
    bottom: 0;
    right: 0;
    translate: 50% 50%;
  }
  .c {
    width: 140px;
    height: 59px;
  }
  .e {
    width: 100%;
    height: 50%;
    position: relative;
    overflow: hidden;
  }
  .e::before {
    content: '';
    display: block;
    width: 202px;
    height: 210px;
    border-radius: 100%;
    background: #D9D9D9;
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50% 0;
  }
  .b {
    transform: rotateX(180deg);
  }
</style>`
    },
    {
      id: 142,
      name: 'Curtains',
      code: `<style>
&{
  border:50px solid #4F77FF;
  background:repeating-linear-gradient(90deg,#1038BF,60px,#4F77FF 60px,80px,#fff 80px,100px,#4F77FF 100px,#4F77FF 120px)
}
</style>`
    },
    {
      id: 143,
      name: 'Simply Circle',
      code: `<style>
&{
    background:radial-gradient(#D86F45,100px,#F5D6B4 0)-200px -200px/600px 600px
}
</style>`
    },
    {
      id: 144,
      name: 'Long Heart',
      code: `<div id="a">
<style>
*{box-sizing:border-box}
html{
  background:#62306D;
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
}
body{
  width:165px;
  height:165px;
  background:#F7EC7D;
  position:relative;
  margin:0
}
body::before,body::after{
  content:'';
  display:block;
  width:75px;
  height:75px;
  background:#F7EC7D;
  border-radius:100%;
  position:absolute
}
body::before{top: -35px}
body::after{
  bottom:0;
  right:-35px
}
#a{
  width:90px;
  height:90px;
  border-radius:0 0 0 25px;
  background:#62306D;
  position:absolute;
  right:0
}
</style>`
    },
    {
      id: 145,
      name: 'Sportlight',
      code: `<style>
*{box-sizing: border-box}
html{
  background:#E3516E;
  display:flex;
  justify-content:end;
  align-items:flex-start;
}
body{
  margin:0;
  width: 150px;
  height: 150px;
  background: #D9D9D9;
  position: relative;
}
body:before{
  content:'';
  display:block;
  position:absolute;
  translate:-50px 50px;
  width:150px;
  height:150px;
  border-radius:0 0 50% 50%;
  background:#D9D9D9;
  rotate: 45deg
}
</style>`
    },
    {
      id: 146,
      name: 'Streaks',
      code: `<style>
&{
  background:repeating-linear-gradient(135deg,#998235,345px,#FCBE5C 345px,370px,#0B2429 370px,395px,#998235 395px,420px,#FCBE5C 420px,445px,#0B2429 445px,470px,#998235 470px)
}
</style>`
    },
    {
      id: 147,
      name: 'Splish',
      code: `<p/><p/><p/>
<style>
*{margin:0}
html{background:#6592CF}
body{
  width:150px;
  height:300px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  position:absolute;
  bottom:-55px;
  right:20;
  rotate:-45deg
}
p{
  display:block;
  width:30px;
  height:141px;
  background:#060F55;
  border-radius:30px
}
p:nth-child(2){
  width:50px;
  height:216px
}
</style>`
    },
    {
      id: 148,
      name: 'Eight',
      code: `<style>
&{
  margin: 0;
  background:linear-gradient(-135deg,#6D480A,30px,#926927 30px)
}
&::before,&::after{
  content: '';
  display: block;
  position: absolute;
  right: 0;
  width:100px;
  height:100px;
  border-radius:50%;
  border: 40px solid #6D480A
}
&::before{
  top:-90px;
  right:10px
}
&::after{
  top:10px;
  right:-90px
}
</style>`
    },
    {
      id: 149,
      name: 'Earthworm',
      code: `<div class="v v1"></div>
<div class="v v2"></div>
<div class="h h1"></div>
<div class="h h2"></div>
<div class="c c1"></div>
<div class="c c2"></div>
<div class="c c3"></div>
<style>
* {
  box-sizing: border-box;
}
html {
  margin: 0;
  background: #E38F66;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
body {
  margin:0;
  width: 200px;
  height: 200px;
  position: relative;
}
.v {
  background: #FFFBDA;
  width: 40px;
  height: 120px;
  border-radius: 40px;
  position: absolute;
}
.v2 {
  left: 80px;
  bottom: 0;
}
.h {
  background: #FFFBDA;
  width: 120px;
  height: 40px;
  border-radius: 40px;
  position: absolute;
}
.h1 {
  top: 80px
}
.h2 {
  bottom: 0;
  right: 0;
}
.c {
  width: 20px;
  height: 20px;
  background: #FFFBDA;
  position: absolute;
}
.c::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background: #E38F66;
  border-radius: 0 0 0 10px;
}
.c1 {
  top: 60px;
  left: 40px;
}
.c2 {
  top: 120px;
  left: 60px;
  rotate: 180deg;
}
.c3 {
  top: 140px;
  left: 120px;
}
</style>`
    },
    {
      id: 150,
      name: 'Finger Heart',
      code: `<style>
html {
  margin: 0;
  background: #4F77FF;
}
body {
  margin:0;
  width: 150px;
  height: 150px;
  position: relative;
  background: #1038BF;
}
body::before,
body::after {
  content: '';
  display: block;
  width: var(--w);
  height: var(--h);
  border-radius: 50px;
  position: absolute;
  background: #1038BF;
}
body::before {
  --w: 100px;
  --h: 50px;
  bottom: 0;
  right: -50px;
}
body::after {
  --w: 50px;
  --h: 100px;
  bottom: -50px;
  right: 0;
}
</style>`
    },
    {
      id: 151,
      name: 'Pawn',
      code: `<div class="h"></div>
<div class="n"></div>
<div class="b"></div>
<div class="f"></div>
<style>
html {
  display: grid;
  place-content: center;
  background: #F5D6B4;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

body > div {
  background: #D86F45;
}
.h {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.n {
  width: 80px;
  height: 20px;
  border-radius: 10px 10px 20px 20px;
}
.b {
  width: 90px;
  height: 65px;
  position: relative;
  overflow: hidden;
}
.b::before {
  content: '';
  display: block;
  position: absolute;
  width: 170px;
  height: 170px;
  background: #F5D6B4;
  border-radius: 50%;
  bottom: -25px;
  left: -145px;
  box-shadow:210px 0 0 #F5D6B4;
}
.f {
  width: 140px;
  height: 40px;
  border-radius: 20px 20px 10px 10px;
}
</style>`
    },
    {
      id: 152,
      name: 'Rook',
      code: `<div class="h">
  <div class="v"></div>
  <div class="vl"></div>
  <div class="v"></div>
  <div class="vl"></div>
  <div class="v"></div>
  <div class="l"></div>
</div>
<div class="n"></div>
<div class="b"></div>
<div class="n2"></div>
<div class="f"></div>
<style>
* {
  box-sizing: border-box; 
}
html {
  display: grid;
  place-content: center;
  background: #62306D;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

body > div {
  background: #F7EC7D;
}

body > .h {
  width: 90px;
  height: 60px;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  background: #62306D;
}
.v {
  width: 10px;
  height: 100%;
  border-radius: 10px;
  background: #F7EC7D;
}
.vl {
  flex: 1;
  border-radius: 5px;
  height: 45px;
  background: #62306D;
}
.v, .vl {
  position: relative;
  z-index: 1;
}
.l {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: #F7EC7D;
}
.n {
  width: 60px;
  height: 10px;
  border-radius: 10px;
}
.b {
  width: 90px;
  height: 65px;
  position: relative;
  overflow: hidden;
}
.b::before {
  content: '';
  display: block;
  position: absolute;
  width: 165px;
  height: 165px;
  background: #62306D;
  border-radius: 50%;
  bottom: -25px;
  left: -140px;
  box-shadow:205px 0 0 #62306D;
}
.n2 {
  width: 110px;
  height: 10px;
  border-radius: 10px;
}
.f {
  width: 140px;
  height: 25px;
  border-radius: 20px 20px 10px 10px;
}
</style>`
    },
    {
      id: 153,
      name: 'Checkers',
      code: `<style>
*{margin:0;position:relative}
html{
  border-inline:100px solid #E3516E;
  border-block:50px solid #E3516E;
  background-color:#E3516E;
  background-image:repeating-linear-gradient(45deg,#E3516E 25%,transparent 25%,transparent 75%,#E3516E 75%,#E3516E),repeating-linear-gradient(45deg,#E3516E 25%,#FADE8B 25%,#FADE8B 75%,#E3516E 75%,#E3516E);
  background-position: 0 0, 40px 40px;
  background-size: 80px 80px;
}
body{
  position:absolute;
  left:50px;
  top:10px;
  width:20px;
  height:20px;
  background:#FADE8B;
  border-radius:50%;
  box-shadow:
    80px 0 0 0 #FADE8B,
    -40px 40px 0 0 #FADE8B,
    40px 40px 0 0 #FADE8B,
    120px 40px 0 0 #FADE8B,
    -40px 120px 0 0 #FADE8B,
    40px 120px 0 0 #FADE8B,
    120px 120px 0 0 #FADE8B,
    0 160px 0 0 #FADE8B,
    80px 160px 0 #FADE8B
  ;
}
</style>`
    },
    {
      id: 154,
      name: 'Poker Chip',
      code: `<div class="c">
  <div class="l"></div>
  <div class="l l1"></div>
  <div class="l l2"></div>
  <div class="l l3"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #998235;
  }
  .c {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: #0B2429;
    border: 15px solid #FCBE5C;
    box-shadow: 0 0 0 10px #0B2429;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c:after {
    content: '';
    display: black;
    position: absolute;
    border: 10px solid #FCBE5C;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .l {
    position: absolute;
    width: 190px;
    height: 30px;
    background: #0B2429;
  }
  .l1 {
    rotate: 45deg;
  }
  .l2 {
    rotate: -45deg;
  }
  .l3 {
    rotate: 90deg;
  }
</style>`
    },
    {
      id: 155,
      name: 'Snake & Ladders',
      code: `<style>
html{
  background: #6592CF;
}
body{
  position:fixed;
  left:112px;
  bottom:-30px;
  width:30px;
  height:262px;
  border-radius:30px;
  background:#060F55;
  box-shadow:130px 0 0 #060F55;
}
body:before{
  content:'';
  position:absolute;
  width:160px;
  height:30px;
  background:#060F55;
  top:60px;
  box-shadow:0 60px 0 #060F55, 0 120px 0 #060F55;
}
</style>`
    },
    {
      id: 156,
      name: 'Chinese Checkers',
      code: `<style>
html{
  background:#926927;
}
body{
  margin:0;
  position:fixed;
  top:40px;
  left:190px;
  width:20px;
  height:20px;
  border-radius:50%;
  background:#F8B140;
  box-shadow:
    -15px 25px 0 0 #F8B140,
    15px 25px 0 0 #F8B140,
    0 50px 0 0 #F8B140,
    -30px 50px 0 0 #F8B140,
    -60px 50px 0 0 #F8B140,
    -90px 50px 0 0 #F8B140,
    30px 50px 0 0 #F8B140,
    60px 50px 0 0 #F8B140,
    90px 50px 0 0 #F8B140,
    -15px 75px 0 0 #F8B140,
    -45px 75px 0 0 #F8B140,
    -75px 75px 0 0 #F8B140,
    15px 75px 0 0 #F8B140,
    45px 75px 0 0 #F8B140,
    75px 75px 0 0 #F8B140,
    0 100px 0 0 #F8B140,
    -30px 100px 0 0 #F8B140,
    -60px 100px 0 0 #F8B140,
    30px 100px 0 0 #F8B140,
    60px 100px 0 0 #F8B140,
    -15px 125px 0 0 #F8B140,
    -45px 125px 0 0 #F8B140,
    -75px 125px 0 0 #F8B140,
    15px 125px 0 0 #F8B140,
    45px 125px 0 0 #F8B140,
    75px 125px 0 0 #F8B140,
    0 150px 0 0 #F8B140,
    -30px 150px 0 0 #F8B140,
    -60px 150px 0 0 #F8B140,
    -90px 150px 0 0 #F8B140,
    30px 150px 0 0 #F8B140,
    60px 150px 0 0 #F8B140,
    90px 150px 0 0 #F8B140,
    -15px 175px 0 0 #F8B140,
    15px 175px 0 0 #F8B140,
    0 200px 0 0 #F8B140
  ;
}
</style>`
    },
    {
      id: 157,
      name: 'Monopoly',
      code: `<div class="c">
  <div class="h"></div>
  <div class="l"></div>
  <div class="g">
    <div class="o o1"></div>
    <div class="o o2"></div>
  </div>
  <div class="f">
    <div class="d d1"></div>
    <div class="d d2"></div>
  </div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #E38F66;
  }
  .c {
    width: 180px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .h {
    width: 120px;
    height: 90px;
    background: #FFFBDA;
    border-radius: 60px 60px 0 0;
  }
  .l {
    width: 180px;
    height: 20px;
    background: #FFFBDA;
    border-radius: 20px;
  }
  .g {
    width: 100px;
    height: 40px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px
  }
  .o {
    border-radius: 50%;
    border: 10px solid;
  }
  .o1 {
    border-color: #E38F66;
    background: #FFFBDA;
  }
  .o2 {
    border-color: #FFFBDA;
  }
  .f {
    width: 90px;
    height: 40px;
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px
  }
  .d {
    background: #FFFBDA;
    border-radius: 40px 40px 40px 0;
  }
  .d1 {
    rotate: 45deg;
  }
  .d2 {
    rotate: -135deg;
  }
</style>`
    },
    {
      id: 158,
      name: 'Clubs',
      code: `<div class="f"></div>
<div class="r"></div>
<style>
html{
  background:#4F77FF;
  display: grid;
  place-content: center;
}
body{
  width: 190px;
  height: 200px;
  position: relative;
}
.r,
.f:before,
.f:after {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #1038BF;
  position: absolute;
}
.r {
  left: 45px;
  box-shadow:-45px 70px 0 #1038BF,45px 70px 0 #1038BF;
}
.f {
  width: 50px;
  height: 60px;
  background: #1038BF;
  position: absolute;
  bottom: 0;
  left: 70px;
  overflow: hidden;
}
.f:before {
  content: '';
  display: block;
  background: #4F77FF;
  position: absolute;
  bottom: -10px;
  right: 30px;
  box-shadow:110px 0 0 #4F77FF;
}
</style>`
    },
    {
      id: 159,
      name: 'Portal',
      code: `<style>
&{
  display: grid;
  place-content: center;
  background: #F5D6B4;
}
body{
  width: 150px;
  height: 150px;
  background: #D86F45;
  position: relative;
}
body:before,
body:after {
  content: '';
  display: block;
  width: 250px;
  height: 50px;
  background: #D86F45;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}
body:after {
  rotate: 90deg;
}
</style>`
    },
    {
      id: 160,
      name: 'Dount',
      code: `<style>
html {
  display: grid;
  place-content: center;
  background: #62306D
}
body {
  width: 120px;
  height: 120px;
  position: relative;
  border: 40px solid #F7EC7D;
  border-left-color: #E38F66;
  border-radius: 50%;
  rotate: 45deg
}
</style>`
    },
    {
      id: 161,
      name: 'Converage',
      code: `<style>
html{
  display:grid;
  place-content:center;
  background:#E3516E
}
body{
  width:184px;
  height:184px;
  position:relative;
  background:#FADE8B
}
body:before,body:after{
  content:'';
  display:block;
  width:280px;
  height:30px;
  background:#E3516E;
  position:absolute;
  left:50%;
  top:50%;
  translate:-50% -50%;
  rotate:45deg
}
body:after{rotate:-45deg}
</style>`
    },
    {
      id: 162,
      name: 'Upwards',
      code: `<div class="c">
  <div class="t"></div>
  <div class="h"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #998235;
  }
  .c {
    width: 140px;
    height: 140px;
    position: relative;
    rotate: -45deg;
    translate: 0px 25px;
  }
  .t {
    width: 140px;
    height: 70px;
    background: #0B2429;
  }
  .h {
    width: 70px;
    height: 70px;
    background: #FCBE5C;
    margin-left: 70px;

  }
</style>`
    },
    {
      id: 163,
      name: 'Missing Piece',
      code: `<div class="c">
  <div class="b"></div>
  <div class="b b2"></div>
  <div class="b b3"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #D669EC;
  }
  .c {
    width: 220px;
    height: 220px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  }
  .b {
    background: #FDFBF8;
    clip-path: polygon(0 0, 53% 0, 100% 47%, 100% 100%, 47% 100%, 0 53%);
  }
  .b2 {
    rotate: 90deg;
  }
  .b3 {
    rotate: -90deg;
  }
</style>`
    },
    {
      id: 164,
      name: 'Rangoil',
      code: `<div class="c">
  <div class="o o1"></div>
  <div class="o o2"></div>
  <div class="o o3"></div>
  <div class="o o4"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #66284A;
  }
  .c {
    width: 220px;
    height: 220px;
    position: relative;
  }
  .o {
    width: 100px;
    height: 100px;
    position: absolute;
    border: 20px solid;
    border-radius: 50%;
    rotate: 45deg;
  }
  .o1 {
    left: 60px;
    border-color: #F0CD48;
    border-bottom-color: transparent;
  }
  .o2 {
    top: 60px;
    border-color: #D86F45;
    border-right-color: transparent;
  }
  .o3 {
    right: 0;
    top: 60px;
    border-color: #D669EC;
    border-left-color: transparent;
  }
  .o4 {
    bottom: 0;
    left: 60px;
    border-color: #FDFBF8;
    border-top-color: transparent;
  }
</style>`
    },
    {
      id: 165,
      name: 'Pyramid',
      code: `<div class="c">
  <div class="o o1"></div>
  <div class="o o2"></div>
  <div class="o o3"></div>
  <div class="t t1"></div>
  <div class="t t2"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #F0CD48;
  }
  .c {
    width: 300px;
    height: 240px;
    position: relative;
  }
  .o {
    width: 100px;
    height: 100px;
    background: #66284A;
    border-radius: 50%;
    position: absolute;
  }
  .o1 {
    left: 100px;
  }
  .o2 {
    bottom: 0;
  }
  .o3 {
    bottom: 0;
    right: 0;
  }
  .t {
    position: absolute;
    width: 0;
    height: 0;
  }
  .t1 {
    top: 50px;
    left: 50px;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 140px solid #F0CD48;
  }
  .t2 {
    top: 75px;
    left: 80px;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 100px solid #66284A;
  }
</style>`
    },
    {
      id: 166,
      name: 'Flow',
      code: `<div class="c">
  <div class="o"></div>
  <div class="l">
    <div class="s"></div>
    <div class="s r"></div>
    <div></div>
    <div class="s r"></div>
    <div class="s"></div>
  </div>
  <div class="v"></div>
  <div class="v v2"></div>
  <div class="v vl"></div>
</div>
<style>
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    background: #D86F45;
  }
  .c {
    width: 200px;
    height: 270px;
    position: relative;
  }
  .v {
    position: absolute;
    width: 30px;
    height: 125px;
    background: #FDFBF8;
    border-radius: 0 0 30px 30px;
  }
  .v2 {
    right: 0;
  }
  .vl {
    left: 60px;
    width: 80px;
    height: 100px;
    border-radius: 0 0 80px 80px;
  }
  .l {
    width: 200px;
    height: 80px;
    position: absolute;
    bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    --s: 80px;
  }
  .l > div {
    width: var(--s);
    height: var(--s);
    background: #FDFBF8;
    border-radius: 50%;
  }
  .s {
    --s: 30px;
  }
  .s.r {
    background: #D86F45;
  }
  .o {
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 100px;
    overflow: hidden;
  }
  .o:before {
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    background: #FDFBF8;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
  }
</style>`
    },
    {
      id: 167,
      name: 'React Inida',
      code: `<div class="c">
  <div class="r"></div>
  <div class="r r2"></div>
  <div class="r r3"></div>
  <div class="b"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #0D1335;
  }
  .c {
    width: 250px;
    height: 225px;
    position: relative;
  }
  .c > div {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    border-radius: 50%;
  }
  .b {
    width: 40px;
    height: 40px;
    background: #73C6EA;
    left: calc(50% - 20px)
  }
  .r {
    width: 250px;
    height: 110px;
    border: 10px solid #FBFAE2;
  }
  .r2 {
    border-color: #4FA07B;
    rotate: -60deg;
  }
  .r3 {
    border-color: #DC6638;
    rotate: 60deg;
  }
</style>`
    },
    {
      id: 168,
      name: 'Carpet',
      code: `<div class="b"></div>
<div class="b b2"></div>
<div class="b b3"></div>
<div class="b b4"></div>
<style>
  body {
    margin: 0;
    background: #0D1335;
  }
  .b {
    width: 70px;
    height: 20px;
    background: #DC6638;
    box-shadow:
      0 0 0 20px #0D1335,
      0 0 0 40px #DC6638,
      0 0 0 60px #0D1335,
      0 0 0 80px #DC6638,
      0 0 0 100px #0D1335,
      0 0 0 120px #DC6638
    ;
  }
  .b2 {
    position: fixed;
    right: 0;
    top: 0;
  }
  .b3 {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .b4 {
    position: fixed;
    right: 0;
    bottom: 0;
  }
</style>`
    },
    {
      id: 169,
      name: 'Abstract Plate',
      code: `<div class="o"></div>
<div class="c a">
  <div class="l l1"></div>
  <div class="l l2"></div>
  <div class="l l3"></div>
  <div class="l l4"></div>
  <div class="m a"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #4FA07B;
  }
  .o {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    box-shadow:
      0 0 0 10px #0D1335,
      0 0 0 30px #4FA07B,
      0 0 0 40px #0D1335,
      0 0 0 60px #4FA07B,
      0 0 0 70px #0D1335
    ;
  }
  .a {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
  .c {
    width: 310px;
    height: 236px;
    overflow: hidden;
  }
  .l {
    width: 217px;
    height: 10px;
    background: #FBFAE2;
    position: absolute;
    z-index: 1;
  }
  .m {
    width: 68px;
    height: 42px;
    background: #FBFAE2;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .l1 {
    transform-origin: top left;
    rotate: 32deg
  }
  .l2 {
    bottom: 0;
    transform-origin: bottom left;
    rotate: -32deg
  }
  .l3 {
    right: 0;
    transform-origin: top right;
    rotate: -32deg
  }
  .l4 {
    right: 0;
    bottom: 0;
    transform-origin: bottom right;
    rotate: 32deg
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 219px;
    background: #FBFAE2;
    top: 8px;
  }
  .c:after {
    right: 0;
  }
</style>`
    },
    {
      id: 170,
      name: 'Party Hat',
      code: `<div class="c">
  <div class="t"></div>
  <div class="t t2"></div>
  <div class="t t3"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #73C6EA;
  }
  .c {
    width: 250px;
    height: 180px;
    position: relative;
  }
  .t {
    --h: 180px;
    --c: #0D1335;
    position: absolute;
    left: 50%;
    bottom: 0;
    translate: -50% 0;
    width: 0;
    height: 0;
    border-left: 125px solid transparent;
    border-right: 125px solid transparent;
    border-bottom: var(--h) solid var(--c);
  }
  .t2 {
    --h: 140px;
    --c: #DC6638;
  }
  .t3 {
    --h: 100px;
    --c: #FBFAE2;
  }
</style>`
    },
    {
      id: 171,
      name: 'Pumpkin',
      code: `<div class="c">
  <div class="o ol"></div>
  <div class="o or"></div>
  <div class="o lm"></div>
  <div class="o rm"></div>
  <div class="o oc"></div>
  <div class="l"></div>
</div>
<style>
  body {
    background: #784972;
  }
  .c {
    width: 260px;
    height: 150px;
    position: absolute;
    top: 100px;
    left: 70px;
  }
  .l {
    width: 22px;
    height: 60px;
    background: #F7FFCF;
    position: absolute;
    border-radius: 20px;
    left: 50%;
    top: 0;
    translate: -50% -50px;
  }
  .o {
    background: #F7FFCF;
    width: 100px;
    height: 150px;
    border-radius: 50%;
    border: 10px solid #784972;
    position: absolute;
    top: -10px;
  }
  .ol {left: -10px}
  .or {right: -10px}
  .oc {left: 70px}
  .lm {left: 30px}
  .rm {right: 30px}
</style>`
    },
    {
      id: 172,
      name: 'Crossbones',
      code: `<div class="c">
  <div class="l">
    <div class="b s"></div>
    <div class="b e"></div>
  </div>
  <div class="l l2">
    <div class="b s"></div>
    <div class="b e"></div>
  </div>
</div>
</div>
<style>
  body {
    background: #EFEB99;
    display: grid;
    place-content: center;
  }
  .c {
    width: 190px;
    height: 190px;
    rotate: 45deg;
    display: flex;
    align-items: center;
  }
  .l {
    width: 100%;
    height: 30px;
    background: #8647E6;
    position: absolute;
    display: flex;
    justify-content: space-between;
  }
  .l2 {rotate: 90deg}
  .b {
    width: 60px;
    height: 30px;
    rotate: 90deg;
  }
  .b::before,
  .b:after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #8647E6;
    border-radius: 50%;
  }
  .s {translate: -50% 0}
  .e {translate: 50% 0}
</style>`
    },
    {
      id: 173,
      name: 'Hockey Mask',
      code: `<style>
html {
  background: #A5B5B4;
  display: grid;
  place-content: center;
}
body {
  width: 150px;
  height: 180px;
  background: #FFFFFF;
  position: relative;
  border-radius: 50%;
}
body:before {
  content:'';
  position: absolute;
  left: 55px;
  top: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background:#000;
  box-shadow:
    30px 0 0 #000,
    15px 20px 0 #000,
    0 80px 0 #000,
    30px 80px 0 #000,
    0 100px 0 #000,
    30px 100px 0 #000,
    0 120px 0 #000,
    30px 120px 0 #000
  ;
}
body:after{
  content:'';
  position: absolute;
  top: 50px;
  left: 25px;
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 50%;
  box-shadow:70px 0 0 #000;
}
</style>`
    },
    {
      id: 174,
      name: 'Witch\'s Hat',
      code: `<div class="c">
  <div class="o"></div>
</div>
<style>
  body {
    background: #F4DCBF;
    display: grid;
    place-content: center;
  }
  .c {
    width: 150px;
    height: 200px;
    position: relative;
  }
  .c:before {
    content: '';
    display: block;
    position: absolute;
    left: 25px;
    bottom: 30px;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 170px solid #30383F;
  }
  .o {
    width: 150px;
    height: 60px;
    background: #30383F;
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  .o:before,
  .o:after {
    content: '';
    display: block;
    position: absolute;
  }
  .o:before {
    box-sizing: border-box;
    width: 150px;
    height: 60px;
    border: 10px solid #556D7F;
    border-radius: 50%;
    bottom: 25px
  }
  .o:after {
    width: 30px;
    height: 20px;
    border-radius: 5px;
    background: #FBD038;
    top: 20px;
    left: 60px;
  }
</style>`
    },
    {
      id: 175,
      name: 'Evil Cat',
      code: `<div class="c">
  <div class="h">
    <div class="n n1"></div>
    <div class="n n2"></div>
    <div class="e">
      <div class="o"></div>
      <div class="o"></div>
    </div>
    <div class="m"></div>
  </div>
</div>
<style>
  body {
    background: #ED6A9D;
    display: grid;
    place-content: center;
  }
  .c {
    width: 180px;
    height: 180px;
    position: relative;
  }
  .h {
    position: absolute;
    background: #050044;
    position: absolute;
    bottom: 0;
    width: 180px;
    height: 150px;
    border-radius: 50%;
  }
  .n {
    position: absolute;
    top: -34px;
    width: 0;
    height: 0;
    border-left: 33px solid transparent;
    border-right: 33px solid transparent;
    border-bottom: 65px solid #050044;
    transform-origin: bottom;
  }
  .n1 {
    left: 10px;
    rotate: -30deg;
  }
  .n2 {
    right: 10px;
    rotate: 30deg;
  }
  .e {
    width: 110px;
    height: 40px;
    position: absolute;
    left: 35px;
    top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .o {
    width: 40px;
    height: 40px;
    background: #FFC100;
    border-radius: 20px 0 20px 0;
    rotate: 45deg;
    display: grid;
    place-content: center;
  }
  .o:before {
    content: '';
    display: block;
    width: 10px;
    height: 30px;
    border-radius: 50%;
    background: #050044;
    rotate: -45deg;
  }
  .m {
    position: absolute;
    top: 95px;
    left: 75px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #ED6A9D;
  }
</style>`
    },
    {
      id: 176,
      name: 'Castlevania',
      code: `<div class="c">
  <div class="h">
    <div class="a s"></div>
    <div class="a e"></div>
  </div>
  <div class="d">
    <div class="t"></div>
    <div class="r"></div>
    <div class="t"></div>
  </div>
  <div class="m"></div>
</div>
<style>
  body {
    background: #A6D6AE;
    display: grid;
    place-content: center;
  }
  .c {
    width: 200px;
    height: 180px;
    position: relative;
  }
  .h {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .a {
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 60px solid #3A0F09;
  }
  .s {margin-left: -15px}
  .e {margin-right: -15px}
  .d {
    width: 200px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .r {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 35px solid #3A0F09;
  }
  .t {
    width: 50px;
    height: 35px;
    background: #3A0F09;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .t:before {
    content: '';
    display: block;
    width: 20px;
    height: 25px;
    background: #BB9213;
    border-radius: 25px 25px 0 0;
  }
  .m {
    width: 200px;
    height: 85px;
    background: #3A0F09;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .m:before {
    content: '';
    display: block;
    width: 60px;
    height: 50px;
    background: #BB9213;
    border-radius: 50px 50px 0 0;
  }
</style>`
    },
    {
      id: 177,
      name: 'Frankenstein',
      code: `<div class="l"></div>
<div class="c">
  <div class="h"></div>
  <div class="p"></div>
  <div class="v">
    <div class="e"></div>
    <div class="e"></div>
  </div>
  <div class="m"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #3C8D3F;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #14F078;
    border-radius: 15px 15px 100px 100px;
  }
  .l {
    width: 190px;
    height: 10px;
    background: #1A1D2F;
    translate: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .l:before,
  .l:after {
    content: '';
    display: block;
    width: 30px;
    height: 10px;
    background: #1A1D2F;
    border-radius: 10px;
    rotate: 90deg;
  }
  .l:before {
    translate: -15px 0;
  }
  .l:after {
    translate: 15px 0;
  }
  .h {
    width: 150px;
    height: 15px;
    background: #1A1D2F;
    border-radius: 10px 10px 0 0;
  }
  .p {
    width: 150px;
    height: 30px;
    background-image: linear-gradient(to bottom right, #1A1D2F 50%, transparent 50%), linear-gradient(to bottom left, #1A1D2F 50%, transparent 50%);
   background-size: 30px 30px;
  background-position: -15px 0;
   background-repeat: repeat-x;
  }
  .v {
    width: 90px;
    height: 30px;
    margin: 25px auto 0;
    display: flex;
    justify-content: space-between;
  }
  .e {
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 10px solid #1A1D2F;
    border-radius: 50%;
  }
  .m {
    width: 40px;
    height: 20px;
    background: #1A1D2F;
    margin: 10px auto 0;
    border-radius: 0 0 20px 20px;
  }
</style>`
    },
    {
      id: 178,
      name: 'Candy',
      code: `<div class="c">
  <div class="h s"></div>
  <div class="h e"></div>
  <div class="b">
    <div class="l"></div>
    <div class="l"></div>
    <div class="l"></div>
    <div class="l"></div>
    <div class="l"></div>
  </div>
</div>
<style>
  body {
    background: #CBE8DD;
    display: grid;
    place-content: center;
  }
  .c {
    width: 260px;
    height: 100px;
    position: relative;
  }
  .b {
    width: 180px;
    height: 100px;
    background: #007192;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0 0 0 10px #CBE8DD;
    position: absolute;
    top: 0;
    left: 40px;
  }
  .l {
    width: 10px;
    height: 100px;
    background: #CBE8DD;
    transform: skew(-20deg)
  }
  .h {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
  }
  .s {
    left: 0;
    border-left: 40px solid #007192;
  }
  .e {
    right: 0;
    border-right: 40px solid #007192;
  }
</style>`
    },
    {
      id: 179,
      name: 'Tanzina',
      code: `<div class="c">
  <div class="f">
    <div class="g"></div>
    <div class="y"></div>
    <div class="d"></div>
    <div class="y"></div>
    <div class="b"></div>
  </div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
  }
  .c {
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .f {
    min-width: 600px;
    height: 600px;
    background: #f00;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20px 100px 20px 1fr;
    rotate: -30deg
  }
  .g {background: #14A84A}
  .y {background: #F8CD1E}
  .d {background: #000000}
  .b {background: #3B66B0}
</style>`
    },
    {
      id: 180,
      name: 'Kuwait',
      code: `<div class="c">
  <div class="g"><div class="t s"></div></div>
  <div class="w"><div class="b"></div></div>
  <div class="r"><div class="t f"></div></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
  }
  .c {
    width: 400px;
    height: 300px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  .g {
    background: #13AA4B;
  }
  .t {
    width: 0;
    height: 0;
    border-right: 120px solid transparent;
  }
  .s {
    border-bottom: 100px solid #000000;
  }
  .f {
    border-top: 100px solid #000000;
  }
  .w {
    background: #FFFFFF;
  }
  .b {
    width: 120px;
    height: 100px;
    background: #000000;
  }
  .r {
    background: #EC1E25;
  }
</style>`
    },
    {
      id: 181,
      name: 'Iceland',
      code: `<div class="b"></div>
<div class="b b2"></div>
<div class="b b3"></div>
<div class="b b4"></div>
<style>
  body {
    margin: 0;
    background: #DE3832;
  }
  .b {
    width: 110px;
    height: 110px;
    background: #33499F;
    box-shadow: 0 0 0 15px #FFFFFF;
    position: fixed;
  }
  .b2 {
    width: 210px;
    right: 0;
  }
  .b3 {bottom: 0}
  .b4 {
    width: 210px;
    right: 0;
    bottom: 0;
  }
</style>`
    },
    {
      id: 182,
      name: 'Bahrain',
      code: `<div class="b"></div>
<style>
  body {
    margin: 0;
    background: #DA291C;
  }
  .b {
    width: 160px;
    height: 300px;
    background-color: #FFFFFF;
    background-image: linear-gradient(to top left, #DA291C 50%, transparent 50%), linear-gradient(to bottom left, #DA291C 50%, transparent 50%);
    background-position: calc(100% + 60px) -50px;
    background-size: 120px 50px;
    background-repeat: repeat-y;
  }
</style>`
    },
    {
      id: 183,
      name: 'Brazil',
      code: `<div class="c">
  <div class="t tl"></div>
  <div class="t tr"></div>
  <div class="o"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #009B3A;
  }
  .c {
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .o {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #002776;
    border-radius: 50%;
    overflow: hidden;
  }
  .o:before {
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    border: 10px solid #FFFFFF;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: -20px;
  }
  .t {
    width: 0;
    height: 0;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
  }
  .tl {
    border-right: 150px solid #FEDF00;
  }
  .tr {
    border-left: 150px solid #FEDF00;
  }
</style>`
    },
    {
      id: 184,
      name: 'India',
      code: `<div class="y"></div>
<div class="c">
  <div class="w">
    <div class="l"></div>
    <div class="l l2"></div>
    <div class="l l3"></div>
  </div>
</div>
<div class="g"></div>
<style>
  body {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    margin: 0;
  }
  .c {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .w {
    width: 60px;
    height: 60px;
    border: 10px solid #00007B;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .w:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #00007B;
    border-radius: 50%;
    position: absolute;
  }
  .l {
    position: absolute;
    width: 4px;
    height: 100%;
    background: #00007B;
  }
  .l2 {rotate: 60deg}
  .l3 {rotate: -60deg}
  .y {background: #F19E4B}
  .g {background: #3F8627}
</style>`
    },
    {
      id: 185,
      name: 'South Korea',
      code: `<div class="c">
  <div class="o">
    <div class="x h"></div>
    <div class="x f"></div>
  </div>
  <div class="b b1">
    <div class="d s"></div>
    <div class="d s"></div>
    <div class="d s"></div>
  </div>
  <div class="b b2">
    <div class="d"></div>
    <div class="d"></div>
    <div class="d s"></div>
    <div class="d"></div>
    <div class="d"></div>
  </div>
  <div class="b b3">
    <div class="d s"></div>
    <div class="d"></div>
    <div class="d"></div>
    <div class="d s"></div>
  </div>
  <div class="b b4">
    <div class="d"></div>
    <div class="d"></div>
    <div class="d"></div>
    <div class="d"></div>
    <div class="d"></div>
    <div class="d"></div>
  </div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background:#fff
  }
  .c {
    width: 196px;
    height: 182px;
    position: relative;
  }
  .c > div {
    position: absolute;
  }
  .o {
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }
  .o:before,
  .o:after {
    content: '';
    display: block;
    position: absolute;
    width: 60px;
    height: 60px;
    top: 30px;
    border-radius: 50%;
  }
  .o:before {
    background: #CD2E3A;
  }
  .o:after {
    right: 0;
    background: #0047A0;
  }
  .x {
    width: 120px;
    height: 60px;
  }
  .h {background: #CD2E3A}
  .f {background: #0047A0}
  .b {
    width: 60px;
    height: 42px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 6px;
  }
  .b1 {
    left: -60px;
    transform-origin: top right;
    rotate: -60deg;
  }
  .b2 {
    right: -60px;
    transform-origin: top left;
    rotate: 60deg;
  }
  .b3 {
    bottom: 0;
    left: -60px;
    transform-origin: bottom right;
    rotate: 60deg;
  }
  .b4 {
    bottom: 0;
    right: -60px;
    transform-origin: bottom left;
    rotate: -60deg;
  }
  .d {background: #000000}
  .s {grid-column: span 2}
</style>`
    },
    {
      id: 186,
      name: 'Guernsey',
      code: `<div class="w"></div>
<div class="w"></div>
<div class="w"></div>
<div class="w"></div>
<div class="l"></div>
<div class="l r"></div>
<style>
  body {
    margin: 0;
    background: #E8112D;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 80px;
  }
  .l {
    position: absolute;
    width: 230px;
    height: 20px;
    background: #F9DD16;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .r {rotate: 90deg}
  .l:before,
  .l:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  .l:before {
    border-left: 30px solid #F9DD16;
  }
  .l:after {
    border-right: 30px solid #F9DD16;
  }
  .w {background: #FFFFFF}
</style>`
    },
    {
      id: 187,
      name: 'Strippet Triangle',
      code: `<div class="c"></div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #40234B;
  }
  .c {
    width: 230px;
    height: 200px;
    background: #f00;
    position: relative;
    overflow: hidden;
  }
  .c:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 232px;
    height: 100px;
    background: #40234B;
    transform-origin: top left;
    rotate: 60deg;
  }
  .c:before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 232px;
    height: 100px;
    background: #40234B;
    transform-origin: top right;
    rotate: -60deg;
    box-shadow:
      0 0 0 18.5px #A94EA4,
      0 0 0 28.5px #40234B,
      0 0 0 45px #A94EA4,
      0 0 0 55px #40234B,
      0 0 0 70.5px #A94EA4,
      0 0 0 81px #40234B,
      0 0 0 96px #A94EA4,
      0 0 0 107px #40234B,
      0 0 0 122px #A94EA4,
      0 0 0 133px #40234B,
      0 0 0 149px #A94EA4,
      0 0 0 159px #40234B,
      0 0 0 174px #A94EA4,
      0 0 0 185px #40234B,
      0 0 0 200px #A94EA4
    ;
  }
</style>`
    },
    {
      id: 188,
      name: 'Icecream Stick',
      code: `<div class="c">
  <div class="h h1"></div>
  <div class="h h2"></div>
  <div class="v v1"></div>
  <div class="v v2"></div>
  <div class="h h3 d"></div>
  <div class="v v3 d"></div>
</div>
<style>
  body {
    display: grid;
    place-content: center;
    background: #FFFD9B;
  }
  .c {
    width: 340px;
    height: 240px;
    position: relative;
  }
  .h {
    position: absolute;
    width: 340px;
    height: 20px;
    background: #969610;
    border-radius: 20px;
  }
  .v {
    position: absolute;
    width: 20px;
    height: 240px;
    background: #969610;
    border-radius: 20px;
  }
  .h1 {top: 30px}
  .h2 {bottom: 30px}
  .h3 {top: 110px}
  .v1 {left: 80px}
  .v2 {right: 80px}
  .v3 {left: 160px}
  .d {background: #646521}
</style>`
    },
    {
      id: 189,
      name: 'Triangle Hook',
      code: `<div class="c">
  <div class="s">
    <div class="a"></div>
    <div class="b b1"></div>
    <div class="b b2"></div>
  </div>
  <div class="e">
    <div class="d"></div>
    <div class="v"></div>
  </div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #D669EC;
  }
  .c {
    width: 290px;
    height: 180px;
    display: grid;
    grid-template-columns: 110px 180px;
  }
  .s {
    position: relative;
  }
  .a {
    position: absolute;
    top: 35px;
    right: 0;
    border-top: 55px solid transparent;
    border-bottom: 55px solid transparent;
    border-right: 110px solid #FDFBF8;
  }
  .b {
    position: absolute;
    right: 0;
    width: 30px;
    height: 45px;
    background: #D669EC;
  }
  .b:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    right: 30px;
    bottom: 0;
    border-top: 15px solid transparent;
    border-right: 30px solid #D669EC;

  }
  .b1 {top: 35px}
  .b2 {
    bottom: 35px;
    transform: rotateX(180deg)
  }
  .e {
    position: relative;
  }
  .d {
    position: absolute;
    top: 0;
    left: 0;
    border-top: 90px solid transparent;
    border-bottom: 90px solid transparent;
    border-left: 180px solid #FDFBF8;
  }
  .v {
    position: absolute;
    width: 20px;
    height: 180px;
    background: #D669EC;
    right: 50px
  }
</style>`
    },
    {
      id: 190,
      name: 'Power Chip',
      code: `<div class="c">
  <div class="b"><div class="t"></div></div>
  <div class="b b2"><div class="t"></div></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #E3516E;
  }
  .c {
    width: 280px;
    height: 150px;
    display: flex;
    gap: 20px;
  }
  .b {
    flex: 1;
    background: #FADE8B;
    position: relative;
    overflow: hidden;
  }
  .b2 {transform: rotateY(180deg)}
  .t {
    position: absolute;
    width: 0;
    height: 0;
    left: 40px;
    bottom: 50px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 40px solid #E3516E;
  }
  .b::before,
  .b::after {
    content: '';
    display: block;
    position: absolute;
    background: #E3516E;
  }
  .b::before {
    width: 20px;
    height: 50px;
    bottom: 0;
    left: 55px;
  }
  .b::after {
    width: 43px;
    height: 85px;
    right: 0;
    transform-origin: left top;
    rotate: -32deg;
  }
</style>`
    },
    {
      id: 191,
      name: 'Modern Fence',
      code: `<div class="c">
  <div class="v"></div>
  <div class="v v2"></div>
  <div class="h h1"></div>
  <div class="h h2"></div>
  <div class="h h3"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #2F2E59;
  }
  .c {
    width: 245px;
    height: 150px;
    position: relative;
  }
  .h {
    width: 275px;
    height: 20px;
    border-radius: 20px;
    background: #EEECF6;
    position: absolute;
    top: 65px;
  }
  .h1 {
    rotate: 30deg;
    left: -15px
  }
  .h2 {
    top: 66px;
    width: 247px;
    transform-origin: 10px;
    rotate: 30deg;
  }
  .h3 {
    width: 248px;
    top: 54.5px;
    transform-origin: calc(100% - 30px);
    rotate: 30deg;
  }
  .v {
    width: 20px;
    height: 150px;
    border-radius: 20px;
    background: #EEECF6;
    position: absolute;
  }
  .v2 {right: 0}
</style>`
    },
    {
      id: 192,
      name: 'Abstract Firefly',
      code: `<div class="c">
  <div class="t l"></div>
  <div class="t h"></div>
  <div class="t s s1"></div>
  <div class="t s s2"></div>
  <div class="t s s3"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-content: center;
    background: #1D471D;
  }
  .c {
    width: 280px;
    height: 150px;
    position: relative;
    /* background: #f00; */
  }
  .t {
    width: 0;
    height: 0;
    --w: 140px;
    --h: 150px;
    --c: #CCE58E;
    border-left: var(--w) solid transparent;
    border-right: var(--w) solid transparent;
    border-top: var(--h) solid var(--c);
  }
  .h {
    position: absolute;
    top: 0;
    --h: 20px;
    --c: #1D471D;
  }
  .s {
    position: absolute;
    --w: 35px;
    --h: 50px;
    --c: #1D471D;
  }
  .s1 {
    top: 0;
    left: 105px;
  }
  .s2 {
    top: 50px;
    left: 40px;
    rotate: -135deg;
  }
  .s3 {
    top: 50px;
    right: 40px;
    rotate: 135deg;
  }
</style>`
    },
    {
      id: 193,
      name: 'Galver',
      code: `<div class="l"></div>
<div class="l v"></div>
<div class="c">
  <div class="i"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCDDEB;
  }
  .c {
    width: 160px;
    height: 160px;
    position: relative;
    border-radius: 50%;
    border: 15px solid #8B0051;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .i {
    width: 70px;
    height: 70px;
    background: #8B0051;
    border-radius: 50%;
    box-shadow: 0 0 0 15px #8B0051, inset 0 0 0 15px #F180B6;
    position: relative;
  }
  .l {
    position: absolute;
    width: 230px;
    height: 30px;
    background: #8B0051;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .v {
    rotate: 90deg;
  }
  .l:before,
  .l:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
  }
  .l:before {
    border-top: 15px solid #FCDDEB;
  }
  .l:after {
    border-bottom: 15px solid #FCDDEB;
  }
</style>`
    },
    {
      id: 194,
      name: 'Fountain',
      code: `<div class="c">
  <div class="a a1">
    <div class="i"></div>
  </div>
  <div class="a a2">
    <div class="i"></div>
  </div>
  <div class="a a3">
    <div class="i"></div>
  </div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0;
    background: #4FA07B;
  }
  .c {
    width: 260px;
    height: 280px;
    position: relative;
  }
  .a {
    position: absolute;
    width: 140px;
    height: 180px;
    background: #4FA07B;
    border: 20px solid #0D1335;;
    border-bottom: none;
    border-radius: 140px 140px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a1 {
    top: 0;
    left: 50%;
    translate: -50% 0;
  }
  .a2 {
    bottom: 0;
  }
  .a3 {
    bottom: 0;
    right: 0;
    transform: rotateY(180deg);
  }
  .a:before,
  .a:after {
    content: '';
    display: block;
    width: 20px;
    background: #4FA07B;
    position: absolute;
    bottom: 0;
  }
  .a:before {
    height: 40px;
    left: 20px;
  }
  .a:after {
    height: 63px;
    left: -20px;
  }
  .i {
    width: 60px;
    height: 120px;
    background: #4FA07B;
    border: 20px solid #0D1335;
    border-bottom: none;
    border-radius: 60px 60px 0 0;
  }
</style>`
    },
    {
      id: 195,
      name: 'Look Away',
      code: `<div class="c"></div>
<div class="e">
  <div class="b"></div>
  <div class="b"></div>
</div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
  }
  .c {
    width: 240px;
    height: 190px;
    background: #F9C96C;
    rotate: -15deg;
    border-radius: 130px 130px 240px 240px;
    position: relative;
    overflow: hidden;
  }
  .e {
    position: absolute;
    width: 175px;
    height: 100px;
    translate: -12.5px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .b {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 15px solid #131313;
    border-left-color: transparent;
    border-top-color: transparent;
    rotate: 45deg;
    position: relative;
  }
  .b:before,
  .b:after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background: #131313;
    border-radius: 50%;
    position: absolute;
  }
  .b:before {
    left: -6px;
    top: 40px
  }
  .b:after {
    right: -5px;
    top: -6px
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
  }
  .c:before {
    background: #E89A52;
    top: -35px;
    right: 30px;
  }
  .c:after {
    background: #F459E3;
    top: -45px;
    right: 70px;
  }
</style>`
    },
    {
      id: 196,
      name: 'Tree',
      code: `<div class="c">
  <div class="v"></div>
  <div class="h"></div>
  <div class="d l l1"></div>
  <div class="d l l2"></div>
  <div class="d r r1"></div>
  <div class="d r r2"></div>
</div>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #90D3A6;
  }
  .c {
    width: 200px;
    height: 180px;
    position: relative;
  }
  .v {
    width: 200px;
    height: 20px;
    background: #024817;
    border-radius: 20px;
    position: absolute;
    bottom: 0;
  }
  .h {
    width: 20px;
    height: 180px;
    background: #024817;
    border-radius: 20px;
    position: absolute;
    left: 90px;
  }
  .d {
    width: 54px;
    height: 20px;
    background: #024817;
    position: absolute;
  }
  .l {
    border-radius: 20px 0 0 20px;
    transform-origin: right bottom;
    rotate: 30deg;
    right: 110px;
  }
  .r {
    border-radius: 0 20px 20px 0;
    transform-origin: left bottom;
    rotate: -30deg;
    left: 110px;
  }
  .l1,.r1 {top: 56px}
  .l2,.r2 {bottom: 54px}
</style>`
    },
    {
      id: 197,
      name: 'Crystal',
      code: `<div class="c">
  <div class="v"></div>
  <div class="v v2"></div>
  <div class="v v3"></div>
</div>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5F133F;
  }
  .c {
    width: 160px;
    height: 160px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c:after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    background: #F7BED9;
    border-radius: 50%;
    position: absolute;
  }
  .v {
    position: absolute;
    width: 50px;
    height: 160px;
    background: #F075B0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .v2 {rotate: 60deg}
  .v3 {rotate: -60deg}
  .v:before,
  .v:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
  .v:before {
    border-bottom: 30px solid #F7BED9;
    translate: 0 -30px
  }
  .v:after {
    border-top: 30px solid #F7BED9;
    translate: 0 30px
  }
</style>`
    },
    {
      id: 198,
      name: 'Walls',
      code: `<div class="e e1 b"></div>
<div class="m d"></div>
<div class="c b"></div>
<div class="m d"></div>
<div class="e e2 b"></div>
<style>
  body {
    background: #6867D4;
    margin: 0;
    height:300px;
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 50px;
    align-items: center;
  }
  .b {background:#7BAFDE}
  .d {background:#000039}
  .e {
    height: 100px;
    transform: skewY(26.5deg);
  }
  .e1 {translate: 0 12px}
  .e2 {translate: 0 -12px}
  .m {
    height: 100px;
    transform: skewY(-26.5deg);
  }
  .c {
    height: 200px;
    transform: skewY(26.5deg);
  }
</style>`
    },
    {
      id: 199,
      name: 'Antenna',
      code: `<div class="b b1"></div>
<div class="b b2"></div>
<div class="v"></div>
<div class="h h1"></div>
<div class="h h2"></div>
<div class="h h3"></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #F48B26;
    margin: 0;
  }
  .h {
    --w: 160px;
    width: var(--w);
    height: 20px;
    background: #FEFF58;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    translate: -50% 0;
  }
  .h1 {top: 30px}
  .h2 {
    --w: 240px;
    top: 80px;
  }
  .h3 {
    --w: 320px;
    top: 130px;
  }
  .v {
    width: 20px;
    height: 300px;
    background: #FEFF58;
    position: absolute;
    left: 190px;
  }
  .b {
    position: absolute;
    bottom: 0;
    background: #FEFF58;
    width: 140px;
    height: 100px;
    border-top: 30px solid #F48B26;
    box-shadow: 0 0 0 20px #FEFF58;
  }
  .b1 {
    border-top-right-radius: 40px;
    border-right: 30px solid #F48B26;
  }
  .b2 {
    border-top-left-radius: 40px;
    border-left: 30px solid #F48B26;
    right: 0;
  }
</style>`
    },
    {
      id: 200,
      name: 'Lantern',
      code: `<div class="c">
  <div class="b"></div>
  <div class="b b2"></div>
</div>
<div class="v"></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #FAD3E5;
    margin: 0;
    display: grid;
    place-content: center;
  }
  .c {
    width: 250px;
    height: 244px;
  }
  .v {
    position: absolute;
    width: 50px;
    height: 300px;
    background: #8B0051;
    left: 175px
  }
  .b {
    height: 124px;
    background: #8B0051;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .b2 {
    margin-top: -4px;
  }
</style>`
    },
    {
      id: 201,
      name: 'Triple Zero',
      code: `<div class="c">
  <div class="o"></div>
  <div class="o m"></div>
  <div class="o"></div>
</div>
<style>
  body {
    background: #998235;
    margin: 0;
    height:300px;
    display: grid;
    align-items: center;
    grid-template-columns: 45px 1fr 45px;
  }
  body:before,
  body:after {
    content: '';
    height: 30px;
    background: #FCBE5C;
  }
  .c {
    width: 310px;
    height: 210px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    position: relative;
  }
  .o {
    box-sizing: border-box;
    border-radius: 25px;
    border: 30px solid #FCBE5C;
  }
  .m {border-color: #0B2429}
</style>`
    },
    {
      id: 202,
      name: 'Steering Wheel',
      code: `<div class="c">
  <div class="o"></div>
</div>
<div class="v"></div>
<style>
  * {box-sizing: border-box}
  body {
    background: #4F77FF;
    margin: 0;
    display: grid;
    place-content: center;
  }
  .c {
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 50%;
    border: 30px solid #1038BF;
    background-image: linear-gradient(to bottom, #4F77FF, #4F77FF 52px, #1038BF 52px);
    overflow: hidden;
  }
  .v {
    width: 30px;
    height: 50px;
    background: #4F77FF;
    position: absolute;
    left: 185px;
    top: 40px;
  }
  .o {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    width: 20px;
    height: 20px;
    background: #4F77FF;
    border-radius: 50%;
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    background: #4F77FF;
    top: 82px;
    border-radius: 10px;
  }
  .c:before {right: 84px}
  .c:after {left: 86px}
</style>`
    },
    {
      id: 203,
      name: 'Wolverine',
      code: `<div class="c">
  <div class="h">
    <div class="o"></div>
    <div class="m"><div class="y"></div></div>
  </div>
  <div class="e">
    <div class="w"></div>
    <div class="w w2"></div>
  </div>
</div>
<style>
  body {
    background: #373794;
    display: grid;
    place-content: center;
  }
  .c {
    width: 200px;
    height: 126px;
    /* background: #dd6b4d; */
    position: relative;
  }
  .h {
    width: 90px;
    height: 126px;
    position: absolute;
    left: 50%;
    translate: -50% 0;
  }
  .o {
    width: 90px;
    height: 90px;
    background: #F3AC3C;
    border-radius: 50%;
  }
  .m {
    width: 80px;
    height: 44px;
    background: #0E0E39;
    margin: -4px auto 0;
    border-radius: 0 0 50px 50px;
  }
  .y {
    width: 54px;
    height: 55px;
    background: #F3AC3C;
    margin-inline: auto;
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .y::before {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background: #FFFFFF;
    border-radius: 20px;
    translate: 0 -0.5px;
  }
  .e {
    position: absolute;
    top: 20px;
    width: 200px;
    height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .w {
    background: #0E0E39;
    border-radius: 0 145px 0 200px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 11px 5px;
  }
  .w:before {
    content: '';
    display: block;
    width: 30px;
    height: 20px;
    border-radius: 0 20px 0 20px;
    background: #FFFFFF;
  }
  .w2 {transform: rotateY(180deg)}
</style>`
    },
    {
      id: 204,
      name: 'Deadpool',
      code: `<div class="c">
  <div class="e e1"></div>
  <div class="e e2"></div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #F3AC3C;
    display: grid;
    place-content: center;
  }
  .c {
    background: #000000;
    width: 200px;
    height: 200px;
    position: relative;
    translate: 0 4px;
    border-radius: 50%;
    border: 17px solid #9F3333;
  }
  .c:before {
    content: '';
    display: block;
    width: 36px;
    height: 100%;
    background: #9F3333;
    position: absolute;
    left: 65px;
  }
  .e {
    position: absolute;
    width: 30px;
    height: 15px;
    background: #fff;
    border-radius: 0 0 15px 15px;
  }
  .e1 {
    top: 71px;
    left: 18px;
    rotate: 28deg;
  }
  .e2 {
    top: 71px;
    right: 19px;
    rotate: -28deg;
  }
</style>`
    },
    {
      id: 205,
      name: 'Magneto\'s helmet',
      code: `<div class="c">
  <div class="m"></div>
  <div class="b"></div>
  <div class="o"></div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #232323;
    display: grid;
    place-content: center;
  }
  .c {
    background: #AF3A3A;
    width: 160px;
    height: 240px;
    position: relative;
    translate: 0 4px;
    border-radius: 80px 80px 0 0;
    overflow: hidden;
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 26px solid #232323;
  }
  .c:before {
    border-right: 41px solid transparent;
  }
  .c:after {
    right: 0;
    border-left: 41px solid transparent;
  }
  .m {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    border-left: 43px solid transparent;
    border-right: 43px solid transparent;
    border-bottom: 70px solid #232323;
  }
  .b {
    position: absolute;
    top: 74px;
    left: 50%;
    translate: -50% 0;
    width: 70px;
    height: 140px;
    background: #232323;
  }
  .o {
    position: absolute;
    top: 52.5px;
    left: 50%;
    translate: -50% 0;
    width: 120px;
    height: 70px;
    background: #232323;
    border-radius: 50%;
  }
  .o:before {
    content: '';
    display: block;
    width: 120px;
    height: 120px;
    background: #AF3A3A;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 55px;
    translate: -50% 0;
  }
</style>`
    },
    {
      id: 206,
      name: 'Punisher',
      code: `<div class="c">
  <div class="h">
    <div class="e e1"></div>
    <div class="e e2"></div>
  </div>
  <div class="n">
    <div class="v"></div>
    <div class="v"></div>
    <div class="v"></div>
    <div class="v"></div>
  </div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #CAE5DC;
    display: grid;
    place-content: center;
  }
  .c {
    /* background: #AF3A3A; */
    width: 140px;
    height: 234px;
    position: relative;
    translate: 0 7px;
  }
  .h {
    width: 140px;
    height: 140px;
    background: #000000;
    border-radius: 50%;
    position: relative;
  }
  .h:before,
  .h:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    translate: -50% 0;
  }
  .h:before {
    width: 100px;
    height: 30px;
    background: #000000;
    bottom: 0;
  }
  .h:after {
    bottom: 14px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 31px solid #CAE5DC;
  }
  .e {
    width: 46px;
    height: 23px;
    background: #CAE5DC;
    position: absolute;
    border-radius: 0 0 25px 25px;
    top: 69px;
  }
  .e1 {
    left: 17px;
    transform-origin: top left;
    rotate: 28deg;
  }
  .e2 {
    right: 17px;
    transform-origin: top right;
    rotate: -28deg;
  }
  .n {
    width: 76px;
    height: 93px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }
  .v {background: #000000}
</style>`
    },
    {
      id: 207,
      name: 'Green Lantern logo',
      code: `<div class="c">
  <div class="e"></div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #70CEAF;
    display: grid;
    place-content: center;
    --c: #0E532F;
  }
  .c {
    width: 280px;
    height: 280px;
    position: relative;
    border-radius: 50%;
    border: 25px solid var(--c);
    display: grid;
    place-content: center;
  }
  .e {
    width: 140px;
    height: 140px;
    position: relative;
    border-radius: 50%;
    border: 25px solid var(--c);
  }
  .e:before,
  .e:after {
    content: '';
    display: block;
    width: 140px;
    height: 25px;
    background: var(--c);
    position: absolute;
    left: -25px;
  }
  .e:before {
    top: -35px;
  }
  .e:after {
    bottom: -35px;
  }
</style>`
    },
    {
      id: 208,
      name: 'Hulk fist',
      code: `<div class="c">
  <div class="b f">
    <div class="h"></div>
    <div class="h h2"></div>
    <div class="h h3"></div>
    <div class="h h2"></div>
  </div>
  <div class="b p"></div>
  <div class="t"></div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #107640;
    display: grid;
    place-content: center;
  }
  .c {
    background: #161D1A;
    width: 230px;
    height: 230px;
    position: relative;
    border-radius: 50%;
  }
  .t {
    position: absolute;
    bottom: 65px;
    right: 36px;
    background: #107640;
    width: 100px;
    height: 56px;
    border: 7px solid #161D1A;
  }
  .b {
    width: 130px;
    translate: -3px 0;
  }
  .f {
    margin: 0 auto;
    height: 119px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    --h: 31px;
  }
  .h {
    width: 22px;
    height: var(--h);
    background: #107640;
  }
  .h2 {--h: 51px}
  .h3 {--h: 56px}
  .p {
    height: 104px;
    background: #107640;
    margin: 7px auto;
  }
</style>`
    },
    {
      id: 209,
      name: 'Iron men',
      code: `<div class="c">
  <div class="b"></div>
  <div class="e"></div>
  <div class="m">
    <div class="r r1"></div>
    <div class="r r2"></div>
    <div class="l"></div>
  </div>
</div>
<style>
  * {box-sizing: border-box}
  body {
    background: #BB2726;
    margin: 0;
  }
  .c {
    background: #F3AC3C;
    width: 216px;
    height: 285px;
    position: relative;
    margin: 0 auto;
  }
  .b {
    width: 166px;
    height: 132px;
    margin: 0 auto;
    border: 10px solid #BB2726;
    border-top: none;
  }
  .b:before {
    content: '';
    display: block;
    width: 80px;
    height: 65px;
    margin: 0 auto;
    background: #BB2726;
  }
  .e {
    width: 166px;
    height: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .e:before,
  .e:after {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 65px;
    height: 20px;
    background: #FFFFFF;
    border: 10px solid #BB2726;
    border-top: none;
  }
  .m {
    width: 216px;
    height: 133px;
    position: relative;
  }
  .l {
    position: absolute;
    left: 50%;
    translate: -50% 0;
    bottom: 37px;
    width: 100px;
    height: 10px;
    background: #BB2726;
  }
  .r {
    width: 200px;
    height: 200px;
    border: 10px solid #BB2726;
    border-radius: 50% 50% 0 0;
    position: absolute;
    top: 3px;
  }
  .r1 {right: 156px}
  .r2 {left: 156px}
</style>`
    },
    {
      id: 210,
      name: 'Black widow logo',
      code: `<div class="c"></div>
<style>
  * {box-sizing: border-box}
  body {
    background: #151917;
    display: grid;
    place-content: center;
  }
  .c {
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    border: 20px solid #D83A34;
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 42px;
    border-left: 63px solid transparent;
    border-right: 62px solid transparent;
  }
  .c:before {
    top: 36px;
    border-top: 94px solid #D83A34;
  }
  .c:after {
    bottom: 36px;
    border-bottom: 94px solid #D83A34;
  }
</style>`
    },
    {
      id: 211,
      name: 'CSS Weekly',
      code: `<div class="c">
  <div class="p p1">
    <div class="h"></div>
    <div class="b"></div>
  </div>
  <div class="p p2">
    <div class="h"></div>
    <div class="b"></div>
  </div>
</div>
<style>
  *, *:before, *:after {box-sizing: border-box}
  body {
    background: #9B8170;
    display: grid;
    place-content: center;
  }
  .c {
    width: 240px;
    height: 170px;
    translate: 0 25px;
    position: relative;
  }
  .p {
    width: 140px;
    height: 170px;
    position: absolute;
  }
  .p1 {
    right: 0;
  }
  .p:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: #9B8170;
    position: absolute;
  }
  .p1:after {
    height: 40px;
    top: 68px;
    right: 37px;
    rotate: 45deg;
  }
  .p2:after {
    bottom: 0;
    right: 20px;
  }
  .h {
    position: absolute;
    left: 50%;
    translate: -50% 0;
    width: 80px;
    height: 80px;
    border: 20px solid #FFFFFF;
    border-radius: 50% 50% 0 50%;
    rotate: 45deg;
  }
  .b {
    position: absolute;
    top: 70px;
    width: 140px;
    height: 100px;
    overflow: hidden;
    border-bottom: 20px solid #FFFFFF;
  }
  .b:before {
    content: '';
    display: block;
    width: 140px;
    height: 140px;
    background: #9B8170;
    border: 20px solid #FFFFFF;
    border-radius: 50% 50% 0 0;
  }
</style>`
    },
    {
      id: 212,
      name: 'Fibonacci peacook',
      code: `<div class="a h">
  <div class="a v b">
    <div class="a h c">
      <div class="a v">
        <div class="a h d">
          <div class="a"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
html{
  display:grid;
  place-content:center;
  background:#FFED99;
  --c:#3F8627;
}
body{
  width:288px;
  height:178px;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr;
}
.h{
  display:grid;
  grid-template-columns: .62fr 1fr;
  grid-template-rows: 1fr;
}
.a>.h{
  rotate:180deg;
}
.v{
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: .62fr 1fr;
}
.v:after{
  rotate:90deg;
}
.a:after{
  content:'';
  background-image:radial-gradient(circle at 0 0, var(--c),70.5%,#FFED99 0);
}
.b{--c:#9F3333}
.c{--c:#F48B26}
.d{--c:#000}
</style>`
    },
    {
      id: 213,
      name: 'Boat',
      code: `<div class="s">
  <div class="e"></div>
  <div class="e"></div>
  <div class="e"></div>
  <div class="e"></div>
</div>
<div class="b">
  <div class="a"></div>
  <div class="c"></div>
</div>
<style>
  *, *:before, *:after {box-sizing: border-box}
  body {
    background: #8AB8B6;
    margin: 0;
  }
  .b {
    position: fixed;
    top: 32px;
    left: 100px;
    width: 200px;
    height: 200px;
  }
  .a {
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-top: 70px solid transparent;
    border-bottom: 70px solid transparent;
    border-left: 100px solid #4A7D7B;
  }
  .c {
    width: 130px;
    height: 60px;
    background: #4A7D7B;
    position: absolute;
    bottom: 0;
    left: 35px;
  }
  .c:before,
  .c:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 60px solid #4A7D7B;
  }
  .c:before {
    border-left: 35px solid transparent;
    left: -35px;
  }
  .c:after {
    border-right: 35px solid transparent;
    right: -35px;
  }
  .s {
    width: 400px;
    height: 225px;
    position: relative;
    background: linear-gradient(to bottom, #EEF8FF, #EEF8FF 200px, #8AB8B6 200px) ;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .e {
    width: 100px;
    height: 50px;
    background: #EEF8FF;
    border-radius: 50%;
  }
</style>`
    },
    {
      id: 214,
      name: 'Newspaper',
      code: `<style>
html{
  background:#F8F8F8;
}
html:before{
  content:'';
  width:340px;
  height:10px;
  background:#787885;
  position:fixed;
  top:80px;
  left:30px;
  box-shadow:
    0 30px 0 #787885,
    0 50px 0 #787885,
    0 70px 0 #787885,
    0 90px 0 #787885,
    0 110px 0 #787885,
    0 130px 0 #787885,
    0 150px 0 #787885,
    0 170px 0 #787885,
    0 190px 0 #787885
  ;
}
html:after{
  content:'';
  width:40px;
  height:50px;
  background:#787885;
  position:fixed;
  top:20px;
  left:30px;
  box-shadow:
    60px 0 0 #787885,
    120px 0 0 #787885,
    180px 0 0 #787885,
    240px 0 0 #787885,
    300px 0 0 #787885
  ;
}
body{
  position:fixed;
  bottom:20px;
  left:50%;
  translate:-50% 0;
  margin:0;
  width:172px;
  height:150px;
  background:#787885;
  outline:10px solid #F8F8F8;
}
</style>`
    },
    {
      id: 215,
      name: 'Staggered checks',
      code: `<style>
html{
  background:#6867D4;
}
body{
  position:fixed;
  top:48px;
  left:104px;
  margin:0;
  width:192px;
  height:192px;
  background:#000039;
  rotate:45deg;
}
body:before,body:after{
  content:'';
  width:192px;
  height:8px;
  background:#6867D4;
  position:absolute;
  top:16px;
  box-shadow:
    0 32px 0 #6867D4,
    0 72px 0 #6867D4,
    0 120px 0 #6867D4
  ;
}
body:after{
  top:192px;
  left:16px;
  transform-origin:top left;
  rotate:-90deg
}
</style>`
    },
    {
      id: 216,
      name: 'Pies',
      code: `<div id="a"></div>
<div id="b"></div>
<style>
body{
  background:#37212D;
  --a:#EE9B99;
  --b:#76608A;
  --c:#BCE6E9;
}
#a,#b{
  margin:0;
  position:fixed;
  top:90px;
  left:80px;
  width:120px;
  height:120px;
  background:radial-gradient(circle at 100% 100%, var(--a), var(--a) 120px, var(--b) 0);
  overflow:hidden;
}
#a:before,#b:before{
  content:'';
  position:absolute;
  width:120px;
  height:120px;
  background:var(--c);
  border-radius:50%;
  top:50%;
}
#b{
  left:200px;
  rotate:90deg;
  --a:#BCE6E9;
  --b:#EE9B99;
  --c:#76608A;
}
</style>`
    },
    {
      id: 217,
      name: 'Maze',
      code: `<style>
html{
  background:#202939;
  display:grid;
  place-content:center;
}
body{
  width:50px;
  height:50px;
  background:#FFF;
  transform: skew(0, 30deg);
  box-shadow:
    -55px -24px 0 #556787,
    55px 25px 0 #556787,
    -20px 32px 0 #FFF,
    20px -31px 0 #FFF
  ;
}
</style>`
    },
    {
      id: 218,
      name: '3D',
      code: `<style>
html{
  background:#4C455B;
}
html:before{
  content:'';
  position:fixed;
  left:62px;
  top:110px;
  width:60px;
  height:80px;
  border-radius:12px;
  background:#8AB8B6;
  box-shadow:
    72px 0 0 #8AB8B6,
    144px 0 0 #8AB8B6,
    216px 0 0 #8AB8B6
  ;
}
body{
  margin:0;
  width:20px;
  height:80px;
  background:#8AB8B6;
  position:fixed;
  right:102px;
  top:110px;
}
html:after{
  content:'';
  position:fixed;
  left:80px;
  top:122px;
  width:24px;
  height:56px;
  background:#4C455B;
  box-shadow:
    72px 0 0 #4C455B,
    144px 0 0 #4C455B,
    186px 0 0 #4C455B,
    222px 0 0 #4C455B
  ;
}
</style>`
    },
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
        id: 8,
        name: 'Transition',
        itemIds: [42,43,44]
    },
    {
        id: 9,
        name: 'Margin',
        itemIds: [45,46]
    },
    {
        id: 10,
        name: 'Block',
        itemIds: [47,48,49,50,51,52]
    },
    {
        id: 11,
        name: 'Overflow',
        itemIds: [53,54,55,56,57,58,59,60]
    },
    {
        id: 12,
        name: 'Blend',
        itemIds: [61,62,63,64,65,66,67,68]
    },
    {
        id: 13,
        name: 'Clip',
        itemIds: [69,70,71,72,73,74,75,76]
    },
    {
        id: 14,
        name: 'Zindex',
        itemIds: [77,78,79,80]
    },
    {
        id: 15,
        name: 'Filter',
        itemIds: [81,82,83,84,85,86,87,88]
    },
    {
        id: 21,
        name: 'Rotate',
        itemIds: [125,126,127,128,129,130,131,132]
    },
    {
        id: 22,
        name: 'Grid',
        itemIds: [133,134,135,136,137,138,139,140]
    },
    {
        id: 23,
        name: 'Contain',
        itemIds: [141,142]
    },
    {
        id: 24,
        name: 'Offset',
        itemIds: [143,144,145,146,147,148,149,150]
    },
    {
        id: 25,
        name: 'Flex',
        itemIds: [151,152,153,154,155,156,157,158]
    },
    {
        id: 26,
        name: 'Initial',
        itemIds: [159,160,161,162,163,164,165,166]
    },
    {
        id: 27,
        name: 'Relative',
        itemIds: [167,168,169,170]
    },
    {
        id: 28,
        name: 'Revert',
        itemIds: [171,172,173,174,175,176,177,178]
    },
    {
        id: 29,
        name: 'Font',
        itemIds: [179,180,181,182,183,184,185,186]
    },
    {
        id: 30,
        name: 'Gradient',
        itemIds: [187,188,189,190,191,192,193,194]
    },
    {
        id: 31,
        name: 'Opacity',
        itemIds: [195,196,197,198,199,200,201,202]
    },
    {
        id: 32,
        name: 'Animation',
        itemIds: [203,204,205,206,207,208,209,210]
    },
    {
        id: 33,
        name: 'Outline',
        itemIds: [211,212,213,214,215,216,217,218]
    }
]