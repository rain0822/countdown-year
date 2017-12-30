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
    ytVideos: [{
        id: 'u6wyRhL2ZL4',
        title: '台北最HIGH新年城',
        address: '台北市政府前廣場(11008 臺北市信義區市府路1號)',
        start: '2017/12/31 19:00',
        end: '2018/01/01 01:00',
        hosts: ['Kid', '曾寶儀'],
        artists: ['Bii','頑童MJ116','盧廣仲','林明楨','周湯豪','艾怡良','丁噹','韋禮安','蔡健雅','鬼鬼','Rain','IN2IT']
    },{
        id: 'miI6KnXkR64',
        title: '飛躍桃園'
    },{
        id: 'DDxeE_Hdotc',
        title: '台中麗寶'
    },{
        id: 'c0fdh1CoCUc',
        title: '台南心時代'
    },{
        id: 'VNU1MR8qNtk',
        title: '愛Sharing高雄夢時代'
    }/*,{
        id: 'zBJjFEE0rUc',
        title: '突然好想你'
    },{
        id: 'znhb-_KgLoM',
        title: '傷心的人別聽慢歌'
    },{
        id: 'zdF9gOpFoIQ',
        title: '派對動物'
    },{
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
