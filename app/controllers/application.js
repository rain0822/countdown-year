import Controller from '@ember/controller';

export default Controller.extend({
    hours: '32',
    minutes: '31',
    seconds: '32',
    ytVideos: [{
        id: 'Jv3zvWZlXkk',
        title: '終於結束的起點',
        emberYoutube: 'emberYoutube0'
    },{
        id: 'pd3eV-SG23E',
        title: '後來的我們',
        emberYoutube: 'emberYoutube1'
    },{
        id: '38lcQsEMGrk',
        title: '我不願讓你一個人',
        emberYoutube: 'emberYoutube2'
    },{
        id: '_o0oeyCtoFA',
        title: '知足',
        emberYoutube: 'emberYoutube3'
    },{
        id: 'zBJjFEE0rUc',
        title: '突然好想你',
        emberYoutube: 'emberYoutube4'
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
