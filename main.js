import { Meteor } from 'meteor/meteor';
import { scan } from 'meteor/marvin:dwindle';

Meteor.startup(() => {
  console.log('Dwindle wrapper started.');
  scan((filename, content) => {
    // console.log(filename);
  }, error => {
    console.log('error');
    console.log(error);
  })
});
