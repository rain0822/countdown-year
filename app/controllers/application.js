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
        address: '',
        start: '2018/12/31 19:00',
        end: '2019/01/01 00:30',
        hosts: ['陳建州', '天心', '莎莎', '海裕芬'],
        artists: ['張惠妹','頑童','韓團EXID','安那','吳思賢','謝和弦','鼓鼓 呂思緯','蕭秉治 廷廷','MC耀宗','浩室酷姬']
      },{
        id: 'Q-Mo9yJtKqU',
        title: '基隆 搖滾舞台',
        address: '',
        start: '',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'ONjgZwmA4Cw',
        title: '台中 麗寶樂園',
        address: '',
        start: '',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'ONjgZwmA4Cw',
        title: '高雄 夢時代跨年派對',
        address: '',
        start: '',
        end: '',
        hosts: [],
        artists: []
      },{
        id: 'YB2sVJjxkeM',
        title: '花蓮 太平洋觀光節',
        address: '',
        start: '',
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
