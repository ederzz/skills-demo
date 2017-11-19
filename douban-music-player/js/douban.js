window.onload = () => {
	//播放模式图标
	let playMode = [ '&#xe62b;', '&#xe672;', '&#xe624;', '&#xe84a;' ];
	
	//audio播放器
	let dbAudio = new Audio();
	let playingIndex = 0;


	//页面元素获取
	let author = document.querySelector( '.play-detail>.author' );
	let posterImg = document.querySelector( '.play-detail>.poster-con>.poster' );
	let songType = document.querySelector( '.play-detail>.type>a' );
	let songTitle = document.querySelector( '.play-btn > .mod1 > .hd > .song-title' );
	let playBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-play' );
	let pauseBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-pause' );
	let prevBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-prev' );
	let nextBtn = document.querySelector( '.play-btn > .mod3 > a > .icon-next' );
	let playPanel = document.querySelector( '.play-list > .list-con > .play-panel' ); 
	let progress = document.querySelector( '.play-btn > .mod1 > .bd > .progress-load' );
	let progressPlay = document.querySelector( '.play-btn > .mod1 > .bd > .progress-load > .progress-play' );
	let restTime = document.querySelector( '.play-btn > .mod1 > .hd > .time' );
	let volProgress = document.querySelector( '.mod2 > a > .vol-container > .volume-progress' );
	let volProgressPlay = document.querySelector( '.mod2 > a > .vol-container > .volume-progress > .volume-progress-play' );
	let modeBtn = document.querySelector( '.mod2 > a > .icon-mode' );
	
	
	
	/*=======函数列表======*/
	
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
		switch( modeBtn.dataset.mode ) {
			case '0':
				if( playingIndex !== 0 ) {
					playingIndex--;
					loadSong();
					dbAudio.play();
				}
				break;
			case '1':
				if( playingIndex === 0 ) {
					playingIndex = 3;
				}else {
					playingIndex--;
				}
				loadSong();
				dbAudio.play();
				break;
			case '2':
				if( playingIndex === 0 ) {
					playingIndex = 3;
				}else {
					playingIndex--;
				}
				loadSong();
				dbAudio.play();
				break;
			case '3':
				let lastIndex = playingIndex;
				do{
					playingIndex = Math.floor( Math.random() * 4 );
				}while( lastIndex === playingIndex )
				loadSong();
				dbAudio.play();
				break;
			default:
				break;
		}
		
	}
	
	//下一曲
	const nextMusic = function() {
		switch( modeBtn.dataset.mode ) {
			case '0':
				if( playingIndex !== playlist.length - 1 ) {
					playingIndex++;
					loadSong();
					dbAudio.play();
				}
				break;
			case '1':
				if( playingIndex === 3 ) {
					playingIndex = 0;
				}else {
					playingIndex++;
				}
				loadSong();
				dbAudio.play();
				break;
			case '2':
				if( playingIndex === 3 ) {
					playingIndex = 0;
				}else {
					playingIndex++;
				}
				loadSong();
				dbAudio.play();
				break;
			case '3':
				let lastIndex = playingIndex;
				do{
					playingIndex = Math.floor( Math.random() * 4 );
				}while( lastIndex === playingIndex )
				loadSong();
				dbAudio.play();
				break;
			default:
				break;
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
						<span class="song-name" data-index="${ i }">${ playlist[i].songName }</span>
						<span class="song-author" data-index="${ i }">${ playlist[i].singer }</span>
					</a>
					<div class="icon-wrapper">
						
						<a class="export-link" href="javascript:void(0)">
							<i class="icon icon-export">&#xe606;</i>
						</a>
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
						<a href="javascript:void(0)">
							<i class="icon icon-cancel">&#xe6fd;</i>
						</a>
					</div>
				</li>
			`;
			
		}
		playPanel.innerHTML = playItem;
	}
	
	//列表音乐点击处理
	const childClick = function( e ) {
		let playIndex = Number( e.target.dataset.index );
		console.log( playIndex );
		if( playIndex || playIndex === 0 ) {
			playingIndex = playIndex;
			loadSong();
		}
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
	
	//设置歌曲进度条
	const setProgress = function( e ) {
		dbAudio.currentTime = e.offsetX / progress.clientWidth * playlist[ playingIndex ].length;
	}
	
	//设置音量
	const setVol = function( e ) {
		volProgressPlay.style.width = e.offsetX + 'px'; 
		dbAudio.volume = e.offsetX / volProgress.clientWidth;
	}
	
	//切换播放模式
	const mPlayMode = function() {
		let index = parseInt( modeBtn.dataset.mode );
		if( index === 3 ) {
			index = 0;
			modeBtn.innerHTML = playMode[index];
			modeBtn.setAttribute( 'data-mode', `${ index }` );
		}else{
			index++; 
			if( index === 2 ) {
				dbAudio.loop = true;
			}
			modeBtn.innerHTML = playMode[index];
			modeBtn.setAttribute( 'data-mode', `${ index }` );
		}
	}
	
	/*========函数列表完========*/
	
	
	//事件绑定
	pauseBtn.addEventListener( 'click', pauseMusic );
	playBtn.addEventListener( 'click', playMusic );
	prevBtn.addEventListener( 'click', prevMusic );
	nextBtn.addEventListener( 'click', nextMusic );
	playPanel.addEventListener( 'click', childClick );
	progress.addEventListener( 'click', setProgress );
	dbAudio.addEventListener( 'timeupdate', getProgress );
	dbAudio.addEventListener( 'ended', nextMusic );
	volProgress.addEventListener( 'click', setVol, false );
	modeBtn.addEventListener( 'click', mPlayMode );
	
	//初始化
	loadPlayList();
	loadSong();
	
}
