import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  расположение: DS.attr('string'),
  целостность: DS.attr('boolean'),
  кошка: DS.belongsTo('i-i-s-proverka020724-кошка', { inverse: 'лапаКошки', async: false })
});

export let ValidationRules = {
  расположение: {
    descriptionKey: 'models.i-i-s-proverka020724-лапа-кошки.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  целостность: {
    descriptionKey: 'models.i-i-s-proverka020724-лапа-кошки.validations.целостность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кошка: {
    descriptionKey: 'models.i-i-s-proverka020724-лапа-кошки.validations.кошка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
