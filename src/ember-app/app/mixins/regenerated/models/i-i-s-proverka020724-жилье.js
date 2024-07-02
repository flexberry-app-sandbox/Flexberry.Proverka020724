import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  размер: DS.attr('string'),
  расположение: DS.attr('string')
});

export let ValidationRules = {
  размер: {
    descriptionKey: 'models.i-i-s-proverka020724-жилье.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-proverka020724-жилье.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
