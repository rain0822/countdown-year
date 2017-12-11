import Controller from '@ember/controller';

export default Controller.extend({
    hours: '32',
    minutes: '31',
    seconds: '32',
    ytVideos: [{
        id: 'Jv3zvWZlXkk',
        title: '終於結束的起點'
    },{
        id: 'pd3eV-SG23E',
        title: '後來的我們'
    },{
        id: '38lcQsEMGrk',
        title: '我不願讓你一個人'
    },{
        id: '_o0oeyCtoFA',
        title: '知足'
    },{
        id: 'Y-0Ra3PvTWg',
        title: '乾杯'
    },{
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
    }],
    playerVars: {
        autoplay: 1,
        showinfo: 0,
        controls: 0,
        modestbranding: 1
    },
    init() {
        this.set('ytSubVideos', this.get('ytVideos'));
        let mainVideo = this.get('ytSubVideos').objectAt(0);
        this.set('mainVideo', mainVideo);
        this.get('ytSubVideos').removeObject(mainVideo);
    }
});
