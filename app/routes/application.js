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

            let videos = this.controller.get('ytVideos');
            this.controller.set('ytSubVideos', videos);
            this.get('cookies').write('videos', JSON.stringify(videos));
        },
        toggleSlidePushMenu() {
            this.controller.toggleProperty('showMenu');
            this.controller.toggleProperty('pushMenu');
        },
        toggleSelected(video) {
            Ember.set(video, 'isSelected', !Ember.get(video, 'isSelected'));
            let videos = this.controller.get('ytVideos');
            this.controller.set('ytSubVideos', videos);
            this.get('cookies').write('videos', JSON.stringify(videos));
        }
    }
});
