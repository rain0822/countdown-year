import Route from '@ember/routing/route';
import Ember from 'ember';
const { inject: { service }, computed, observer } = Ember;

export default Route.extend({
    cookies: service(),
    actions: {
        adjust(video) {
            let oldVideo = this.controller.get('topVideo');
            if(!Ember.isEmpty(oldVideo)) Ember.set(oldVideo, 'isTop', false);
            Ember.set(video, 'isTop', true);
            this.controller.set('topVideo', video);
            this.controller.set('hours', '21');

            let videos = this.controller.get('ytVideos2020');
            this.controller.set('ytSubVideos', videos);
            this.get('cookies').write('videos', JSON.stringify(videos));
        },
        toggleLeftPushMenu() {
            this.controller.toggleProperty('showLeftMenu');
            this.controller.toggleProperty('pushLeftMenu');
        },
        toggleInfoPushMenu() {
            this.controller.toggleProperty('showInfoMenu');
            this.controller.toggleProperty('pushInfoMenu');
        },
        toggleSelected(video) {
            Ember.set(video, 'isSelected', !Ember.get(video, 'isSelected'));
            let videos = this.controller.get('ytVideos2020');
            this.controller.set('ytSubVideos', videos);
            let videosToCookie = [];
            videos.forEach(function(video) {
                videosToCookie.push({
                    id: Ember.get(video, 'id'),
                    isSelected: Ember.get(video, 'isSelected'),
                    isTop: Ember.get(video, 'isTop')
                });
            });
            this.get('cookies').write('videos', JSON.stringify(videosToCookie));
        }
    }
});
