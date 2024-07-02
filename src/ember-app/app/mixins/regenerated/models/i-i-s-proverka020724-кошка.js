import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  возраст: DS.attr('number'),
  кличка: DS.attr('string'),
  окрас: DS.attr('string'),
  жилье: DS.belongsTo('i-i-s-proverka020724-жилье', { inverse: null, async: false }),
  лапаКошки: DS.hasMany('i-i-s-proverka020724-лапа-кошки', { inverse: 'кошка', async: false })
});

export let ValidationRules = {
  возраст: {
    descriptionKey: 'models.i-i-s-proverka020724-кошка.validations.возраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кличка: {
    descriptionKey: 'models.i-i-s-proverka020724-кошка.validations.кличка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  окрас: {
    descriptionKey: 'models.i-i-s-proverka020724-кошка.validations.окрас.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  жилье: {
    descriptionKey: 'models.i-i-s-proverka020724-кошка.validations.жилье.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  лапаКошки: {
    descriptionKey: 'models.i-i-s-proverka020724-кошка.validations.лапаКошки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
