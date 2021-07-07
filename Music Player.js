let progress=document.getElementById("progress");
let progress_bar=document.getElementById("progress_bar");
let music=document.getElementById("music");
let title=document.getElementById("title");
let artist=document.getElementById("artist");
let cover=document.getElementById("cover");
let cur_time=document.getElementById("cur_time");
let dur=document.getElementById("dur");
let play=document.getElementById("control");
let index=0;

title.innerHTML=songs[index].Name;
artist.innerHTML=songs[index].Singer;
cover.src=songs[index].Thumbnail;
music.src=songs[index].Source;
play.onclick= () => {
if(music.paused){music.play();}
else{music.pause();}
}
music.onplay= () => {
play.setAttribute("class", "fas fa-pause-circle");
cover.setAttribute("class", "cover");
}
music.onpause= () => {
play.setAttribute("class", "fas fa-play-circle");
cover.setAttribute("class", "covers")
}
music.onloadedmetadata= () => {
let min_dur=Math.floor(music.duration/60);
let sec_dur=Math.floor(music.duration%60);
if(min_dur<10){min_dur=`0${min_dur}`;}
if(sec_dur<10){sec_dur=`0${sec_dur}`;}
dur.innerHTML=`${min_dur}:${sec_dur}`;
}
music.ontimeupdate= () => {
let min_time=Math.floor(music.currentTime/60);
let sec_time=Math.floor(music.currentTime%60);
if(min_time<10){min_time=`0${min_time}`;}
if(sec_time<10){sec_time=`0${sec_time}`;}
cur_time.innerHTML=`${min_time}:${sec_time}`;
progress_bar.style.width=(music.currentTime/music.duration)*100+"%";
}
progress.onclick= (e) => {
music.currentTime=((e.offsetX/progress.offsetWidth)*music.duration);
}
function next(){
index=(index+1) % songs.length;
music.src=songs[index].Source;
title.innerHTML=songs[index].Name;
artist.innerHTML=songs[index].Singer;
cover.src=songs[index].Thumbnail;
music.play();
}
function prev(){
index=(index-1 +songs.length) % songs.length;
music.src=songs[index].Source;
title.innerHTML=songs[index].Name;
artist.innerHTML=songs[index].Singer;
cover.src=songs[index].Thumbnail;
music.play();
}
music.onended= () =>{
next();
}