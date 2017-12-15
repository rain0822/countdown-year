import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    test: true,
    playerVars: {
        autoplay: 0,
        showinfo: 0,
        controls: 0,
        modestbranding: 1
    },
    /*didInsertElement() {
        this._super(...arguments);
        Ember.$('ul.tabs').tabs({
            swipeable: true
        });
    },*/
    actions: {
        test() {
            this.set('test', !this.get('test'));
        }
    }
});
