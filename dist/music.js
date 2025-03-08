const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: false,
    listFolded: true,
    preload: 'auto',
    mutex: true,
    // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
    loop: 'all',
    lrcType: 0,
    volume: 0.5, //默认音量
    audio: [{
        theme: 'blue',
        name: 'Relentless',
        artist: 'Cre-sc3NT',
        url: 'https://music.163.com/song/media/outer/url?id=443291336',
        cover: 'http://p1.music.126.net/RzYEA_xOqHv0omVnJB-4iQ==/109951162814365375.jpg?param=130y130',
        lrc: ""
      }, {
        theme: 'blue',
        name: 'EDGE',
        artist: 'Cre-sc3NT',
        url: 'https://music.163.com/song/media/outer/url?id=446922486',
        cover: 'http://p1.music.126.net/tfCuvLp1kehphAzcXl_qPA==/109951162822847804.jpg?param=130y130',
        lrc: ""
      },
      {
        name: "The Girl",
        artist: 'Cre-sc3NT',
        url: 'https://music.163.com/song/media/outer/url?id=435872601',
        cover: 'http://p1.music.126.net/RwruL9TUO86TXKrAXSv0pw==/18201315486667440.jpg?param=130y130',
        // theme: '#fff' //进度条颜色
      }
    ]
  });