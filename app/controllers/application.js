import Ember from 'ember';
import Controller from '@ember/controller';
const { inject: { service }, computed, observer } = Ember;
/*const { keys } = Object;*/

export default Controller.extend({
    cookies: service(),
    moment: service(),
    screen: service(),
    hours: '32',
    minutes: '31',
    seconds: '32',
    ytHeight: computed('screen.width', function() {
        let width = this.get('screen.width');
        if (width > 992) return width / 4;
        return width / 2;
    }),
      ytVideos:[{
        id: 'wH1b4aDSjLo',
        title: '台北 狂放電',
        address: '臺北市政府前廣場',
        start: '2018/12/31 19:00',
        end: '2019/01/01 00:30',
        hosts: ['陳建州', '天心', '莎莎', '海裕芬'],
        artists: ['張惠妹','頑童','韓團EXID','安那','吳思賢','謝和弦','鼓鼓 呂思緯','蕭秉治 廷廷','MC耀宗','浩室酷姬']
      },{
        id: 'Q-Mo9yJtKqU',
        title: '基隆 搖滾舞台',
        address: '基隆港西三倉庫旁停車場',
        start: '2018/12/31 20:00',
        end: '',
        hosts: ['杜詩梅'],
        artists: ['鏽鉚釘樂團', '搖滾大嬸', '老王樂隊', '台客電力公司', '八十八顆芭樂籽', '滅火器', '董事長樂團', 'su凸kod凹koi(JP)']
      },{
        id: '-t6L6HONHng',
        title: '桃園 擁抱美好',
        address: '桃園高鐵站前廣場(近桃園高鐵站，桃園市中壢區高鐵北路一段6號)',
        start: '2018/12/31 18:30',
        end: '2019/01/01 00:30',
        hosts: ['黃子佼', 'LULU'],
        artists: ['翁立友', '謝金燕', '畢書盡', 'BOXING', '田亞霍', '李佳薇', '李建軒', '陳彥允', '李玉璽', 'Lami girls', 'A TEAM', '孟耿如', '宇宙人', '艾怡良', 'HIGHLIGHT(梁耀燮、李起光)', '陳芳語']
      },{
        id: 'Dr0HanFpio0',
        title: '台中 依舊幸福',
        address: '麗寶樂園第二停車場',
        start: '2018/12/31 18:00',
        end: '2019/01/01 01:00',
        hosts: ['阿KEN', '謝忻'],
        artists: ['八三夭(開場)', '盧廣仲', '安心亞', '許富凱', '鼓鼓', '艾怡良', '茄子蛋', '方炯鑌', '小男孩樂團', '方炯鑌', '無雙樂團', '李千那', '陳芳語', '伍佰&China Blue(壓軸)']
      },{
        id: 'WWeXWxEoqWw',
        title: '台中 音樂祭',
        address: '台中圓滿戶外劇場 暨文心森林公園',
        start: '2018/12/31 19:00',
        end: '',
        hosts: [],
        artists: ['八三夭', '閃靈', '四分衛', '一九七六', '麋先生', '滅火器', '告五人', '929', '記號士', '馬克白', 'Broken By The Scream', 'Su凸ko D凹koi', '三十萬年老虎鉗', 'a crowd of rebellion', '小球—莊鵑瑛', '神奇膠、PAP YEAHH', 'Manhole New World', '老王樂隊', 'MONNI、FNGDY 瘋笛', '固定客海克力斯', '最後一擊', 'P!SCO']
      },{
        id: '1w-o2N2Ae4A',
        title: '高雄 夢時代跨年派對',
        address: '高雄夢時代廣場',
        start: '2018/12/31 19:00',
        end: '2019/01/01 01:00',
        hosts: ['浩角翔起','艾力克斯','Janet'],
        artists: ['周湯豪', '八三夭', '丁噹', '黃小琥', '安心亞', '阿達', '愷樂', '周興哲', 'OZI', '87樂團', '曹雅雯']
      },{
        id: 'bwVNbj7VrHs',
        title: '台南 心時代',
        address: '高鐵臺南站高鐵特區廣場',
        start: '2018/12/31 18:00',
        end: '2019/01/01 01:00',
        hosts: [],
        artists: ['宇宙人', '曾沛慈', '大賀兄弟', '吳汶芳', '大支', '張艾莉', '蔡旻佑', '翁立友', '愷樂', '茄子蛋', '蕭煌奇', '玖壹壹']
      }{
        id: 'YB2sVJjxkeM',
        title: '花蓮 太平洋觀光節',
        address: '六期重劃區(花蓮市中山路與重慶路交叉口)',
        start: '2018/12/31 18:00',
        end: '2019/01/01 00:30',
        hosts: [],
        artists: ['Bii畢書盡', '蕭秉治(廷廷)', '黃國倫', 'JR紀言愷', '袁詠琳', 'Erika', '阿喜', '子閎', '明杰', '羅平', '盧學叡', '楊程鈞', '陳夢晨', 'SASA', 'ASA']
      },{
        id: 'jjq2U8O5kZY',
        title: '淡水 曙光祭',
        address: '',
        start: '',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'QFQBFq7Rt_c',
        title: '人生無限公司 台中無限放大版',
        address: '',
        start: '2018/12/31 23:40',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'kNIesCR0_ro',
        title: '臺北101燈光煙火秀',
        address: '',
        start: '2019/01/01 00:00',
        end: '',
        hosts: [],
        artists: []
      },{
        id: '3Xy3jJQUZ6s',
        title: '香港維多利亞港跨年音樂煙火秀',
        address: '',
        start: '2019/01/01 00:00',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'iUNd-zC5g5k',
        title: '雪梨大橋跨年煙火秀',
        address: '',
        start: '2019/01/01 00:00',
        end: '',
        hosts: [],
        artists: []
      }],


    ytVideos2: [{
        id: 'u6wyRhL2ZL4',
        title: '台北最HIGH新年城',
        address: '台北市政府前廣場(11008 臺北市信義區市府路1號)',
        start: '2017/12/31 19:00',
        end: '2018/01/01 01:00',
        hosts: ['Kid', '曾寶儀'],
        artists: ['Bii','頑童MJ116','盧廣仲','林明楨','周湯豪','艾怡良','丁噹','韋禮安','蔡健雅','鬼鬼','Rain','IN2IT']
    },{
        id: 'miI6KnXkR64',
        title: '飛躍桃園',
        address: '桃園藝文廣場',
        start: '2017/12/31 19:00',
        end: '2018/01/01 00:30',
        hosts: ['黃子佼', 'LuLu'],
        artists: ['1900 謝金燕(開場)','動力火車(壓軸)','周興哲','潔西卡','周湯豪','阿達','安那','朱俐靜','林明禎','Lami girl','潘裕文','WhaaaaasUp!','CIAO']
    },{
        id: 'DDxeE_Hdotc',
        title: '台中麗寶',
        address: '國立台灣體育運動大學田徑場',
        start: '2017/12/31 19:00',
        end: '2018/01/01 01:00',
        hosts: ['曾國城', '天心'],
        artists: ['玖壹壹','周蕙','戴愛玲','閻奕格','周興哲','宋念宇-小宇','Erika','宇宙人','魏如萱','李愛綺','柯有倫','陶喆','周湯豪']
    },{
        id: 'c0fdh1CoCUc',
        title: '台南心時代',
        address: '',
        start: '2017/12/31 19:00',
        end: '2018/01/01 01:00',
        hosts: ['吳怡霈', '納豆','黃鐙輝','謝忻'],
        artists: ['滅火器樂團','大賀兄弟','家家','吳思賢','李千娜','大支','老虎隊','鼓鼓','鬼鬼','郭書瑤','安心亞']
    },{
        id: 'VNU1MR8qNtk',
        title: '愛Sharing高雄夢時代',
        address: '',
        start: '2017/12/31 19:00',
        end: '2018/01/01 00:30',
        hosts: ['胡瓜', '白家綺','莎莎','阿翔'],
        artists: ['謝金燕','郭書瑤','曾之喬','畢書盡(Bii)','鼓鼓','曾沛慈','家家','徐佳瑩','孫淑媚','八三夭','滅火器樂團','生祥福團','許富凱','王建復','羅平','楊蒨時']
    },{
        id: 'EBYIb_wHWNk',
        title: '五月天陪你跨年'
    },{
        id: '4JNd_NW4zU4',
        title: '花蓮太平洋觀光節'
    },{
        id: 'duM06hMkruA',
        title: '台中星光璀璨迎花博'
    }/*,{
        id: 'jQE6biHTDow',
        title: '離開地球表面'
    },{
        id: 'hr8jWDyb1jg',
        title: '你不是真正的快樂'
    },{
        id: 'R2s-H_crYkc',
        title: '倔強'
    },{
        id: 'iSkRGgYSQfY',
        title: '戀愛ing'
    },{
        id: '5VUUGZ1-nlY',
        title: '志明與春嬌'
    }*/],
    /*ytResetVideos: observer('mainVideo.id', function() {
        let ytOddVideos = [];
        let ytEvenVideos = [];
        this.get('ytSubVideos').forEach(function(ytSubVideo, index) {
            if(index % 2 === 0) {
                ytEvenVideos.push(ytSubVideo);
            } else {
                ytOddVideos.push(ytSubVideo);
            }
        });
        this.set('ytOddVideos', ytOddVideos);
        this.set('ytEvenVideos', ytEvenVideos);
    }),*/
    playerVars: {
        autoplay: 1,
        showinfo: 0,
        controls: 0,
        modestbranding: 1
    },
    init() {

        let cookieService = this.get('cookies');
        let videos = cookieService.read()['videos'];
        //items = [];
        if(Ember.isEmpty(videos)) {
            videos = this.get('ytVideos');
            let topVideo = videos.objectAt(0);
            Ember.set(topVideo, 'isTop', true);
            this.set('topVideo', topVideo);
        } else {
            videos = JSON.parse(videos);
            let ytVideos = this.get('ytVideos');
            let self = this;
            videos.forEach(function(video) {
                ytVideos.forEach(function(ytVideo) {
                    if(Ember.get(video, 'id') === Ember.get(ytVideo, 'id')) {
                        if(Ember.get(video, 'isSelected')) {
                            Ember.set(ytVideo, 'isSelected', true);
                        }
                        if(Ember.get(video, 'isTop')) {
                            Ember.set(ytVideo, 'isTop', true);
                            self.set('topVideo', ytVideo);
                        }
                    }
                });
            });
        }

        this.set('ytSubVideos', videos);

        this.set('showMenu', false);
        this.set('pushMenu', false);
/*
        let ytLeftVideos = [];
        let ytRightVideos = [];
        this.get('ytSubVideos').forEach(function(ytSubVideo, index) {
            if(index % 2 === 0) {
                ytLeftVideos.push(ytSubVideo);
            } else {
                ytRightVideos.push(ytSubVideo);
            }
        });
        this.set('ytLeftVideos', ytLeftVideos);
        this.set('ytRightVideos', ytRightVideos);*/
    }/*,
    allCookies: computed(function() {
        //alert(123);
        let cookieService = this.get('cookies');
        let items = cookieService.read()['items'];
        //items = [];
        if(Ember.isEmpty(items)) {
            items = [];
        } else {
            items = JSON.parse(items);
        }
        items.push(1);
        items.push(2);
        cookieService.write('items', JSON.stringify(items));
/!*
        let cookies = cookieService.read();
        return keys(cookies).reduce((acc, key) => {
            let value = cookies[key];
            acc.push({ name: key, value });

            return acc;
        }, []);*!/
        return '';
    })*/
});
