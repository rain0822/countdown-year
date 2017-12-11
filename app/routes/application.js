import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        adjust(video) {
            let oldVideo = this.controller.get('mainVideo');
            this.controller.set('mainVideo', video);
            this.controller.get('ytSubVideos').removeObject(video);
            this.controller.get('ytSubVideos').addObject(oldVideo);
            this.controller.set('hours', '21');
        }
    }
});
