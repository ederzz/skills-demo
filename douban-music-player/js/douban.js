window.onload = () => {
	
	//第三方分享，悬浮效果
	var icon_export = document.querySelector(".list-con ul");
	var share_icon = document.querySelector(".list-con .share-link");
	icon_export.addEventListener('mouseover',(e) => {
		if(e.target.className == "icon icon-export"){
			e.target.style.visibility = "hidden";
			e.target.parentNode.previousSibling.previousSibling.style.display = 'block';
		}
	})
	icon_export.addEventListener('mouseout',(e) => {
		if(e.target.className == "share-link"){
			e.target.style.display = "none";
			e.target.nextSibling.nextSibling.firstChild.nextSibling.style.visibility = 'visible';
		}
	});
	
	//播放处理
	var dbAudio = new Audio();
	var playingIndex = 0;

	var author = document.querySelector( '.play-detail>.author' );//作者名
	var posterImg = document.querySelector( '.play-detail>.poster-con>.poster' );//海报
	var songType = document.querySelector( '.play-detail>.type>a' );//音乐类型
	var songTitle = document.querySelector( '.play-btn > .mod1 > .hd > .song-title' );//音乐标题
	var playBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-play' );//播放按钮、暂停按钮、上一曲、下一曲
	var pauseBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-pause' );
	var prevBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-prev' );
	var nextBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-next' );
	var playPanel = document.querySelector( '.play-list > .list-con > .play-panel' );//歌曲面板
	let progress = document.querySelector( '.play-btn > .mod1 > .bd > .progress-load' );//进度条
	let progressPlay = document.querySelector( '.play-btn > .mod1 > .bd > .progress-load > .progress-play' );
	let restTime = document.querySelector( '.play-btn > .mod1 > .hd > .time' );
	
	
	/*函数列表*/
	//重载音乐
	const loadSong = function() {
		let playingSong = playlist[ playingIndex ];
		author.innerHTML = playingSong.singer;
		posterImg.setAttribute( 'src', playingSong.picUrl );
		posterImg.setAttribute( 'alt', playingSong.songName );
		songType.innerHTML = playingSong.type;
		songTitle.innerHTML = playingSong.songName;
		dbAudio.src = playingSong.url;
		playMusic();
	}
	
	//播放暂停
	const playMusic = function() {
		pauseBtn.style.display = 'inline-block';
		playBtn.style.display = 'none';
		dbAudio.play();
	}
	const pauseMusic = function() {
		pauseBtn.style.display = 'none';
		playBtn.style.display = 'inline-block';
		dbAudio.pause();
	}
	
	//上一曲
	const prevMusic = function() {
		if( playingIndex !== 0 ) {
			playingIndex--;
			loadSong();
			dbAudio.play();
		}
	}
	
	//下一曲
	const nextMusic = function() {
		if( playingIndex !== playlist.length - 1 ) {
			playingIndex++;
			loadSong();
			dbAudio.play();
		}
	}
	
	//加载播放列表
	const loadPlayList = function() {
		let playItem = '';
		for( let i = 0;i < playlist.length;i++ ) {
			playItem += `
				<li>
					<a href="javascript:void(0)">
						<i class="icon star">&#xe604;</i>
					</a>
					<a class="song" data-index="${ i }" href="javascript:void(0)">
						<span  data-index="${ i }">${ playlist[i].songName }</span>
						<span  data-index="${ i }">${ playlist[i].singer }</span>
					</a>
					<div class="icon-wrapper">
						<div class="share-link">
							<a href="javascript:void(0)">
								<i class="icon icon-weibo">&#xe61c;</i>
							</a>
							<a href="javascript:void(0)">
								<i class="icon icon-douban">&#xe612;</i>
							</a>
							<a href="javascript:void(0)">
								<i class="icon">&#xe605;</i>
							</a>
						</div>
						<a class="export-link" href="javascript:void(0)">
							<i class="icon icon-export">&#xe606;</i>
						</a>
						<a href="javascript:void(0)">
							<i class="icon icon-cancel">&#xe6fd;</i>
						</a>
					</div>
				</li>
			`;
			
		}
		playPanel.innerHTML = playItem;
	}
	
	//
	const childClick = function( e ) {
		let playIndex = Number( e.target.dataset.index );
		if( playIndex ) {
			playingIndex = playIndex;
		}
		loadSong();
	}
	
	//设置进度条
	const getProgress = function() {
		let curTime = dbAudio.currentTime;
		let progressPer = curTime / playlist[ playingIndex ].length;
		progressPlay.style.width = progressPer * 100 + '%';
		let minute = Math.floor( curTime / 60 );
		let second = parseInt( curTime % 60 );
		if( second < 10 ) {
			second = '0' + second;
		}
		restTime.innerHTML = `-${ minute }:${ second } `;
	}
	const setProgress = function( e ) {
		dbAudio.currentTime = e.offsetX / progress.clientWidth * playlist[ playingIndex ].length;
	}
	
	/*函数列表完*/
	
	
	//事件绑定
	pauseBtn.addEventListener( 'click', pauseMusic );
	playBtn.addEventListener( 'click', playMusic );
	prevBtn.addEventListener( 'click', prevMusic );
	nextBtn.addEventListener( 'click', nextMusic );
	playPanel.addEventListener( 'click', childClick );
	progress.addEventListener( 'click', setProgress );
	dbAudio.addEventListener( 'timeupdate', getProgress );
	
	loadPlayList();
	loadSong();
	
}
